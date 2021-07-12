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

app.get('/api', (req, res) => {
    Api();
    res.send('<p>Api</p>');
})

http.listen(PORT, () => {
    console.log('Server running at ', PORT);
});

