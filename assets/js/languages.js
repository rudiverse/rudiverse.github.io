/// language.js
/// contains scripts to support the 3 languages English (en), German (de), Bavarian (bar)

// define nav menu for each language
const navigation = {
    en: [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Blog",
            link: "/blog/"
        },
        {
            name: "Quizzes",
            link: "/quizzes/"
        }
    ],
    de: [
        {
            name: "Home",
            link: "/de/"
        },
        {
            name: "Verse",
            link: "/de/blog/"
        },
        {
            name: "Rätseln",
            link: "/quizzes/"
        }
    ],
    bar: [
        {
            name: "Home",
            link: "/bar/"
        },
        {
            name: "Schwafe",
            link: "/bar/blog/"
        },
        {
            name: "Rätsln",
            link: "/quizzes/"
        }
    ]
}

function getLanguage() {
    let selectedLang = sessionStorage.getItem("language")

    if (!selectedLang) {
        if (window.location.pathname.startsWith("/de/")) {
            selectedLang = "de"
        } else if (window.location.pathname.startsWith("/bar/")) {
            selectedLang = "bar"
        } else {
            selectedLang = "en"
        }
        sessionStorage.setItem("language", selectedLang);
    }

    return selectedLang
}

/// buildNavMenuAndLanguageSwitcher - called by "body onload" in default.html
function buildNavMenuAndLanguageSwitcher() {
    let selectedLang = getLanguage()

    buildNavMenu(selectedLang)
    buildLanguageSwitcher(selectedLang)
}

/// buildNavMenu
/// builds the navigation menu, depending on language retrieved from session
/// adds list items to <ul id="nav_menu">
function buildNavMenu(selectedLang) {
    let menuItems

    switch (selectedLang) {
        case "de":
            menuItems = navigation.de
            break
        case "bar":
            menuItems = navigation.bar
            break
        default:
            menuItems = navigation.en
    }

    const menuelement = document.getElementById("nav_menu");
    menuelement.replaceChildren()

    menuItems.forEach(item => {
        var newListItem = document.createElement("li");

        if (!isCurrentPage(item.link)) {
            var a = document.createElement("a");
            a.textContent = item.name
            a.setAttribute('href', item.link);
            newListItem.appendChild(a)
        } else {
            newListItem.innerHTML = item.name
        }

        menuelement.appendChild(newListItem)
    });
}

/// buildLanguageSwitcher
/// builds links to switch to any of the supported languages
/// active language will be marked as such, instead of supplying a link
function buildLanguageSwitcher(selectedLang) {
    const menuelement = document.getElementById("langswitch_list");

    let content = buildLanguageSwitcherItem('en', selectedLang)
    content += " | "
    content += buildLanguageSwitcherItem('de', selectedLang)
    content += " | "
    content += buildLanguageSwitcherItem('bar', selectedLang)

    menuelement.innerHTML = content
}

function buildLanguageSwitcherItem(language, selectedLang) {
    let html

    if (language == selectedLang) {
        html = '<span class="langactive">'
        html += language
        html += "</span>"
    } else {
        html = "<a href=\"javascript:selectLanguage('"
        html += language
        html += "')\">"
        html += language
        html += "</a>"
    }

    return html
}

/// selectLanguage - called from a language selector/switcher link
/// sets the session item "language"
/// redirects to selected language's homepage
function selectLanguage(selectedLang) {
    sessionStorage.setItem("language", selectedLang);

    if (!isCurrentPageLanguageHomePage()) {
        buildNavMenuAndLanguageSwitcher()

    } else {
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
}

function isCurrentPage(link) {
    var url = stripTrailingSlash(window.location.pathname)
    return url == stripTrailingSlash(link)
}

function stripTrailingSlash(item) {
    return item.replace(/\/$/, "");
}

function isCurrentPageLanguageHomePage() {
    return isCurrentPage("/") ||
        isCurrentPage("/de") ||
        isCurrentPage("/bar")
}