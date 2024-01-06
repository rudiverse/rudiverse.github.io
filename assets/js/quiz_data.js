// define quiz questions and answers
let quizData = [
    {
        instruction: "Add the missing word in this quote from the book <i>Four Thousand Weeks</i>, by Oliver Burkeman",
        question: "What you pay attention to will define, for you, what _____ is",
        answer: "reality"
    },
    {
        instruction: "Add the missing word in this quote from the book <i>Four Thousand Weeks</i>, by Oliver Burkeman",
        question: "_____ gets its energy from the permanent anxiety of striving for more",
        answer: "capitalism"
    },
    {
        instruction: "Add the missing word in this quote from <i>The River</i>, by Bruce Springsteen",
        question: "Is a dream a _____ if it don't come true? Or is it something worse?",
        answer: "lie"
    },
    {
        question: "Which song claims that love, hope, and friends, are defective?",
        answers: [
            {
                answer: "The End, by The Doors",
                valid: false
            },
            {
                answer: "Life Is a Lemon ..., by Meat Loaf",
                valid: true
            },
            {
                answer: "The Crystal Ship, by The Doors",
                valid: false
            },
            {
                answer: "Dogs, by Pink Floyd",
                valid: false
            },
        ]
    },
    {
        question: "Who complained bitterly about the constant prayers and the fear of god at the Jesuit school Belén college?",
        answers: [
            {
                answer: "Raúl Castro",
                valid: true
            },
            {
                answer: "Fidel Castro",
                valid: false
            },
            {
                answer: "Bill Clinton",
                valid: false
            },
            {
                answer: "Benito Mussolini",
                valid: false
            },
        ],
        source: "The Real Fidel Castro (book)",
        source_sub: "Leycester Coltman (author)"
    },
    {
        question: "Who graduated successfully from the Jesuit school Belén college?",
        answers: [
            {
                answer: "Bill Clinton",
                valid: false
            },
            {
                answer: "Fidel Castro",
                valid: true
            },
            {
                answer: "Joe Biden",
                valid: false
            },
            {
                answer: "Benito Mussolini",
                valid: false
            },
        ],
        source: "The Real Fidel Castro (book)",
        source_sub: "Leycester Coltman (author)"
    }
]

startQuiz()