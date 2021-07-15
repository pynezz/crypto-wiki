// var searchtext= document.getElementById("search-text").value;
// console.log(searchtext);
// console.log("hello");

function getCoinInfo(coinId) {
    const resultObj = document.getElementById("dis1-text");
    resultObj.innerHTML = "";

    function addObjects(object) {
        let h3Tag = document.createElement('h3');
        let pTag = document.createElement('p');

        let symbol = `${object.symbol}`;
        pTag.innerHTML = object.description.en;
        h3Tag.innerHTML = `${object.name} | ${symbol.toUpperCase()}`;

        resultObj.appendChild(h3Tag);
        resultObj.appendChild(pTag);
    } 

    function notFound(msg) {
        let pTag = document.createElement('p');
        pTag.setAttribute('id','not-found');
        pTag.innerHTML = msg;
        resultObj.appendChild(pTag);                
    }
    
    //Currently using localhost so it runs on everyone's machine
    //Change the url when deployed
    var url = new URL('http://localhost:3000/search');
    var params = {id: coinId};
    url.search = new URLSearchParams(params);
    
    fetch(url).then(response => response.json())
    .then(complete => {
        console.log('Complete: ', complete);
        if(complete.hasOwnProperty('error'))
            notFound(complete.error) 
        else
            addObjects(complete);
    })
    .catch((err) => console.log('Error app.js ', err));
}

function getTrending() {
    function setCoinList(num,data) {
        const listItem = document.getElementById("coin"+num);
        listItem.setAttribute('onclick',`getCoinInfo("${data.id}")`);

        const coinIcon = document.createElement('img')        
        coinIcon.setAttribute('src',data.small)

        const coinSymbol = document.createElement('h3')
        coinSymbol.innerText = data.symbol;

        const coinName = document.createElement('div')
        coinName.innerHTML = data.name;

        listItem.appendChild(coinIcon);
        listItem.appendChild(coinSymbol);
        listItem.appendChild(coinName);
    }

    let url = new URL('http://localhost:3000/get-trending');
    fetch(url).then(res => res.json())
    .then(data => {
        console.log(data);
        const coinArray = data.coins;
        for(let i=0;i<coinArray.length;i++) {
            setCoinList(i+1,coinArray[i].item)
        }
    })    
    .catch((err) => console.log('Error app.js ', err));
}

document.addEventListener('DOMContentLoaded',getTrending);

function SearchToken() {
    let input = document.getElementById("search-text").value.toLowerCase();
    getCoinInfo(input); 
}



//No use right now
// function searchfn(){
//     document.getElementById("dis1-text").innerHTML = "";
//     var searchtext= document.getElementById("search-text").value;
//     console.log(searchtext);
//     document.getElementById("dis1-text").innerHTML += " Hii there, u searched for "+ searchtext;

//     fetch('api/todos/1') .then(res => {
//         res.json().then(json => console.log(json));
//     });
// };
