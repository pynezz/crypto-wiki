const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//TODO: Search suggestion functionality 
// const reader = require('fs');
// let tokens = [];
// const AllTokens = () => {
    //     reader.readFile('./public/json/coingecko_all_coins.json', (err, data) => {
        //         if (err) console.log(err);
        //         tokens = JSON.parse(data); 
        //     });
        // }
        // AllTokens();
        
const {searchCoins,getTrending} = require('./public/js/api');

app.use(express.static('public'));

//Handles errors , change the implementation to take effect everywhere
const handleErr = (err,res) => {
    console.log(err);
    return res?.status(500)?.json({msg: "An error occurred, Please try again later!"});
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', (err) => {
        if (err) console.log(err);
    })
})

app.get('/search*', async (req, res) => {
    // console.log('Request params: ', req.query);
    try {
        const data = await searchCoins(req.query.id)
        // console.log(data);
        return res.status(200).json(data);
    } catch(err) {
        handleErr(err,res);
    }
}) 

app.get('/get-trending',async (req,res) => {
    try {
        const data = await getTrending();    
        return res.status(200).json(data);
    } catch (err) {
        handleErr(err,res);
    }
})

app.listen(PORT, () => {
    console.log('Server running at ', PORT);
});

