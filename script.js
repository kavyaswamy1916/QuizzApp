const questions = [
    {
    question: "which is largest animal in the world?",
    answers: [
        { text: "Shark", correct: false},
        { text: "Blue Whale", correct: true},
        { text: "Elephant", correct: false},
        { text: "Giraffe", correct: false},

    ]
},
{
    question: "which is smallest country in the world?",
    answers: [
        { text: "Vatican City", correct: true},
        { text: "Bhuthan", correct: false},
        { text: "Nepal", correct: false},
        { text: "Sri Lanka", correct: false},

    ]
},
{
    question: "which is largest desert in the world?",
    answers: [
        { text: "Kalahari", correct: false},
        { text: "Gobi", correct: false},
        { text: "Sahara", correct: false},
        { text: "Antarctica", correct: true},

    ]
},
{
    question: "which is smallest continent in the world?",
    answers: [
        { text: "Asia", correct: false},
        { text: "Austraila", correct: true},
        { text: "Artica", correct: false},
        { text: "Africa", correct: false},

    ]
},{
    question: "which is Tallest Statue in the india?",
    answers: [
        { text: "S.Vallabhbhai Patel", correct: true},
        { text: "Lord Shiva", correct: false},
        { text: "Ramanuja", correct: false},
        { text: "B.R. Ambedkar", correct: false},

    ]   
},{
    question: "Who was the first President of India?",
    answers: [
        { text: "A. P. J. Abdul Kalam", correct: false},
        { text: "Jawaharlal Nehru", correct: false},
        { text: "Dr. Rajendra Prasad", correct: true},
        { text: "B.R. Ambedkar", correct: false},

    ]   
},{
    question: "Which is the largest coffee-producing state of India?",
    answers: [
        { text: "Kerala", correct: false},
        { text: "Karnataka", correct: true},
        { text: "Tamilnadu", correct: false},
        { text: "Arunachal Pradesh", correct: false},

    ] 
},{
    question: " Which state has the largest population?",
    answers: [
        { text: "Madhya Pradesh", correct: false},
        { text: "Telangana", correct: false},
        { text: "Bihar", correct: false},
        { text: "Utter Pradesh", correct: true},

    ] 
},{
    question: "Which is the longest river in the world?",
    answers: [
        { text: "Amazon River", correct: false},
        { text: "Yangtze River", correct: false},
        { text: "Nile", correct: true},
        { text: "Parana River", correct: false},

    ] 
},{
    question: "Which is the largest ocean in the world?",
    answers: [
        { text: "The Indian Ocean", correct: false},
        { text: "The Pacific Ocean", correct: true},
        { text: "The Atlantic Ocean", correct: false},
        { text: "The Arctic Ocean", correct: false},

    ] 
}
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; 
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


// Display of Question
function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion
    .question; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display= "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)

    }
}

//  Answer selection
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

//showing score function
function showScore(){
    resetState();
    if(score <= 5){
        questionElement.innerHTML = `Study hard! because You scored ${score} out of ${questions.length}!`
    }else if(score > 5 && score< 8)
    {
    questionElement.innerHTML = `Good You scored ${score} out of ${questions.length}!`;
    } else
    {
        questionElement.innerHTML = `Excellent champ You scored ${score} out of ${questions.length}!`;
    }
    nextButton.innerHTML = "Start again";
    nextButton.style.display = "block";
}

//next button function
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
     handleNextButton();
    }else{
        startQuiz();
    }   

});
   
startQuiz(); 
