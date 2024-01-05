/// quiz.js
/// contains scripts to generate a quiz

let correctAnswers = 0
let wrongAnswers = 0

function getText(name) {
    let langTexts = quizMetadata.find(x => x.language == getLanguage()).texts
    let textObject = langTexts.find(x => x.name == name)
    let text = textObject.value
    return text
}

function startQuiz() {
    randomise(quizData)

    buildQuiz(0)
}

function buildQuiz(quizItemIndex) {
    const nextButtonElement = document.getElementById("quiz_next_button")
    nextButtonElement.replaceChildren()

    const evaluationElement = document.getElementById("quiz_evaluation")
    evaluationElement.replaceChildren()

    let quizItem = quizData[quizItemIndex]

    const instructionElement = document.getElementById("quiz_instruction")
    if (instructionElement != null) {
        instructionElement.innerHTML = quizItem.instruction ?? ""
    }

    const questionElement = document.getElementById("quiz_question")
    questionElement.innerHTML = quizItem.question

    const answerSingleChoiceElement = document.getElementById("quiz_answers_ul")
    answerSingleChoiceElement.replaceChildren()

    const answerInputContainer = document.getElementById("answer_type_text_input")

    if (quizItem.answer != null) {
        buildTextInputAnswerElements(quizItemIndex)
        answerInputContainer.style = "display:inline-block"
    } else {
        buildSingleChoiceAnswers(quizItem, quizItemIndex)
        answerInputContainer.style = "display:none"
    }
}

function buildTextInputAnswerElements(quizItemIndex) {
    const answerInputElement = document.getElementById("quiz_answer_text")
    answerInputElement.value = ""

    let evalButton = document.createElement("button")
    evalButton.className = "quiz_button"

    evalButton.setAttribute('onclick', "evaluateQuestionTextInput(" + quizItemIndex + ")")
    evalButton.innerHTML = "GO"

    const evalButtonElement = document.getElementById("quiz_evaluate_button_answer_text")
    evalButtonElement.appendChild(evalButton)
}

function buildSingleChoiceAnswers(quizItem, quizItemIndex) {
    randomise(quizItem.answers)

    const answerElement = document.getElementById("quiz_answers_ul")

    quizItem.answers.forEach(item => {
        var answerItem = document.createElement("li");
        var a = document.createElement("a");

        a.textContent = item.answer
        let evaluateLink = 'javascript:evaluateQuestion(' + quizItemIndex + ',"' + item.answer + '")'
        a.setAttribute('href', evaluateLink);
        a.className = "quiz_answer_button"

        answerItem.appendChild(a)
        answerElement.appendChild(answerItem)
    });
}

function evaluateQuestionTextInput(quizItemIndex) {
    const answerInputElement = document.getElementById("quiz_answer_text")
    let answer = answerInputElement.value

    let quizItem = quizData[quizItemIndex]

    let isAnswerCorrect = ciEquals(answer, quizItem.answer)

    showEvaluation(isAnswerCorrect, quizItemIndex)
}

function evaluateQuestion(quizItemIndex, answerSelected) {
    let quizItem = quizData[quizItemIndex]
    let answerFound = quizItem.answers.find(x => x.answer == answerSelected)

    const answerElement = document.getElementById("quiz_answers_ul")
    answerElement.replaceChildren()

    quizItem.answers.forEach(item => {
        var answerItem = document.createElement("li");

        answerItem.innerHTML = item.answer

        if (item.valid) {
            answerItem.className = "quiz_answer_correct"
        } else if (item.answer == answerSelected) {
            answerItem.className = "quiz_answer_wrong"
        } else {
            answerItem.className = "quiz_answer_button"
        }

        answerElement.appendChild(answerItem)
    });

    showEvaluation(answerFound.valid, quizItemIndex)
}

function showEvaluation(isAnswerCorrect, quizItemIndex) {
    const evaluationElement = document.getElementById("quiz_evaluation")

    if (isAnswerCorrect) {
        correctAnswers++
        evaluationElement.innerHTML = getText("evaluateCorrectAnswer")
        evaluationElement.className = "quiz_evaluation_correct"
    } else {
        wrongAnswers++
        evaluationElement.innerHTML = getText("evaluateWrongAnswer")
        evaluationElement.className = "quiz_evaluation_wrong"
    }

    let nextButton = document.createElement("button")
    nextButton.className = "quiz_button"

    if (quizItemIndex >= quizData.length - 1) {
        nextButton.setAttribute('onclick', "evaluateQuiz()")
        nextButton.innerHTML = getText("evaluateQuiz")
    } else {
        nextButton.setAttribute('onclick', "buildQuiz(" + (quizItemIndex + 1) + ")")
        nextButton.innerHTML = "NEXT"
    }

    const nextButtonElement = document.getElementById("quiz_next_button")
    nextButtonElement.appendChild(nextButton)
}

function evaluateQuiz() {
    const nextButtonElement = document.getElementById("quiz_next_button")
    nextButtonElement.replaceChildren()

    const evaluationElement = document.getElementById("quiz_evaluation")
    evaluationElement.replaceChildren()

    const questionElement = document.getElementById("quiz_question")
    questionElement.replaceChildren()

    const answerElement = document.getElementById("quiz_answers_ul")
    answerElement.replaceChildren()

    const evaluationCorrectElement = document.getElementById("quiz_evaluation_correct_answers")
    evaluationCorrectElement.innerHTML = getText("evaluateAllCorrectAnswered").replace('{#}', correctAnswers)
    const evaluationWrongElement = document.getElementById("quiz_evaluation_wrong_answers")
    evaluationWrongElement.innerHTML = getText("evaluateAllWrongAnswered").replace('{#}', wrongAnswers)
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

function ciEquals(a, b) {
    return typeof a === 'string' && typeof b === 'string'
        ? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
        : a === b;
}