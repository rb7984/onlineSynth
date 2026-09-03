
// 1. DEFINIZIONE DEI PRESET HARDCODATI
const defaultCustomMap = [
    { key: 'a', name: 'Basso', freq: 110.0 },
    { key: 's', name: 'Calmo', freq: 220.0 },
    { key: 'd', name: 'Armonia', freq: 432.0 },
    { key: 'f', name: 'Standard', freq: 440.0 },
    { key: 'g', name: 'Luce', freq: 528.0 },
    { key: 'h', name: 'Acuto', freq: 880.0 }
];

const presetList = [
    {
        id: 'custom',
        label: 'Custom (Tuo)',
        // Carica da localStorage se presente, altrimenti default
        data: JSON.parse(localStorage.getItem('myCustomSynth')) || defaultCustomMap
    },
    {
        id: 'jt',
        label: 'Just Tuning',
        data: [
            { key: '1', name: '1/1 - 1', freq: 440.0 },
            { key: '2', name: '9/8 - 2', freq: 495.0 },
            { key: '3', name: '5/4 - 3', freq: 550.0 },
            { key: '4', name: '4/3 - 4', freq: 586.7 },
            { key: '5', name: '3/2 - 5', freq: 660.0 },
            { key: '6', name: '5/3 - 6', freq: 733.3 },
            { key: '7', name: '15/8 - 7', freq: 825.0 },
            { key: '8', name: '2/1 - 8', freq: 880.0 }
        ]
    },
    {
        id: 'pt',
        label: 'Pythagorean Tuning',
        data: [
            { key: '1', name: '1/1 - 1', freq: 440.0 },
            { key: '2', name: '9/8 - 2', freq: 495.0 },
            { key: '3', name: '81/64 - 3', freq: 556.9 },
            { key: '4', name: '4/3 - 4', freq: 586.7 },
            { key: '5', name: '3/2 - 5', freq: 660.0 },
            { key: '6', name: '27/16 - 6', freq: 742.5 },
            { key: '7', name: '243/128 - 7', freq: 835.3 },
            { key: '8', name: '2/1 - 8', freq: 880.0 }
        ]
    },
    {
        id: 'mtt',
        label: 'Mean Tone Tuning',
        data: [
            { key: '1', name: '1/1 - 1', freq: 440.0 },
            { key: '2', name: '5^(1/2)/2 - 2', freq: 491.95 },
            { key: '3', name: '5/4 - 3', freq: 550.0 },
            { key: '4', name: '2/5^(1/4) - 4', freq: 588.57 },
            { key: '5', name: '5^(1/4) - 5', freq: 657.96 },
            { key: '6', name: '5^(3/4)/2 - 6', freq: 735.61 },
            { key: '7', name: '5^(5/4)/2 - 7', freq: 822.42 },
            { key: '8', name: '2/1 - 8', freq: 880.0 }
        ]
    },
    {
        id: 'edo12',
        label: '12 EDO (Standard Equal Temperament)',
        data: [
            { key: 'a', name: 'La3 (A)', freq: 440.0 },
            { key: 'w', name: 'La#3 / Sib3 (A# / Bb)', freq: 466.16 },
            { key: 's', name: 'Si3 (B)', freq: 493.88 },
            { key: 'd', name: 'Do4 (C)', freq: 523.25 },
            { key: 'r', name: 'Do#4 / Reb4 (C# / Db)', freq: 554.37 },
            { key: 'f', name: 'Re4 (D)', freq: 587.33 },
            { key: 't', name: 'Re#4 / Mib4 (D# / Eb)', freq: 622.25 },
            { key: 'g', name: 'Mi4 (E)', freq: 659.25 },
            { key: 'h', name: 'Fa4 (F)', freq: 698.46 },
            { key: 'u', name: 'Fa#4 / Solb4 (F# / Gb)', freq: 739.99 },
            { key: 'j', name: 'Sol4 (G)', freq: 783.99 },
            { key: 'i', name: 'Sol#4 / Lab4 (G# / Ab)', freq: 830.61 },
            { key: 'k', name: 'La4 (A)', freq: 880.0 }
        ]
    },
    {
        id: 'edo19',
        label: '19 EDO (Meantone / Renaissance System)',
        data: [
            { key: '1', name: 'Step 0 - A (1/1)', freq: 440.0 },
            { key: '2', name: 'Step 1 - A#', freq: 456.3 },
            { key: '3', name: 'Step 2 - Bb', freq: 473.3 },
            { key: '4', name: 'Step 3 - B', freq: 490.9 },
            { key: '5', name: 'Step 4 - B# / Cb', freq: 509.2 },
            { key: '6', name: 'Step 5 - C', freq: 528.2 },
            { key: '7', name: 'Step 6 - C#', freq: 547.8 },
            { key: '8', name: 'Step 7 - Db', freq: 568.2 },
            { key: '9', name: 'Step 8 - D', freq: 589.4 },
            { key: '0', name: 'Step 9 - D#', freq: 611.3 },
            { key: 'q', name: 'Step 10 - Eb', freq: 634.1 },
            { key: 'w', name: 'Step 11 - E', freq: 657.7 },
            { key: 'e', name: 'Step 12 - E# / Fb', freq: 682.2 },
            { key: 'r', name: 'Step 13 - F', freq: 707.6 },
            { key: 't', name: 'Step 14 - F#', freq: 734.0 },
            { key: 'y', name: 'Step 15 - Gb', freq: 761.3 },
            { key: 'u', name: 'Step 16 - G', freq: 789.7 },
            { key: 'i', name: 'Step 17 - G#', freq: 819.1 },
            { key: 'o', name: 'Step 18 - Ab', freq: 849.6 },
            { key: 'p', name: 'Step 19 - A (Octave)', freq: 880.0 }
        ]
    },
    {
        id: 'edo24',
        label: '24 EDO (Quarter-Tone / Middle Eastern System)',
        data: [
            { key: '1', name: 'Step 0 - A', freq: 440.0 },
            { key: '2', name: 'Step 1 - A + 1/4', freq: 452.9 },
            { key: '3', name: 'Step 2 - A# / Bb', freq: 466.2 },
            { key: '4', name: 'Step 3 - Bb + 1/4', freq: 479.8 },
            { key: '5', name: 'Step 4 - B', freq: 493.9 },
            { key: '6', name: 'Step 5 - B + 1/4', freq: 508.4 },
            { key: '7', name: 'Step 6 - C', freq: 523.3 },
            { key: '8', name: 'Step 7 - C + 1/4', freq: 538.6 },
            { key: '9', name: 'Step 8 - C# / Db', freq: 554.4 },
            { key: '0', name: 'Step 9 - Db + 1/4', freq: 570.6 },
            { key: 'q', name: 'Step 10 - D', freq: 587.3 },
            { key: 'w', name: 'Step 11 - D + 1/4', freq: 604.5 },
            { key: 'e', name: 'Step 12 - D# / Eb', freq: 622.3 },
            { key: 'r', name: 'Step 13 - Eb + 1/4', freq: 640.5 },
            { key: 't', name: 'Step 14 - E', freq: 659.3 },
            { key: 'y', name: 'Step 15 - E + 1/4', freq: 678.6 },
            { key: 'u', name: 'Step 16 - F', freq: 698.5 },
            { key: 'i', name: 'Step 17 - F + 1/4', freq: 718.9 },
            { key: 'o', name: 'Step 18 - F# / Gb', freq: 740.0 },
            { key: 'p', name: 'Step 19 - Gb + 1/4', freq: 761.6 },
            { key: 'a', name: 'Step 20 - G', freq: 784.0 },
            { key: 's', name: 'Step 21 - G + 1/4', freq: 807.0 },
            { key: 'd', name: 'Step 22 - G# / Ab', freq: 830.6 },
            { key: 'f', name: 'Step 23 - Ab + 1/4', freq: 854.9 },
            { key: 'g', name: 'Step 24 - A (Octave)', freq: 880.0 }
        ]
    },
    {
        id: 'edo31',
        label: '31 EDO (Equal Division of Octave)',
        data: [
            { key: '1', name: 'Step 0 - A', freq: 440.0 },
            { key: '2', name: 'Step 1 - A# / Bb', freq: 449.9 },
            { key: '3', name: 'Step 2 - A# / Bb', freq: 460.1 },
            { key: '4', name: 'Step 3 - B# / C', freq: 470.5 },
            { key: '5', name: 'Step 4 - B', freq: 481.1 },
            { key: '6', name: 'Step 5 - B / Cb', freq: 491.9 },
            { key: '7', name: 'Step 6 - C', freq: 503.0 },
            { key: '8', name: 'Step 7 - C# / Db', freq: 514.4 },
            { key: '9', name: 'Step 8 - C# / Db', freq: 526.0 },
            { key: '0', name: 'Step 9 - C# / D', freq: 537.9 },
            { key: 'q', name: 'Step 10 - D (5/4)', freq: 550.0 },
            { key: 'w', name: 'Step 11 - D# / Eb', freq: 562.4 },
            { key: 'e', name: 'Step 12 - D# / Eb', freq: 575.1 },
            { key: 'r', name: 'Step 13 - E# / F', freq: 588.1 },
            { key: 't', name: 'Step 14 - E', freq: 601.4 },
            { key: 'y', name: 'Step 15 - E / Fb', freq: 615.0 },
            { key: 'u', name: 'Step 16 - F', freq: 628.9 },
            { key: 'i', name: 'Step 17 - F# / Gb', freq: 643.1 },
            { key: 'o', name: 'Step 18 - F# / Gb', freq: 657.6 },
            { key: 'p', name: 'Step 19 - G', freq: 672.5 },
            { key: 'a', name: 'Step 20 - G# / Ab', freq: 687.7 },
            { key: 's', name: 'Step 21 - G# / Ab', freq: 703.2 },
            { key: 'd', name: 'Step 22 - A', freq: 719.1 },
            { key: 'f', name: 'Step 23 - A# / Bb', freq: 735.3 },
            { key: 'g', name: 'Step 24 - A# / Bb', freq: 752.0 },
            { key: 'h', name: 'Step 25 - B', freq: 768.9 },
            { key: 'j', name: 'Step 26 - B / Cb', freq: 786.3 },
            { key: 'k', name: 'Step 27 - C', freq: 804.1 },
            { key: 'l', name: 'Step 28 - C# / Db', freq: 822.2 },
            { key: 'z', name: 'Step 29 - C# / Db', freq: 840.8 },
            { key: 'x', name: 'Step 30 - D', freq: 859.8 },
            { key: 'c', name: 'Step 31 - A (Octave)', freq: 880.0 }
        ]
    },
    {
        id: 'edo53',
        label: '53 EDO (Ultra-Precise / Turkish Makam System)',
        data: [
            { key: '1', name: 'Step 0 - A', freq: 440.0 },
            { key: '2', name: 'Step 1', freq: 445.8 },
            { key: '3', name: 'Step 2', freq: 451.7 },
            { key: '4', name: 'Step 3', freq: 457.6 },
            { key: '5', name: 'Step 4', freq: 463.6 },
            { key: '6', name: 'Step 5', freq: 469.7 },
            { key: '7', name: 'Step 6', freq: 475.9 },
            { key: '8', name: 'Step 7', freq: 482.1 },
            { key: '9', name: 'Step 8', freq: 488.5 },
            { key: '0', name: 'Step 9 - B (approx)', freq: 494.9 },
            { key: 'q', name: 'Step 10', freq: 501.4 },
            { key: 'w', name: 'Step 11', freq: 508.0 },
            { key: 'e', name: 'Step 12', freq: 514.6 },
            { key: 'r', name: 'Step 13', freq: 521.4 },
            { key: 't', name: 'Step 14 - C (approx)', freq: 528.2 },
            { key: 'y', name: 'Step 15', freq: 535.2 },
            { key: 'u', name: 'Step 16', freq: 542.2 },
            { key: 'i', name: 'Step 17', freq: 549.3 },
            { key: 'o', name: 'Step 18 - C# (5/4)', freq: 556.5 },
            { key: 'p', name: 'Step 19', freq: 563.8 },
            { key: 'a', name: 'Step 20', freq: 571.2 },
            { key: 's', name: 'Step 21', freq: 578.7 },
            { key: 'd', name: 'Step 22 - D (approx)', freq: 586.3 },
            { key: 'f', name: 'Step 23', freq: 594.0 },
            { key: 'g', name: 'Step 24', freq: 601.8 },
            { key: 'h', name: 'Step 25', freq: 609.7 },
            { key: 'j', name: 'Step 26', freq: 617.7 },
            { key: 'k', name: 'Step 27', freq: 625.8 },
            { key: 'l', name: 'Step 28', freq: 634.0 },
            { key: 'z', name: 'Step 29', freq: 642.3 },
            { key: 'x', name: 'Step 30', freq: 650.7 },
            { key: 'c', name: 'Step 31 - E (3/2 Quinta)', freq: 659.2 },
            { key: 'v', name: 'Step 32', freq: 667.9 },
            { key: 'b', name: 'Step 33', freq: 676.6 },
            { key: 'n', name: 'Step 34', freq: 685.5 },
            { key: 'm', name: 'Step 35', freq: 694.5 },
            { key: 'Q', name: 'Step 36 - F (approx)', freq: 703.6 },
            { key: 'W', name: 'Step 37', freq: 712.8 },
            { key: 'E', name: 'Step 38', freq: 722.1 },
            { key: 'R', name: 'Step 39', freq: 731.6 },
            { key: 'T', name: 'Step 40', freq: 741.2 },
            { key: 'Y', name: 'Step 41', freq: 750.9 },
            { key: 'U', name: 'Step 42', freq: 760.7 },
            { key: 'I', name: 'Step 43', freq: 770.7 },
            { key: 'O', name: 'Step 44 - G (approx)', freq: 780.8 },
            { key: 'P', name: 'Step 45', freq: 791.0 },
            { key: 'A', name: 'Step 46', freq: 801.4 },
            { key: 'S', name: 'Step 47', freq: 811.9 },
            { key: 'D', name: 'Step 48', freq: 822.5 },
            { key: 'F', name: 'Step 49', freq: 833.3 },
            { key: 'G', name: 'Step 50', freq: 844.2 },
            { key: 'H', name: 'Step 51', freq: 855.3 },
            { key: 'J', name: 'Step 52', freq: 866.5 },
            { key: 'K', name: 'Step 53 - A (Octave)', freq: 880.0 }
        ]
    }
];

// Stato corrente
let activePresetId = 'custom';
let soundMap = [...presetList.find(p => p.id === activePresetId).data];

// Variabili Sequencer
let isPlayingSequence = false;
let sequenceTimeouts = [];

// 2. AUDIO CONTEXT
let audioCtx = null;
const activeOscillators = {};

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function saveCustomState() {
    const customPreset = presetList.find(p => p.id === 'custom');
    if (customPreset) {
        customPreset.data = [...soundMap];
    }
    localStorage.setItem('myCustomSynth', JSON.stringify(soundMap));
}

function ensureCustomPreset() {
    if (activePresetId !== 'custom') {
        activePresetId = 'custom';
        renderSidebar();
    }
}

// 3. RENDERING SIDEBAR & SYNTH
function renderSidebar() {
    const container = document.getElementById('preset-list');
    container.innerHTML = '';

    presetList.forEach(p => {
        const btn = document.createElement('button');
        btn.className = `preset-btn ${p.id === activePresetId ? 'active' : ''}`;
        btn.innerText = p.label;
        btn.onclick = () => selectPreset(p.id);
        container.appendChild(btn);
    });

    document.getElementById('current-preset-title').innerText =
        `Preset: ${presetList.find(p => p.id === activePresetId).label}`;
}

function selectPreset(presetId) {
    stopRandomSequence();
    activePresetId = presetId;
    const target = presetList.find(p => p.id === presetId);
    soundMap = JSON.parse(JSON.stringify(target.data));
    renderSidebar();
    renderSynth();
}

let draggedIndex = null;

function renderSynth() {
    const container = document.getElementById('synth');
    container.innerHTML = '';

    soundMap.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'key-card';
        card.id = `key-${item.key.toLowerCase()}`;
        card.setAttribute('draggable', 'true');
        card.dataset.index = index;

        card.innerHTML = `
          <button class="btn-delete" onclick="removeKey(${index})">✕</button>
          <label style="font-size:0.7em; color:#888; pointer-events:none;">TASTO</label>
          <input type="text" class="key-shortcut" value="${item.key}" maxlength="1" onchange="updateItem(${index}, 'key', this.value)">
          
          <label style="font-size:0.7em; color:#888; pointer-events:none;">NOME</label>
          <input type="text" value="${item.name}" onchange="updateItem(${index}, 'name', this.value)">
          
          <label style="font-size:0.7em; color:#888; pointer-events:none;">FREQ (Hz)</label>
          <input type="number" value="${item.freq}" step="0.1" onchange="updateItem(${index}, 'freq', this.value)">
        `;

        // Eventi Drag & Drop
        card.addEventListener('dragstart', (e) => {
            draggedIndex = index;
            card.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        });

        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
            document.querySelectorAll('.key-card').forEach(c => c.classList.remove('drag-over'));
        });

        card.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            card.classList.add('drag-over');
        });

        card.addEventListener('dragleave', () => {
            card.classList.remove('drag-over');
        });

        card.addEventListener('drop', (e) => {
            e.preventDefault();
            card.classList.remove('drag-over');

            if (draggedIndex !== null && draggedIndex !== index) {
                ensureCustomPreset();
                const movedItem = soundMap.splice(draggedIndex, 1)[0];
                soundMap.splice(index, 0, movedItem);

                saveCustomState();
                renderSynth();
            }
        });

        container.appendChild(card);
    });
}

// 4. GESTIONE STATO
function addKey() {
    const keyInput = document.getElementById('newKey');
    const nameInput = document.getElementById('newName');
    const freqInput = document.getElementById('newFreq');

    if (!keyInput.value || !freqInput.value) {
        alert("Inserisci almeno il tasto e la frequenza!");
        return;
    }

    ensureCustomPreset();

    soundMap.push({
        key: keyInput.value.toLowerCase(),
        name: nameInput.value || 'Nota',
        freq: parseFloat(freqInput.value)
    });

    saveCustomState();
    renderSynth();

    keyInput.value = '';
    nameInput.value = '';
    freqInput.value = '';
}

function updateItem(index, property, value) {
    ensureCustomPreset();

    if (property === 'freq') value = parseFloat(value) || 0;
    if (property === 'key') value = value.toLowerCase();

    soundMap[index][property] = value;
    saveCustomState();
    renderSynth();
}

function removeKey(index) {
    ensureCustomPreset();
    soundMap.splice(index, 1);
    saveCustomState();
    renderSynth();
}

function resetDefaults() {
    if (confirm("Vuoi davvero ripristinare il preset Custom ai suoi valori di default?")) {
        soundMap = JSON.parse(JSON.stringify(defaultCustomMap));
        const customPreset = presetList.find(p => p.id === 'custom');
        if (customPreset) {
            customPreset.data = [...soundMap];
        }
        localStorage.setItem('myCustomSynth', JSON.stringify(soundMap));
        activePresetId = 'custom';
        renderSidebar();
        renderSynth();
    }
}

// 5. SEQUENCER RANDOM LOGIC
function toggleRandomSequence() {
    if (isPlayingSequence) {
        stopRandomSequence();
    } else {
        startRandomSequence();
    }
}

function startRandomSequence() {
    if (soundMap.length === 0) {
        alert("Aggiungi almeno una nota per riprodurre una sequenza!");
        return;
    }

    initAudio();
    isPlayingSequence = true;

    const playBtn = document.getElementById('btnPlaySeq');
    playBtn.innerText = '⏹ Ferma Sequenza';
    playBtn.className = 'btn-stop';

    const bpm = parseInt(document.getElementById('seqSpeed').value) || 240;
    const stepIntervalMs = (60 / bpm) * 1000;
    const noteDurationMs = stepIntervalMs * 0.8;

    // Legge il campo di testo per la sequenza custom
    const customSeqInput = document.getElementById('seq').value;
    const parsedCustomSeq = parseSequenceInput(customSeqInput);

    let playSequence = [];

    if (parsedCustomSeq) {
        // 1. Usa la sequenza definita dall'utente nella textbox
        playSequence = parsedCustomSeq;
    } else {
        // 2. Se vuota o non valida, genera la sequenza casuale
        const totalSteps = parseInt(document.getElementById('seqLength').value) || 16;
        for (let i = 0; i < totalSteps; i++) {
            const randIdx = Math.floor(Math.random() * soundMap.length);
            playSequence.push(randIdx);
        }
    }

    // Esegue la sequenza finale
    playSequence.forEach((itemIndex, step) => {
        const item = soundMap[itemIndex];
        const key = item.key.toLowerCase();
        const freq = item.freq;

        const startT = setTimeout(() => {
            playFrequency(key, freq);

            const stopT = setTimeout(() => {
                stopFrequency(key);
            }, noteDurationMs);

            sequenceTimeouts.push(stopT);
        }, step * stepIntervalMs);

        sequenceTimeouts.push(startT);
    });

    // Timer finale per resettare lo stato a fine riproduzione
    const totalDuration = playSequence.length * stepIntervalMs;
    const endT = setTimeout(() => {
        stopRandomSequence();
    }, totalDuration);
    sequenceTimeouts.push(endT);
}

function stopRandomSequence() {
    sequenceTimeouts.forEach(t => clearTimeout(t));
    sequenceTimeouts = [];

    Object.keys(activeOscillators).forEach(key => stopFrequency(key));

    isPlayingSequence = false;
    const playBtn = document.getElementById('btnPlaySeq');
    if (playBtn) {
        playBtn.innerText = '▶ Play Sequenza Random';
        playBtn.className = 'btn-play';
    }
}

function parseSequenceInput(inputStr) {
    if (!inputStr || !inputStr.trim()) return null;

    // Divide per trattino, virgola o spazio e filtra i valori non numerici
    const indices = inputStr
        .split(/[-,\s]+/)
        .map(val => parseInt(val.trim(), 10))
        .filter(num => !isNaN(num) && num >= 0 && num < soundMap.length);

    return indices.length > 0 ? indices : null;
}

// 6. MOTORE AUDIO
function playFrequency(key, freq) {
    initAudio();
    if (activeOscillators[key]) return;

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.03);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    activeOscillators[key] = { osc, gainNode };

    const keyEl = document.getElementById(`key-${key}`);
    if (keyEl) keyEl.classList.add('active');
}

function stopFrequency(key) {
    if (!activeOscillators[key]) return;

    const { osc, gainNode } = activeOscillators[key];
    gainNode.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

    setTimeout(() => {
        try {
            osc.stop();
            osc.disconnect();
        } catch (e) { }
        delete activeOscillators[key];
    }, 50);

    const keyEl = document.getElementById(`key-${key}`);
    if (keyEl) keyEl.classList.remove('active');
}

// 7. EVENT LISTENERS
window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    const key = e.key.toLowerCase();
    const match = soundMap.find(item => item.key.toLowerCase() === key);
    if (match) playFrequency(match.key.toLowerCase(), match.freq);
});

window.addEventListener('keyup', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    const key = e.key.toLowerCase();
    const match = soundMap.find(item => item.key.toLowerCase() === key);
    if (match) stopFrequency(match.key.toLowerCase());
});

// Avvio
renderSidebar();
renderSynth();