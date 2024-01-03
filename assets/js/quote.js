function showRandomQuote() {
    let randomQuoteIndex = Math.floor(Math.random() * quoteData.length)
    let randomQuote = quoteData[randomQuoteIndex]

    showOneQuote(randomQuote)
}

function showOneQuote(randomQuote) {
    const textElement = document.getElementById("quote_text")
    textElement.innerHTML = randomQuote.text.replaceAll("\\", "<br />")

    const sourceElement = document.getElementById("quote_source")
    sourceElement.replaceChildren()

    if (areRelatedQuotesBySource(randomQuote)) {
        var a = document.createElement("a");
        a.textContent = randomQuote.source
        let link = 'javascript:showRelatedQuoteBySource(' + JSON.stringify(randomQuote) + ')'
        a.setAttribute('href', link);
        sourceElement.appendChild(a)
    } else {
        sourceElement.innerHTML = randomQuote.source
    }

    const sourceSubElement = document.getElementById("quote_source_sub")
    sourceSubElement.replaceChildren()

    if (areRelatedQuotesBySourceSub(randomQuote)) {
        var a = document.createElement("a");
        a.textContent = randomQuote.source_sub
        let link = 'javascript:showRelatedQuoteBySourceSub(' + JSON.stringify(randomQuote) + ')'
        a.setAttribute('href', link);
        sourceSubElement.appendChild(a)
    } else {
        sourceSubElement.innerHTML = randomQuote.source_sub
    }
}

function areRelatedQuotesBySource(fromQuote) {
    return getRelatedQuotesBySource(fromQuote).length > 0
}

function getRelatedQuotesBySource(fromQuote) {
    return quoteData.filter(x => x.source == fromQuote.source && x.text != fromQuote.text)
}

function showRelatedQuoteBySource(fromQuote) {
    let relatedQuotes = getRelatedQuotesBySource(fromQuote)
    if (relatedQuotes.length == 0) return

    let randomQuoteIndex = Math.floor(Math.random() * relatedQuotes.length)
    let randomQuote = relatedQuotes[randomQuoteIndex]

    showOneQuote(randomQuote)
}

function areRelatedQuotesBySourceSub(fromQuote) {
    return getRelatedQuotesBySourceSub(fromQuote).length > 0
}

function getRelatedQuotesBySourceSub(fromQuote) {
    return quoteData.filter(x => x.source_sub == fromQuote.source_sub && x.text != fromQuote.text)
}

function showRelatedQuoteBySourceSub(fromQuote) {
    let relatedQuotes = getRelatedQuotesBySourceSub(fromQuote)
    if (relatedQuotes.length == 0) return

    let randomQuoteIndex = Math.floor(Math.random() * relatedQuotes.length)
    let randomQuote = relatedQuotes[randomQuoteIndex]

    showOneQuote(randomQuote)
}