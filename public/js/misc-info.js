const miscInfo = document.getElementById("misc-content");
const innerDiv = document.createElement("div");

function hashingAlgorithmHTML(object) {
    innerDiv.innerHTML = "";

    if (object.hashing_algorithm != null) {
        createHeader("Hashing Algorithm");
        createPElement(object.hashing_algorithm);
        appendToMiscHTML();
    }
}

function categoryHTML(object) {
    let catArr = [...object.categories];

    if (catArr.length > 0) {
        createHeader("Category");
        for (let i = 0; i < catArr.length; i++) {
            createPElement(catArr[i]);
        }
        appendToMiscHTML();
    }
}

function appendToMiscHTML() {
    miscInfo.appendChild(innerDiv);
}

function createHeader(headerText) {
    let header = document.createElement("h3");
    header.setAttribute("class", "subheading-smaller");
    header.innerHTML = headerText;

    innerDiv.appendChild(header);
}

function createPElement(text) {
    let textElement = document.createElement("p");
    textElement.setAttribute("class", "p-misc");
    textElement.innerHTML = text;
    innerDiv.appendChild(textElement);
}
