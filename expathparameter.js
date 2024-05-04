const express = require('express');
const app = express();
const path =require('path');
const playerInfo = require('./HeyBhushan/players2.json')

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'/HeyBhushan','/Static')))
app.set('views',path.join(__dirname,'/HeyBhushan','/views'));
app.get('/Login',(req,res)=>{
    res.render('TopIndLogin.ejs');
})
app.get('/rand',(req, res)=>{
    const num = Math.floor(Math.random()*10)+1;
    res.render('rand.ejs',{rand:num});
})

app.get('/Bhushan',(req,res)=>{
    res.send("Hello Bhushan "+'<h1>King Kong</h1>');
})
app.get('/r/:subreddit',(req,res)=>{
    //let subreddit= req.params.subreddit;
    let n = req.params.subreddit;
    let data = playerInfo[n];
    res.render('subreddit.ejs',{ ...data, n });
    
   // res.send(`Hey The Server Coupled the With The Request <sup><h1>${n}</h1></sup><marquee> ${process.argv[2]} </marquee>`)  //getting the value of
})
app.get('/search',(req,res)=>{
    const {q} = req.query;
    if(!q){
        res.send('Hey Do You Searched Or Not');
    }
    res.send(`You are searching for ${q}`);
})
app.listen(1828,()=>{
    console.log("Hey Mate Server Listening at Port  1828");
})