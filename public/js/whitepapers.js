
let coinPaprikaCoins = [];
let coinPaprikaSymbols = [];

function loadAllCoinpaprikaTokens() {
    let tokens = [];
    var reader = new XMLHttpRequest();
    reader.open('GET', '../json/coinpaprika_all_coins.json');
    reader.setRequestHeader("Accept", "application/json");
    reader.send();
    reader.onload = () => {
        if (reader.status === 200) {
            tokens = JSON.parse(reader.response);
            coinPaprikaCoins = [...tokens];
            coinPaprikaSymbols = coinPaprikaCoins.map(list => list.symbol);
        } else {
            console.log('fetching all coinpaprika coins did not work')
        }
    }
}

// Search for symbols in coinpaprika list that matches symbol from coingecko list.
// Return the object from coinpaprika local list.
// Then we use that objects ID to search coinpaprika   
async function searchCoinpaprikaList(coinSymbol) {
    let matches = [];
    try {
        matches = await coinPaprikaCoins.filter(el => el.symbol === coinSymbol);
    }
    catch {
        console.log("Error searching coinpaprika list");
        return;
    }
    finally {
        if (matches.length > 1) {
            // MAKE USER CHOOSE
        }
        return matches;
    }
}
