/// quiz.js
/// contains scripts to generate a quiz

let answerSelected = ""

function startQuiz(btnToHideId) {
    if (btnToHideId != "") {
        const btnToHide = document.getElementById(btnToHideId)
        btnToHide.style.display = "none";
    }

    buildQuiz(-1)
}

function buildQuiz(skipQuestionId) {
    const nextButtonElement = document.getElementById("quiz_next_button")
    nextButtonElement.replaceChildren()
    
    const evaluationElement = document.getElementById("quiz_evaluation")
    evaluationElement.replaceChildren()

    let quizItemIndex = Math.floor(Math.random() * quizData.length)
    while (quizItemIndex == skipQuestionId) {
        quizItemIndex = Math.floor(Math.random() * quizData.length)
    }
    let quizItem = quizData[quizItemIndex]

    const questionElement = document.getElementById("quiz_question")
    questionElement.innerHTML = quizItem.question

    const answerElement = document.getElementById("quiz_answers")
    answerElement.replaceChildren()

    quizItem.answers.forEach((item, index) => {
        var answerId = "answer_" + index
        var answerContainer = document.createElement("p");

        var answerInput = document.createElement("input");
        answerInput.type = "radio"
        answerInput.value = item.answer
        answerInput.name = "answer_option"
        answerInput.id = answerId

        answerInput.addEventListener('change', function () {
            answerSelected = this.value
        });

        answerContainer.appendChild(answerInput)

        var answerLabel = document.createElement("label");
        answerLabel.setAttribute('for', answerId)
        answerLabel.innerHTML = item.answer
        answerContainer.appendChild(answerLabel)

        answerElement.appendChild(answerContainer)
    });

    var submitButton = document.createElement("button")
    submitButton.setAttribute('onclick', "evaluateQuestion(" + quizItemIndex + ")")
    submitButton.innerHTML = "GO"
    submitButton.className = "quiz_button"

    const submitButtonElement = document.getElementById("quiz_submit_button")
    submitButtonElement.appendChild(submitButton)
}

function evaluateQuestion(quizItemIndex) {
    const submitButtonElement = document.getElementById("quiz_submit_button")
    submitButtonElement.replaceChildren()

    let quizItem = quizData[quizItemIndex]
    let answerFound = quizItem.answers.find(x => x.answer == answerSelected)

    const evaluationElement = document.getElementById("quiz_evaluation")

    if (answerFound.valid) {
        evaluationElement.innerHTML = "Well done, you nailed it!"
        evaluationElement.className = "quiz_evaluation_correct"
    } else {
        evaluationElement.innerHTML = "Oh no, you need to study more."
        evaluationElement.className = "quiz_evaluation_wrong"
    }

    var nextButton = document.createElement("button")
    nextButton.setAttribute('onclick', "buildQuiz(" + quizItemIndex + ")")
    nextButton.innerHTML = "NEXT"
    nextButton.className = "quiz_button"

    const nextButtonElement = document.getElementById("quiz_next_button")
    nextButtonElement.appendChild(nextButton)
}