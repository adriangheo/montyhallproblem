# Monty Hall Problem — Decision Analytics Game

## Quick Start Guide

This is a web-based simulation of the classic Monty Hall Problem, presented as a 3-door game, designed to test and visualize decision-making patterns around switching vs. staying.

### To Run Locally:
See "How to Run Locally" further below for the full first-time setup, plus the short checklist to use every time you come back to this project.

## Project Description
This is a web-based implementation of the classic Monty Hall Problem. Players are presented with three doors (A, B, C) — one hides a car (the winning outcome) and two hide goats (the losing outcome). The gameplay follows the real Monty Hall format: the player first picks a door, then clicks a button asking the host ("Monty") to open one of the two remaining doors, which is guaranteed to reveal a goat. The player then makes a final decision — stick with their original door or switch to the other unopened one.

A live, animated probability pie chart sits alongside the game board, updating in real time as the player picks a door and Monty reveals a goat, visually demonstrating why switching gives a ≈66% chance of winning versus ≈33% for staying.

## Features
- Interactive Web Interface: Built with HTML5, CSS3, and JavaScript (SVG-based animated probability chart, no external libraries)
- Authentic Monty Hall Mechanics: Two goats and one car, with a host-reveal step between the player's initial pick and final decision
- Live Probability Visualization: SVG pie chart that updates through the "start", "chosen", and "revealed" phases of each round
- Decision Analytics: Tracks player choices, switch behavior, and outcomes for statistical analysis
- Database Integration: Uses PostgreSQL to store game history and telemetry data
- Visual Feedback: Door-styled cells with distinct states for picked, host-opened (flagged), and revealed goat/car outcomes
- Game History Tracking: Sidebar showing previous game results, timestamps, switch behavior, and board layout
- Persistent Storage: Game history persists between sessions

## Technical Architecture
- Backend: Python Flask web framework, served via Gunicorn in production
- Frontend: HTML5, CSS3, JavaScript (ES6+), inline SVG for the probability chart
- Database: PostgreSQL, connected via psycopg2 using the `DATABASE_URL` environment variable
- Template Engine: Jinja2 (via Flask's render_template)

## File Structure
```
MinesweeperExperiment/
├── app.py                 # Main Flask application with routes and database logic
├── requirements.txt       # Python dependencies (flask, psycopg2-binary, gunicorn)
├── Procfile               # Process definition for deployment (gunicorn)
├── templates/
│   └── index.html        # Main web interface: game board, probability chart, and history sidebar (markup only)
├── static/
│   ├── css/
│   │   └── style.css     # All page styles, including the door and probability chart styling
│   └── js/
│       └── script.js     # Game logic and SVG probability chart rendering
└── .gitignore            # Git ignore file
```

## How to Run Locally

### Prerequisites
- Python 3.x and pip
- Docker Desktop (used to run PostgreSQL locally, no manual PostgreSQL install needed)

### First-Time Setup (only needed once per machine)
1. Clone or download the repository
2. Create the virtual environment:
   ```
   python -m venv mh-venv
   ```

3. Activate it (Windows PowerShell):
   ```
   mh-venv\Scripts\Activate.ps1
   ```

4. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

5. Create the PostgreSQL container (downloads the Postgres image the first time, then creates a container named `mh-postgres` that stays on your machine for future runs):
   ```
   docker run --name mh-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=monty_hall -p 5432:5432 -d postgres
   ```

   Don't have Docker? Install PostgreSQL natively instead: https://www.postgresql.org/download/windows/, then create the database with `psql -U postgres -c "CREATE DATABASE monty_hall;"`.

### Every Time You Want to Run the App (repeat these steps each session)
1. Start Docker Desktop if it isn't already running
2. Start the existing database container (this does NOT recreate it, just resumes it):
   ```
   docker start mh-postgres
   ```

3. Activate the virtual environment (Windows PowerShell):
   ```
   mh-venv\Scripts\Activate.ps1
   ```

4. Set the database connection string for this terminal session (this is not saved — you must set it again every time you open a new terminal):
   ```
   $env:DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/monty_hall"
   ```

5. Run the application:
   ```
   python app.py
   ```

6. Access the game:
   Open your web browser and navigate to `http://localhost:5000`

7. When you're done: press `Ctrl+C` in the terminal to stop the app. You can optionally stop the database too with `docker stop mh-postgres` (safe to leave running otherwise).

### Database Initialization
The application automatically creates the `game_history` table in the PostgreSQL database on startup if it doesn't exist — no manual migration step is needed.

## Game Mechanics

### Gameplay Overview
1. The game presents three doors labeled A, B, C. Behind them are two goats (🐐, losing) and one car (🚗, winning), randomly assigned each round.
2. First Move: Player picks a door. It is marked (👆) but not yet revealed as a win or loss.
3. Host Reveal: The player clicks "Ask Monty to open a door." Monty opens one of the *other* two doors, always revealing a goat (flagged with an orange-tinted background).
4. Second Move: Player must choose between:
   - Staying with their initial door
   - Switching to the other remaining unopened door
5. Outcome:
   - If the final chosen door hides a goat, the player loses
   - If the final chosen door hides the car, the player wins
6. Throughout the round, the sidebar pie chart animates through three phases (start → chosen → revealed), visually splitting the odds into ≈33% (the player's original door) and ≈66% (the remaining doors, collapsing onto the unopened one after Monty's reveal).

### Key Features
- Three-Phase Decision Process: Pick → host reveal → stay/switch, mirroring the real Monty Hall format
- Live Probability Chart: SVG pie chart with dynamic overlays and percentage labels tied to game phase
- Visual Feedback System: Distinct door states for picked, host-opened, goat, and car outcomes
- Statistics Tracking: Game history with timestamps, results, switch behavior, and board layout
- Restart Functionality: Players can start a new round any time via "Play Again"
- History Management: Delete all game history with one click

## Database Schema
The PostgreSQL database stores the following information:
- id: Unique identifier for each game
- result: Game outcome ("Win" or "Loss")
- board_layout: The configuration of the game board (serialized, e.g. ["Goat", "Car", "Goat"])
- initial_choice_index: Index of the player's first choice (0-2)
- switched_mind: Boolean indicating if player switched choices
- timestamp: Date and time when the game was played

## Contributing
This project is designed as an educational tool for understanding decision-making and probability concepts through interactive gameplay.


## License
[Specify license if applicable]