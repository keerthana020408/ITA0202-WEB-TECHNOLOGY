/* =====================================================
   EXPERIMENT 7
   ONLINE QUIZ APPLICATION
===================================================== */


/* ================= QUIZ DATA ================= */

/* ARRAY OF OBJECTS */

const questions = [

    {
        question:
            "Which language is used to structure a web page?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],

        answer: "HTML"
    },


    {
        question:
            "Which technology is used to style a web page?",

        options: [
            "HTML",
            "CSS",
            "Java",
            "SQL"
        ],

        answer: "CSS"
    },


    {
        question:
            "Which language is mainly used to add interactivity to websites?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "XML"
        ],

        answer: "JavaScript"
    },


    {
        question:
            "Which HTML tag is used to create a hyperlink?",

        options: [
            "<p>",
            "<a>",
            "<h1>",
            "<img>"
        ],

        answer: "<a>"
    },


    {
        question:
            "Which CSS property is used to change text color?",

        options: [
            "font-size",
            "background",
            "color",
            "text-style"
        ],

        answer: "color"
    },


    {
        question:
            "Which method is used to select an element by its ID?",

        options: [
            "getElementById()",
            "getElement()",
            "queryId()",
            "selectId()"
        ],

        answer: "getElementById()"
    },


    {
        question:
            "Which keyword is used to declare a constant in JavaScript?",

        options: [
            "var",
            "let",
            "const",
            "constant"
        ],

        answer: "const"
    },


    {
        question:
            "Which symbol is used for a single-line comment in JavaScript?",

        options: [
            "//",
            "/* */",
            "#",
            "<!-- -->"
        ],

        answer: "//"
    },


    {
        question:
            "Which CSS layout system is useful for two-dimensional layouts?",

        options: [
            "Flexbox",
            "Grid",
            "Float",
            "Inline"
        ],

        answer: "Grid"
    },


    {
        question:
            "Which event occurs when a user clicks an element?",

        options: [
            "onload",
            "onchange",
            "onclick",
            "onsubmit"
        ],

        answer: "onclick"
    }

];



/* ================= VARIABLES ================= */

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;



/* ================= HTML ELEMENTS ================= */

const questionNumber =
    document.getElementById("questionNumber");


const questionText =
    document.getElementById("questionText");


const optionsContainer =
    document.getElementById("optionsContainer");


const nextButton =
    document.getElementById("nextButton");


const progressBar =
    document.getElementById("progressBar");


const liveScore =
    document.getElementById("liveScore");


const quizCard =
    document.querySelector(".quiz-card");


const resultCard =
    document.getElementById("resultCard");


const finalScore =
    document.getElementById("finalScore");


const resultMessage =
    document.getElementById("resultMessage");


const resultDetails =
    document.getElementById("resultDetails");


const restartButton =
    document.getElementById("restartButton");



/* ================= DISPLAY QUESTION ================= */

function displayQuestion() {


    const current =
        questions[currentQuestion];


    /* QUESTION NUMBER */

    questionNumber.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;


    /* QUESTION TEXT */

    questionText.textContent =
        current.question;


    /* RESET ANSWER */

    selectedAnswer = null;


    /* CLEAR OLD OPTIONS */

    optionsContainer.innerHTML = "";


    /* LOOP THROUGH OPTIONS */

    for (
        let i = 0;
        i < current.options.length;
        i++
    ) {


        const option =
            document.createElement("div");


        option.className = "option";


        option.innerHTML = `

            <span class="option-number">
                ${String.fromCharCode(65 + i)}
            </span>

            <span class="option-text">
                ${current.options[i]}
            </span>

        `;


        /* EVENT LISTENER */

        option.addEventListener(
            "click",
            function() {

                selectOption(
                    option,
                    current.options[i]
                );

            }
        );


        optionsContainer.appendChild(option);

    }


    /* UPDATE PROGRESS */

    const progress =
        ((currentQuestion + 1) /
            questions.length) * 100;


    progressBar.style.width =
        progress + "%";


    /* BUTTON TEXT */

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "Finish Quiz ✓";

    }

    else {

        nextButton.textContent =
            "Next Question →";

    }

}



/* ================= SELECT OPTION ================= */

function selectOption(
    optionElement,
    answer
) {


    /* REMOVE PREVIOUS SELECTION */

    const allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(
        function(option) {

            option.classList.remove(
                "selected"
            );

        }
    );


    /* SELECT CURRENT OPTION */

    optionElement.classList.add(
        "selected"
    );


    selectedAnswer = answer;

}



/* ================= NEXT QUESTION ================= */

function nextQuestion() {


    /* VALIDATION */

    if (selectedAnswer === null) {

        alert(
            "Please select an answer before continuing."
        );

        return;

    }


    /* CHECK ANSWER */

    const correctAnswer =
        questions[currentQuestion].answer;


    if (selectedAnswer === correctAnswer) {

        score++;

    }


    /* UPDATE SCORE */

    liveScore.textContent =
        score;


    /* MOVE TO NEXT QUESTION */

    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        displayQuestion();

    }

    else {

        showResult();

    }

}



/* ================= SHOW RESULT ================= */

function showResult() {


    quizCard.style.display =
        "none";


    resultCard.classList.add(
        "show"
    );


    finalScore.textContent =
        score;


    const percentage =
        (score / questions.length) * 100;


    /* CONDITIONAL STATEMENTS */

    if (percentage >= 90) {

        resultMessage.textContent =
            "🏆 Outstanding Performance!";

        resultDetails.textContent =
            "Excellent! You have a strong understanding of Web Technology.";

    }

    else if (percentage >= 70) {

        resultMessage.textContent =
            "🌟 Excellent Work!";

        resultDetails.textContent =
            "Very good performance. Keep improving your technical skills.";

    }

    else if (percentage >= 50) {

        resultMessage.textContent =
            "👍 Good Attempt!";

        resultDetails.textContent =
            "You have a good foundation. Practice more to improve your score.";

    }

    else {

        resultMessage.textContent =
            "📚 Keep Learning!";

        resultDetails.textContent =
            "Review the concepts and try the quiz again.";

    }

}



/* ================= NEXT BUTTON EVENT ================= */

nextButton.addEventListener(
    "click",
    nextQuestion
);



/* ================= RESTART QUIZ ================= */

function restartQuiz() {


    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;


    liveScore.textContent =
        "0";


    resultCard.classList.remove(
        "show"
    );


    quizCard.style.display =
        "block";


    displayQuestion();

}



/* ================= RESTART EVENT ================= */

restartButton.addEventListener(
    "click",
    restartQuiz
);



/* ================= START QUIZ ================= */

displayQuestion();