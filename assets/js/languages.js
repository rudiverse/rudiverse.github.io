const navigation = {
    en: [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Content",
            link: "/blog/"
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
        }
    ]
}

function buildNavMenu() {
    let selectedLang = sessionStorage.getItem("language")
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

function isCurrentPage(link) {
    var url = stripTrailingSlash(window.location.pathname)
    return url == stripTrailingSlash(link)
}

function stripTrailingSlash(item) {
    return item.replace(/\/$/, "");
}