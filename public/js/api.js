const fetch = require('node-fetch');

async function SendRequest(url,method) {
    const options = {
        method: method,
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

exports.searchCoins = async (tokenId) => {
    const url = `https://api.coingecko.com/api/v3/coins/${tokenId}?localization=en`;
    return SendRequest(url,'GET');
}

exports.getTrending = async () => {
    const url = 'https://api.coingecko.com/api/v3/search/trending'
    return SendRequest(url,'GET');
}
/**
 * This function uses the coinpaprika API and id system
 * @param {string} tokenId from coinpaprika id list
 * @returns request to coinpaprika
 */
exports.getWhitepapers = async (tokenId) => {
    const url = `https://api.coinpaprika.com/v1/coins/${tokenId}`;
    return SendRequest(url, 'GET');
}