// var searchtext= document.getElementById("search-text").value;
// console.log(searchtext);
// console.log("hello");

async function SearchToken() {
    let input = document.getElementById("search-text").value;

    var url = new URL('http://192.168.0.5:3000/search');
    var params = {id: input};
    url.search = new URLSearchParams(params);

    await fetch(url).then(response =>  response.json())
        .then(complete => console.log('Complete: ', complete))
        .catch((err) => console.log('Error app.js ', err));
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
