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

    links.hasOwnProperty('homepage') ? createLinkHTML(links.homepage[0], "Homepage") : "";  // Change up with domain name later
    links.hasOwnProperty('whitepaper') ? createLinkHTML(links.whitepaper, "Whitepaper") : "";
    links.hasOwnProperty('blockchain_site') ? createLinkHTML(links.blockchain_site[0], "Block Explorer") : "";

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
