const linkList = document.getElementById("links-text");

function fetchLinks(object) {
    let links = [];
    links = object.links;
    linkList.innerHTML = "";

    createHTML(links);
    
    function createHTML(links) {
        const ulElement = document.createElement("ul");
        ulElement.setAttribute("id", "links");

        switch(true) {
            case links.homepage != null: 
                console.log('homepage')
                createLinkHTML(links.homepage[0], "Homepage");
            case links.blockchain_site != null:
                console.log('block explorer');
                createLinkHTML(links.blockchain_site[0], "Block Explorer");

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

        // Need to remove these after 
        
        linkList.appendChild(ulElement);
    }
}
