const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            {text: "Sydney", correct: false},
            {text: "Melbourne", correct: false},
            {text: "Canberra", correct: true},
            {text: "Perth", correct: false},
        ]
    },
    {
        question: "Who wrote the novel '1984'?",
        answers: [
            {text: "George Orwell", correct: true},
            {text: "Aldous Huxley", correct: false},
            {text: "Ray Bradbury", correct: false},
            {text: "Ernest Hemingway", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for Gold?",
        answers: [
            {text: "Gd", correct: false},
            {text: "Au", correct: true},
            {text: "Ag", correct: false},
            {text: "Fe", correct: false},
        ]
    },
    {
        question: "What is the highest mountain in the world?",
        answers: [
            {text: "K2", correct: false},
            {text: "Mount Everest", correct: true},
            {text: "Kangchenjunga", correct: false},
            {text: "Lhotse", correct: false},
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Vincent van Gogh", correct: false},
            {text: "Pablo Picasso", correct: false},
            {text: "Leonardo da Vinci", correct: true},
            {text: "Michelangelo", correct: false},
        ]
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: [
            {text: "Mercury", correct: true},
            {text: "Venus", correct: false},
            {text: "Earth", correct: false},
            {text: "Mars", correct: false},
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
            {text: "Arctic Ocean", correct: false},
        ]
    },
    {
        question: "What is the square root of 144?",
        answers: [
            {text: "10", correct: false},
            {text: "11", correct: false},
            {text: "12", correct: true},
            {text: "13", correct: false},
        ]
    },
    {
        question: "Who is the most beautiful girl in the world?",
        answers: [
            {text: "ALDILA JASMINE BANG", correct: true},
            {text: "ALDILA JASMINE BANG", correct: true},
            {text: "ALDILA JASMINE BANG", correct: true},
            {text: "ALDILA JASMINE BANG", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuize(){
    currentQuestionIndex = 0;
    score = 0 ;
    //nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetStart();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetStart(){
    nextButton.style.display = "none";

    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';

    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    } else{
        selectBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === 'true')
        {
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    nextButton.style.display = 'block';
}

function showScore(){
    resetStart();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuize();
    }
})


startQuize();