const fetch = require('node-fetch');

module.exports = async function SendRequest(tokenId) {

    let url = 'https://api.coingecko.com/api/v3/coins/' + tokenId;
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const response = await fetch(url, options)
        const data = response.json();
        return data;
    } catch (error) {
        throw Error(error)
    }
}
