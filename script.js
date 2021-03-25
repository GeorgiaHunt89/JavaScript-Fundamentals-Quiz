// Global Variables
var secondsLeft = 45;
var timeEl = document.querySelector('#timer');


// Start quiz timer
function startQuiz() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' seconds left';

        if(secondsLeft === 0){
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 100);
}
