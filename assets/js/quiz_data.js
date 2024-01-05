// define quiz questions and answers
let quizData = [
    {
        instruction: "Add the missing word in this quote from Four Thousand Weeks, by Oliver Burkeman",
        question: "What you pay attention to will define, for you, what _____ is",
        answer: "reality"
    },
    {
        instruction: "Add the missing word in this quote from Four Thousand Weeks, by Oliver Burkeman",
        question: "_____ gets its energy from the permanent anxiety of striving for more",
        answer: "capitalism"
    },
    {
        instruction: "Add the missing word in this quote from The River, by Bruce Springsteen",
        question: "Is a dream a _____ if it don't come true? Or is it something worse?",
        answer: "lie"
    },
    {
        question: "What is the capital of Austria?",
        answers: [
            {
                answer: "Munich",
                valid: false
            },
            {
                answer: "Vienna",
                valid: true
            },
            {
                answer: "Berlin",
                valid: false
            },
            {
                answer: "Landshut",
                valid: false
            },
        ]
    },
    {
        question: "What is the capital of Lower Bavaria?",
        answers: [
            {
                answer: "Munich",
                valid: false
            },
            {
                answer: "Vienna",
                valid: false
            },
            {
                answer: "Berlin",
                valid: false
            },
            {
                answer: "Landshut",
                valid: true
            },
        ]
    }
]

startQuiz()