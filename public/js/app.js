const resultObj = document.getElementById("dis1-text");
const inputFields = document.getElementsByClassName("search");
const inputArr = [...inputFields];

document.addEventListener("DOMContentLoaded", getTrending);

// PARTICLES
particlesJS.load("particles-js", "./assets/particles.json", function () {
	console.log("callback - particles.js config loaded");
});

let title = "";
var coin;
let coinPaprikaData = [];

function getCoinInfo(coinId) {
    removeSuggestions();
    
	resultObj.innerHTML = "";
	inputArr.forEach((element) => (element.value = "")); // Removing the value after search

	var url = `/search?id=${coinId}`;
	fetch(url)
		.then((response) => response.json())
		.then((complete) => {
			console.log("Complete: ", complete);
			if (complete.hasOwnProperty("error")) notFound(complete.error);
			else addObjects(complete);
		})
		.catch((err) => console.log("Error app.js ", err));
}

function addObjects(object) {
	hashingAlgorithmHTML(object);
	categoryHTML(object);
	fetchDataFromCoinpaprika(object); // This also generates all the other links

	let h3Tag = document.createElement("h3");
	let pTag = document.createElement("p");

	const coinIcon = document.createElement("img");
	coinIcon.setAttribute("src", object.image.small);

	let symbol = `${object.symbol}`;
	pTag.innerHTML = object.description.en;
	h3Tag.innerHTML = `${object.name} | ${symbol.toUpperCase()}`;
	
	resultObj.appendChild(h3Tag);
	resultObj.appendChild(coinIcon);
	resultObj.appendChild(pTag);

	document.getElementById("coin-content").scrollIntoView();
}

function notFound(msg) {
	let pTag = document.createElement("p");
	pTag.setAttribute("id", "not-found");
	pTag.innerHTML = msg;
	resultObj.appendChild(pTag);
}

function SearchToken() {
	let input = "";
	inputArr.forEach((element) => {
		input = element.value.length > 1 ? element.value : input;
	});
	input = input.toLowerCase();
	getCoinInfo(input);
}

function getTrending() {
	function setCoinList(num, data) {
		const listItem = document.getElementById("coin" + num);
		listItem.setAttribute("onclick", `getCoinInfo("${data.id}")`);

		const coinIcon = document.createElement("img");
		coinIcon.setAttribute("src", data.small);

		const coinSymbol = document.createElement("h3");
		coinSymbol.innerText = data.symbol;

		const coinName = document.createElement("div");
		coinName.innerHTML = data.name;

		listItem.appendChild(coinIcon);
		listItem.appendChild(coinSymbol);
		listItem.appendChild(coinName);
	}
	//let url = new URL('http://localhost:3000/get-trending');  // For local testing
	let url = `/get-trending`; // For heroku deploy
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			const coinArray = data.coins;
			for (let i = 0; i < coinArray.length; i++) {
				setCoinList(i + 1, coinArray[i].item);
			}
		})
		.catch((err) => console.log("Error app.js ", err));
}

// COINPAPRIKA
// I can use coingecko symbol to search in 
// the coinpaprika list and return the ID for that symbol to search with
// pseudo-code: 
// $id = get coingecko token object.symbol
// coinId = coinpaprika match with $id 
// if multiple symbols match, return name, and make user choose which one
async function fetchDataFromCoinpaprika(object) {
	let whitepaperLink = {...object};

	function fetchWhitepaper(coinId) {
		let url = `/get-whitepaper?id=${coinId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.whitepaper.link) {
					console.log('Found whitepaper! ', data.whitepaper.link);
					whitepaperLink.links.whitepaper = data.whitepaper.link;
					fetchLinks(whitepaperLink);
				}
				else {
					fetchLinks(whitepaperLink);
				}
			})
			.catch((err) => console.log("Error getting whitepaper - app.js", err));
	}

	await searchCoinpaprikaList(object.symbol.toUpperCase())
		.then(res => res)
		.then((data) => {
			if (data.length > 0) { 
				fetchWhitepaper(data[0].id);// Will return the first match on symbol 
			} else {						// - should add possibility to choose if length > 1
				fetchLinks(whitepaperLink); // This object does not contain a whitepaper 
			}								// - preventing a link with undefined to be generated  
		})
		.catch((err) => {
			console.log("An error occured fetching coinpaprikaList Async", err)
		});
}
