// var searchtext= document.getElementById("search-text").value;
// console.log(searchtext);
// console.log("hello");

const resultObj = document.getElementById("dis1-text");


let title = ' ';

async function SearchToken() {
    resultObj.innerText = "";
    let input = document.getElementById("search-text").value;
    input = input.toLowerCase();
    title = '-';

    var url = new URL('http://192.168.0.5:3000/search');
    var params = {id: input};
    url.search = new URLSearchParams(params);

    await fetch(url).then(response => response.json())
        .then(complete => {
            title = complete.name.toString();
            addObjects(complete);
        })
        .catch((err) => {
            addObjects('');
            console.log('Error app.js ', err)
        });    
}

function addObjects(object) {
    let h3Tag = document.createElement('h3');
    let pTag = document.createElement('p');
    h3Tag.innerHTML = 'no results...';
    pTag.innerHTML = '';



    if (title.length > 1) {
        var symbol = `${object.symbol}`;
        pTag.innerHTML = object.description.en;
        h3Tag.innerHTML = `${title} | ${symbol.toUpperCase()}`;
    }
    resultObj.appendChild(h3Tag);
    resultObj.appendChild(pTag);
    
} 

async function searchfn(){
    document.getElementById("dis1-text").innerHTML = "";
    var searchtext= document.getElementById("search-text").value;
    console.log(searchtext);
    document.getElementById("dis1-text").innerHTML += " Hii there, u searched for "+ searchtext;

    await fetch('api/todos/1') .then(res => {
        res.json().then(json => console.log(json));
    });
};
