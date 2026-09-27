from flask import Flask, render_template, request, jsonify
import os
import psycopg2
import time
from datetime import datetime
import json

app = Flask(__name__)

DATABASE_URL = os.environ.get('DATABASE_URL')
# Railway/Heroku provide postgres:// but psycopg2 requires postgresql://
if DATABASE_URL and DATABASE_URL.startswith('postgres://'):
    DATABASE_URL = DATABASE_URL.replace('postgres://', 'postgresql://', 1)

def get_connection():
    return psycopg2.connect(DATABASE_URL)

# Keep in sync with the language codes in static/js/script.js's TRANSLATIONS object.
SUPPORTED_LANGS = ['en', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'ro', 'el', 'sv']

def init_db(max_retries=5, retry_delay=2):
    """Initializes the database with extended tracking columns.

    Retries the full connect + table setup with backoff so a slow-starting
    Postgres (e.g. on Railway during boot) doesn't crash the app on import.
    """
    for attempt in range(1, max_retries + 1):
        conn = None
        try:
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS game_history (
                    id SERIAL PRIMARY KEY,
                    result TEXT,
                    board_layout TEXT,
                    initial_choice_index INTEGER,
                    switched_mind BOOLEAN,
                    timestamp TIMESTAMP
                )
            ''')
            conn.commit()
            cursor.close()
            conn.close()
            return
        except psycopg2.OperationalError as e:
            if conn:
                conn.close()
            if attempt == max_retries:
                raise
            print(f"Database setup failed (attempt {attempt}/{max_retries}): {e}. Retrying in {retry_delay}s...")
            time.sleep(retry_delay)
            retry_delay *= 2

def render_index(lang=None):
    conn = get_connection()
    cursor = conn.cursor()
    # Fetch previous game results, including switched_mind so the history can be split into columns
    cursor.execute('SELECT id, result, timestamp, switched_mind FROM game_history ORDER BY id DESC')
    history = cursor.fetchall()
    cursor.close()
    conn.close()
    kept_history = [game for game in history if not game[3]]
    switched_history = [game for game in history if game[3]]
    return render_template('index.html', kept_history=kept_history, switched_history=switched_history, all_history=history, lang=lang)

@app.route('/')
def index():
    return render_index()

# Per-language URLs (e.g. /ro, /fr) so a translated version can be shared directly.
@app.route('/<any(' + ', '.join(SUPPORTED_LANGS) + '):lang>')
def index_lang(lang):
    return render_index(lang)

@app.route('/save_game', methods=['POST'])

def save_game():
    """Saves detailed game telemetry to the database."""
    data = request.json
    result = data.get('result')
    # Serialize the list/array to a string for SQL storage
    board_layout = json.dumps(data.get('board_layout')) 
    initial_choice = data.get('initial_choice_index')
    switched = data.get('switched_mind')
    
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO game_history 
        (result, board_layout, initial_choice_index, switched_mind, timestamp) 
        VALUES (%s, %s, %s, %s, %s) RETURNING id
    ''', (data.get('result'), json.dumps(data.get('board_layout')), 
          data.get('initial_choice_index'), data.get('switched_mind'), datetime.now()))
    
    new_id = cursor.fetchone()[0]  # Capture the actual DB ID
    conn.commit()
    cursor.close()
    conn.close()
    
    return jsonify({"status": "success", "game_id": new_id})

@app.route('/delete_history', methods=['POST'])
def delete_history():
    """Clears all records from the history table and resets the id counter."""
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute('DELETE FROM game_history')
    # Reset the SERIAL sequence so the next game starts back at id 1.
    cursor.execute("ALTER SEQUENCE game_history_id_seq RESTART WITH 1")
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"status": "success", "message": "History cleared!"})

@app.route('/health')
def health():
    """Checks DB connectivity so uptime monitors catch real outages, not just app liveness."""
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute('SELECT 1')
        cursor.close()
        conn.close()
        return jsonify({"status": "ok"}), 200
    except Exception as e:
        return jsonify({"status": "error", "detail": str(e)}), 503

init_db()

if __name__ == '__main__':
    app.run(debug=True)