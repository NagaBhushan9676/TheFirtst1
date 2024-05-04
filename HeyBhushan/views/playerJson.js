const express = require('express');
const app = express();
const path = require('path');
const playerData = require('./players.json');
// console.log(playerData)
app.use(express.static(path.join(__dirname,'/Static')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.get('/r/:subreddit',(req,res)=>{
    const subreddit = req.params.subreddit;
    const data =playerData[subreddit];
    console.log(data)
    res.render('ipl',{ ...data })
})

app.listen(1817,()=>{
    console.log(`Welcome Back Bhushan We are Waiting & Wanting for your comeback at Port 1817`);
})