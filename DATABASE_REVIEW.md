# Database Setup Review — `app.py`

## Checklist

| Item | Status | Notes |
|---|---|---|
| Reads `DATABASE_URL` from environment (not hardcoded) | ✅ Pass | Uses `os.environ.get('DATABASE_URL')` |
| Handles Railway's `postgres://` vs `postgresql://` prefix | ❌ Missing (now fixed) | `psycopg2` rejects/mishandles `postgres://`; added normalization |
| Creates `game_history` table on startup with `CREATE TABLE IF NOT EXISTS` | ✅ Pass | Done in `init_db()`, called at import time |
| `/health` endpoint performs a real DB connectivity check | ❌ Missing (now fixed) | No `/health` route existed at all |

## Fixes Applied

1. **`postgres://` → `postgresql://` normalization**, added right after reading `DATABASE_URL`:
   ```python
   DATABASE_URL = os.environ.get('DATABASE_URL')
   if DATABASE_URL and DATABASE_URL.startswith('postgres://'):
       DATABASE_URL = DATABASE_URL.replace('postgres://', 'postgresql://', 1)
   ```

2. **`/health` endpoint** added, which runs `SELECT 1` against the database and returns:
   - `200 {"status": "ok"}` on success
   - `503 {"status": "error", "detail": ...}` on failure

   ```python
   @app.route('/health')
   def health():
       try:
           conn = get_connection()
           cursor = conn.cursor()
           cursor.execute('SELECT 1')
           cursor.close()
           conn.close()
           return jsonify({"status": "ok"}), 200
       except Exception as e:
           return jsonify({"status": "error", "detail": str(e)}), 503
   ```
</content>
