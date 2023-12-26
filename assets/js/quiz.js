/// quiz.js
/// contains scripts to generate a quiz

let answerSelected = ""

/// buildQuiz
function buildQuiz(btnToHideId) {
    const btnToHide = document.getElementById(btnToHideId)
    btnToHide.style.display = "none";

    let quizItemIndex = Math.floor(Math.random() * quizData.length)
    let quizItem = quizData[quizItemIndex]

    const questionElement = document.getElementById("quiz_question")
    questionElement.innerHTML = quizItem.question

    const answerElement = document.getElementById("quiz_answers")

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
    submitButton.innerHTML = "Go"
    answerElement.appendChild(submitButton)
}

function evaluateQuestion(quizItemIndex) {
    alert("You clicked on answer " + answerSelected + " of question " + (quizItemIndex + 1))

    let quizItem = quizData[quizItemIndex]
    let answerFound = quizItem.answers.find(x => x.answer == answerSelected)

    const evaluationElement = document.getElementById("quiz_evaluation")

    if (answerFound.valid) {
        evaluationElement.innerHTML = "Well done, you nailed it!"
    } else {
        evaluationElement.innerHTML = "Oh no, you need to study more."
    }



}