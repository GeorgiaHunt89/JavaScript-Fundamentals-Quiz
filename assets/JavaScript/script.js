// Global Variables
var secondsLeft = 60;
var leaderboard = [];
var savedNames = [];
    // Const to start timer when button pressed
const $timerEl = document.querySelector('#countdown-timer');
const $startButton = document.querySelector ('#start-btn'); 
const $nextButton = document.querySelector ('#next-btn');
    // Const for DisplayQuiz function
const $headingSection = document.querySelector ('#heading-section');
const $paragraphSection = document.querySelector ('#paragraph-section');
const $startButtonSection = document.querySelector ('#start-btn-section');
const $quizSection = document.querySelector ('#quiz-section');
    // Const for LaunchQuestions function
let questIndex = 0;
const $endQuizSection = document.querySelector ('#end-quiz-section');
const $quizQuestion = document.querySelector ('#quiz-question');
const $dataValueA = document.querySelector ('#data-value-a');
const $dataValueB = document.querySelector ('#data-value-b');
const $dataValueC = document.querySelector ('#data-value-c');
const $dataValueD = document.querySelector ('#data-value-d');
    // Const to listen to user selection
const $userChoices = document.querySelector ('#user-choices');
    // Const to save score
const $saveScoreBtn = document.querySelector ('#save-score-btn');
const $recordInitials = document.querySelector ('#record-initials');


// Function for quiz timer to start counting down from 45 seconds
function startTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft = secondsLeft - .1;
        $timerEl.textContent = secondsLeft.toFixed(2) + ' seconds left';

        if(secondsLeft === 0 | questIndex === quiz.length){
            clearInterval(timerInterval);
            sendMessage();
            }
    }, 100);
}
function sendMessage(){
    $timerEl.textContent = 'You have finished the quiz, well done!'
}

// Function to remove heading and start displaying the quiz questions
function displayQuiz(){
    $headingSection.classList.add('hide');
    $paragraphSection.classList.add('hide');
    $startButtonSection.classList.add('hide');
    $quizSection.classList.remove('hide');
    launchQuestions();
}

// Function to display end of quiz section
function launchQuestions(){
    if (questIndex === quiz.length | secondsLeft === 0){  //<0
        $endQuizSection.classList.remove('hide');
        $quizSection.classList.add('hide');
        var score = secondsLeft;
        alert('You scored ' + score);
        leaderboard.push(score);

// Else section linking to questions.js, displaying questions and all possible answers
    } else {
        $quizQuestion.innerText = quiz[questIndex].question;
        $dataValueA.innerHTML = quiz[questIndex].possibleAnswers[0];
        $dataValueB.innerHTML = quiz[questIndex].possibleAnswers[1];
        $dataValueC.innerHTML = quiz[questIndex].possibleAnswers[2];
        $dataValueD.innerHTML = quiz[questIndex].possibleAnswers[3];
    }
}

// Function to display correct answer selection Yes or No alert
function selectAnswer(){
    if (event.target.textContent === quiz[questIndex].correctAnswer){
        alert('Great job!\n That is correct.');
    } else {
        alert('Whoops, wrong answer.');
        secondsLeft = secondsLeft - 05;
    }
}

// Event Listener function to start quiz timer and show questions with Start button
$startButton.addEventListener('click', function(){
    displayQuiz();
    startTimer();
    launchQuestions();
});

// Event Listener function to select users choice
$userChoices.addEventListener('click', function(){
    selectAnswer();
    questIndex++;
    launchQuestions();
});

// Event Listener for saving score for that round
$saveScoreBtn.addEventListener('click', function(){
alert('Well done, you have saved your score for this round.');

var userScore = {
    initials: [recordIntitals],
    score: [leaderboard]
}
console.log(userScore);

// Function to save scores in local storage
savedNames.push(recordIntitals)
function scoreStorage (){
    localStorage.setItem('user score', JSON.stringify(userScore));
    localStorage.setItem('initials', JSON.stringify(initialsScore));
}
scoreStorage(userScore);
})

