/* =====================================================
   PIE CHART — fully dynamic, driven by game state
   ===================================================== */

const CX = 250, CY = 250, R = 200;

// Fixed screen geometry for doors A / B / C (matches the
// on-screen order of the doors: A, B, C left to right).
const DOORS = [
    { letter: 'A', start: -90, end: 30 },   // top-right third
    { letter: 'B', start: 30, end: 150 },   // bottom third
    { letter: 'C', start: 150, end: 270 },  // top-left third
];

function normalizeAngle(a) {
    return ((a % 360) + 360) % 360;
}

function polar(cx, cy, r, angleDeg) {
    const rad = angleDeg * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function sectorPath(startAngle, endAngle) {
    const start = polar(CX, CY, R, startAngle);
    const end = polar(CX, CY, R, endAngle);
    const largeArc = (endAngle - startAngle) <= 180 ? 0 : 1;
    return `M ${CX},${CY} L ${start.x.toFixed(2)},${start.y.toFixed(2)} A ${R},${R} 0 ${largeArc} 1 ${end.x.toFixed(2)},${end.y.toFixed(2)} Z`;
}

function svgEl(tag, attrs) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    return el;
}

function clearGroup(id) {
    const g = document.getElementById(id);
    while (g.firstChild) g.removeChild(g.firstChild);
    return g;
}

function drawDivider(group, angle) {
    const p = polar(CX, CY, R, angle);
    group.appendChild(svgEl('line', {
        x1: CX, y1: CY, x2: p.x.toFixed(2), y2: p.y.toFixed(2),
        stroke: 'var(--blue)', 'stroke-width': 6, 'stroke-linecap': 'round'
    }));
}

function drawLetter(group, door) {
    const mid = (door.start + door.end) / 2;
    const pos = polar(CX, CY, R * 0.48, mid);
    const t = svgEl('text', { x: pos.x.toFixed(1), y: pos.y.toFixed(1), class: 'third-label' });
    t.textContent = door.letter;
    group.appendChild(t);
}

function drawPercentLabel(group, midAngle, percentText, colorVar) {
    const pos = polar(CX, CY, R * 0.72, midAngle);
    const t = svgEl('text', { x: pos.x.toFixed(1), y: pos.y.toFixed(1), fill: colorVar, class: 'overlay-label' });
    const t1 = svgEl('tspan', { x: pos.x.toFixed(1), dy: 0, class: 'big' });
    t1.textContent = percentText;
    const t2 = svgEl('tspan', { x: pos.x.toFixed(1), dy: 26, class: 'small' });
    t2.textContent = 'chances';
    t.appendChild(t1);
    t.appendChild(t2);
    group.appendChild(t);
}

// Builds the path for the host's removed-door wedge: pulled a
// little short of true center and a little short of the outer
// ring, with a small angular margin on each side — so it reads
// as a piece fitted into the slice rather than a sharp full
// pie cut.
function blackWedgePath(door) {
    const mid = (door.start + door.end) / 2;
    const apexOffset = 8;
    const angleInset = 3;
    const radiusInset = R - 10;

    const apex = polar(CX, CY, apexOffset, mid);
    const p1 = polar(CX, CY, radiusInset, door.start + angleInset);
    const p2 = polar(CX, CY, radiusInset, door.end - angleInset);

    return `M ${apex.x.toFixed(2)},${apex.y.toFixed(2)} L ${p1.x.toFixed(2)},${p1.y.toFixed(2)} A ${radiusInset},${radiusInset} 0 0,1 ${p2.x.toFixed(2)},${p2.y.toFixed(2)} Z`;
}

function drawBlackWedge(group, door) {
    group.appendChild(svgEl('path', {
        d: blackWedgePath(door),
        fill: 'var(--black)',
        stroke: 'var(--overlay66)',
        'stroke-width': 4,
        'stroke-linejoin': 'round'
    }));
}

// state.phase: 'start' | 'chosen' | 'revealed'
// state.chosen: door index the player picked
// state.revealed: door index the host opened
function renderChart(state) {
    const blackG = clearGroup('chart-black');
    const lettersG = clearGroup('chart-letters');
    const overlaysG = clearGroup('chart-overlays');
    const labelsG = clearGroup('chart-percent-labels');
    const dividersG = clearGroup('chart-dividers');

    // Letters are always shown — they identify the doors.
    DOORS.forEach(d => drawLetter(lettersG, d));

    if (!state || state.phase === 'start') {
        // Three equal, undecided thirds.
        DOORS.forEach(d => drawDivider(dividersG, d.start));
        return;
    }

    const chosenDoor = DOORS[state.chosen];
    const chosenMid = (chosenDoor.start + chosenDoor.end) / 2;

    // Chosen door: locked at ~33%, always drawn once a choice exists.
    overlaysG.appendChild(svgEl('path', {
        d: sectorPath(chosenDoor.start, chosenDoor.end),
        fill: 'var(--overlay33)', opacity: 0.85
    }));
    drawPercentLabel(labelsG, chosenMid, '≈33%', 'var(--overlay33)');

    // The boundary of the chosen door is always drawn.
    drawDivider(dividersG, chosenDoor.start);
    drawDivider(dividersG, chosenDoor.end);

    if (state.phase === 'chosen') {
        // The other two doors merge into a single 66% wedge —
        // the boundary between them disappears.
        const mergedStart = chosenDoor.end;
        const mergedEnd = chosenDoor.start + 360;
        overlaysG.appendChild(svgEl('path', {
            d: sectorPath(mergedStart, mergedEnd),
            fill: 'var(--overlay66)', opacity: 0.85
        }));
        drawPercentLabel(labelsG, mergedStart + 120, '≈66%', 'var(--overlay66)');

    } else if (state.phase === 'revealed') {
        const revealedDoor = DOORS[state.revealed];

        // The merged 66% wedge stays exactly as it was — no divider
        // reappears between the two doors, and the label still spans
        // both of them, so the viewer can see for themselves that the
        // whole 240° still reads "≈66%" even after one door goes dark.
        const mergedStart = chosenDoor.end;
        const mergedEnd = chosenDoor.start + 360;
        overlaysG.appendChild(svgEl('path', {
            d: sectorPath(mergedStart, mergedEnd),
            fill: 'var(--overlay66)', opacity: 0.85
        }));
        drawPercentLabel(labelsG, mergedStart + 120, '≈66%', 'var(--overlay66)');

        // Host's door goes solid black, drawn on top so it visibly
        // eats into that same 66% wedge — its ≈33% share has nowhere
        // to go but the one door still standing. Shaped as a wedge
        // fitted into the slice rather than a sharp full pie cut. An
        // orange outline (not a tinted fill) ties it to the 66% group
        // while keeping the door itself visibly black, not brown.
        drawBlackWedge(blackG, revealedDoor);
    }
}

/* =====================================================
   GAME LOGIC
   ===================================================== */

const width = 3;
const totalMines = 2; // number of goats
let minePositions = []; // positions of the goats
let revealedCount, gameOver;

// New variables for data tracking
let initialChoice = null;
let switchedMind = false;
let boardLayout = [];

// Holds the goat-door index between the player's pick and
// the moment they click "Ask Monty to open a door".
let pendingHostReveal = null;
let awaitingHostReveal = false;

function initGame() {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = '';
    document.getElementById('status').innerText = "Pick a door!";
    document.getElementById('chart-caption').innerText =
        "Three doors, three equal chances. Pick one to see how the odds move.";

    // 1. Generate 2 unique goat positions (1 car left over)
    minePositions = [];
    while (minePositions.length < totalMines) {
        let r = Math.floor(Math.random() * width);
        if (!minePositions.includes(r)) {
            minePositions.push(r);
        }
    }

    // 2. Map the board layout for the database (e.g., ["Goat", "Car", "Goat"])
    boardLayout = [0, 1, 2].map(i => minePositions.includes(i) ? "Goat" : "Car");

    // 3. Reset tracking variables
    initialChoice = null;
    switchedMind = false;
    revealedCount = 0;
    gameOver = false;
    pendingHostReveal = null;
    awaitingHostReveal = false;
    document.getElementById('monty-btn').style.display = 'none';
    document.getElementById('play-again-btn').style.display = 'none';

    // 4. Create the doors
    for (let i = 0; i < width; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = `<div class="choice-indicators"></div><div class="door-face"></div><div class="door-label">Door ${String.fromCharCode(65 + i)}</div>`;
        cell.addEventListener('click', () => revealCell(cell, i));
        gridElement.appendChild(cell);
    }

    // 5. Reset the chart to its neutral, undecided state
    renderChart({ phase: 'start' });
}

// Renders the pair of squares that track a door's role in the round:
// the first square marks the initial pick, the second marks the final
// pick. Pass null to leave a square empty.
function renderChoiceBoxes(cell, firstFilled, secondFilled) {
    const box = filled => `<div class="choice-box${filled ? ' filled' : ''}">${filled ? '👆' : ''}</div>`;
    cell.querySelector('.choice-indicators').innerHTML = box(firstFilled) + box(secondFilled);
}

function revealCell(cell, index) {
    if (gameOver) return;
    if (awaitingHostReveal) return; // wait for the "Ask Monty" button
    if (cell.classList.contains('revealed') && index !== initialChoice) return;
    if (index === initialChoice && cell.querySelector('.door-face').textContent) return;

    const isFirstMove = document.querySelectorAll('.cell.revealed').length === 0;

    if (isFirstMove) {
        initialChoice = index;
        renderChoiceBoxes(cell, true, false);
        cell.classList.add('revealed');

        let mineToPush;
        if (minePositions.includes(index)) {
            mineToPush = minePositions.find(pos => pos !== index);
        } else {
            const randomIdx = Math.floor(Math.random() * minePositions.length);
            mineToPush = minePositions[randomIdx];
        }

        // Step 1: show the 33% / 66% split the instant a door is picked,
        // then wait for the player to ask Monty to open a door.
        pendingHostReveal = mineToPush;
        awaitingHostReveal = true;

        renderChart({ phase: 'chosen', chosen: index });
        document.getElementById('chart-caption').innerText =
            "Your door holds a fixed ≈33% chance. The other two share ≈66% between them.";
        document.getElementById('status').innerText =
            "Door " + String.fromCharCode(65 + index) + " is yours for now.";
        document.getElementById('monty-btn').style.display = 'inline-block';

    } else {
        // SECOND MOVE LOGIC
        switchedMind = (index !== initialChoice);
        cell.classList.add('revealed');

        if (switchedMind) {
            // Initial door keeps its first square filled, second stays empty.
            const initialCell = document.querySelectorAll('.cell')[initialChoice];
            renderChoiceBoxes(initialCell, true, false);
            // This door wasn't the initial pick, but is now the final one.
            renderChoiceBoxes(cell, false, true);
        } else {
            // Same door for both picks — both squares filled.
            renderChoiceBoxes(cell, true, true);
        }

        if (minePositions.includes(index)) {
            // Losing door: goat
            cell.classList.add('mine');
            cell.querySelector('.door-face').textContent = '🐐';
            endGame("Loss");
        } else {
            // Winning door: car
            cell.querySelector('.door-face').textContent = '🚗';
            endGame("Win");
        }
    }

}

function hostOpensDoor() {
    if (!awaitingHostReveal || pendingHostReveal === null) return;

    const mineToPush = pendingHostReveal;
    const allCells = document.querySelectorAll('.cell');
    allCells[mineToPush].classList.add('revealed', 'flagged');
    allCells[mineToPush].querySelector('.door-face').textContent = '🐐';

    renderChart({ phase: 'revealed', chosen: initialChoice, revealed: mineToPush });
    document.getElementById('chart-caption').innerText =
        "Monty's door is now worth 0%. The full ≈66% has collapsed onto the door you didn't pick.";
    document.getElementById('status').innerText = "Monty opened a door to reveal a goat! Stick with " +
        String.fromCharCode(65 + initialChoice) + " or switch to the other unopened door?";

    document.getElementById('monty-btn').style.display = 'none';
    awaitingHostReveal = false;
    pendingHostReveal = null;
}

function endGame(result) {
    gameOver = true;
    document.getElementById('status').innerText = result === "Win" ? "🎉 You won the car!" : "🐐 You got a goat. Better luck next time!";
    document.getElementById('play-again-btn').style.display = 'inline-block';
    document.getElementById('chart-caption').innerText = switchedMind
        ? (result === "Win" ? "You switched — and the ≈66% came through." : "You switched, but this time the ≈66% didn't land your way.")
        : (result === "Win" ? "You stayed — and the ≈33% came through this time." : "You stayed on the ≈33% door, and it cost you.");

    fetch('/save_game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            result: result,
            board_layout: boardLayout,
            initial_choice_index: initialChoice,
            switched_mind: switchedMind
        })
    })
        .then(response => response.json())
        .then(data => {
            const time = new Date().toLocaleString();

            const logList = document.getElementById(switchedMind ? 'log-list-switched' : 'log-list-kept');
            const newEntry = document.createElement('div');
            newEntry.classList.add('log-entry');

            // Use the actual ID returned from the database
            newEntry.innerHTML = `
    <div class="log-summary">
        <strong>#${data.game_id}</strong>
        <span class="${result}">${result}</span>
    </div>
    <div class="log-detail">${time}</div>`;
            logList.prepend(newEntry);

            // Also mirror the entry into the combined, single-column view
            const typeTag = switchedMind ? 'tag-switched' : 'tag-kept';
            const typeLabel = switchedMind ? 'Switched' : 'Kept';
            const allEntry = document.createElement('div');
            allEntry.classList.add('log-entry');
            allEntry.innerHTML = `
    <div class="log-summary">
        <strong>#${data.game_id}</strong>
        <span class="${result}">${result}</span>
    </div>
    <div class="log-detail"><span class="${typeTag}">${typeLabel}</span> — ${time}</div>`;
            document.getElementById('log-list-all').prepend(allEntry);
        });
}

function deleteHistory() {
    if (!confirm("Are you sure you want to delete all game history?")) return;

    fetch('/delete_history', {
        method: 'POST',
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('log-list-kept').innerHTML = '';
            document.getElementById('log-list-switched').innerHTML = '';
            document.getElementById('log-list-all').innerHTML = '';
            console.log(data.message);
        })
        .catch(err => console.error("Error deleting history:", err));
}

/* =====================================================
   GAME HISTORY VIEW TOGGLE
   ===================================================== */

const HISTORY_VIEW_KEY = 'montyHallHistoryView';

function applyHistoryView(mode) {
    const isCombined = mode === 'combined';
    document.getElementById('sidebar').classList.toggle('combined-view', isCombined);
    document.getElementById('seg-one-column').classList.toggle('active', isCombined);
    document.getElementById('seg-two-column').classList.toggle('active', !isCombined);
}

function setHistoryView(mode) {
    localStorage.setItem(HISTORY_VIEW_KEY, mode);
    applyHistoryView(mode);
}

applyHistoryView(localStorage.getItem(HISTORY_VIEW_KEY) === 'split' ? 'split' : 'combined');

/* =====================================================
   PHONE SPLIT VIEW — a single settings button opens a menu
   that swaps the right column between chart and history
   ===================================================== */

function setMobilePanel(panel) {
    const body = document.body;
    const wasActive = body.classList.contains('panel-' + panel + '-active');

    body.classList.remove('panel-chart-active', 'panel-history-active');
    if (!wasActive) {
        body.classList.add('panel-' + panel + '-active');
    }

    const isSplit = body.classList.contains('panel-chart-active') || body.classList.contains('panel-history-active');
    document.getElementById('mobile-panel-menu-btn').classList.toggle('active', isSplit);
    document.getElementById('menu-item-chart').classList.toggle('active', body.classList.contains('panel-chart-active'));
    document.getElementById('menu-item-history').classList.toggle('active', body.classList.contains('panel-history-active'));
}

function closeMobileMenu() {
    document.getElementById('mobile-panel-menu').hidden = true;
    document.getElementById('mobile-panel-menu-btn').setAttribute('aria-expanded', 'false');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-panel-menu');
    const willOpen = menu.hidden;
    menu.hidden = !willOpen;
    document.getElementById('mobile-panel-menu-btn').setAttribute('aria-expanded', String(willOpen));
}

function selectMobilePanel(panel) {
    setMobilePanel(panel);
    closeMobileMenu();
}

document.addEventListener('click', e => {
    const wrap = document.getElementById('mobile-panel-menu-wrap');
    if (wrap && !wrap.contains(e.target)) {
        closeMobileMenu();
    }
});

/* =====================================================
   LOG ENTRY DETAILS — on phones, entries collapse to just the
   id and result; hovering or long-pressing reveals the rest.
   ===================================================== */

let logLongPressTimer = null;

function handleLogTouchStart(e) {
    const entry = e.target.closest('.log-entry');
    if (!entry) return;
    logLongPressTimer = setTimeout(() => {
        document.querySelectorAll('.log-entry.show-detail').forEach(el => el.classList.remove('show-detail'));
        entry.classList.add('show-detail');
    }, 450);
}

function clearLogLongPress() {
    clearTimeout(logLongPressTimer);
}

['log-list-kept', 'log-list-switched', 'log-list-all'].forEach(id => {
    const list = document.getElementById(id);
    list.addEventListener('touchstart', handleLogTouchStart);
    list.addEventListener('touchend', clearLogLongPress);
    list.addEventListener('touchmove', clearLogLongPress);
});

document.addEventListener('touchstart', e => {
    if (!e.target.closest('.log-entry')) {
        document.querySelectorAll('.log-entry.show-detail').forEach(el => el.classList.remove('show-detail'));
    }
});

// Initialize the first game on load
initGame();
