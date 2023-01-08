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
    de:[
        {
            name: "Home",
            link: "/de/"
        },
        {
            name: "Verse",
            link: "/de/blog/"
        }
    ],
    bar:[
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

function buildNavMenu(){
    //alert('do samma')
    
    // const menuelement = document.getElementById("nav_menu");
    // var newItem = document.createElement("li");
    // var a = document.createElement("a");
    
    // a.textContent = "...ooo";
    // a.setAttribute('href', "http://www.msn.com");
    // newItem.appendChild(a);
    // menuelement.appendChild(newItem);

    let selectedLang = sessionStorage.getItem("language")
    let menuItems
    
    switch (selectedLang) {
        case "de":
            menuItems=navigation.de
            break
        case "bar":
            menuItems=navigation.bar
            break
        default:
            menuItems=navigation.en
    }
    
    const menuelement = document.getElementById("nav_menu");

    menuItems.forEach(item => {
        var newListItem = document.createElement("li");
        var a = document.createElement("a");

        a.textContent=item.name
        a.setAttribute('href', item.link);

        newListItem.appendChild(a)
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