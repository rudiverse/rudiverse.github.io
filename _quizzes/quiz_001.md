---
title: "First Quiz (capital guessing)"
language: english
---
{% include quiz_data_first_quiz.html %}
<quiz>
    <button id="loadQuizButton" onclick="startQuiz('loadQuizButton')" class="quiz_button">Start</button>
    <h3 id="quiz_question"></h3>
    <div id="quiz_answers"></div>
    <div id="quiz_submit_button"></div>
    <div id="quiz_evaluation"></div>
    <div id="quiz_evaluation_correct_answers" class="quiz_evaluation_correct"></div>
    <div id="quiz_evaluation_wrong_answers" class="quiz_evaluation_wrong"></div>
    <div id="quiz_next_button"></div>
</quiz>