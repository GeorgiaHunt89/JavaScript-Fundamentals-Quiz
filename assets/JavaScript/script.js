// Global Variables
var secondsLeft = 45;
var timeEl = document.querySelector('#countdown-timer');
var buttonEl = document.querySelector('.button');
var removeHeading = document.getElementById('#heading-section');
var startQuiz = document.getElementById('#quiz-section')
var nextButton = document.getElementById('#next-btn')
var finishQuiz =document.getElementById 

// Start quiz timer
function startTimer() {
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

function sendMessage() {
    timerEL.textContent = 'Time is up, better luck next time!';
}

// Function to start quiz with Start button
buttonEl.addEventListener('click', function(){
    startTimer()
})


// Function to start displaying the quiz questions
function displayQuiz(){
removeHeading.classList.add('hide');
startQuiz.classList.remove('hide');
nextButton.classList.remove('hide');
LaunchQuestions();
}

var questIndex = 0;

function launchQuestions() {
    if (questIndex === questions.length | startTime === 0){
        finishQuiz.classList.remove('hide');
        startQuiz.classList.add('hide');
    }
}
