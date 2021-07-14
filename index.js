const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 3000;

require('dotenv').config();
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

app.get('/data', require('./public/js/api'));

app.get('/all', (req, res) => {
    res.send('<p>what</p>');
})
// cryptocurrency/listings/latest
// app.get('/api?*', async (req, res) => {
//     let url = req.originalUrl.substring(4, req.originalUrl.length);
//     console.log('url: ', url)
//     result = await Api(`${url}`);
//     res.setHeader('Content-Type', 'application/json');
//     console.log(result.title);
//     console.log('Result: ', result)
//     res.send(result);
//     //console.log(res.json());
//     res.end();
// })

app.get('/search*', async (req, res) => {
    console.log('Request params: ', req.params);
    let data = await Api(req.params);
    await console.log('Index data: ', data);
    await res.send(data);
})  

http.listen(PORT, () => {
    console.log('Server running at ', PORT);
});

