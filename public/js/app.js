// var searchtext= document.getElementById("search-text").value;
// console.log(searchtext);
// console.log("hello");

const resultObj = document.getElementById("dis1-text");
const inputFields = document.getElementsByClassName("search");
const inputArr = [...inputFields];

document.addEventListener('DOMContentLoaded',getTrending);
let title = '';

function getCoinInfo(coinId) {
    resultObj.innerHTML = "";
    inputArr.forEach(element => element.value = "");    // Removing the value after search
  
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
    //var url = new URL('http://localhost:3000/search');    // For local testing
    var url = new URL('/search');                           // For Heroku deploy  
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

function SearchToken() {
    let input = '';
    inputArr.forEach(element => {
        input = element.value.length > 1 ? element.value : input;
    });
    input = input.toLowerCase();
    getCoinInfo(input); 
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

    //let url = new URL('http://localhost:3000/get-trending');  // For local testing 
    let url = new URL('/get-trending');                         // For heroku deploy
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


// function SearchToken() {
//     let input = 'no input';
    
//     inputArr.forEach(element => {
//         input = element.value.length > 1 ? element.value : input;
//     });
//     input = input.toLowerCase();
//     title = '';
//     //Currently using localhost so it runs on everyone's machine
//     //Change the url when deployed
//     var url = new URL('http://localhost:3000/search');
//     var params = {id: input};
//     url.search = new URLSearchParams(params);
    
//     fetch(url).then(response => response.json())
//     .then(complete => {
//         title = complete.name.toString();
//         addObjects(complete);
//     })
//     .catch((err) => {
//         console.log('Error app.js ', err);
//         inputArr.forEach(element => element.value = ""); // Removing the value after search
//         addObjects(title = '', input);                          // Make it display 'no results'
//     });                          
// }

// function addObjects(object) {
//     const h3Tag = document.createElement('h3');
//     const pTag = document.createElement('p');
//     h3Tag.innerHTML = 'no results...';
//     pTag.innerHTML = `${object.input}`;
//     inputArr.forEach(element => element.value = "");    // Removing the value after search

//     if (title.length > 1) {
//         var symbol = `${object.symbol}`;
//         pTag.innerHTML = object.description.en;
//         h3Tag.innerHTML = `${title} | ${symbol.toUpperCase()}`;
//     }
//     resultObj.appendChild(h3Tag);
//     resultObj.appendChild(pTag);
// }

// particlesJS.load('particles-js', './assets/particles.json', function() {
//     console.log('callback - particles.js config loaded');
//   });

// function addObjects(object) {
//     resultObj.innerHTML = object.description.en;

//     input = input.toLowerCase();
//     title = '-';

//     var url = new URL('http://localhost:3000/search');
//     var params = {id: input};
//     url.search = new URLSearchParams(params);

//     fetch(url).then(response => response.json())
//         .then(complete => {
//             title = complete.name.toString();
//             addObjects(complete);
//         })
//         .catch((err) => {
//             addObjects('');
//             console.log('Error app.js ', err)
//         });    
// }

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
