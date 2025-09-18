// script.js — auto-scroll al iniciar + orden numérico de temas + parser robusto + aleatorio + persistencia falladas
(() => {
  // Estado
  let questions = [];
  let allQuestions = [];
  let temasPorPregunta = {};
  let selectedThemes = [];
  let statsByTopic = {};
  let previousFailedQuestions = [];
  let currentFailedQuestions = [];
  let currentQuestionIndex = 0;
  let answeredQuestions = 0;
  let score = 0;
  let correctAnswersCount = 0;
  let incorrectAnswersCount = 0;
  let startTime = null;
  let timerInterval = null;

  // Persistencia del listado de falladas del intento anterior durante el "reinicio con falladas"
  let isRetryRun = false;
  let retryRunInitialList = [];

  // Utilidades
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));
  const norm = s => (s||'').replace(/\r/g,'').replace(/[\u2012\u2013\u2014\u2212]/g,'-');
  const numFromTema = t => {
    const m = String(t||'').match(/tema\s+(\d+)/i);
    return m ? parseInt(m[1],10) : Number.POSITIVE_INFINITY;
  };

  function logStatus(msg, isError=false){
    const el = $('#loadStatus');
    if(!el) return;
    el.textContent = msg;
    el.style.color = isError ? 'crimson' : '#64748b';
  }

  function shuffleInPlace(arr){
    for(let i=arr.length-1; i>0; i--){
      const j = Math.floor(Math.random()*(i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function scrollToQuiz(){
    const qc = document.getElementById('quizContainer');
    if (qc) qc.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Listeners base
  document.addEventListener('DOMContentLoaded', () => {
    const input = $('#fileInput') || document.querySelector('input[type="file"]');
    if (input) input.addEventListener('change', onFileSelected, { once:false });
    $('#applyThemesBtn')?.addEventListener('click', applyThemeSelection);
    $('#clearThemesBtn')?.addEventListener('click', () => {
      const sel = $('#themeDropdown');
      if(!sel) return;
      Array.from(sel.options).forEach(o => o.selected = false);
      selectedThemes = [];
      updateSelectedThemesList();
      isRetryRun = false; retryRunInitialList = [];
    });
    $('#selectAllThemes')?.addEventListener('change', e => toggleSelectAllThemes(e.target.checked));
    $('#applyNumbersBtn')?.addEventListener('click', applyNumberSelection);
    $('#clearNumbersBtn')?.addEventListener('click', () => { $('#numbersInput').value=''; isRetryRun=false; retryRunInitialList=[]; });
    $('#nextButton')?.addEventListener('click', showNextQuestion);
    $('#skipButton')?.addEventListener('click', skipQuestion);
    $('#statsButton')?.addEventListener('click', showStats);
    $('#closeStatsBtn')?.addEventListener('click', closeStats);
  });

  // Carga de archivo
  function onFileSelected(e){
    const file = e.target.files?.[0];
    if(!file){ logStatus('No se seleccionó archivo.'); return; }
    logStatus(`Leyendo "${file.name}"...`);
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const content = ev.target.result;
        const ok = parseAll(content);
        if (!ok){
          alert('No se detectaron preguntas. Revisa el TXT.');
          logStatus('No se detectaron preguntas en el archivo.', true);
          return;
        }
        allQuestions = [...questions];
        populateThemeDropdown();
        $('#themeSelector').style.display = 'block';
        $('#numberSelector').style.display = 'block';
        $('#quizContainer').style.display = 'block';
        $('#stats').style.display = 'block';
        $('#failedPanel').style.display = 'block';
        updateStats();
        startTimer();
        createFailedQuestionsDisplay();
        logStatus(`Cargado: ${questions.length} preguntas.`);
      } catch(err){
        console.error(err);
        logStatus('Error procesando el archivo.', true);
        alert('Error procesando el archivo. Revisa la consola (F12).');
      }
    };
    reader.onerror = () => {
      logStatus('No se pudo leer el archivo.', true);
      alert('No se pudo leer el archivo.');
    };
    reader.readAsText(file);
  }

  function parseAll(content){
    parseTemario(content);
    parseQuestions(content);
    return questions.length > 0;
  }

  // ---- Parser Temario
  function parseTemario(content){
    temasPorPregunta = {};
    const lines = norm(content).split('\n');
    let currentBloque = '';
    let temaPend = null;
    const temaLinea = /^\s*TEMA\s+(\d+)\.?\s*(.*)$/i;
    const preguntasLinea = /^\s*PREGUNTAS?\s*:?\s*(\d+)\s*[-–—]\s*(\d+)\s*$/i;
    const bloqueLinea = /^\s*BLOQUE\s+\d+.*$/i;

    for (let i=0;i<lines.length;i++){
      const line = lines[i].trim();
      if (!line) continue;
      if (bloqueLinea.test(line)){ currentBloque = line; continue; }
      const mTema = line.match(temaLinea);
      if (mTema){
        temaPend = { n: parseInt(mTema[1],10), titulo: (mTema[2]||'').trim() };
        const same = line.match(/PREGUNTAS?\s*:?\s*(\d+)\s*[-–—]\s*(\d+)/i);
        if (same){
          const a = parseInt(same[1],10), b = parseInt(same[2],10);
          for (let q=a;q<=b;q++){ temasPorPregunta[q] = { bloque: currentBloque, tema: `Tema ${temaPend.n}. ${temaPend.titulo}`.trim() }; }
          temaPend = null;
        }
        continue;
      }
      const mPreg = line.match(preguntasLinea);
      if (mPreg && temaPend){
        const a = parseInt(mPreg[1],10), b = parseInt(mPreg[2],10);
        for (let q=a;q<=b;q++){ temasPorPregunta[q] = { bloque: currentBloque, tema: `Tema ${temaPend.n}. ${temaPend.titulo}`.trim() }; }
        temaPend = null;
      }
    }
  }

  // ---- Parser Preguntas
  function parseQuestions(content){
    questions = [];
    const lines = content.split('\n');
    const idxAnswers = lines.findIndex(l => /RESPUESTAS\s+CORRECTAS\s*:?\s*$/i.test(norm(l)));
    const partQ = idxAnswers >= 0 ? lines.slice(0, idxAnswers) : lines;
    const partA = idxAnswers >= 0 ? lines.slice(idxAnswers+1) : [];

    let cur = null;
    const startRegexes = [
      /^\s*PREGUNTA\s*N[ºo°]\s*(\d+)\s*[.\-–—]?\s*(.*)$/i,
      /^\s*(\d+)\s*[.\-–—]\s*(.*)$/
    ];
    const optRegex = /^\s*([a-dA-D])\)\s*(.*)$/;

    for (let i=0;i<partQ.length;i++){
      const raw = partQ[i].replace('\r','');
      const t = raw.trim();

      let m = null;
      for (const r of startRegexes){
        m = t.match(r);
        if (m) break;
      }
      if (m){
        if (cur) questions.push(cur);
        cur = {
          number: parseInt(m[1],10),
          text: (m[2]||'').trim(),
          options: [], correctAnswer:'', answered:false, selectedAnswer:null
        };
        continue;
      }

      const mo = t.match(optRegex);
      if (mo && cur){
        cur.options.push(`${mo[1].toLowerCase()}) ${mo[2]}`.trim());
        continue;
      }

      if (cur && t) cur.text += (cur.text ? ' ' : '') + t;
    }
    if (cur) questions.push(cur);

    const answers = {};
    for (let i=0;i<partA.length;i++){
      const line = norm(partA[i]).trim();
      if (!line) continue;
      let m = line.match(/^(\d+)\s*(?:[-:])?\s*([a-dA-D])\b/);
      if (m){
        answers[parseInt(m[1],10)] = m[2].toLowerCase();
      } else {
        const only = line.match(/^(\d+)\b$/);
        if (only) answers[parseInt(only[1],10)] = '';
      }
    }
    questions.forEach(q => { if (q.number in answers) q.correctAnswer = (answers[q.number]||'').toLowerCase(); });
  }

  // --- UI helpers
  function populateThemeDropdown(){
    const dd = $('#themeDropdown');
    dd.innerHTML = '';
    const temas = new Map();
    Object.entries(temasPorPregunta).forEach(([num, info]) => {
      if (!info?.tema) return;
      temas.set(info.tema, true);
    });
    const sorted = [...temas.keys()].sort((a,b) => numFromTema(a) - numFromTema(b) || String(a).localeCompare(String(b)));
    sorted.forEach(tema => {
      const opt = document.createElement('option');
      opt.value = tema; opt.textContent = tema;
      dd.appendChild(opt);
    });
  }
  function toggleSelectAllThemes(all){
    const dd = $('#themeDropdown');
    const opts = Array.from(dd.options);
    // ordenar por número de tema
    const sorted = opts.sort((a,b) => numFromTema(a.value) - numFromTema(b.value) || a.value.localeCompare(b.value));
    // aplicar selección respetando el orden
    sorted.forEach(o => o.selected = all);
    selectedThemes = all ? sorted.map(o => o.value) : [];
    updateSelectedThemesList(); // mostrará orden creciente
  }
  function updateSelectedThemesList(){
    const ul = $('#selectedThemesList');
    ul.innerHTML = '';
    const sorted = selectedThemes.slice().sort((a,b) => numFromTema(a) - numFromTema(b) || String(a).localeCompare(String(b)));
    sorted.forEach(t => {
      const li = document.createElement('li');
      li.textContent = t; ul.appendChild(li);
    });
  }

  // Aleatorización: barajar preguntas seleccionadas (no opciones)
  function applyThemeSelection(){
    isRetryRun = false; retryRunInitialList = [];
    const dd = $('#themeDropdown');
    selectedThemes = Array.from(dd.selectedOptions).map(o=>o.value);
    updateSelectedThemesList();
    if (!selectedThemes.length){ alert('Selecciona al menos un tema.'); return; }
    questions = allQuestions.filter(q => selectedThemes.includes(temasPorPregunta[q.number]?.tema));
    if (!questions.length){ alert('No hay preguntas para los temas elegidos.'); return; }
    shuffleInPlace(questions);
    currentQuestionIndex = 0;
    resetQuizState();
    showQuestion();
    scrollToQuiz(); // auto-scroll al iniciar
  }

  function applyNumberSelection(){
    isRetryRun = false; retryRunInitialList = [];
    const raw = $('#numbersInput').value.trim();
    if (!raw){ alert('Introduce números de pregunta.'); return; }
    const nums = raw.split(',').map(s=>parseInt(s.trim(),10)).filter(n=>!isNaN(n));
    questions = allQuestions.filter(q => nums.includes(q.number));
    if (!questions.length){ alert('No hay coincidencias para esos números.'); return; }
    shuffleInPlace(questions);
    currentQuestionIndex = 0;
    resetQuizState();
    showQuestion();
    scrollToQuiz(); // auto-scroll al iniciar
  }

  function resetQuizState(){
    answeredQuestions = 0; score = 0;
    correctAnswersCount = 0; incorrectAnswersCount = 0;
    statsByTopic = {}; currentFailedQuestions = [];
    updateStats();
  }

  function showQuestion(){
    if (currentQuestionIndex >= questions.length){ showFinalResult(); return; }
    const q = questions[currentQuestionIndex];
    $('#questionNumber').textContent = `Pregunta Nº ${q.number}`;
    const meta = temasPorPregunta[q.number] || { bloque:'', tema:'Sin tema' };
    $('#questionMeta').innerHTML = `<strong>${meta.bloque||''}</strong> · <em>${meta.tema||''}</em>`;
    $('#questionText').textContent = q.text;
    const cont = $('#answerOptions'); cont.innerHTML = '';
    // Orden alfabético fijo a), b), c), d)
    q.optionOrder = q.options.map((_,i)=>i); // sin barajar opciones
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.addEventListener('click', () => selectAnswer(idx));
      cont.appendChild(btn);
    });
    $('#feedback').textContent = '';
    $('#nextButton').style.display = 'none';
  }

  function selectAnswer(visibleIdx){
    const q = questions[currentQuestionIndex];
    const origIdx = q.optionOrder?.[visibleIdx] ?? visibleIdx;
    const selected = String.fromCharCode(97 + origIdx);
    const isCorrect = String(selected).toLowerCase() === String(q.correctAnswer||'').toLowerCase();
    q.selectedAnswer = selected;

    if (!q.correctAnswer){
      $('#feedback').textContent = 'Sin respuesta oficial en el TXT. No computa.';
    } else {
      $('#feedback').textContent = isCorrect ? '¡Correcto!' : `Incorrecto. La correcta era ${q.correctAnswer.toUpperCase()}.`;
    }

    answeredQuestions++;
    if (isCorrect) { correctAnswersCount++; score += 1; }
    else { incorrectAnswersCount++; score -= 0.33; if (!currentFailedQuestions.some(p=>p.number===q.number)) currentFailedQuestions.push(q); previousFailedQuestions = [...currentFailedQuestions]; }
    updateFailedQuestionsDisplay();
    updateStats();

    const cont = $('#answerOptions');
    const btns = cont.querySelectorAll('button');
    const correctIdx = q.optionOrder.findIndex(i => String.fromCharCode(97+i) === String(q.correctAnswer).toLowerCase());
    btns.forEach((b,i)=>{
      if (i === visibleIdx) b.classList.add(isCorrect ? 'correct':'incorrect');
      if (i === correctIdx) b.classList.add('correct');
      b.disabled = true;
    });
    $('#nextButton').style.display = 'inline-block';
  }

  function skipQuestion(){
    $('#feedback').textContent = 'Pregunta saltada. No suma ni resta.';
    answeredQuestions++; updateStats();
    $('#answerOptions').querySelectorAll('button').forEach(b=>b.disabled=true);
    $('#nextButton').style.display = 'inline-block';
  }

  function showNextQuestion(){ currentQuestionIndex++; showQuestion(); }

  function updateStats(){
    $('#totalQuestions').textContent = questions.length;
    $('#answeredCount').textContent = answeredQuestions;
    $('#remainingCount').textContent = Math.max(0, questions.length-answeredQuestions);
    $('#correctCount').textContent = correctAnswersCount;
    $('#incorrectCount').textContent = incorrectAnswersCount;
    $('#score').textContent = score.toFixed(2);
  }

  function showStats(){
    const tbody = $('#statsTable tbody'); tbody.innerHTML='';
    const map = {};
    questions.forEach(q => {
      const tema = (temasPorPregunta[q.number]?.tema) || 'Sin tema';
      map[tema] = map[tema] || { total:0, correct:0, incorrect:0 };
      map[tema].total++;
      if (q.selectedAnswer){
        if (String(q.selectedAnswer).toLowerCase() === String(q.correctAnswer||'').toLowerCase()) map[tema].correct++;
        else map[tema].incorrect++;
      }
    });
    Object.entries(map).forEach(([tema, st]) => {
      const tr = document.createElement('tr');
      const pct = st.total ? Math.round((st.correct/st.total)*100) : 0;
      tr.innerHTML = `<td>${tema}</td><td>${st.total}</td><td>${st.correct}</td><td>${st.incorrect}</td><td>${pct}%</td>`;
      tbody.appendChild(tr);
    });
    $('#statsModal').style.display = 'flex';
  }
  function closeStats(){ $('#statsModal').style.display = 'none'; }

  function createFailedQuestionsDisplay(){
    const panel = $('#failedPanel'); panel.style.display='block';
    updateFailedQuestionsDisplay();
  }
  function updateFailedQuestionsDisplay(){
    const cont = $('#failedQuestionsDisplay');
    if (!cont) return;
    // elegir lista a mostrar: si estamos en retry, mostrar SIEMPRE el snapshot inicial
    let numbers = [];
    if (isRetryRun && retryRunInitialList.length){
      numbers = retryRunInitialList.slice();
    } else if (Array.isArray(previousFailedQuestions) && previousFailedQuestions.length){
      numbers = previousFailedQuestions.map(q => q.number);
    }
    numbers = numbers.filter(n => typeof n === 'number' && !Number.isNaN(n)).sort((a,b)=>a-b);
    cont.innerHTML = numbers.length
      ? `<div id="failedQuestionsText"><strong>Preguntas falladas en el intento anterior:</strong><br>${numbers.join(', ')}</div>
         <div style="margin-top:8px;"><button id="restartFailedBtn">Reiniciar SOLO con estas</button></div>`
      : `No hay preguntas falladas en intentos anteriores.`;
    document.getElementById('restartFailedBtn')?.addEventListener('click', () => {
      // Fijar snapshot y activar retry
      if (Array.isArray(previousFailedQuestions) && previousFailedQuestions.length){
        retryRunInitialList = previousFailedQuestions.map(q=>q.number).filter(n=>typeof n==='number'&&!Number.isNaN(n)).sort((a,b)=>a-b);
      } else {
        retryRunInitialList = [];
      }
      isRetryRun = true;
      // Reiniciar cuestionario SOLO con esas falladas, aleatorias
      questions = previousFailedQuestions.slice();
      shuffleInPlace(questions);
      currentQuestionIndex = 0;
      resetQuizState();
      showQuestion();
      updateFailedQuestionsDisplay(); // mantener texto visible con snapshot
      scrollToQuiz(); // auto-scroll al iniciar
    });
  }

  // Timer
  function startTimer(){
    startTime = Date.now();
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      const diff = Date.now()-startTime;
      const h = Math.floor(diff/3600000);
      const m = Math.floor((diff%3600000)/60000);
      const s = Math.floor((diff%60000)/1000);
      $('#timer').textContent = `Tiempo transcurrido: ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }, 1000);
  }

})();