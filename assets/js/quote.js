function showOneQuote() {
    let randomQuoteIndex = Math.floor(Math.random() * quoteData.length)
    let randomQuote = quoteData[randomQuoteIndex]

    const textElement = document.getElementById("quote_text")
    textElement.innerHTML = randomQuote.text.replaceAll("{", "<p>",).replaceAll("}", "</p>")

    const sourceElement = document.getElementById("quote_source")
    sourceElement.innerHTML = randomQuote.artist ?? randomQuote.venue

    const sourceSubElement = document.getElementById("quote_source_sub")
    sourceSubElement.innerHTML = randomQuote.album ?? randomQuote.location


}