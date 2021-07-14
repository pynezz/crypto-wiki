const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 3000;

const reader = require('fs');

const Api = require('./public/js/api');

let tokens = [];
const AllTokens = () => {
    reader.readFile('./public/json/coingecko_all_coins.json', (err, data) => {
        if (err) console.log(err);
        tokens = JSON.parse(data); 
    });
}
AllTokens();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', (err) => {
        if (err) console.log(err);
    })
})

app.get('/search*', async (req, res) => {
    let obj = [];
    console.log('Request params: ', req.query);
    await Api(req.query.id).then(data => {
        obj = data;
    });
    await res.send(obj);
}) 

http.listen(PORT, () => {
    console.log('Server running at ', PORT);
});

