const express = require('express');
const app = express();
const path = require('path');
const port  = 9002;

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'/Static')))
app.set('views',path.join(__dirname,'/HeyBhushan','/views'));

//for parsing data from req body we use 
app.use(express.urlencoded({extended : true}));

app.post('/Form',(req,res)=>{
    const {} =req.body;
    console.log(req.body);
   
})

app.listen(port,()=>{
    console.log(`Priya Its Connecting to 9002`);
})
