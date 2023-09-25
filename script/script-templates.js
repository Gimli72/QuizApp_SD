// @ts-check


const welcomeTemplate = () => /*html*/ `
    <div class="welcome_text">
        <span>Willkommen bei</span>
        <span>dem genialen <span id="welcomeTextLanguage">HTML</span> Quiz-App</span>
    </div>
    <div class="welcome_text_subtitel">
        <span>Wähle deine Rubrik</span>
    </div>
    <button class="btn btn-primary my-button" type="button" onclick="startQuiz()">JETZT STARTEN&nbsp; &nbsp;></button>
`;


const cardTemplate = () => /*html*/ `
    <div class="card-body text-center" id="questionBody">
        <h5 class="card-title" id="questiontext">Frage</h5>
        <div class="d-flex flex-column align-items-center">
            <div class="card quiz-answer-card mb-4" onclick="answer('answer_1')">
                <div class="card-letter" id="answerLetter_1">A</div>
                <div class="card-body ms-3" id="answer_1">Antwort</div>
            </div>
            <div class="card quiz-answer-card mb-4" onclick="answer('answer_2')">
                <div class="card-letter" id="answerLetter_2">B</div>
                <div class="card-body ms-3" id="answer_2">Antwort</div>
            </div>
            <div class="card quiz-answer-card mb-4" onclick="answer('answer_3')">
                <div class="card-letter" id="answerLetter_3">C</div>
                <div class="card-body ms-3" id="answer_3">Antwort</div>
            </div>
            <div class="card quiz-answer-card mb-4" onclick="answer('answer_4')">
                <div class="card-letter" id="answerLetter_4">D</div>
                <div class="card-body ms-3" id="answer_4">Antwort</div>
            </div>
            <div class="question-footer">
                <span>
                    <b id="question-number">1</b> von <b id="all-Questions">5</b> Fragen
                </span>
            </div>
        </div>
        <div class="navigation-footer">
            <div><button class="btn navigation-left" id="prev-button" disabled onclick="prevQuestion()"><img
                        src="./img/left-25.png" alt=""></button></div>
            <div><button class="btn navigation-right" id="next-button" disabled
                    onclick="nextQuestion()"><img src="./img/right-25.png" alt=""></button></div>
        </div>
    </div>
`

const endScreenTemplate = () => /*html*/ `
    <div class="d-flex flex-column justify-content-evenly align-items-center w-100 h-100 finale">
            <img src="./img/brain result.png" alt="">
        </div>
        <div class="text-center">FERTIG<br><span id="currentLanguage">HTML</span> <span>QUIZ</span></div>
        <div><span class="text-warning font-weight-700">YOUR SCORE</span>&nbsp; &nbsp;<span id="rightQuestions">10</span>/<span id="totalQuestions">10</span></div>
        <button class="btn btn-primary" onclick="restartQuizApp()">SPIEL NEU STARTEN</button>
    </div>
    <img src="./img/tropy.png" class="position-fixed end-0" alt="">
`;
