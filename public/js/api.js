require('dotenv').config();
const { response } = require('express');
const rp = require('request-promise-native');

const URL = process.env.API_URL;
const KEY = process.env.API_KEY;

const requestOptions = {
    method: 'GET',
    qs: {
        'start': '1',
        'limit': '5',
        'convert': 'USD'
    },
    headers: {
        'X-CMC_PRO_API_KEY': KEY
    },
    json: true,
    gzip: true
};

const requestOptionsTest = {
    headers: {
        'Accept': 'application/json'
    },
    method: 'GET',
    json: true,
    gzip: true
}


module.exports = RunApi = async (urlParams) => {
    console.log(`Sending request to ${process.env.JSON_API}${urlParams}`);
    await rp(`${process.env.JSON_API}${urlParams}`, requestOptionsTest).then( response => {
        console.log('RunAPI response: ', response);
        return response;
        
    }).catch((err) => {
        console.log('Error: ', err.message);
        return err.message;
    });
    console.log('GETS DOWN HERE');
    return response;
}
