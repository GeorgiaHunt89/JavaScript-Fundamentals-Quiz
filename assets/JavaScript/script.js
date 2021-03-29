// Global Variables
var secondsLeft = 45;
var timeEl = document.querySelector('#countdown-timer');
var buttonEl = document.querySelector('.button')

// Start quiz timer
function startQuiz() {
    var timerInterval = setInterval(function(){
        secondsLeft = secondsLeft - .1;
        timeEl.textContent = secondsLeft.toFixed(2) + ' seconds left';

        if(secondsLeft === 0){
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 100);
}

buttonEl.addEventListener('click', function(){
    startQuiz()
})


