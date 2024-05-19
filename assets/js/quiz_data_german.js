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
    },
    {
        question: 'Wer sagte bei der Vorstellung der Band gewöhnlich: "Und i, i bin wia immer des letzte S"?',
        answers: [
            {
                answer: "Stefanie Werger",
                valid: false
            },
            {
                answer: "Werner Schmidbauer",
                valid: false
            },
            {
                answer: "Schiffkowitz",
                valid: true
            },
            {
                answer: "Gert Steinbäcker",
                valid: false
            },
        ]
    },
    {
        question: 'In welchem Land leb(t)en sowohl Werner Schmidbauer als auch Klaus Eberhartinger?',
        answers: [
            {
                answer: "Südafrika",
                valid: false
            },
            {
                answer: "Brasilien",
                valid: false
            },
            {
                answer: "Kenia",
                valid: true
            },
            {
                answer: "Kanada",
                valid: false
            },
        ]
    },
    {
        question: 'Wo wurde Werner Schmidbauer zu seinem "Strandliad" inspiriert?',
        answers: [
            {
                answer: "Algarve",
                valid: false
            },
            {
                answer: "Neuseeland",
                valid: false
            },
            {
                answer: "Kenia",
                valid: true
            },
            {
                answer: "Copacabana",
                valid: false
            },
        ]
    },
    {
        question: 'Aus welchem Lied stammt "I woaß iazd, daß geht, es ko nix mehr bassiern"?',
        answers: [
            {
                answer: "Der Watzmann, von Wolfgang Ambros",
                valid: false
            },
            {
                answer: "Großvater, von Gert Steinbäcker",
                valid: false
            },
            {
                answer: "Strandliad, von Werner Schmidbauer",
                valid: true
            },
            {
                answer: "De Zeit is reif, von Schariwari",
                valid: false
            },
        ]
    },
    {
        question: 'Wo befindet sich die nördlichste Universitätsstadt der Welt?',
        answers: [
            {
                answer: "Rovaniemi, Finnland",
                valid: false
            },
            {
                answer: "Murmansk, Russland",
                valid: false
            },
            {
                answer: "Tromsø, Norwegen",
                valid: true
            },
            {
                answer: "Edmonton, Kanada",
                valid: false
            },
        ]
    },
    {
        question: 'In 2004, der SV Werder Bremen gewann das Double aus Meisterschaft und DFB-Pokal. Welchen Spitznamen hatte da der brasilianische Stürmer Ailton?',
        answers: [
            {
                answer: "Großvater",
                valid: false
            },
            {
                answer: "Bomber der Nation",
                valid: false
            },
            {
                answer: "Kugelblitz",
                valid: true
            },
            {
                answer: "Rennsemmel",
                valid: false
            },
        ]
    },
    {
        question: 'In welchem Stadion sicherte sich der SV Werder Bremen durch einen Sieg 2004 vorzeitig die Meisterschaft?',
        answers: [
            {
                answer: "Am Millerntor Hamburg",
                valid: false
            },
            {
                answer: "Volkspark Hamburg",
                valid: false
            },
            {
                answer: "Olympiastadion München",
                valid: true
            },
            {
                answer: "Bremer Weserstadion",
                valid: false
            },
        ]
    },
    {
        question: 'Welche Nationalmannschaft blieb als einzige bei der Weltmeisterschaft 2010 ungeschlagen?',
        answers: [
            {
                answer: "Deutschland",
                valid: false
            },
            {
                answer: "Spanien",
                valid: false
            },
            {
                answer: "Neuseeland",
                valid: true
            },
            {
                answer: "Italien",
                valid: false
            },
        ]
    },
    {
        question: 'Wer gewann die Weltmeisterschaft 2010?',
        answers: [
            {
                answer: "Deutschland",
                valid: false
            },
            {
                answer: "Spanien",
                valid: true
            },
            {
                answer: "Neuseeland",
                valid: false
            },
            {
                answer: "Italien",
                valid: false
            },
        ]
    },
    {
        question: 'Wie endete die Gruppe F der Weltmeisterschaft 2010?',
        answers: [
            {
                answer: "1 Italien - 2 Slowakei - 3 Neuseeland - 4 Paraguay",
                valid: false
            },
            {
                answer: "1 Paraguay - 2 Slowakei - 3 Neuseeland - 4 Italien",
                valid: true
            },
            {
                answer: "1 Italien - 2 Slowakei - 3 Paraguay - 4 Neuseeland",
                valid: false
            },
            {
                answer: "1 Slowakei - 2 Italien - 3 Neuseeland - 4 Paraguay",
                valid: false
            },
            {
                answer: "1 Italien - 2 Paraguay - 3 Slowakei - 4 Neuseeland",
                valid: false
            },
            {
                answer: "1 Neuseeland - 2 Slowakei - 3 Italien - 4 Paraguay",
                valid: false
            },
        ]
    },
]

startQuiz()