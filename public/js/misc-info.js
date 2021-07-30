const miscInfo = document.getElementById("misc-content");
const innerDiv = document.createElement("div");

// When a search is succesful - this runs first, clearing the html, and start adding elements
function hashingAlgorithmHTML(object) {
    innerDiv.innerHTML = "";

    if (object.hashing_algorithm) {
        var header = createHeader("Hashing Algorithm");
        innerDiv.appendChild(header);

        var pElement = createPElement(object.hashing_algorithm);
        innerDiv.appendChild(pElement);
        appendToMiscHTML();
    }
}

function categoryHTML(object) {
    let catArr = [...object.categories];

    if (catArr.length > 0) {
        var header = createHeader("Category");
        innerDiv.appendChild(header);

        for (let i = 0; i < catArr.length; i++) {
            var pElement = createPElement(catArr[i]);
            innerDiv.appendChild(pElement);
        }
        appendToMiscHTML();
    }
}

function appendToMiscHTML() {
    miscInfo.insertBefore(innerDiv, linkList);
    // miscInfo.insertBefore(innerDiv, linkList);
}

function createHeader(headerText) {
    let header = document.createElement("h3");
    header.setAttribute("class", "subheading-smaller");
    header.innerHTML = headerText;
    return header;
    innerDiv.appendChild(header);
}

function createPElement(text) {
    let textElement = document.createElement("p");
    textElement.setAttribute("class", "p-misc");
    textElement.innerHTML = text;
    return textElement;
    innerDiv.appendChild(textElement);
}
