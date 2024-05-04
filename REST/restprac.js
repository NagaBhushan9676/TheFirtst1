const express = require('express');
const app = express();
const path = require('path');

/*accessin the files from the public folder  in this case 
    i use path.join bcz i could be work even i run this file even from
    its parent folder*/
    
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


//to parse the from data of post request
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// arry of comments
let comment = [
    {
        name :'Bhushan',
        dsg:'Veedu Vatrasudi Mastaru adi Sudi Tirige Lopu Veedi Sudi AddamTiruguthai'
    } ,
    {
        name :'Enosh',
        dsg:'Maatal Mantrikudu Still No Proper GF'
    },
    {
        name :'Mahesh',
        dsg:'Hey Nenu Monarch Ni Nenu Evadi Mata Vinanu'
    },
    {
        name :'Yuvaraj',
        dsg:'Handsome Looks But No Use '
    },
    {
        name :'Roshan',
        dsg:'Pandita Putra Parama Shunta'
    }

]
//open the comment page
app.get('/comment',(req,res) => {
    res.render('index',{comment})
})
// open the form
app.get('/comment/new',(req,res)=>{
    res.render('new');
})
// post the comment into the comment array 
app.post('/comment',(req,res) => {
    const {name,dsg} = req.body;
    comment.push({name,dsg});
    res.redirect('/comment')
   
})


app.listen(1227,() => {
    console.log('Animal REST is Listening at 1227');
})
