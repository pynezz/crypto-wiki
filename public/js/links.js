const linkList = document.getElementById("links-text");

function fetchLinks(object) {
    let links = [];
    links = object.links;

    createHTML(links);
    
    function createHTML(links) {
        const ulElement = document.createElement("ul");
        ulElement.setAttribute("id", "links");

        if (links.homepage) {
            const listItem = document.createElement("a");
            listItem.setAttribute("href", links.homepage[0]);
            listItem.innerHTML = links.homepage[0];
            listItem.innerText = "Homepage";
            ulElement.appendChild(listItem);
        }

        linkList.appendChild(ulElement);
    }
}
