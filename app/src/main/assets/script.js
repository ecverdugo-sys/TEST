let questions = [];
let currentQuestionIndex = 0;
let answeredQuestions = 0;
let score = 0;
let correctAnswersCount = 0;
let incorrectAnswersCount = 0;
let temasPorPregunta = {};
let statsByTopic = {};
let selectedThemes = [];
let startTime = null;
let timerInterval = null;
let allQuestions = [];
let previousFailedQuestions = [];
let currentFailedQuestions = [];
let failedQuestionsDisplay = null;

document.getElementById('fileInput').addEventListener('change', handleFileUpload);
document.getElementById('nextButton').addEventListener('click', showNextQuestion);

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        parseTemario(content);
        parseQuestions(content);
        allQuestions = [...questions];
        populateThemeDropdown();
        document.getElementById('quizContainer').style.display = 'block';
        updateStats();
        startTimer();
        createFailedQuestionsDisplay();
    };
    reader.readAsText(file);
}

function createFailedQuestionsDisplay() {
    failedQuestionsDisplay = document.createElement('div');
    failedQuestionsDisplay.id = 'failedQuestionsDisplay';
    failedQuestionsDisplay.style.marginBottom = '20px';
    document.getElementById('quizContainer').prepend(failedQuestionsDisplay);
    updateFailedQuestionsDisplay();
}

function updateFailedQuestionsDisplay() {
    if (!failedQuestionsDisplay) return;

    if (previousFailedQuestions.length > 0) {
        const failedNumbers = previousFailedQuestions.map(q => q.number).sort((a, b) => a - b);
        let numbersText = failedNumbers.join(', ');
        
        failedQuestionsDisplay.innerHTML = `
            <div id="failedQuestionsText">
                <strong>Preguntas falladas en el intento anterior:</strong><br>
                ${numbersText}
            </div>
        `;
    } else {
        failedQuestionsDisplay.innerHTML = `
            <div id="failedQuestionsText">
                No hay preguntas falladas en intentos anteriores.
            </div>
        `;
    }
}

function parseTemario(content) {
    const temarioSection = content.split('TEMARIO')[1]?.split('PREGUNTAS:')[0];
    if (!temarioSection) return;

    const lines = temarioSection.split('\n');
    let currentBloque = '';
    let currentTema = '';

    for (let line of lines) {
        if (line.startsWith('Bloque')) {
            currentBloque = line.trim();
        } else if (line.startsWith('Tema')) {
            currentTema = line.trim();
        } else if (line.startsWith('Preguntas')) {
            const [start, end] = line.split('Preguntas')[1].trim().split('-').map(Number);
            for (let i = start; i <= end; i++) {
                temasPorPregunta[i] = { bloque: currentBloque, tema: currentTema };
            }
        }
    }
}

function parseQuestions(content) {
    questions = [];
    const lines = content.split('\n');
    let currentQuestion = null;
    const answerPattern = /RESPUESTAS\s+CORRECTAS\s*:/i;

    for (let line of lines) {
        if (line.startsWith('PREGUNTA Nº')) {
            if (currentQuestion) {
                questions.push(currentQuestion);
            }
            currentQuestion = {
                number: parseInt(line.split('Nº')[1]),
                text: line.trim(),
                options: [],
                correctAnswer: '',
                answered: false,
                selectedAnswer: null
            };
        } else if (line.trim().match(/^[a-d]\)/)) {
            currentQuestion?.options.push(line.trim());
        } else if (answerPattern.test(line)) {
            break;
        }
    }

    if (currentQuestion) {
        questions.push(currentQuestion);
    }

    const answerSection = content.split(answerPattern)[1];
    if (!answerSection) return;

    const answerLines = answerSection.replace(/\r/g,'').split('\n');
    for (let answerLine of answerLines) {
        const line = answerLine.trim().replace(/[\u2012\u2013\u2014\u2212]/g, '-');
        const m = line.match(/^(\d+)\s*[-:]*\s*([a-dA-D])/);
        if (!m) continue;
        const number = parseInt(m[1]);
        const answer = m[2].toLowerCase();
        const question = questions.find(q => q.number === number);
        if (question) {
            question.correctAnswer = answer;
        }
    }
}

function populateThemeDropdown() {
    const themeDropdown = document.getElementById('themeDropdown');
    themeDropdown.innerHTML = '';
    const uniqueThemes = [...new Set(Object.values(temasPorPregunta).map(t => t.tema))];
    
    uniqueThemes.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme;
        option.textContent = theme;
        themeDropdown.appendChild(option);
    });
}

function applyThemeSelection() {
    const themeDropdown = document.getElementById('themeDropdown');
    selectedThemes = Array.from(themeDropdown.selectedOptions).map(option => option.value);
    updateSelectedThemesList();

    if (selectedThemes.length === 0) {
        alert("Por favor, selecciona al menos un tema.");
        return;
    }

    questions = [...allQuestions];
    filterQuestionsByTheme();
    shuffleQuestions();
    currentQuestionIndex = 0;
    resetQuizState();
    showQuestion();
}

function applyNumberSelection() {
    const numbersInput = document.getElementById('numbersInput').value.trim();
    if (!numbersInput) {
        alert("Por favor, introduce números de preguntas.");
        return;
    }

    const numbersArray = numbersInput.split(',')
        .map(num => num.trim())
        .filter(num => num !== '')
        .map(num => parseInt(num))
        .filter(num => !isNaN(num));

    if (numbersArray.length === 0) {
        alert("No se encontraron números válidos.");
        return;
    }

    questions = [...allQuestions];
    questions = questions.filter(q => numbersArray.includes(q.number));
    
    if (questions.length === 0) {
        alert("No se encontraron preguntas con los números especificados.");
        return;
    }
    
    currentQuestionIndex = 0;
    resetQuizState();
    showQuestion();
}

function updateSelectedThemesList() {
    const selectedThemesList = document.getElementById('selectedThemesList');
    selectedThemesList.innerHTML = '';
    selectedThemes.forEach(theme => {
        const li = document.createElement('li');
        li.textContent = theme;
        selectedThemesList.appendChild(li);
    });
}

function filterQuestionsByTheme() {
    if (selectedThemes.length > 0) {
        questions = questions.filter(q => selectedThemes.includes(temasPorPregunta[q.number]?.tema));
    } else {
        questions = [];
    }
}

function resetQuizState() {
    answeredQuestions = 0;
    score = 0;
    correctAnswersCount = 0;
    incorrectAnswersCount = 0;
    statsByTopic = {};
    currentFailedQuestions = [];
    updateStats();
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('resultMessage')?.remove();
    document.querySelector('button[onclick="restartFailedQuestions"]')?.remove();
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showFinalResult();
        return;
    }

    const question = questions[currentQuestionIndex];
    const temaInfo = temasPorPregunta[question.number] || { bloque: '', tema: '' };

    document.getElementById('questionNumber').textContent = `Pregunta Nº ${question.number}`;
    document.getElementById('questionText').innerHTML = `
        <strong>${temaInfo.bloque}</strong><br>
        <strong>${temaInfo.tema}</strong><br>
        <hr>
        ${question.text}
    `;

    const answerOptionsContainer = document.getElementById('answerOptions');
    answerOptionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        button.disabled = question.answered;
        answerOptionsContainer.appendChild(button);
    });

    document.getElementById('feedback').textContent = '';
    document.getElementById('nextButton').style.display = 'none';
}

function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    if (question.answered) return;

    const selectedAnswer = String.fromCharCode(97 + index);
    question.selectedAnswer = selectedAnswer;

    // Parche mínimo: si no hay respuesta correcta en el TXT, no computa ni penaliza
    if (!question.correctAnswer || !/^[a-d]$/.test(question.correctAnswer)) {
        const feedback = document.getElementById('feedback');
        feedback.textContent = 'No consta la respuesta correcta en el archivo. Esta pregunta no computa.';
        feedback.style.color = 'orange';
        question.answered = true;
        document.getElementById('nextButton').style.display = 'block';
        const buttons = document.querySelectorAll('#answerOptions button');
        buttons.forEach(button => button.disabled = true);
        return;
    }

    const isCorrect = selectedAnswer === question.correctAnswer;
    const feedback = document.getElementById('feedback');
    feedback.textContent = isCorrect ? '¡Correcto!' : `Incorrecto. La respuesta correcta era ${question.correctAnswer.toUpperCase()}.`;
    feedback.style.color = isCorrect ? 'green' : 'red';

    if (!question.answered) {
        score += isCorrect ? 1 : -0.50;
        answeredQuestions++;

        if (isCorrect) {
            correctAnswersCount++;
        } else {
            incorrectAnswersCount++;
            if (!currentFailedQuestions.some(q => q.number === question.number)) {
                currentFailedQuestions.push(question);
            }
            previousFailedQuestions = [...currentFailedQuestions];
            updateFailedQuestionsDisplay();
        }

        question.answered = true;
        document.getElementById('nextButton').style.display = 'block';
        updateStats();

        const buttons = document.querySelectorAll('#answerOptions button');
        buttons.forEach(button => button.disabled = true);

        const temaInfo = temasPorPregunta[question.number] || { tema: 'Sin tema' };
        const tema = temaInfo.tema;

        if (!statsByTopic[tema]) {
            statsByTopic[tema] = {
                total: 0,
                correct: 0,
                incorrect: 0
            };
        }

        statsByTopic[tema].total++;
        if (isCorrect) {
            statsByTopic[tema].correct++;
        } else {
            statsByTopic[tema].incorrect++;
        }
    }
}

function skipQuestion() {
    const question = questions[currentQuestionIndex];
    if (question.answered) return;

    const feedback = document.getElementById('feedback');
    feedback.innerHTML = `No respondiste. La respuesta correcta era <strong>${question.correctAnswer.toUpperCase()}</strong>.`;
    feedback.style.color = 'blue';

    const buttons = document.querySelectorAll('#answerOptions button');
    buttons.forEach(button => button.disabled = true);

    const temaInfo = temasPorPregunta[question.number] || { tema: 'Sin tema' };
    const tema = temaInfo.tema;

    if (!statsByTopic[tema]) {
        statsByTopic[tema] = {
            total: 0,
            correct: 0,
            incorrect: 0
        };
    }

    statsByTopic[tema].total++;
    question.answered = true;
    answeredQuestions++;

    document.getElementById('nextButton').style.display = 'block';
    updateStats();
}

function showNextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function updateStats() {
    document.getElementById('answeredCount').textContent = answeredQuestions;
    document.getElementById('totalQuestions').textContent = questions.length;
    document.getElementById('score').textContent = score.toFixed(2);
    document.getElementById('remainingCount').textContent = questions.length - answeredQuestions;
    document.getElementById('correctCount').textContent = correctAnswersCount;
    document.getElementById('incorrectCount').textContent = incorrectAnswersCount;
}

function showFinalResult() {
    const resultMessage = document.createElement('button');
    resultMessage.id = 'resultMessage';
    
    const passingScore = questions.length / 2;
    
    if (score >= passingScore) {
        resultMessage.textContent = 'HAS APROBADO';
        resultMessage.style.backgroundColor = 'green';
    } else {
        resultMessage.textContent = 'HAS SUSPENDIDO';
        resultMessage.style.backgroundColor = 'red';
    }
    
    resultMessage.style.color = 'white';
    resultMessage.style.padding = '10px';
    resultMessage.style.border = 'none';
    resultMessage.style.cursor = 'pointer';
    resultMessage.style.marginTop = '20px';

    document.getElementById('quizContainer').appendChild(resultMessage);

    previousFailedQuestions = [...currentFailedQuestions];
    currentFailedQuestions = [];
    updateFailedQuestionsDisplay();
    
    const restartFailedButton = document.createElement('button');
    restartFailedButton.textContent = 'Reiniciar preguntas falladas';
    restartFailedButton.style.backgroundColor = 'orange';
    restartFailedButton.style.color = 'white';
    restartFailedButton.style.padding = '10px';
    restartFailedButton.style.border = 'none';
    restartFailedButton.style.cursor = 'pointer';
    restartFailedButton.style.marginTop = '10px';
    restartFailedButton.onclick = restartFailedQuestions;

    document.getElementById('quizContainer').appendChild(restartFailedButton);
}

function restartFailedQuestions() {
    if (previousFailedQuestions.length === 0) {
        alert("No hay preguntas falladas en el intento anterior para reiniciar.");
        return;
    }

    questions = previousFailedQuestions.map(q => ({ ...q }));
    currentQuestionIndex = 0;
    answeredQuestions = 0;
    score = 0;
    correctAnswersCount = 0;
    incorrectAnswersCount = 0;
    statsByTopic = {};
    currentFailedQuestions = [];

    questions.forEach(q => {
        q.answered = false;
        q.selectedAnswer = null;
    });

    document.getElementById('resultMessage')?.remove();
    document.querySelector('button[onclick="restartFailedQuestions"]')?.remove();

    showQuestion();
    updateStats();
}

function startTimer() {
    startTime = Date.now();
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timer').textContent = `Tiempo transcurrido: ${formattedTime}`;
}

function showStats() {
    const statsTableBody = document.querySelector('#statsTable tbody');
    statsTableBody.innerHTML = '';

    const sortedStats = Object.entries(statsByTopic).sort((a, b) => {
        const porcentajeA = (a[1].correct / a[1].total) * 100;
        const porcentajeB = (b[1].correct / b[1].total) * 100;

        if (porcentajeA !== porcentajeB) {
            return porcentajeB - porcentajeA;
        } else if (a[1].correct !== b[1].correct) {
            return b[1].correct - a[1].correct;
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    for (const [tema, temaStats] of sortedStats) {
        const porcentajeAcierto = ((temaStats.correct / temaStats.total) * 100).toFixed(2);

        statsTableBody.innerHTML += `
            <tr>
                <td>${tema}</td>
                <td>${temaStats.total}</td>
                <td>${temaStats.correct}</td>
                <td>${temaStats.incorrect}</td>
                <td>${porcentajeAcierto}%</td>
            </tr>
        `;
    }

    document.getElementById('statsModal').style.display = 'block';
}

function closeStats() {
    document.getElementById('statsModal').style.display = 'none';
}
