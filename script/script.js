// @ts-check


/** @typedef {'html' | 'css' | 'js' | 'java'} Language */


/**
 * @type {Record<Language, string>}
 */
const languages = {
    html: 'HTML',
    css: 'CSS',
    js: 'JS',
    java: 'JAVA',
};


let currentLanguage = 'html';


/**
 * @typedef {Object} Questions
 * @property {string} question
 * @property {string} answer_1
 * @property {string} answer_2
 * @property {string} answer_3
 * @property {string} answer_4
 * @property {Language} language
 * @property {number} right_answer
 */


let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/right.mov');
let AUDIO_FAIL = new Audio('audio/wrong.mov');


/**
 * Layout start screen
 */
function welcome() {
    const currentSection = getElementById('sectionId');
    currentSection.innerHTML = welcomeTemplate();
    selectMenuPoint('html');
}


/**
 * 
 * @param {Language} language 
 */
function selectMenuPoint(language) {
    const allMenuPoints = document.querySelectorAll('.menu_point');
    const selectedMenuPoint = document.querySelector(`.menu_point.menu_${language}`);
    if (allMenuPoints && selectedMenuPoint) {
        allMenuPoints.forEach(v => v.classList.remove('active'));
        selectedMenuPoint.classList.add('active');
    }
    getElementById('welcomeTextLanguage').innerHTML = languages[language];
    currentLanguage = language;
}


/**
 * Starts the quiz with the selected programming language
 */
function startQuiz() {
    const currentSection = getElementById('sectionId');
    currentSection.innerHTML = cardTemplate();    
    pointerEventFalse();
    showQuestion();
    getElementById('all-Questions').innerHTML = currentQuestionsLength().toString();
}


/**
 * Locks the selection menu for the languages
 */
function pointerEventFalse() {
    const pointerEvent = getElementById('navigation').classList;
    pointerEvent.add('pointer-none')
}


/**
 * Unlocks the selection menu for the languages
 */
function pointerEventTrue() {
    const pointerEvent = getElementById('navigation').classList;
    pointerEvent.remove('pointer-none')
}


/**
 * Number of total questions of the current programming language
 * @returns {number}
 */
function currentQuestionsLength() {
    const currentQuestionsLength = questions.filter(question => question.language === currentLanguage);
    return currentQuestionsLength.length;
}


/**
 * Show new question on screen
 */
function showQuestion() {
    hiddenBackgroundImage();
    disabledAnswerFalse();
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}


/**
 * Check if quiz is over
 * @returns {boolean}
 */
function gameIsOver() {
    return currentQuestion >= currentQuestionsLength();
}


/**
 * Update new question on screen
 */
function updateToNextQuestion() {
    const currentQuestions = questions.filter(question => question.language === currentLanguage);
    let question = currentQuestions[currentQuestion];
    getElementById('question-number').innerHTML = (currentQuestion + 1).toString();
    getElementById('questiontext').innerHTML = escapeHtml(question.question);
    getElementById('answer_1').innerHTML = escapeHtml(question.answer_1);
    getElementById('answer_2').innerHTML = escapeHtml(question.answer_2);
    getElementById('answer_3').innerHTML = escapeHtml(question.answer_3);
    getElementById('answer_4').innerHTML = escapeHtml(question.answer_4);
}


/**
 * Refresh the Progress Bar
 */
function updateProgressBar() {
    let percent = (currentQuestion + 1) / currentQuestionsLength();
    percent = Math.round(percent * 100);
    getElementById('progress-bar').innerHTML = `${percent}%`;
    // @ts-ignore
    getElementById('progress-bar').style = `width: ${percent}%`;
}


/**
 * Hidden background image
 */
function hiddenBackgroundImage() {
    const sectionElement = document.querySelector('section');
    if (sectionElement) {
        sectionElement.style.backgroundImage = 'none';
    }
}


/**
 * Hidden background image
 */
function showBackgroundImage() {
    let sectionElement = document.querySelector('section');
    if (sectionElement) {
        // @ts-ignore
        sectionElement.style = '';
    }
}


/**
 * Evaluating the answer
 * @param {string} selection 
 */
function answer(selection) {
    const currentQuestions = questions.filter(question => question.language === currentLanguage);
    let question = currentQuestions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    disabledAnswerTrue(selectedQuestionNumber);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (+selectedQuestionNumber === question.right_answer) {
        rightAnswer(idOfRightAnswer);
    } else {
        wrongAnswer(selection, idOfRightAnswer);
    }
    setPrevDisabledButtonState(currentQuestion >= 1 ? false : true);
    // getElementById('prevButton').disabled = currentQuestion >= 1 ? false : true;
    setNextDisabledButtonState(false);
}


/**
 * Deactivate answer fields
 * @param {string} selectedQuestionNumber 
 */
function disabledAnswerTrue(selectedQuestionNumber) {
    for (let index = 1; index < 5; index++) {
        if (index !== +selectedQuestionNumber) {
            const parentElement = getElementById(`answer_${index}`).parentNode;
            if (parentElement && parentElement instanceof HTMLDivElement) {
                parentElement.onclick = () => '';
            }
        }        
    }
}


/**
 * Activate answer fields
 */
function disabledAnswerFalse() {
    for (let index = 1; index < 5; index++) {
        const parentElement = getElementById(`answer_${index}`).parentNode;
        if (parentElement && parentElement instanceof HTMLDivElement) {
            parentElement.onclick = () => answer(`answer_${index}`);
        }
    }
}


/**
 * Right answer
 * @param {string} idOfRightAnswer 
 */
function rightAnswer(idOfRightAnswer) {
    const parentElement = getElementById(idOfRightAnswer).parentElement;
    parentElement ? parentElement.classList.add('bg-success-card') : '';
    const currentSelection = getElementById(idOfRightAnswer).parentNode;
    const currentLetter = currentSelection ? currentSelection.firstElementChild : '';
    currentLetter ? currentLetter.classList.add('bg-success-letter') : '';
    AUDIO_SUCCESS.play();
    rightQuestions++;
}


/**
 * Wrong answer
 * @param {string} selection 
 * @param {string} idOfRightAnswer 
 */
function wrongAnswer(selection, idOfRightAnswer) {
    const parentElement = getElementById(selection).parentElement;
    parentElement ? parentElement.classList.add('bg-wrong-card') : '';
    const currentSelection = getElementById(selection).parentNode;
    const currentLetter = currentSelection ? currentSelection.firstElementChild : '';
    currentLetter ? currentLetter.classList.add('bg-wrong-letter') : '';
    // rightAnswer(idOfRightAnswer); // Correct answer displayed
    AUDIO_FAIL.play();
}


/**
 * Next question
 */
function nextQuestion() {
    currentQuestion++;
    setPrevDisabledButtonState(false);
    setNextDisabledButtonState(true);
    resetAnswerButtons();
    showQuestion();
}


/**
 * Previous question
 */
function prevQuestion() {
    currentQuestion--;
    if (currentQuestion >= 0) {
        setNextDisabledButtonState(true);
        if (currentQuestion === 0) {
            setPrevDisabledButtonState(true);
        }
        rightQuestions--;
        resetAnswerButtons();
        showQuestion();
    }
}


/**
 * Reset answer fields
 */
function resetAnswerButtons() {
    for (let index = 1; index < 5; index++) {
        const parentElement = getElementById(`answer_${index}`).parentNode;
        if (parentElement && parentElement instanceof HTMLDivElement) {
            parentElement.classList.remove('bg-success-card', 'bg-wrong-card');
        }
        getElementById(`answerLetter_${index}`).classList.remove('bg-success-letter');
        getElementById(`answerLetter_${index}`).classList.remove('bg-wrong-letter');
    }
}


/**
 * Set previous button disabled to true or false
 * @param {boolean} state 
 */
function setPrevDisabledButtonState(state) {
    const prevButton = getElementById('prevButton');
    if (prevButton instanceof HTMLButtonElement) {
        prevButton.disabled = state;
    }
}


/**
 * Set next button disabled to true or false
 * @param {boolean} state 
 */
function setNextDisabledButtonState(state) {
    const nextButton = getElementById('nextButton');
    if (nextButton instanceof HTMLButtonElement) {
        nextButton.disabled = state;
    }
}


/**
 * Show the end screen with the result and the option to restart
 */
function showEndScreen() {
    hiddenBackgroundImage();
    const currentSection = getElementById('sectionId');
    currentSection.innerHTML = endScreenTemplate();
    getElementById('currentLanguage').innerHTML = languages[currentLanguage];
    getElementById('rightQuestions').innerHTML = rightQuestions.toString();
    getElementById('totalQuestions').innerHTML = currentQuestionsLength().toString();
}


/**
 * Replace the chars < and > with HTML entities &lt; and &gt;
 * @param {string} question 
 * @returns {string}
 */
function escapeHtml(question) {
    return question
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
}


/**
 * Restart the Quiz App
 */
function restartQuizApp() {
    rightQuestions = 0;
    currentQuestion = -1;
    currentLanguage = 'html';
    showBackgroundImage();
    updateProgressBar();
    currentQuestion = 0;
    pointerEventTrue();
    welcome();
}


/**
 * Initialisation function
 */
function init() {
    welcome();
}