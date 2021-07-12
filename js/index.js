const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendfile(__dirname + '../index.html', err => {
        if (err) console.log(err);
    })
})

http.listen(PORT, () => {
    console.log('Server running at ', PORT);
});

