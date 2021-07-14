const fetch = require('node-fetch');

module.exports = async function SendRequest(tokenId) {

    let url = 'https://api.coingecko.com/api/v3/coins/' + tokenId;
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const response = await fetch(url, options)
        .then(response => response.json())
        .then(data => data).catch((err) => console.log('Error: ', err));
        
    return response;
}
