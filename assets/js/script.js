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
 function clearStatusClass()



 
