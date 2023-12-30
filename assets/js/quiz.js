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

    const questionElement = document.getElementById("quiz_question")
    questionElement.innerHTML = quizItem.question

    randomise(quizItem.answers)

    const answerElement = document.getElementById("quiz_answers_ul")
    answerElement.replaceChildren()

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

    // var submitButton = document.createElement("button")
    // submitButton.setAttribute('onclick', "evaluateQuestion(" + quizItemIndex + ")")
    // submitButton.innerHTML = "GO"
    // submitButton.className = "quiz_button"

    // const submitButtonElement = document.getElementById("quiz_submit_button")
    // submitButtonElement.appendChild(submitButton)
}

function evaluateQuestion(quizItemIndex, answerSelected) {
    // const submitButtonElement = document.getElementById("quiz_submit_button")
    // submitButtonElement.replaceChildren()

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