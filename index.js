const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 3000;

const Api = require('./public/js/api');

require('dotenv').config();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', (err) => {
        if (err) console.log(err);
    })
})




// cryptocurrency/listings/latest
app.get('/api?*', async (req, res) => {
    let url = req.originalUrl.substring(4, req.originalUrl.length);
    console.log('url: ', url)
    result = await Api(`${url}`);
    res.setHeader('Content-Type', 'application/json');
    console.log(result.title);
    console.log('Result: ', result)
    res.send(result);
    //console.log(res.json());
    res.end();


})

http.listen(PORT, () => {
    console.log('Server running at ', PORT);
});

