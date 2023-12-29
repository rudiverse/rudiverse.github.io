---
title: "Music Quiz"
language: mixed languages
---
{% include quiz_data_music_mixed.html %}
<quiz onload="startQuiz('loadQuizButton')">
    <button id="loadQuizButton" onclick="startQuiz('loadQuizButton')" class="quiz_button">Start</button>
    <h3 id="quiz_question"></h3>
    <div id="quiz_answers"></div>
    <div id="quiz_submit_button"></div>
    <div id="quiz_evaluation"></div>
    <div id="quiz_next_button"></div>
</quiz>