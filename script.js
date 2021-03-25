// Global Variables
var secondsLeft = 45;
var timeEl = document.querySelector('#countdown-timer');
var buttonEl = document.querySelector('.button')
// Questions, answers & correct answers
const questions = [
    { // First question
        questionOne: 'Commonly used data types DO NOT include:',
        answers: {
            a: 'Strings',
            b: 'Booleans',
            c: 'Alerts',
            d: 'Numbers',    
        },
        correctAnswer: 'c'
    },
    { // Second question
        questionTwo: 'The condition in an if / else statment is enclosed within _______:',
        answers: {
            a: 'Quotes',
            b: 'Curly Brackets',
            c: 'Parenthesis',
            d: 'Square Brackets',    
        },
        correctAnswer: 'c'
    },
    { // Third question
        questionThree: 'Arrays in JavaScript can be used to store:',
        answers: {
            a: 'Numbers and strings',
            b: 'Booleans',
            c: 'Other arrays',
            d: 'All of the above',    
        },
        correctAnswer: 'd'
    },
    { // Fourth question
        questionFour: 'String values must be enclosed within______ when being assigned to values:',
        answers: {
            a: 'Quotes',
            b: 'Curly Brackets',
            c: 'Parenthesis',
            d: 'Square Brackets',    
        },
        correctAnswer: 'a'
    },
]


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


