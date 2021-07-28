const linkList = document.getElementById("links-text");

function fetchLinks(object) {
    let links = [];
    links = object.links;
    linkList.innerHTML = "";

    createHTML(links);
}

function createHTML(links) {
    const ulElement = document.createElement("ul");
    ulElement.setAttribute("id", "links");

    switch(true) {
        case links.homepage != null:
            createLinkHTML(links.homepage[0], "Homepage");
        case links.blockchain_site != null:
            createLinkHTML(links.blockchain_site[0], "Block Explorer");
        case links.whitepaper != null:
            createLinkHTML(links.whitepaper, "Whitepaper")
        // Add cases here to add more links to be displayed
        default: break;
    }
    function createLinkHTML(linkToDisplay, text) {
        const listItem = document.createElement("li");
        const alistItem = document.createElement("a");
        alistItem.setAttribute("href", linkToDisplay);
        alistItem.setAttribute("target", "_blank");     // Opens link in new tab
        alistItem.innerHTML = linkToDisplay;
        alistItem.innerText = text;

        listItem.appendChild(alistItem);
        ulElement.appendChild(listItem);
    }
    
    linkList.appendChild(ulElement);
}
