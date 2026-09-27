/* =====================================================
   TRANSLATIONS — initial set of major European languages
   ===================================================== */

const TRANSLATIONS = {
    en: {
        appTitle: "The Monty Hall Problem",
        chartPanelTitle: "Probability Breakdown",
        historyPanelTitle: "Game History",
        chartCaptionStart: "Three doors, three equal chances. Pick one to see how the odds move.",
        chartCaptionChosen: "Your door holds a fixed ≈33% chance. The other two share ≈66% between them.",
        chartCaptionRevealed: "Monty's door is now worth 0%. The full ≈66% has collapsed onto the door you didn't pick.",
        chartCaptionStayWin: "You stayed — and the ≈33% came through this time.",
        chartCaptionStayLoss: "You stayed on the ≈33% door, and it cost you.",
        chartCaptionSwitchWin: "You switched — and the ≈66% came through.",
        chartCaptionSwitchLoss: "You switched, but this time the ≈66% didn't land your way.",
        statusPick: "Pick a door!",
        statusChosen: "{door} is yours for now.",
        statusRevealed: "Monty opened a door to reveal a goat! Stick with {door} or switch to the other unopened door?",
        statusWin: "🎉 You won the car!",
        statusLoss: "🐐 You got a goat. Better luck next time!",
        montyBtn: "Ask Monty to open a door",
        playAgainBtn: "Play Again",
        oneColumn: "1 Column",
        twoColumns: "2 Columns",
        clearHistory: "Clear All History",
        keptChoiceHeader: "Kept Choice",
        switchedChoiceHeader: "Switched Choice",
        keptTag: "Kept",
        switchedTag: "Switched",
        winLabel: "Win",
        lossLabel: "Loss",
        viewMenuLabel: "View",
        languageMenuLabel: "Language",
        confirmDeleteHistory: "Are you sure you want to delete all game history?",
        doorWord: "Door"
    },
    es: {
        appTitle: "El Problema de Monty Hall",
        chartPanelTitle: "Desglose de Probabilidad",
        historyPanelTitle: "Historial de Partidas",
        chartCaptionStart: "Tres puertas, tres opciones iguales. Elige una para ver cómo cambian las probabilidades.",
        chartCaptionChosen: "Tu puerta tiene una probabilidad fija de ≈33%. Las otras dos comparten ≈66% entre ellas.",
        chartCaptionRevealed: "La puerta de Monty ahora vale 0%. El ≈66% completo recayó en la puerta que no elegiste.",
        chartCaptionStayWin: "Te quedaste — y esta vez el ≈33% se cumplió.",
        chartCaptionStayLoss: "Te quedaste con la puerta del ≈33%, y te costó caro.",
        chartCaptionSwitchWin: "Cambiaste — y el ≈66% se cumplió.",
        chartCaptionSwitchLoss: "Cambiaste, pero esta vez el ≈66% no salió a tu favor.",
        statusPick: "¡Elige una puerta!",
        statusChosen: "{door} es tuya por ahora.",
        statusRevealed: "¡Monty abrió una puerta y reveló una cabra! ¿Te quedas con {door} o cambias a la otra puerta sin abrir?",
        statusWin: "🎉 ¡Ganaste el coche!",
        statusLoss: "🐐 Obtuviste una cabra. ¡Mejor suerte la próxima vez!",
        montyBtn: "Pedir a Monty que abra una puerta",
        playAgainBtn: "Jugar de Nuevo",
        oneColumn: "1 Columna",
        twoColumns: "2 Columnas",
        clearHistory: "Borrar Todo el Historial",
        keptChoiceHeader: "Se Quedó",
        switchedChoiceHeader: "Cambió",
        keptTag: "Se quedó",
        switchedTag: "Cambió",
        winLabel: "Gana",
        lossLabel: "Pierde",
        viewMenuLabel: "Vista",
        languageMenuLabel: "Idioma",
        confirmDeleteHistory: "¿Seguro que quieres borrar todo el historial de partidas?",
        doorWord: "Puerta"
    },
    fr: {
        appTitle: "Le Problème de Monty Hall",
        chartPanelTitle: "Répartition des Probabilités",
        historyPanelTitle: "Historique des Parties",
        chartCaptionStart: "Trois portes, trois chances égales. Choisissez-en une pour voir comment les probabilités évoluent.",
        chartCaptionChosen: "Votre porte a une probabilité fixe de ≈33 %. Les deux autres se partagent ≈66 % entre elles.",
        chartCaptionRevealed: "La porte de Monty vaut désormais 0 %. Les ≈66 % se sont reportés sur la porte que vous n'avez pas choisie.",
        chartCaptionStayWin: "Vous êtes resté — et cette fois, les ≈33 % ont payé.",
        chartCaptionStayLoss: "Vous êtes resté sur la porte des ≈33 %, et cela vous a coûté cher.",
        chartCaptionSwitchWin: "Vous avez changé — et les ≈66 % ont payé.",
        chartCaptionSwitchLoss: "Vous avez changé, mais cette fois les ≈66 % n'ont pas joué en votre faveur.",
        statusPick: "Choisissez une porte !",
        statusChosen: "{door} est la vôtre pour l'instant.",
        statusRevealed: "Monty a ouvert une porte et révélé une chèvre ! Restez-vous sur {door} ou changez-vous pour l'autre porte fermée ?",
        statusWin: "🎉 Vous avez gagné la voiture !",
        statusLoss: "🐐 Vous avez eu une chèvre. Bonne chance la prochaine fois !",
        montyBtn: "Demander à Monty d'ouvrir une porte",
        playAgainBtn: "Rejouer",
        oneColumn: "1 Colonne",
        twoColumns: "2 Colonnes",
        clearHistory: "Effacer Tout l'Historique",
        keptChoiceHeader: "Choix Conservé",
        switchedChoiceHeader: "Choix Changé",
        keptTag: "Conservé",
        switchedTag: "Changé",
        winLabel: "Gagné",
        lossLabel: "Perdu",
        viewMenuLabel: "Affichage",
        languageMenuLabel: "Langue",
        confirmDeleteHistory: "Voulez-vous vraiment supprimer tout l'historique des parties ?",
        doorWord: "Porte"
    },
    de: {
        appTitle: "Das Monty-Hall-Problem",
        chartPanelTitle: "Wahrscheinlichkeitsübersicht",
        historyPanelTitle: "Spielverlauf",
        chartCaptionStart: "Drei Türen, drei gleiche Chancen. Wähle eine aus, um zu sehen, wie sich die Chancen verschieben.",
        chartCaptionChosen: "Deine Tür hat eine feste Chance von ≈33 %. Die anderen beiden teilen sich ≈66 %.",
        chartCaptionRevealed: "Montys Tür ist jetzt 0 % wert. Die vollen ≈66 % sind auf die Tür übergegangen, die du nicht gewählt hast.",
        chartCaptionStayWin: "Du bist geblieben — und diesmal haben sich die ≈33 % ausgezahlt.",
        chartCaptionStayLoss: "Du bist bei der ≈33-%-Tür geblieben, und das hat dich das Auto gekostet.",
        chartCaptionSwitchWin: "Du hast gewechselt — und die ≈66 % haben sich ausgezahlt.",
        chartCaptionSwitchLoss: "Du hast gewechselt, aber diesmal haben sich die ≈66 % nicht ausgezahlt.",
        statusPick: "Wähle eine Tür!",
        statusChosen: "{door} gehört dir vorerst.",
        statusRevealed: "Monty hat eine Tür geöffnet und eine Ziege enthüllt! Bleibst du bei {door} oder wechselst du zur anderen ungeöffneten Tür?",
        statusWin: "🎉 Du hast das Auto gewonnen!",
        statusLoss: "🐐 Du hast eine Ziege bekommen. Viel Glück beim nächsten Mal!",
        montyBtn: "Monty bitten, eine Tür zu öffnen",
        playAgainBtn: "Nochmal Spielen",
        oneColumn: "1 Spalte",
        twoColumns: "2 Spalten",
        clearHistory: "Gesamten Verlauf Löschen",
        keptChoiceHeader: "Beibehalten",
        switchedChoiceHeader: "Gewechselt",
        keptTag: "Beibehalten",
        switchedTag: "Gewechselt",
        winLabel: "Gewonnen",
        lossLabel: "Verloren",
        viewMenuLabel: "Ansicht",
        languageMenuLabel: "Sprache",
        confirmDeleteHistory: "Möchtest du wirklich den gesamten Spielverlauf löschen?",
        doorWord: "Tür"
    },
    it: {
        appTitle: "Il Problema di Monty Hall",
        chartPanelTitle: "Ripartizione delle Probabilità",
        historyPanelTitle: "Cronologia Partite",
        chartCaptionStart: "Tre porte, tre possibilità uguali. Scegline una per vedere come cambiano le probabilità.",
        chartCaptionChosen: "La tua porta ha una probabilità fissa del ≈33%. Le altre due condividono il ≈66%.",
        chartCaptionRevealed: "La porta di Monty ora vale lo 0%. L'intero ≈66% è confluito sulla porta che non hai scelto.",
        chartCaptionStayWin: "Sei rimasto — e questa volta il ≈33% ha pagato.",
        chartCaptionStayLoss: "Sei rimasto sulla porta del ≈33%, e ti è costato caro.",
        chartCaptionSwitchWin: "Hai cambiato — e il ≈66% ha pagato.",
        chartCaptionSwitchLoss: "Hai cambiato, ma questa volta il ≈66% non è andato a tuo favore.",
        statusPick: "Scegli una porta!",
        statusChosen: "{door} è tua per ora.",
        statusRevealed: "Monty ha aperto una porta rivelando una capra! Rimani con {door} o cambi con l'altra porta chiusa?",
        statusWin: "🎉 Hai vinto l'auto!",
        statusLoss: "🐐 Hai preso una capra. Buona fortuna per la prossima volta!",
        montyBtn: "Chiedi a Monty di aprire una porta",
        playAgainBtn: "Gioca Ancora",
        oneColumn: "1 Colonna",
        twoColumns: "2 Colonne",
        clearHistory: "Cancella Tutta la Cronologia",
        keptChoiceHeader: "Scelta Mantenuta",
        switchedChoiceHeader: "Scelta Cambiata",
        keptTag: "Mantenuta",
        switchedTag: "Cambiata",
        winLabel: "Vinto",
        lossLabel: "Perso",
        viewMenuLabel: "Vista",
        languageMenuLabel: "Lingua",
        confirmDeleteHistory: "Sei sicuro di voler cancellare tutta la cronologia delle partite?",
        doorWord: "Porta"
    },
    pt: {
        appTitle: "O Problema de Monty Hall",
        chartPanelTitle: "Distribuição de Probabilidade",
        historyPanelTitle: "Histórico de Jogos",
        chartCaptionStart: "Três portas, três chances iguais. Escolha uma para ver como as chances mudam.",
        chartCaptionChosen: "A sua porta tem uma chance fixa de ≈33%. As outras duas partilham ≈66% entre si.",
        chartCaptionRevealed: "A porta do Monty agora vale 0%. Os ≈66% completos passaram para a porta que não escolheu.",
        chartCaptionStayWin: "Ficou — e desta vez o ≈33% valeu a pena.",
        chartCaptionStayLoss: "Ficou na porta do ≈33%, e isso custou-lhe caro.",
        chartCaptionSwitchWin: "Trocou — e o ≈66% valeu a pena.",
        chartCaptionSwitchLoss: "Trocou, mas desta vez o ≈66% não correu a seu favor.",
        statusPick: "Escolha uma porta!",
        statusChosen: "{door} é sua por enquanto.",
        statusRevealed: "O Monty abriu uma porta e revelou uma cabra! Fica com {door} ou troca para a outra porta fechada?",
        statusWin: "🎉 Ganhou o carro!",
        statusLoss: "🐐 Calhou-lhe uma cabra. Mais sorte para a próxima!",
        montyBtn: "Pedir ao Monty para abrir uma porta",
        playAgainBtn: "Jogar Novamente",
        oneColumn: "1 Coluna",
        twoColumns: "2 Colunas",
        clearHistory: "Limpar Todo o Histórico",
        keptChoiceHeader: "Manteve",
        switchedChoiceHeader: "Trocou",
        keptTag: "Manteve",
        switchedTag: "Trocou",
        winLabel: "Ganhou",
        lossLabel: "Perdeu",
        viewMenuLabel: "Vista",
        languageMenuLabel: "Idioma",
        confirmDeleteHistory: "Tem a certeza de que quer apagar todo o histórico de jogos?",
        doorWord: "Porta"
    },
    nl: {
        appTitle: "Het Monty Hall-probleem",
        chartPanelTitle: "Kansverdeling",
        historyPanelTitle: "Spelgeschiedenis",
        chartCaptionStart: "Drie deuren, drie gelijke kansen. Kies er één om te zien hoe de kansen verschuiven.",
        chartCaptionChosen: "Jouw deur heeft een vaste kans van ≈33%. De andere twee delen ≈66% samen.",
        chartCaptionRevealed: "De deur van Monty is nu 0% waard. De volledige ≈66% is overgegaan naar de deur die je niet koos.",
        chartCaptionStayWin: "Je bleef — en deze keer kwam de ≈33% uit.",
        chartCaptionStayLoss: "Je bleef bij de ≈33%-deur, en dat kostte je de auto.",
        chartCaptionSwitchWin: "Je wisselde — en de ≈66% kwam uit.",
        chartCaptionSwitchLoss: "Je wisselde, maar deze keer viel de ≈66% niet in je voordeel uit.",
        statusPick: "Kies een deur!",
        statusChosen: "{door} is voorlopig van jou.",
        statusRevealed: "Monty opende een deur en onthulde een geit! Blijf je bij {door} of wissel je naar de andere ongeopende deur?",
        statusWin: "🎉 Je hebt de auto gewonnen!",
        statusLoss: "🐐 Je kreeg een geit. Volgende keer meer geluk!",
        montyBtn: "Vraag Monty om een deur te openen",
        playAgainBtn: "Opnieuw Spelen",
        oneColumn: "1 Kolom",
        twoColumns: "2 Kolommen",
        clearHistory: "Wis Alle Geschiedenis",
        keptChoiceHeader: "Gebleven",
        switchedChoiceHeader: "Gewisseld",
        keptTag: "Gebleven",
        switchedTag: "Gewisseld",
        winLabel: "Gewonnen",
        lossLabel: "Verloren",
        viewMenuLabel: "Weergave",
        languageMenuLabel: "Taal",
        confirmDeleteHistory: "Weet je zeker dat je alle spelgeschiedenis wilt wissen?",
        doorWord: "Deur"
    },
    pl: {
        appTitle: "Problem Monty'ego Halla",
        chartPanelTitle: "Rozkład Prawdopodobieństwa",
        historyPanelTitle: "Historia Gier",
        chartCaptionStart: "Trzy drzwi, trzy równe szanse. Wybierz jedne, aby zobaczyć, jak zmieniają się szanse.",
        chartCaptionChosen: "Twoje drzwi mają stałą szansę ≈33%. Pozostałe dwoje dzieli między sobą ≈66%.",
        chartCaptionRevealed: "Drzwi Monty'ego są teraz warte 0%. Całe ≈66% przeszło na drzwi, których nie wybrałeś.",
        chartCaptionStayWin: "Zostałeś przy swoim wyborze — i tym razem ≈33% się sprawdziło.",
        chartCaptionStayLoss: "Zostałeś przy drzwiach z ≈33%, i to cię kosztowało.",
        chartCaptionSwitchWin: "Zmieniłeś wybór — i ≈66% się sprawdziło.",
        chartCaptionSwitchLoss: "Zmieniłeś wybór, ale tym razem ≈66% nie zadziałało na twoją korzyść.",
        statusPick: "Wybierz drzwi!",
        statusChosen: "{door} są na razie twoje.",
        statusRevealed: "Monty otworzył drzwi i ukazała się koza! Zostajesz przy {door}, czy zmieniasz na drugie zamknięte drzwi?",
        statusWin: "🎉 Wygrałeś samochód!",
        statusLoss: "🐐 Trafiła ci się koza. Powodzenia następnym razem!",
        montyBtn: "Poproś Monty'ego o otwarcie drzwi",
        playAgainBtn: "Zagraj Ponownie",
        oneColumn: "1 Kolumna",
        twoColumns: "2 Kolumny",
        clearHistory: "Wyczyść Całą Historię",
        keptChoiceHeader: "Bez Zmiany",
        switchedChoiceHeader: "Zmieniono",
        keptTag: "Bez zmiany",
        switchedTag: "Zmieniono",
        winLabel: "Wygrana",
        lossLabel: "Przegrana",
        viewMenuLabel: "Widok",
        languageMenuLabel: "Język",
        confirmDeleteHistory: "Czy na pewno chcesz usunąć całą historię gier?",
        doorWord: "Drzwi"
    },
    ro: {
        appTitle: "Problema Monty Hall",
        chartPanelTitle: "Distribuția Probabilității",
        historyPanelTitle: "Istoric Jocuri",
        chartCaptionStart: "Trei uși, trei șanse egale. Alege una pentru a vedea cum se schimbă șansele.",
        chartCaptionChosen: "Ușa ta are o șansă fixă de ≈33%. Celelalte două împart ≈66% între ele.",
        chartCaptionRevealed: "Ușa lui Monty valorează acum 0%. Întregul ≈66% s-a mutat pe ușa pe care nu ai ales-o.",
        chartCaptionStayWin: "Ai rămas — și de data aceasta ≈33% a fost câștigător.",
        chartCaptionStayLoss: "Ai rămas la ușa cu ≈33%, iar asta te-a costat.",
        chartCaptionSwitchWin: "Ai schimbat — și ≈66% a fost câștigător.",
        chartCaptionSwitchLoss: "Ai schimbat, dar de data aceasta ≈66% nu a fost în favoarea ta.",
        statusPick: "Alege o ușă!",
        statusChosen: "{door} este a ta deocamdată.",
        statusRevealed: "Monty a deschis o ușă și a dezvăluit o capră! Rămâi la {door} sau treci la cealaltă ușă neschisă?",
        statusWin: "🎉 Ai câștigat mașina!",
        statusLoss: "🐐 Ai primit o capră. Baftă mai multă data viitoare!",
        montyBtn: "Roagă-l pe Monty să deschidă o ușă",
        playAgainBtn: "Joacă din Nou",
        oneColumn: "1 Coloană",
        twoColumns: "2 Coloane",
        clearHistory: "Șterge Tot Istoricul",
        keptChoiceHeader: "Păstrat",
        switchedChoiceHeader: "Schimbat",
        keptTag: "Păstrat",
        switchedTag: "Schimbat",
        winLabel: "Câștig",
        lossLabel: "Pierdere",
        viewMenuLabel: "Vizualizare",
        languageMenuLabel: "Limbă",
        confirmDeleteHistory: "Sigur vrei să ștergi tot istoricul jocurilor?",
        doorWord: "Ușa"
    },
    el: {
        appTitle: "Το Πρόβλημα του Monty Hall",
        chartPanelTitle: "Κατανομή Πιθανοτήτων",
        historyPanelTitle: "Ιστορικό Παιχνιδιών",
        chartCaptionStart: "Τρεις πόρτες, τρεις ίσες πιθανότητες. Διάλεξε μία για να δεις πώς αλλάζουν οι πιθανότητες.",
        chartCaptionChosen: "Η πόρτα σου έχει σταθερή πιθανότητα ≈33%. Οι άλλες δύο μοιράζονται ≈66% μεταξύ τους.",
        chartCaptionRevealed: "Η πόρτα του Monty αξίζει τώρα 0%. Ολόκληρο το ≈66% πέρασε στην πόρτα που δεν διάλεξες.",
        chartCaptionStayWin: "Έμεινες — και αυτή τη φορά το ≈33% βγήκε σωστό.",
        chartCaptionStayLoss: "Έμεινες στην πόρτα του ≈33%, και αυτό σου κόστισε.",
        chartCaptionSwitchWin: "Άλλαξες — και το ≈66% βγήκε σωστό.",
        chartCaptionSwitchLoss: "Άλλαξες, αλλά αυτή τη φορά το ≈66% δεν βγήκε υπέρ σου.",
        statusPick: "Διάλεξε μια πόρτα!",
        statusChosen: "Η {door} είναι δική σου προς το παρόν.",
        statusRevealed: "Ο Monty άνοιξε μια πόρτα και αποκάλυψε μια κατσίκα! Μένεις στην {door} ή αλλάζεις στην άλλη κλειστή πόρτα;",
        statusWin: "🎉 Κέρδισες το αυτοκίνητο!",
        statusLoss: "🐐 Πήρες μια κατσίκα. Καλύτερη τύχη την επόμενη φορά!",
        montyBtn: "Ζήτα από τον Monty να ανοίξει μια πόρτα",
        playAgainBtn: "Παίξε Ξανά",
        oneColumn: "1 Στήλη",
        twoColumns: "2 Στήλες",
        clearHistory: "Διαγραφή Όλου του Ιστορικού",
        keptChoiceHeader: "Παρέμεινε",
        switchedChoiceHeader: "Άλλαξε",
        keptTag: "Παρέμεινε",
        switchedTag: "Άλλαξε",
        winLabel: "Νίκη",
        lossLabel: "Ήττα",
        viewMenuLabel: "Προβολή",
        languageMenuLabel: "Γλώσσα",
        confirmDeleteHistory: "Είσαι σίγουρος ότι θέλεις να διαγράψεις όλο το ιστορικό παιχνιδιών;",
        doorWord: "Πόρτα"
    },
    sv: {
        appTitle: "Monty Hall-problemet",
        chartPanelTitle: "Sannolikhetsfördelning",
        historyPanelTitle: "Spelhistorik",
        chartCaptionStart: "Tre dörrar, tre lika chanser. Välj en för att se hur chanserna förändras.",
        chartCaptionChosen: "Din dörr har en fast chans på ≈33 %. De andra två delar på ≈66 % mellan sig.",
        chartCaptionRevealed: "Montys dörr är nu värd 0 %. Hela ≈66 % har flyttats till dörren du inte valde.",
        chartCaptionStayWin: "Du stannade kvar — och den här gången slog ≈33 % in.",
        chartCaptionStayLoss: "Du stannade kvar på ≈33 %-dörren, och det kostade dig bilen.",
        chartCaptionSwitchWin: "Du bytte — och ≈66 % slog in.",
        chartCaptionSwitchLoss: "Du bytte, men den här gången föll inte ≈66 % ut till din fördel.",
        statusPick: "Välj en dörr!",
        statusChosen: "{door} är din för tillfället.",
        statusRevealed: "Monty öppnade en dörr och avslöjade en get! Stannar du på {door} eller byter du till den andra oöppnade dörren?",
        statusWin: "🎉 Du vann bilen!",
        statusLoss: "🐐 Du fick en get. Bättre lycka nästa gång!",
        montyBtn: "Be Monty öppna en dörr",
        playAgainBtn: "Spela Igen",
        oneColumn: "1 Kolumn",
        twoColumns: "2 Kolumner",
        clearHistory: "Rensa Hela Historiken",
        keptChoiceHeader: "Behöll",
        switchedChoiceHeader: "Bytte",
        keptTag: "Behöll",
        switchedTag: "Bytte",
        winLabel: "Vinst",
        lossLabel: "Förlust",
        viewMenuLabel: "Vy",
        languageMenuLabel: "Språk",
        confirmDeleteHistory: "Är du säker på att du vill radera hela spelhistoriken?",
        doorWord: "Dörr"
    }
};

const LANG_KEY = 'montyHallLang';

function detectBrowserLang() {
    const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return TRANSLATIONS[nav] ? nav : 'en';
}

let currentLang = localStorage.getItem(LANG_KEY) || detectBrowserLang();
if (!TRANSLATIONS[currentLang]) currentLang = 'en';

// Looks up a translated string for the current language, falling back to
// English, and fills in any {placeholder} values passed in `vars`.
// (Named `tr`, not `t`, since `t` is already used locally as an SVG text
// element variable name throughout the chart-drawing code below.)
function tr(key, vars) {
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    let str = dict[key] !== undefined ? dict[key] : TRANSLATIONS.en[key];
    if (vars) {
        Object.keys(vars).forEach(k => {
            str = str.replace('{' + k + '}', vars[k]);
        });
    }
    return str;
}

function doorName(index) {
    return tr('doorWord') + ' ' + String.fromCharCode(65 + index);
}

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

// Tracks which status/caption message is currently shown, so the text
// can be re-rendered in the new language whenever it changes.
let currentPhase = 'start'; // 'start' | 'chosen' | 'revealed' | 'end'
let lastResult = null; // 'Win' | 'Loss', only meaningful when currentPhase === 'end'

function applyPhaseText() {
    const statusEl = document.getElementById('status');
    const captionEl = document.getElementById('chart-caption');

    if (currentPhase === 'chosen') {
        statusEl.innerText = tr('statusChosen', { door: doorName(initialChoice) });
        captionEl.innerText = tr('chartCaptionChosen');
    } else if (currentPhase === 'revealed') {
        statusEl.innerText = tr('statusRevealed', { door: doorName(initialChoice) });
        captionEl.innerText = tr('chartCaptionRevealed');
    } else if (currentPhase === 'end') {
        statusEl.innerText = lastResult === 'Win' ? tr('statusWin') : tr('statusLoss');
        captionEl.innerText = switchedMind
            ? (lastResult === 'Win' ? tr('chartCaptionSwitchWin') : tr('chartCaptionSwitchLoss'))
            : (lastResult === 'Win' ? tr('chartCaptionStayWin') : tr('chartCaptionStayLoss'));
    } else {
        statusEl.innerText = tr('statusPick');
        captionEl.innerText = tr('chartCaptionStart');
    }
}

function initGame() {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = '';
    currentPhase = 'start';
    lastResult = null;
    applyPhaseText();

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
        cell.innerHTML = `<div class="choice-indicators"></div><div class="door-face"></div><div class="door-label">${doorName(i)}</div>`;
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
        currentPhase = 'chosen';
        applyPhaseText();
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
    currentPhase = 'revealed';
    applyPhaseText();

    document.getElementById('monty-btn').style.display = 'none';
    awaitingHostReveal = false;
    pendingHostReveal = null;
}

function endGame(result) {
    gameOver = true;
    currentPhase = 'end';
    lastResult = result;
    applyPhaseText();
    document.getElementById('play-again-btn').style.display = 'inline-block';

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
            const resultLabel = result === 'Win' ? tr('winLabel') : tr('lossLabel');

            // Use the actual ID returned from the database
            newEntry.innerHTML = `
    <div class="log-summary">
        <strong>#${data.game_id}</strong>
        <span class="${result}">${resultLabel}</span>
    </div>
    <div class="log-detail">${time}</div>`;
            logList.prepend(newEntry);

            // Also mirror the entry into the combined, single-column view
            const typeTag = switchedMind ? 'tag-switched' : 'tag-kept';
            const typeLabel = switchedMind ? tr('switchedTag') : tr('keptTag');
            const allEntry = document.createElement('div');
            allEntry.classList.add('log-entry');
            allEntry.innerHTML = `
    <div class="log-summary">
        <strong>#${data.game_id}</strong>
        <span class="${result}">${resultLabel}</span>
    </div>
    <div class="log-detail"><span class="${typeTag}">${typeLabel}</span> — ${time}</div>`;
            document.getElementById('log-list-all').prepend(allEntry);
        });
}

function deleteHistory() {
    if (!confirm(tr('confirmDeleteHistory'))) return;

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

/* =====================================================
   LANGUAGE SWITCHING
   ===================================================== */

// Re-applies every translated static label; called on load and whenever
// the language changes. Dynamic status/caption text is handled separately
// by applyPhaseText(), since it depends on where the player is in the round.
function applyStaticTranslations() {
    document.documentElement.lang = currentLang;

    document.getElementById('app-title').textContent = tr('appTitle');
    document.getElementById('chart-panel-title').textContent = tr('chartPanelTitle');
    document.getElementById('history-panel-title').textContent = tr('historyPanelTitle');
    document.getElementById('monty-btn').textContent = tr('montyBtn');
    document.getElementById('play-again-btn').textContent = tr('playAgainBtn');
    document.getElementById('seg-one-column').textContent = tr('oneColumn');
    document.getElementById('seg-two-column').textContent = tr('twoColumns');
    document.getElementById('clear-history-btn').textContent = tr('clearHistory');
    document.getElementById('kept-choice-header').textContent = tr('keptChoiceHeader');
    document.getElementById('switched-choice-header').textContent = tr('switchedChoiceHeader');
    document.getElementById('menu-item-chart').textContent = '📊 ' + tr('chartPanelTitle');
    document.getElementById('menu-item-history').textContent = '🕓 ' + tr('historyPanelTitle');
    document.getElementById('menu-view-label').textContent = tr('viewMenuLabel');
    document.getElementById('menu-lang-label').textContent = tr('languageMenuLabel');

    document.querySelectorAll('.Win').forEach(el => el.textContent = tr('winLabel'));
    document.querySelectorAll('.Loss').forEach(el => el.textContent = tr('lossLabel'));
    document.querySelectorAll('.tag-kept').forEach(el => el.textContent = tr('keptTag'));
    document.querySelectorAll('.tag-switched').forEach(el => el.textContent = tr('switchedTag'));

    document.querySelectorAll('.cell').forEach((cell, i) => {
        const label = cell.querySelector('.door-label');
        if (label) label.textContent = doorName(i);
    });
}

function updateLanguageMenuActiveState() {
    document.querySelectorAll('.lang-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

function setLanguage(lang) {
    if (!TRANSLATIONS[lang] || lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyStaticTranslations();
    applyPhaseText();
    updateLanguageMenuActiveState();
}

function selectLanguage(lang) {
    setLanguage(lang);
    closeMobileMenu();
}

applyStaticTranslations();
updateLanguageMenuActiveState();

// Initialize the first game on load
initGame();
