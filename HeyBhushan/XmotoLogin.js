const  express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.get('/',(req,res)=>{
    res.render('TopIndLogin');
})



app.listen(2016,()=>{
    console.log('Hey MAte Serever Listenenig at Port 2016')
})
