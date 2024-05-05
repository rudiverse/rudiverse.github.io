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
        question: "Which song claims that love, hope, and friends are defective?",
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
    },
    {
        question: "What lies closest to the equator?",
        answers: [
            {
                answer: "Wellington, New Zealand",
                info: "-41.28",
                valid: false
            },
            {
                answer: "Madrid, Spain",
                info: "40.4",
                valid: false
            },
            {
                answer: "Istanbul, Turkey",
                info: "41.01",
                valid: false
            },
            {
                answer: "Tokyo, Japan",
                info: "35.7",
                valid: true
            },
        ],
    },
    {
        question: "What is furthest away from the equator?",
        answers: [
            {
                answer: "Wellington, New Zealand",
                info: "-41.28",
                valid: true
            },
            {
                answer: "Madrid, Spain",
                info: "40.4",
                valid: false
            },
            {
                answer: "Istanbul, Turkey",
                info: "41.01",
                valid: false
            },
            {
                answer: "Tokyo, Japan",
                info: "35.7",
                valid: false
            },
        ],
    },
    {
        question: "What divides New Zealand's North & South Islands?",
        answers: [
            {
                answer: "Tory Strait",
                valid: true
            },
            {
                answer: "Pacific Ocean",
                valid: false
            },
            {
                answer: "Tasman Sea",
                valid: false
            },
            {
                answer: "Atlantic Ocean",
                valid: false
            },
        ],
    },
    {
        question: "What lies between New Zealand and Australia?",
        answers: [
            {
                answer: "Tory Strait",
                valid: false
            },
            {
                answer: "Pacific Ocean",
                valid: false
            },
            {
                answer: "Tasman Sea",
                valid: true
            },
            {
                answer: "Indian Ocean",
                valid: false
            },
        ],
    },
    {
        question: "What is Australia's southernmost state?",
        answers: [
            {
                answer: "New South Wales",
                valid: false
            },
            {
                answer: "Victoria",
                valid: false
            },
            {
                answer: "Tasmania",
                valid: true
            },
            {
                answer: "South Australia",
                valid: false
            },
        ],
    },
]

startQuiz()