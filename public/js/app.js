// var searchtext= document.getElementById("search-text").value;
// console.log(searchtext);
// console.log("hello");

const request = new Request({
    url: 'api',
    method: 'GET'
});

function GetData() {
    fetch('/data');
}

function Search() {

    let result = document.getElementById("dis1-text").innerHTML;
    result = "";

    let input = document.getElementById("search-text").value;
    // let url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info',
    //     qString = '?X-CMC_PRO_API_KEY=//!INSERT API KEY'
    //     + '?slug=' + input;

    let url ="https://pro-api.coinmarketcap.com/v1/cryptocurrency/info"
    let params = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info',
        qs: {
            id: 1027
        },
        headers: {
            'X-CMC_PRO_API_KEY': '//!INSERT API KEY',
            'Accept': 'application/json'
        },
        mode: 'no-cors'
    };
    // url = 'https://jsonplaceholder.typicode.com/todos/1';
    // params = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    // fetch(url, params).then(response => response.json()).then(data => console.log(data));
    const request = new XMLHttpRequest();

    request.open('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?slug=ethereum');
    request.setRequestHeader('X-CMC_PRO_API_KEY', '//!INSERT API KEY');
    request.setRequestHeader('Accept-Encodig', 'gzip, deflate, br');
    
    request.send();

    console.log(request.response);
    //fetch(url, params, {mode: 'no-cors'}).then(response => response.json()).then(data => console.log(data));

//     fetch(url + qString, { mode: "no-cors" })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             result = data;
//         }); 
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
