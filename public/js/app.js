// var searchtext= document.getElementById("search-text").value;
// console.log(searchtext);
// console.log("hello");

import api from ("./api");

api();

function searchfn(){
    document.getElementById("dis1-text").innerHTML = "";
    var searchtext= document.getElementById("search-text").value;
    console.log(searchtext);
    document.getElementById("dis1-text").innerHTML += " Hii there, u searched for "+ searchtext;
    
};


