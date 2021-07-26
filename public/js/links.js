const linkList = document.getElementById("links-text");

function fetchLinks(object) {
    let links = [];
    links = object.links;

    createHTML(links);
    
    function createHTML(links) {
        const ulElement = document.createElement("ul");
        ulElement.setAttribute("id", "links");

        if (links.homepage) {
            const listItem = document.createElement("li");
            const alistItem = document.createElement("a");
            alistItem.setAttribute("href", links.homepage[0]);
            alistItem.innerHTML = links.homepage[0];
            alistItem.innerText = "Homepage";
            listItem.appendChild(alistItem);
            ulElement.appendChild(listItem);
        }

        linkList.appendChild(ulElement);
    }
}
