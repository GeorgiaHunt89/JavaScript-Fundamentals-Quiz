// Global Variables
var secondsLeft = 45;
var timeEl = document.querySelector('#countdown-timer');
var buttonEl = document.querySelector('.button')

// Start quiz timer
function startTimer() {
    var timerInterval = setInterval(function(){
        secondsLeft = secondsLeft - .1;
        timeEl.textContent = secondsLeft.toFixed(2) + ' seconds left';

        if(secondsLeft === 0){
            clearInterval(timerInterval);
            sendMessage();
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

function startQuiz(){
    
}


