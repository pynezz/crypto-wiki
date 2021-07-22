document.addEventListener('DOMContentLoaded', AllTokens);
const inputs = document.getElementsByClassName("search");
const autocomplete = document.getElementById("autocomplete-menu");
const inputArray = [...inputs];

inputArr.map(field => field.addEventListener('input', checkMatch));

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

function setInputValue(coinId) {
    inputArr.map(val => val.value = coinId);
    //TODO Almost done. 
    //TODO Need to add eventListener so when you click on a suggestion,
    //TODO you search with that ID
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
        liElement.onclick()
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
    // console.log(`search: ${findMatch(inputString)}`);
    
    // async function findMatch(query) {
    //     if (coins !== undefined) {
            
    //         //let search = new RegExp(`^(${query})*`, 'gi');


    //         // coins.forEach(element => {
    //         //     if (element.match(search)) {
    //         //         console.log('yep, it does work here')
    //         //     }
    //         //     else {
    //         //         console.log('no match');
    //         //     }
    //         // });
    //         // search = query.toLowerCase();
            
    //         //console.log(search)
    //         //console.log(new RegExp(`^${search}*`, 'gi'));
    //         return coins.filter(el => {
    //             el.match(`^${query}*`);
    //         });
    //         // return coins.filter(el => el === search);
    //         // if (coins.match(search)) {
    //         //     console.log('god damn that worked')
    //         // }
    //     }
    //         //el => el.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    // }(console.log(coins.filter(el => el.match("^bitcoi"))));
}

