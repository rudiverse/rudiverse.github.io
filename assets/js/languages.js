
function selectLanguage(selectedLang) {
    sessionStorage.setItem("language", selectedLang);

    switch (selectedLang) {
        case "de":
            window.location = "/de"
            break
        case "bar":
            window.location = "/bar"
            break
        default:
            window.location = "/"
    }
}