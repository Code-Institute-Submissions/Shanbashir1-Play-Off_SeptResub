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
 * Adding eventListeners to Start & Next Button
 */
    startButton.addEventListener("click", startGame);
    nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion();
 });
 /**
 * Start Game Function and setting variables to 0
 */
  function startGame() {
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
    questionCounter++;
    counterElement.innerHTML = questionCounter;
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    let button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn');

    if (answer.correct) {
        button.dataset.correct = answer.correct
    }

    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
        
    });
}

 /**
 * This function resets the status and removes answer buttons  
 */
 function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
    }
 };
 

/**
 * This function will give the user the ability to select answers from the arrays of listed answers. 
 */
    function selectAnswer(i) {
    let selectedButton = i.target
    let correct = selectedButton.dataset.correct
    
    processResults(correct);
    setStatusClass(document.body, correct)
    
    Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } 
        
    else {
        startButton.innerText = "Restart";
        startButton.classList.remove('hide');
    };
    
    };

 /**
 * This function select the correct and incorrect answers using "correct and wrong elements". 
 */
 function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
    element.classList.add('correct');
    }
    else {
    element.classList.add('wrong');
    }

};
  /**
 * This function  to clear status of the selected correct and incorrect answers.
 */
 function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
 }

  /**
 * This function  to process result when correct.
 * Score element incremenet by 1 
 * Counter element changes when the question move on to next question
 */
 function processResults (isCorrect) {
    if (!isCorrect) {
        return;
    }
 let score = parseInt(scoreElement.textContent, 10) || 0;

    scoreElement.textContent = score + 1;

 let counter = parseInt(counterElement.textContent, 10);
    counterElement.innerHTML = questionCounter;
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

 
