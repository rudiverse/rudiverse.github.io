---
title: "Deutschsprachiges Quiz"
language: deutsch
---
<quiz>
    <h3 id="quiz_instruction"></h3>
    <h2 id="quiz_question"></h2>
    <div id="answer_type_text_input">
        <input type="text" autocomplete="off" autocorrect="off" dir="ltr" id="quiz_answer_text" maxlength="64" name="quiz_answer_text" placeholder="" spellcheck="false" title="Answer" value="">
        <button id="quiz_evaluate_button_answer_text" class="quiz_button">GO</button>
    </div>
    <div id="answer_type_single_choice">
        <ul id="quiz_answers_ul" class="quiz_answers">
        </ul>
    </div>
    <div id="quiz_evaluation"></div>
    <div id="quiz_evaluation_correct_answers" class="quiz_evaluation_correct"></div>
    <div id="quiz_evaluation_wrong_answers" class="quiz_evaluation_wrong"></div>
    <div id="quiz_next_button"></div>
</quiz>

<script language="javascript" src="/assets/js/quiz_data_german.js"></script>