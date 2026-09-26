from flask import Flask, render_template, request, jsonify
import os
import psycopg2
from datetime import datetime
import json

app = Flask(__name__)

DATABASE_URL = os.environ.get('DATABASE_URL')

def get_connection():
    return psycopg2.connect(DATABASE_URL)

def init_db():
    """Initializes the database with extended tracking columns."""
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

@app.route('/')
def index():
    conn = get_connection()
    cursor = conn.cursor()
    # Fetch previous game results, including switched_mind so the history can be split into columns
    cursor.execute('SELECT id, result, timestamp, switched_mind FROM game_history ORDER BY id DESC')
    history = cursor.fetchall()
    cursor.close()
    conn.close()
    kept_history = [game for game in history if not game[3]]
    switched_history = [game for game in history if game[3]]
    return render_template('index.html', kept_history=kept_history, switched_history=switched_history, all_history=history)

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

init_db()

if __name__ == '__main__':
    app.run(debug=True)