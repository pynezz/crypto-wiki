// var searchtext= document.getElementById("search-text").value;
// console.log(searchtext);
// console.log("hello");

const resultObj = document.getElementById("dis1-text");
const inputFields = document.getElementsByClassName("search");
const inputArr = [...inputFields];

let title = '';

function SearchToken() {
    let input = 'no input';
    
    inputArr.forEach(element => {
        input = element.value.length > 1 ? element.value : input;
    });
    input = input.toLowerCase();
    title = '';
    //Currently using localhost so it runs on everyone's machine
    //Change the url when deployed
    var url = new URL('http://localhost:3000/search');
    var params = {id: input};
    url.search = new URLSearchParams(params);
    
    fetch(url).then(response => response.json())
    .then(complete => {
        title = complete.name.toString();
        addObjects(complete);
    })
    .catch((err) => {
        console.log('Error app.js ', err);
        inputArr.forEach(element => element.value = ""); // Removing the value after search
        addObjects(title = '', input);                          // Make it display 'no results'
    });                          
}

function addObjects(object) {
    const h3Tag = document.createElement('h3');
    const pTag = document.createElement('p');
    h3Tag.innerHTML = 'no results...';
    pTag.innerHTML = `${object.input}`;
    inputArr.forEach(element => element.value = "");    // Removing the value after search

    if (title.length > 1) {
        var symbol = `${object.symbol}`;
        pTag.innerHTML = object.description.en;
        h3Tag.innerHTML = `${title} | ${symbol.toUpperCase()}`;
    }
    resultObj.appendChild(h3Tag);
    resultObj.appendChild(pTag);
}

particlesJS.load('particles-js', './assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

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
