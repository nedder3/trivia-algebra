// ==========================================
// AUDIO SYNTHESIZER (Web Audio API - SFX ONLY)
// ==========================================
class SoundController {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem('psicokiller_muted') === 'true';
    this.heartbeatTimer = null;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContextClass();
    } catch (e) {
      console.warn('Web Audio API no soportada en este entorno.', e);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('psicokiller_muted', this.isMuted);
    
    if (this.isMuted) {
      this.stopHeartbeat();
    }
    return this.isMuted;
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Sonido de Radar / Pulso al aparecer la pregunta
  playRadarPulse() {
    if (this.isMuted || !this.ctx) return;
    this.resume();

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);

      osc.start(this.ctx.currentTime);
      osc.stop(this.ctx.currentTime + 0.35);
    } catch (e) {
      console.error(e);
    }
  }

  // Sonido de Acierto (Chime armónico ascendente)
  playSuccess() {
    if (this.isMuted || !this.ctx) return;
    this.resume();

    try {
      const notes = [523.25, 659.25, 783.99]; // Acorde C Mayor (C5, E5, G5)
      const now = this.ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0, now + idx * 0.05);
        gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.05 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.38);

        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.45);
      });
    } catch (e) {
      console.error(e);
    }
  }

  // Sonido de Derrota (Impacto sordo y descendente)
  playDefeat() {
    if (this.isMuted || !this.ctx) return;
    this.resume();

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.linearRampToValueAtTime(35, now + 0.75);

      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

      osc.start(now);
      osc.stop(now + 0.85);

      // Ruido sordo percutivo
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      const noiseGain = this.ctx.createGain();
      noise.buffer = buffer;
      noise.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);
      noiseGain.gain.setValueAtTime(0.18, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      noise.start(now);
      noise.stop(now + 0.4);
    } catch (e) {
      console.error(e);
    }
  }

  // Tensión Auditiva (Latido de Corazón / Heartbeat)
  startHeartbeat(bpm = 70) {
    this.stopHeartbeat();
    if (this.isMuted || !this.ctx) return;
    this.resume();

    const interval = 60000 / bpm;

    const triggerBeat = () => {
      if (this.isMuted || !this.ctx) return;
      const now = this.ctx.currentTime;

      const playThud = (time, intensity) => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.type = 'sine';
          osc.frequency.setValueAtTime(65, time);
          osc.frequency.exponentialRampToValueAtTime(30, time + 0.15);

          gain.gain.setValueAtTime(intensity, time);
          gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);

          osc.start(time);
          osc.stop(time + 0.2);
        } catch (e) {
          // ignore
        }
      };

      playThud(now, 0.22);
      playThud(now + 0.15, 0.15);
    };

    triggerBeat();
    this.heartbeatTimer = setInterval(triggerBeat, interval);
  }

  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }
}

const audio = new SoundController();

// ==========================================
// CITAS FILOSÓFICAS Y LÓGICAS DE DERROTA
// ==========================================
const defeatQuotes = [
  { text: "En la lógica no hay lugar para la compasión, solo para la necesidad deductiva.", author: "Ludwig Wittgenstein" },
  { text: "Un error en la primera premisa invalida irremediablemente todo el razonamiento.", author: "Aristóteles" },
  { text: "El que no comprende la consecuencia lógica está condenado a cometer falacias formales.", author: "George Boole" },
  { text: "Hasta los sistemas más sofisticados se derrumban ante una contradicción no resuelta.", author: "Kurt Gödel" },
  { text: "Quien confunde la condición suficiente con la necesaria tropieza en cada deducción.", author: "Bertrand Russell" },
  { text: "La reducción al absurdo exige rigor absoluto: una sola asignación errónea anula la prueba.", author: "Cátedra de Álgebra y Lógica" },
  { text: "En computación y en lógica, un fallo binario es suficiente para detener toda la ejecución.", author: "Alan Turing" }
];

// ==========================================
// LÓGICA Y ESTADO DEL JUEGO
// ==========================================
const GAME_TOTAL_QUESTIONS = 50;
let currentQuestions = [];
let currentIdx = 0;
let streak = 0;
let isAnsweringBlocked = false;

// Elementos del DOM
const welcomeScreen = document.getElementById('welcome-screen');
const triviaScreen = document.getElementById('trivia-screen');
const downedScreen = document.getElementById('downed-screen');
const victoryScreen = document.getElementById('victory-screen');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const soundToggleBtn = document.getElementById('sound-toggle');
const bloodOverlay = document.getElementById('blood-overlay');

const qConcept = document.getElementById('q-concept');
const qText = document.getElementById('q-text');
const optionsContainer = document.getElementById('options-container');
const currentQNum = document.getElementById('current-q-num');
const currentStreak = document.getElementById('current-streak');
const progressBar = document.getElementById('progress-bar');

const failedAtVal = document.getElementById('failed-at');
const failedConceptVal = document.getElementById('failed-concept');
const defeatQuoteText = document.getElementById('defeat-quote');
const defeatQuoteAuthor = document.getElementById('defeat-quote-author');

// Sincronizar UI del botón de sonido
function updateSoundButtonUI() {
  const onIcon = document.getElementById('sound-icon-on');
  const offIcon = document.getElementById('sound-icon-off');

  if (audio.isMuted) {
    onIcon.style.display = 'none';
    offIcon.style.display = 'block';
    soundToggleBtn.classList.add('muted');
  } else {
    onIcon.style.display = 'block';
    offIcon.style.display = 'none';
    soundToggleBtn.classList.remove('muted');
  }
}

// Transición de Pantalla
function showScreen(screen) {
  [welcomeScreen, triviaScreen, downedScreen, victoryScreen].forEach(s => {
    s.classList.remove('active');
  });
  screen.classList.add('active');
}

// Mezclador Fisher-Yates
function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Inicializar Juego
function initGame() {
  audio.init();
  streak = 0;
  currentIdx = 0;
  isAnsweringBlocked = false;

  // Mezclar banco de preguntas y seleccionar 50
  const source = window.questionsData || [];
  const shuffledDb = shuffle(source);
  currentQuestions = shuffledDb.slice(0, Math.min(GAME_TOTAL_QUESTIONS, shuffledDb.length));

  showScreen(triviaScreen);
  loadQuestion();
}

// Cargar Pregunta
function loadQuestion() {
  if (currentIdx >= currentQuestions.length) {
    // Victoria total
    audio.stopHeartbeat();
    showScreen(victoryScreen);
    return;
  }

  isAnsweringBlocked = false;
  const currentQ = currentQuestions[currentIdx];

  // Actualizar HUD
  currentQNum.textContent = (currentIdx + 1).toString();
  currentStreak.textContent = streak.toString();

  const progressPercent = (currentIdx / GAME_TOTAL_QUESTIONS) * 100;
  progressBar.style.width = `${progressPercent}%`;
  progressBar.parentElement.setAttribute('aria-valuenow', Math.round(progressPercent));

  // Tensión Auditiva con Heartbeat escalonado
  if (currentIdx >= 40) {
    audio.startHeartbeat(130);
  } else if (currentIdx >= 25) {
    audio.startHeartbeat(100);
  } else if (currentIdx >= 10) {
    audio.startHeartbeat(75);
  } else {
    audio.stopHeartbeat();
  }

  // Sonido de radar
  audio.playRadarPulse();

  // Cargar concepto y enunciado
  if (qConcept) qConcept.textContent = currentQ.concept || 'Álgebra y Lógica';
  qText.textContent = currentQ.question;

  // Cargar opciones
  optionsContainer.innerHTML = '';
  const optionLetters = ['A', 'B', 'C'];

  currentQ.options.forEach((optText, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.type = 'button';
    button.innerHTML = `
      <span class="option-badge">${optionLetters[index]}</span>
      <span class="option-text">${optText}</span>
    `;

    button.addEventListener('click', () => handleOptionSelection(index, button));
    optionsContainer.appendChild(button);
  });
}

// Manejar Selección de Opción
function handleOptionSelection(selectedIndex, clickedBtn) {
  if (isAnsweringBlocked) return;
  isAnsweringBlocked = true;

  const currentQ = currentQuestions[currentIdx];
  const buttons = optionsContainer.querySelectorAll('.option-btn');

  // Bloquear interacción
  buttons.forEach(btn => btn.disabled = true);

  if (selectedIndex === currentQ.answer) {
    // --- RESPUESTA CORRECTA ---
    streak++;
    audio.playSuccess();
    clickedBtn.classList.add('correct');

    setTimeout(() => {
      currentIdx++;
      loadQuestion();
    }, 1100);

  } else {
    // --- PERMADEATH (DERROTA INMEDIATA) ---
    audio.stopHeartbeat();
    audio.playDefeat();

    clickedBtn.classList.add('wrong');
    if (buttons[currentQ.answer]) {
      buttons[currentQ.answer].classList.add('correct');
    }

    // Efectos visuales de impacto
    document.getElementById('app').classList.add('screen-shake', 'screen-red-flash');
    bloodOverlay.classList.add('active');

    failedAtVal.textContent = (currentIdx + 1).toString();
    failedConceptVal.textContent = currentQ.concept;

    const failedQuestionText = document.getElementById('failed-question-text');
    const failedCorrectAnswer = document.getElementById('failed-correct-answer');
    if (failedQuestionText) failedQuestionText.textContent = currentQ.question;
    if (failedCorrectAnswer) failedCorrectAnswer.textContent = currentQ.options[currentQ.answer];

    const randomQuote = defeatQuotes[Math.floor(Math.random() * defeatQuotes.length)];
    defeatQuoteText.textContent = `"${randomQuote.text}"`;
    defeatQuoteAuthor.textContent = randomQuote.author;

    setTimeout(() => {
      document.getElementById('app').classList.remove('screen-shake', 'screen-red-flash');
      bloodOverlay.classList.remove('active');
      showScreen(downedScreen);
    }, 1700);
  }
}

// ==========================================
// EVENT LISTENERS Y TECLADO
// ==========================================

startBtn.addEventListener('click', () => {
  audio.init();
  initGame();
});

restartBtn.addEventListener('click', () => {
  audio.init();
  initGame();
});

playAgainBtn.addEventListener('click', () => {
  audio.init();
  initGame();
});

soundToggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  audio.init();
  const isMuted = audio.toggleMute();
  updateSoundButtonUI();

  if (!isMuted && triviaScreen.classList.contains('active')) {
    if (currentIdx >= 40) audio.startHeartbeat(130);
    else if (currentIdx >= 25) audio.startHeartbeat(100);
    else if (currentIdx >= 10) audio.startHeartbeat(75);
  }
});

// Soporte de navegación por teclado (1/A, 2/B, 3/C, Enter)
window.addEventListener('keydown', (e) => {
  if (triviaScreen.classList.contains('active') && !isAnsweringBlocked) {
    const key = e.key.toLowerCase();
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    if (buttons.length >= 3) {
      if (key === '1' || key === 'a') buttons[0].click();
      else if (key === '2' || key === 'b') buttons[1].click();
      else if (key === '3' || key === 'c') buttons[2].click();
    }
  } else if (welcomeScreen.classList.contains('active') && (e.key === 'Enter' || e.key === ' ')) {
    startBtn.click();
  } else if (downedScreen.classList.contains('active') && (e.key === 'Enter' || e.key === ' ')) {
    restartBtn.click();
  } else if (victoryScreen.classList.contains('active') && (e.key === 'Enter' || e.key === ' ')) {
    playAgainBtn.click();
  }
});

// Inicializar audio al primer click general del usuario
window.addEventListener('click', () => {
  audio.init();
}, { once: true });

// Sincronizar UI de sonido al cargar
updateSoundButtonUI();
