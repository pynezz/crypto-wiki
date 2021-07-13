require('dotenv').config();
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
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}


module.exports = RunApi = async (req, res) => {
    let data = [];
    console.log(`Sending request to ${process.env.JSON_API}${'/todos/1'}`);
    await rp(`${process.env.JSON_API}${'/todos/1'}`, requestOptionsTest).then( response => {
        data = response;
        console.log('RunAPI response: ', response);
    }).catch((err) => {
        console.log('Error: ', err.message);
        return err.message;
    });
    data = await JSON.parse(data);
    res.send(data);
}
