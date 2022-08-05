 /**
 * Created variable and assigned elements to each.
 */  
let startButton = document.getElementById('start-button')
let nextButton = document.getElementById('next-button')
let questionBoxElement = document.getElementById('question-box')
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')
let counterElement = document.getElementById('counter')
let scoreBar = document.getElementById('score-bar')
let scoreElement = document.getElementById('score');
let questionCounter;
let shuffledQuestions, currentQuestionIndex;

 
 
 /**
 * Start Game Function and setting variables to 0
 */
function startGame() {
    /**
 * Adding eventListeners to Start & Next Button
 */
 startButton.addEventListener("click", startGame);
 nextButton.addEventListener("click", () => {
     currentQuestionIndex++
     setNextQuestion();
 });

 questionCounter = 0;
 startButton.classList.add('hide');
 shuffledQuestions = questions.sort(() => Math.random(- .5));
 currentQuestionIndex = 0;
 questionBoxElement.classList.remove('hide');
 scoreBar.classList.remove('hide');
 setNextQuestion();
 scoreElement.textContent = 0;
 counter.textContent = 0;
}

/**
 * Function to create a setNextQuestion and also to have a resetState.
 * The function will also show the next question using the shuffled Questions and current Question Index
 */

 function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}


 /**
 * This function will show the Question 
 */
function showQuestion(question) {

}

/**
 * This function will give the user the ability to select answers from the arrays of listed answers. 
 */
 function selectAnswer(i) {

 }

 /**
 * This function select the correct and incorrect answers using "correct and wrong elements". 
 */
 function setStatusClass(){
 }

  /**
 * This function  to clear status of the selected correct and incorrect answers.
 */
 function clearStatusClass() {


 }


let questions = [

    {
        question: 'Who Won the 1994 World Cup?',
        answers: [
            { text: 'Brazil', correct: true },
            { text: 'England', correct: false },
            { text: 'Italy', correct: false },
            { text: 'Germany', correct: false }
        ]

    },

    {
        question: 'Who won the 2021/22 Champion League Final?',
        answers: [
            { text: 'Barcelona', correct: false },
            { text: 'Manchester City', correct: false },
            { text: 'Liverpool', correct: false },
            { text: 'Real Madrid', correct: true }
        ]

    },

    {
        question: 'Who missed the penalty for England in the Euro 96 Semi Finals against Germany?',
        answers: [
            { text: 'Paul Gasgcoine', correct: false },
            { text: 'Alan Shearer', correct: false },
            { text: 'Gareth Southgate', correct: true },
            { text: 'David Beckham', correct: false }
        ]

    }, 

    {
        question: 'How many times has Ronaldo won the Ballon d or?',
        answers: [
            { text: '4', correct: false },
            { text: '3', correct: false },
            { text: '5', correct: true },
            { text: '1', correct: false }
        ]

    }, 

    {
        question: 'Who was the leading Premier League goalscorer for the season 21/22?',
        answers: [
            { text: 'Mo Salah', correct: true },
            { text: 'Ronaldo', correct: false },
            { text: 'Son Heung-Min', correct: false },
            { text: 'Harry Kane', correct: false }
        ]

    }, 

    {
        question: 'How many times have England won the World Cup?',
        answers: [
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '5', correct: false },
            { text: '1', correct: true }
        ]

    }, 

];

 
