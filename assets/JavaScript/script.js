// Global Variables
var secondsLeft = 45;
var timeEl = document.querySelector('#countdown-timer');
var removeHeading = document.getElementById('#heading-section');
var startQuiz = document.getElementById('#quiz-section');
var nextButton = document.getElementById('#next-btn');
var finishQuiz = document.getElementById ('#finish-quiz');
var questIndex = 0;



const buttonEl = document.querySelector ('.button');
const buttonStart = document.querySelector ('.start-quiz-btn')

var leaderboard = [];


// Function for quiz timer to start counting down from 45 seconds
function startTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft = secondsLeft - .1;
        timeEl.textContent = secondsLeft.toFixed(2) + ' seconds left';

        if(secondsLeft === 0 | questIndex === questions.length){
            clearInterval(timerInterval);
            sendMessage();
            return;
            }
    }, 100);
}

function sendMessage(){
    timerEl.textContent = 'Bad luck, you are out of time.\nBetter luck nextime!'
}

// Function to remove heading and start displaying the quiz questions
function displayQuiz(){
    removeHeading.classList.add('hide');
    startQuiz.classList.remove('hide');
    nextButton.classList.remove('hide');
    LaunchQuestions();
}

// Function to start quiz timer and show questions with Start button
buttonStart.addEventListener('click', function(){
    displayQuiz();
    startTimer();
})

