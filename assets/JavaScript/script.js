// Global Variables
var secondsLeft = 45;
var timeEl = document.querySelector('#countdown-timer');
const $headingSection = document.querySelector('#heading-section');
const $startQuiz = document.querySelector('#quiz-section');
var nextButton = document.querySelector('#next-btn');
var finishQuiz = document.querySelector ('#finish-quiz');
var endQuizSection = document.querySelector('#end-quiz');
var answerChoices = document.querySelector('#answeroptions');
const $saveScoreBtn = document.querySelector('#save-score-btn'); 
var questIndex = 0;
var initialsScore = document.querySelector('#stored-initials');


const questionEl = document.querySelector('#quiz-questionTitle');
const buttonEl = document.querySelector ('.button');
const buttonStart = document.querySelector ('.start-quiz-btn');

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
    $headingSection.classList.add('hide');
    $startQuiz.classList.remove('hide');
    nextButton.classList.remove('hide');
    launchQuestions();
}

// Function to display end of quiz section
function launchQuestions(){
    if (questIndex === questions.length | secondsLeft === 0){
        endQuizSection.classList.remove('hide');
        $startQuiz.classList.add('hide');
        var score = secondsLeft;
        alert('Well done, you have scored ' + score);
        leaderboard.push(score);
        
        console.log(leaderboard);

// Else section linking to questions.js, displaying questions and all possible answers
    } else {
        questionEl.innerText = quiz[questIndex].questionTitle;
        data-value-a.innerHTML === quiz[questIndex].possibleAnswers[0];
        data-value-b.innerHTML === quiz[questIndex].possibleAnswers[1];
        data-value-c.innerHTML === quiz[questIndex].possibleAnswers[2];
        data-value-d.innerHTML === quiz[questIndex].possibleAnswers[3];
    }
}

// Function to display correct answer selection Yes or No alert
function selectAnswer(){
    if (event.target.textContent === quiz[questIndex].answer){
        alert('Great job!\n That is correct.');
    } else {
        alert('Whoops, wrong answer.');
        secondsLeft = secondsLeft - 10;
    }
}

// Event Listener function to start quiz timer and show questions with Start button
buttonStart.addEventListener('click', function(){
    displayQuiz();
    startTimer();
});

// Event Listener function to select users choice
answerChoices.addEventListener('click', function(){
    selectAnswer();
    questIndex++;
    launchQuestions();
});

// Event Listener for next button click
nextButton.addEventListener('click',function(){
    launchQuestions();
});

// Event Listener for saving score for that round
$saveScoreBtn.addEventListener('click', function(){
alert('Well done, you have saved your score for this round.');

var userScore = {
    initials: [intitalsScore],
    score: [leaderboard]
}
console.log(userScore);

// Function to save scores in local storage
function scoreStorage (){
    localStorage.setItem('user score', JSON.stringify(userScore));
    localStorage.setItem('initials', JSON.stringify(initialsScore));
}
scoreStorage(userScore);
})

