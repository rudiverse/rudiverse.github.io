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
        instruction: "Add the missing surname",
        question: "After a decade of being the only \"beacon of Socialism\" in Latin America, Fidel Castro now had a friend and ally in Salvador _____, elected President of Chile.",
        answer: "Allende"
    },
    {
        question: "Who was elected President of Chile in 1970 at the head of a shaky left-wing coalition?",
        answers: [
            {
                answer: "Ernesto Che Guevara",
                valid: false
            },
            {
                answer: "Salvador Allende",
                valid: true
            },
            {
                answer: "Fidel Castro",
                valid: false
            },
            {
                answer: "Barack Obama",
                valid: false
            },
            {
                answer: "Angela Merkel",
                valid: false
            },
        ]
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
    {
        question: "On 2 January 1969, the tenth anniversary of the revolution, what did Fidel Castro ask a huge crowd in Revolution Square?",
        answers: [
            {
                answer: "Whether they would agree to have their sugar ration reduced",
                valid: true
            },
            {
                answer: "Whether Cuba should adopt a Soviet style communism",
                valid: false
            },
            {
                answer: "Whether Cuba should claim back Guantanamo Bay from the USA",
                valid: false
            },
            {
                answer: "Whether they wanted free universal healthcare",
                valid: false
            },
        ],
    },
    {
        question: "In 1969, ten years after the Cuban revolution, what did Cubans NOT have?",
        answers: [
            {
                answer: "Fish from street vendors",
                valid: true
            },
            {
                answer: "Free medical treatment",
                valid: false
            },
            {
                answer: "Free meals for schoolchildren",
                valid: false
            },
            {
                answer: "Smart school uniforms",
                valid: false
            },
        ],
    },
    {
        question: "In Cuba, who was sometimes mistaken for the commander in chief, because of their similar appearance and gestures?",
        answers: [
            {
                answer: "Ramón Castro",
                valid: true
            },
            {
                answer: "Raúl Castro",
                valid: false
            },
            {
                answer: "Fidel Castro",
                valid: false
            },
            {
                answer: "Ernesto Che Guevara",
                valid: false
            },
        ],
    },
]

startQuiz()