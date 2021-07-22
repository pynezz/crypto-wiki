document.addEventListener('DOMContentLoaded', AllTokens);
const inputs = document.getElementsByClassName("search");
const inputArray = [...inputs];

inputArr.map(field => field.addEventListener('input', checkMatch));

let coinList = []; 
let coins = [];
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
            // Here we can add some HTML manipulation after we've checked the input and sorted the resul
        } else {
            console.log('did not work')
        }
    }
}

async function checkMatch(e) {
    // let inputString = e.target.value;
    let matches = [];
    try {
        matches = await coins.filter(el => el.match(`^${e.target.value}`)) 
        return await matches;
    }
    catch {
        console.log("Some error");
    }
    finally {
        // Here we need to add some HTML manipulation
        console.log(matches);
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

