const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {text:"Hyper TExt Preprocessor", correct: false},
            {text:"Hyper TExt Markup Language", correct: true},
            {text:"Hyper TExt Multiple Language", correct: false},
            {text:"Hyper Toot Multi Language", correct: false},
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            {text:"Hyper TExt Preprocessor", correct: false},
            {text:"Hyper TExt Markup Language", correct: true},
            {text:"Hyper TExt Multiple Language", correct: false},
            {text:"Hyper Toot Multi Language", correct: false},
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            {text:"Hyper TExt Preprocessor", correct: false},
            {text:"Hyper TExt Markup Language", correct: true},
            {text:"Hyper TExt Multiple Language", correct: false},
            {text:"Hyper Toot Multi Language", correct: false},
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            {text:"Hyper TExt Preprocessor", correct: false},
            {text:"Hyper TExt Markup Language", correct: true},
            {text:"Hyper TExt Multiple Language", correct: false},
            {text:"Hyper Toot Multi Language", correct: false},
        ]
    },

];

const startButton = document.getElementById("start");
const infoBox = document.getElementById("rule");

startButton.addEventListener("click", () => {
    infoBox.classList.toggle("visible");
});
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;questionElement.innerHTML = questionNo + "  " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();