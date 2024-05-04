// define quiz questions and answers
let quizData = [
    {
        question: 'Von wem stammt: "Wenn ich so philosophier, bei ein paar Flaschen Bier, versunken in absurden Gedanken, kommt mein Bewusstsein ins Wanken"?',
        answers: [
            {
                answer: "Schariwari",
                valid: true
            },
            {
                answer: "STS",
                valid: false
            },
            {
                answer: "Haindling",
                valid: false
            },
            {
                answer: "Werner Schmidbauer",
                valid: false
            },
        ]
    },
    {
        question: 'Von wem stammt: "De Zeit is reif, reif für neue Ideen. Längst is uns des jetzige Dosei, zu unbequem"?',
        answers: [
            {
                answer: "Schariwari",
                valid: true
            },
            {
                answer: "STS",
                valid: false
            },
            {
                answer: "Haindling",
                valid: false
            },
            {
                answer: "Werner Schmidbauer",
                valid: false
            },
        ]
    },
    {
        question: 'Von wem stammt: "Wenn der Franz aus dem Fenster springt, fällt er nach oben"?',
        source: "https://www.sueddeutsche.de/sport/franz-beckenbauer-tod-reaktionen-1.6329971",
        answers: [
            {
                answer: "Wilhelm Busch",
                valid: false
            },
            {
                answer: "Sepp Maier",
                valid: true
            },
            {
                answer: "Max Merkel",
                valid: false
            },
            {
                answer: "Werner Schmidbauer",
                valid: false
            },
        ]
    },
    {
        question: 'Von wem stammt: "Regen foit auf Milos, und i stej ma vor, wias an Regntagn mit dir woa"?',
        answers: [
            {
                answer: "Schariwari",
                valid: false
            },
            {
                answer: "STS",
                valid: true
            },
            {
                answer: "Haindling",
                valid: false
            },
            {
                answer: "Werner Schmidbauer",
                valid: false
            },
        ]
    },
    {
        question: 'Wer war mit Werner Schmidbauer und Martin Kälberer auf der Tournee "Süden"?',
        answers: [
            {
                answer: "Franz Beckenbauer",
                valid: false
            },
            {
                answer: "Sepp Maier",
                valid: false
            },
            {
                answer: "Toto Schilacci",
                valid: false
            },
            {
                answer: "Pippo Pollina",
                valid: true
            },
        ]
    },
    {
        question: 'Von wem stammt: "Des warn da Muihiasl, da Stormberger, und da Irlmaier"?',
        answers: [
            {
                answer: "Schariwari",
                valid: false
            },
            {
                answer: "STS",
                valid: false
            },
            {
                answer: "Haindling",
                valid: true
            },
            {
                answer: "Werner Schmidbauer",
                valid: false
            },
        ]
    },
    {
        question: 'Wo wurde Willi Resetarits geboren?',
        answers: [
            {
                answer: "Stinatz, Burgenland",
                valid: true
            },
            {
                answer: "Fürstenfeld, Steiermark",
                valid: false
            },
            {
                answer: "Wien",
                valid: false
            },
            {
                answer: "Salzburg",
                valid: false
            },
        ]
    },
    {
        question: 'Welche Sprache lernten Lukas und Willi Resetarits zuerst?',
        answers: [
            {
                answer: "Kroatisch",
                valid: true
            },
            {
                answer: "Wienerisch",
                valid: false
            },
            {
                answer: "Deutsch",
                valid: false
            },
            {
                answer: "Burgenländisch",
                valid: false
            },
        ]
    },
    {
        question: 'Wessen Idee war die Kunstfigur Ostbahn Kurti?',
        answers: [
            {
                answer: "Willi Resetarits",
                valid: false
            },
            {
                answer: "Günter Brödl",
                valid: true
            },
            {
                answer: "Peter Patzak",
                valid: false
            },
            {
                answer: "Helmut Zenker",
                valid: false
            },
        ]
    },
    {
        instruction: "Was sprayte der Wiener Schriftsteller, Songtexter und Musikjournalist Günter Brödl auf Autobahnbrücken?",
        question: "Kurt _____ lebt",
        answer: "Ostbahn"
    },
    {
        question: 'Welcher Künstler verkörperte den Ostbahn Kurti?',
        answers: [
            {
                answer: "Willi Resetarits",
                valid: true
            },
            {
                answer: "Lukas Resetarits",
                valid: false
            },
            {
                answer: "Peter Patzak",
                valid: false
            },
            {
                answer: "Helmut Zenker",
                valid: false
            },
        ]
    },
    {
        question: 'Welcher Schauspieler und Kabarattist spielte Polizeimajor Adolf Kottan?',
        answers: [
            {
                answer: "Willi Resetarits",
                valid: false
            },
            {
                answer: "Lukas Resetarits",
                valid: true
            },
            {
                answer: "Peter Patzak",
                valid: false
            },
            {
                answer: "Helmut Zenker",
                valid: false
            },
        ]
    },
    {
        question: 'Wer schrieb die Satire um den Wiener Polizeimajor Adolf Kottan?',
        answers: [
            {
                answer: "Willi Resetarits",
                valid: false
            },
            {
                answer: "Lukas Resetarits",
                valid: false
            },
            {
                answer: "Peter Patzak",
                valid: false
            },
            {
                answer: "Helmut Zenker",
                valid: true
            },
        ]
    },
    {
        question: 'Wer führte die Regie in "Kottan ermittelt"?',
        answers: [
            {
                answer: "Willi Resetarits",
                valid: false
            },
            {
                answer: "Lukas Resetarits",
                valid: false
            },
            {
                answer: "Peter Patzak",
                valid: true
            },
            {
                answer: "Helmut Zenker",
                valid: false
            },
        ]
    }
]

startQuiz()