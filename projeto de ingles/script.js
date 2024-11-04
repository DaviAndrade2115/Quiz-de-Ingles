const questions = [
    {
        question: "What is the opposite of 'difficult'?",
        answers: [
            { text: "Easy", correct: true },
            { text: "Hard", correct: false },
            { text: "Complex", correct: false },
            { text: "Simple", correct: false }
        ],
        description: {
            correct: "'Easy' means 'fácil' in Portuguese.",
            incorrect: "The correct answer is 'Easy', which means 'fácil' in Portuguese."
        }
    },
    {
        question: "What does a generous person is?' ",
        answers: [
            { text: "Kind", correct: true },
            { text: "Mean", correct: false },
            { text: "Selfish", correct: false },
            { text: "Angry", correct: false }
        ],
        description: {
            correct: "'Kind' means 'bondoso' in Portuguese.",
            incorrect: "The correct answer is 'Kind', which means 'bondoso' in Portuguese."
        }
    },
    {
        question: "Choose the correct word: 'She felt very ______ after winning the award.'",
        answers: [
            { text: "Excited", correct: true },
            { text: "Bored", correct: false },
            { text: "Angry", correct: false },
            { text: "Confused", correct: false }
        ],
        description: {
            correct: "'Excited' means 'animada' in Portuguese.",
            incorrect: "The correct answer is 'Excited', which means 'animada' in Portuguese."
        }
    },
    {
        question: "she just won the lottery she is_______ and now she wants to take a vacation",
        answers: [
            { text: "Happy", correct: true },
            { text: "Sad", correct: false },
            { text: "Angry", correct: false },
            { text: "Tired", correct: false }
        ],
        description: {
            correct: "'Happy' means 'feliz' in Portuguese.",
            incorrect: "The correct answer is 'Happy', which means 'feliz' in Portuguese."
        }
    },
    {
        question: "What is the meaning of 'meticulous'?",
        answers: [
            { text: "Careful", correct: true },
            { text: "Careless", correct: false },
            { text: "Quick", correct: false },
            { text: "Lazy", correct: false }
        ],
        description: {
            correct: "'Careful' means 'cuidadoso' in Portuguese.",
            incorrect: "The correct answer is 'Careful', which means 'cuidadoso' in Portuguese."
        }
    },
    {
        question: "Choose the synonym of 'diligent':",
        answers: [
            { text: "Hardworking", correct: true },
            { text: "Lazy", correct: false },
            { text: "Slow", correct: false },
            { text: "Careless", correct: false }
        ],
        description: {
            correct: "'Hardworking' means 'trabalhador' in Portuguese.",
            incorrect: "The correct answer is 'Hardworking', which means 'trabalhador' in Portuguese."
        }
    },
    {
        question: "What does 'amiable' mean?",
        answers: [
            { text: "Friendly", correct: true },
            { text: "Rude", correct: false },
            { text: "Angry", correct: false },
            { text: "Shy", correct: false }
        ],
        description: {
            correct: "'Friendly' means 'amigável' in Portuguese.",
            incorrect: "The correct answer is 'Friendly', which means 'amigável' in Portuguese."
        }
    },
    {
        question: "What is the opposite of 'generous'?",
        answers: [
            { text: "Selfish", correct: true },
            { text: "Kind", correct: false },
            { text: "Helpful", correct: false },
            { text: "Friendly", correct: false }
        ],
        description: {
            correct: "'Selfish' means 'egoísta' in Portuguese.",
            incorrect: "The correct answer is 'Selfish', which means 'egoísta' in Portuguese."
        }
    },
    {
        question: "What does 'fragile' mean?",
        answers: [
            { text: "Delicate", correct: true },
            { text: "Strong", correct: false },
            { text: "Hard", correct: false },
            { text: "Robust", correct: false }
        ],
        description: {
            correct: "'Delicate' means 'frágil' in Portuguese.",
            incorrect: "The correct answer is 'Delicate', which means 'frágil' in Portuguese."
        }
    },
    {
        question: "What does 'serene' mean?",
        answers: [
            { text: "Calm", correct: true },
            { text: "Agitated", correct: false },
            { text: "Loud", correct: false },
            { text: "Busy", correct: false }
        ],
        description: {
            correct: "'Calm' means 'calmo' in Portuguese.",
            incorrect: "The correct answer is 'Calm', which means 'calmo' in Portuguese."
        }
    }
];

let currentQuestionIndex = 0; // Para controlar a pergunta atual
let score = 0; // Para manter a pontuação

const startQuizButton = document.getElementById('start-quiz');
const quizContainer = document.getElementById('quiz-container');
const welcomeSection = document.getElementById('welcome');
const submitQuizButton = document.getElementById('submit-quiz');
const resultContainer = document.getElementById('result');

startQuizButton.addEventListener('click', startQuiz);
submitQuizButton.addEventListener('click', submitQuiz);

function startQuiz() {
    welcomeSection.style.display = 'none';
    quizContainer.style.display = 'block';
    currentQuestionIndex = 0; // Reinicia o índice da pergunta
    score = 0; // Reinicia a pontuação
    showQuestion(); // Exibe a primeira pergunta
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    quizContainer.querySelector('#quiz').innerHTML = `<h3>${question.question}</h3>`;
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.addEventListener('click', () => selectAnswer(answer.correct, answer.text, question.description));
        quizContainer.querySelector('#quiz').appendChild(button);
    });
}

function selectAnswer(correct, answerText, description) {
    if (correct) {
        alert("Correct! " + description.correct);
        score++;
    } else {
        alert("Wrong answer! " + description.incorrect);
    }

    // Avança para a próxima pergunta
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        submitQuiz();
    }
}

function submitQuiz() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    document.getElementById('feedback-message').innerText = `You scored ${score} out of ${questions.length}!`;
}
