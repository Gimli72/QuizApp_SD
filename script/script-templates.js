// @ts-check


/**
 * Start screen
 * @returns html code
 */
const welcomeTemplate = () => /*html*/ `
    <div class="welcome_text d-flex align-items-center flex-column">
        <span>Willkommen bei</span>
        <span>der genialen <span id="welcomeTextLanguage">HTML</span> Quiz-App</span>
    </div>
    <div class="welcome_text_subtitel">
        <span>Wähle deine Rubrik</span>
    </div>
    <button class="btn btn-primary my-button d-flex align-items-center justify-content-evenly position-absolute bottom-0 mb-3 end-0 me-3 border-0" type="button" onclick="startQuiz()">JETZT STARTEN<img src="./img/right-24.png" alt=""></button>
`;


/**
 * Quiz Questions Screen
 * @returns html code
 */
const cardTemplate = () => /*html*/ `
    <div class="card-body text-center d-flex flex-column h-100 w-100 position-relative" id="questionBody">
        <h5 class="card-title w-75" id="questiontext">Frage</h5>
        <div class="d-flex flex-column align-items-center">
            <div class="card quiz-answer-card mb-4" onclick="answer('answer_1')">
                <div class="card-letter ms-2" id="answerLetter_1">A</div>
                <div class="card-body ms-3" id="answer_1">Antwort</div>
            </div>
            <div class="card quiz-answer-card mb-4" onclick="answer('answer_2')">
                <div class="card-letter ms-2" id="answerLetter_2">B</div>
                <div class="card-body ms-3" id="answer_2">Antwort</div>
            </div>
            <div class="card quiz-answer-card mb-4" onclick="answer('answer_3')">
                <div class="card-letter ms-2" id="answerLetter_3">C</div>
                <div class="card-body ms-3" id="answer_3">Antwort</div>
            </div>
            <div class="card quiz-answer-card mb-4" onclick="answer('answer_4')">
                <div class="card-letter ms-2" id="answerLetter_4">D</div>
                <div class="card-body ms-3" id="answer_4">Antwort</div>
            </div>
            <div class="question-footer ">
                <span>
                    <b id="question-number">1</b> von <b id="all-Questions">5</b> Fragen
                </span>
            </div>
        </div>
        <div class="navigation-footer d-flex flex-row justify-content-between">
            <div><button class="btn navigation-left bg-transparent border-0 position-absolute" id="prev-button" disabled onclick="prevQuestion()">
                <img src="./img/left-25.png" alt=""></button></div>
            <div><button class="btn navigation-right bg-transparent border-0 position-absolute" id="next-button" disabled
                    onclick="nextQuestion()"><img src="./img/right-25.png" alt=""></button></div>
        </div>
    </div>
`

/**
 * Final screen with analysis and option to restart
 * @returns html code
 */
const endScreenTemplate = () => /*html*/ `
    <div class="d-flex flex-column justify-content-evenly align-items-center w-100 h-100 finale">
        <img src="./img/brain result.png" alt="">
        <div class="text-center">FERTIG<br><span id="currentLanguage">HTML</span> <span>QUIZ</span></div>
        <div><span class="text-warning font-weight-700">YOUR SCORE</span>&nbsp; &nbsp;<span id="rightQuestions">10</span>/<span id="totalQuestions">10</span></div>
        <button class="btn btn-primary" onclick="restartQuizApp()">SPIEL NEU STARTEN</button>
    </div>
    <img src="./img/tropy.png" class="position-fixed end-0 d-sm-block d-none" alt="">
`;
