// define quiz metadata
const quizMetadata = [
    {
        language: "en",
        texts: [
            {
                name: "loadQuizButton",
                value: "Load Quiz"
            },
            {
                name: "evaluateCorrectAnswer",
                value: "Well done, you nailed it!"
            },
            {
                name: "evaluateWrongAnswer",
                value: "Oh no, you need to study more."
            }
        ]
    },
    {
        language: "de",
        texts: [
            {
                name: "loadQuizButton",
                value: "Quiz laden"
            },
            {
                name: "evaluateCorrectAnswer",
                value: "Super, perfekt!"
            },
            {
                name: "evaluateWrongAnswer",
                value: "Oh nein, leider falsch."
            }
        ]
    },
    {
        language: "bar",
        texts: [
            {
                name: "loadQuizButton",
                value: "Quiz lodn"
            },
            {
                name: "evaluateCorrectAnswer",
                value: "Basst, sauguad!"
            },
            {
                name: "evaluateWrongAnswer",
                value: "Schmarrn!"
            }
        ]
    }
]

// const quizMetadata = {
//     en: {
//         loadQuizButton: "Load Quiz",
//         goButton: "GO",
//         nextButton: "NEXT",
//         evaluateCorrectAnswer: "Well done, you nailed it!",
//         evaluateWrongAnswer: "Oh no, you need to study more."
//     },
//     de: {
//         loadQuizButton: "Quiz laden",
//         goButton: "GO",
//         nextButton: "NEXT",
//         evaluateCorrectAnswer: "Super, perfekt!",
//         evaluateWrongAnswer: "Oh nein, leider falsch."
//     },
//     bar: {
//         loadQuizButton: "Quiz lodn",
//         goButton: "GO",
//         nextButton: "NEXT",
//         evaluateCorrectAnswer: "Basst, sauguad!",
//         evaluateWrongAnswer: "Schmarrn!"
//     }
// }

// define quiz questions and answers
const quizData = [
    {
        question: "What is the capital of Bavaria?",
        answers: [
            {
                answer: "Munich",
                valid: true
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
                valid: false
            },
        ]
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