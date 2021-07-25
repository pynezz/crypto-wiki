document.addEventListener('DOMContentLoaded', AllTokens);
const inputs = document.getElementsByClassName("search");
const autocomplete = document.getElementById("autocomplete-menu");
const inputArray = [...inputs];

inputArr.map(field => field.addEventListener('input', checkMatch));

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && inputArr.map(field => field.value.length > 0)) {
      inputArr.map(field => field.value = "");
      removeSuggestions();
    }
    if (e.keyCode === 13 && inputArr.map(field => field.value.length > 0)) {
        SearchToken();
    }
});


let coinList = []; 
let coins = [];
let searchText = "";

async function AllTokens() {
    let tokens = [];
    var reader = new XMLHttpRequest();
    console.log('this works')
    reader.open('GET', '../json/coingecko_all_coins.json');
    reader.setRequestHeader("Accept", "application/json");
    reader.send();
    reader.onload = () => {
        if (reader.status === 200) {
            tokens = JSON.parse(reader.response);
            coinList = [...tokens];
            coins = coinList.map(list => list.id);
        } else {
            console.log('did not work')
        }
    }
}

function removeSuggestions() {
    console.log('remove suggestions!');
    if (autocomplete.childNodes.length > 0) {
        while (autocomplete.firstChild) {
          autocomplete.removeChild(autocomplete.firstChild);
        }
    }
}

function addSuggestions(resultArray) {
    let resultsToDisplay = 5;
    let results = resultArray;
    if (results.length > resultsToDisplay) {
        results = results.slice(0, resultsToDisplay);
    }
    results.map(result => {
        const liElement = document.createElement("li");
        liElement.innerText = result;
        liElement.classList.add("list-item");
        liElement.setAttribute("onclick", `getCoinInfo("${result}")`);
        autocomplete.appendChild(liElement);
    });
}

async function checkMatch(e) {

    if (searchText !== e.target.value) {
        removeSuggestions();
    }

    if (e.target.value.length < 2) {
        removeSuggestions();
        return;
    }

    searchText = e.target.value;
    let matches = [];

    try {
        matches = await coins.filter(el => el.match(`^${e.target.value}`)) 
        return await matches;
    }
    catch {
        console.log("Some error");
    }
    finally {
        addSuggestions(matches);
    }
}

