const mongoose =  require('mongoose');
const express  = require('express');
const app = express();
const path =  require('path');
const Admission  = require('./exdb');
const methodOverride = require('method-override');


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const genders = ['Male','Female','Transgender'];

mongoose.connect('mongodb://127.0.0.1:27017/Friends')
.then(()=>{
    console.log('Hey Man your db  connected ')})
.catch((er) => 
    {console.log(er,'You Are a Failure')})

app.get('/admit',async (req,res)=>{
    const { sex } = req.query;
    if(sex){
        const jingle = await Admission.find({sex});
        console.log(sex);
        res.render('boom',{ jingle,sex});
    }else{
    const jingle = await Admission.find({});
    res.render('boom',{ jingle,sex:'All'});
}
})

app.get('/admit/new',async (req,res)=>{
    res.render('formboom.ejs',{genders});
})

app.post('/admit',async (req,res)=>{
    const j1 =  new Admission(req.body)
    await j1.save();
    res.redirect('/admit');
})
app.get('/admit/:id',async (req,res)=>{
    const {id} = req.params;
    const iid = await Admission.findById(id)
    res.render('newboom',{ iid })
})

app.put('/admit/:id', async (req,res)=>{
    const { id } = req.params;
    const upda = await Admission.findByIdAndUpdate(id,req.body,{ runValidators:true,new:true })
    res.redirect(`/admit/${upda._id}`)
}) 

app.get('/admit/:id/update',async (req,res)=>{
    const {id} = req.params;
    const findAdmit =await Admission.findById(id);
    res.render('updateboom',{findAdmit,genders});
})

app.delete('/admit/:id', async (req,res)=>{
    const {id} = req.params;
    const del = await Admission.findByIdAndDelete(id);
    res.redirect('/admit');
})

app.use('*',(req,res)=>{
    res.send('<center><h1>Chetagani naa kodaka</h1></center> \n <a href="/admit">Back ki Pora Ikkadem Undi</a>')
})

app.listen(4004,()=>{console.log('Married at Apr 04')})