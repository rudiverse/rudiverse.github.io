/// quiz.js
/// contains scripts to generate a quiz

let answerSelected = ""
let correctAnswers = 0
let wrongAnswers = 0

function getText(name) {
    let langTexts = quizMetadata.find(x => x.language == getLanguage()).texts
    let textObject = langTexts.find(x => x.name == name)
    let text = textObject.value
    return text
}

function startQuiz(btnToHideId) {
    if (btnToHideId != "") {
        const btnToHide = document.getElementById(btnToHideId)
        btnToHide.style.display = "none";
    }

    randomise(quizData)

    buildQuiz(0)
}

function buildQuiz(quizItemIndex) {
    const nextButtonElement = document.getElementById("quiz_next_button")
    nextButtonElement.replaceChildren()

    const evaluationElement = document.getElementById("quiz_evaluation")
    evaluationElement.replaceChildren()

    let quizItem = quizData[quizItemIndex]

    const questionElement = document.getElementById("quiz_question")
    questionElement.innerHTML = quizItem.question

    randomise(quizItem.answers)

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
            evaluateQuestion(quizItemIndex)
        });

        answerContainer.appendChild(answerInput)

        var answerLabel = document.createElement("label");
        answerLabel.setAttribute('for', answerId)
        answerLabel.innerHTML = item.answer
        answerContainer.appendChild(answerLabel)

        answerElement.appendChild(answerContainer)
    });

    // var submitButton = document.createElement("button")
    // submitButton.setAttribute('onclick', "evaluateQuestion(" + quizItemIndex + ")")
    // submitButton.innerHTML = "GO"
    // submitButton.className = "quiz_button"

    // const submitButtonElement = document.getElementById("quiz_submit_button")
    // submitButtonElement.appendChild(submitButton)
}

function evaluateQuestion(quizItemIndex) {
    const submitButtonElement = document.getElementById("quiz_submit_button")
    submitButtonElement.replaceChildren()

    let quizItem = quizData[quizItemIndex]
    let answerFound = quizItem.answers.find(x => x.answer == answerSelected)

    const evaluationElement = document.getElementById("quiz_evaluation")

    if (answerFound.valid) {
        correctAnswers++
        evaluationElement.innerHTML = getText("evaluateCorrectAnswer")
        evaluationElement.className = "quiz_evaluation_correct"
    } else {
        wrongAnswers++
        evaluationElement.innerHTML = getText("evaluateWrongAnswer")
        evaluationElement.className = "quiz_evaluation_wrong"
    }

    if (quizItemIndex >= quizData.length - 1) {
        const evaluationCorrectElement = document.getElementById("quiz_evaluation_correct_answers")
        evaluationCorrectElement.innerHTML = getText("evaluateAllCorrectAnswered").replace('{#}', correctAnswers)
        const evaluationWrongElement = document.getElementById("quiz_evaluation_wrong_answers")
        evaluationWrongElement.innerHTML = getText("evaluateAllWrongAnswered").replace('{#}', wrongAnswers)
    } else {
        var nextButton = document.createElement("button")
        nextButton.setAttribute('onclick', "buildQuiz(" + (quizItemIndex + 1) + ")")
        nextButton.innerHTML = "NEXT"
        nextButton.className = "quiz_button"

        const nextButtonElement = document.getElementById("quiz_next_button")
        nextButtonElement.appendChild(nextButton)
    }
}

// Randomise an array with the Fisher Yates method
// https://www.w3schools.com/js/js_array_sort.asp
function randomise(data) {
    for (let i = data.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = data[i];
        data[i] = data[j];
        data[j] = k;
    }
}