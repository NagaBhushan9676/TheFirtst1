const express  = require('express');
const app = express();
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const path = require('path');
const morgan = require('morgan')
const CampGround = require('./ycdb');
const mongoose = require('mongoose');
//----------------------------------=----------------
app.engine('ejs',ejsMate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// ----------------------------------------------------------------
app.use(express.urlencoded({extended:true}))
app.use(morgan('tiny'))
app.use(morgan('dev'))
app.use(methodOverride('_method'));
app.use('/campgrounds/new',(req,res,next)=>{
    console.log('erripappa Vadilesindiii')
    next();
})
const pass = (req,res,next)=>{
    const { password } = req.query;
    if(password === 'ziglarnatta'){
        console.log('Hurry The Item Is deleted');
        next();
    }else{
        res.send('You need A password to Delete')
    }
}
// app.use((req,res,next)=>{
//     console.log('Kondanna Ayipoyav')
//     res.status(404).send('Dorakaledu Sarigga Type Chei Bey')
//     next();
// })

// ---------------------------------------------------------------------
mongoose.connect('mongodb://127.0.0.1:27017/YelpCamp')
.then(()=>{
    console.log('Hey YelpCamp DB Connected');
})
.catch(err => {
    console.log('Connection Failed');
    console.log(err)
})
/** ---------------------------------------------- */
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/campgrounds',async (req,res) =>{
    const campgrounds = await CampGround.find();
    res.render('campgrounds/indexcpg',{ campgrounds });
})
app.get('/campgrounds/new',(req,res)=>{
    res.render('campgrounds/newcg')
})
app.post('/campgrounds',async (req,res) => {
    const campgrounds = new CampGround(req.body)
    await campgrounds.save()
    res.redirect(`/campgrounds`)
})
// app.get('/campgrounds/private',pass,(req,res)=>{
//     res.redirect(`/campgrounds`)
// })
app.get('/campgrounds/:id',async (req,res)=>{
    const campgrounds = await CampGround.findById(req.params.id)
    res.render('campgrounds/show',{ campgrounds })
})

app.get('/campgrounds/:id/edit',async (req,res)=>{
    const campgrounds = await CampGround.findById(req.params.id)
    res.render('campgrounds/edit',{ campgrounds })
})
app.put('/campgrounds/:id',async (req,res)=>{
    const  { id }  = req.params;
    const upd = await CampGround.findByIdAndUpdate(id,{...req.body})
    res.redirect('/campgrounds');
 })
app.delete('/campgrounds/:id',async (req,res)=>{
    const  { id } = req.params;
   
    const del = await CampGround.findByIdAndDelete(id);
    // document.write(del+'is deleted');
    res.redirect('/campgrounds');
})


app.listen(9000,()=>{
    console.log('Server Hosting at 9000');
})