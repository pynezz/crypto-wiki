// var searchtext= document.getElementById("search-text").value;
// console.log(searchtext);
// console.log("hello");

let response = {}

//No need of async await if using callback
function SearchToken() {
    let input = document.getElementById("search-text").value;
    
    let results = {}
    
    //Currently using localhost so it runs on everyone's machine
    //Change the url when deployed
    var url = new URL('http://localhost:3000/search');
    var params = {id: input};
    url.search = new URLSearchParams(params);
    
    fetch(url).then(response => response.json())
    .then(complete => {
        console.log('Complete: ', complete.description.en);
        results = complete;
        addObjects(complete);
    })
    .catch((err) => console.log('Error app.js ', err));
}

function addObjects(object) {
    const resultObj = document.getElementById("dis1-text");
    resultObj.innerHTML = object.description.en;
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
