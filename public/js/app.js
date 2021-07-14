// var searchtext= document.getElementById("search-text").value;
// console.log(searchtext);
// console.log("hello");

const resultObj = document.getElementById("dis1-text");


let response = {}

async function SearchToken() {
    resultObj.innerText = "";
    let input = document.getElementById("search-text").value;

    let results = {}

    var url = new URL('http://192.168.0.5:3000/search');
    var params = {id: input};
    url.search = new URLSearchParams(params);

    const data = await fetch(url).then(response => response.json())
        .then(complete => {
            console.log('Complete: ', complete.description.en);
            results = complete;
            addObjects(complete);
        })
        .catch((err) => console.log('Error app.js ', err));
    
    
    
}

function addObjects(object) {
    response = object;
    let pTag = document.createElement('p');
    pTag.innerHTML = object.description.en;
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
