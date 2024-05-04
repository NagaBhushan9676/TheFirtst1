
    let express = require('express');
    let app = express();
    // app.use(()=>{
    //     console.log('Hey Prabhu Server accessing');
    //     //document.body.innerHTML='M-- day Zindagi Maraya';

    // })
    // app.listen(8080,()=>{
    //     console.log("Rey Evado ninnu Pilustuunadra babu")
    // })
//console.dir(app);\
let name = process.argv[2];

// app.use((req,res)=>{
//     console.log('Orey Vamsi Server Connect Ayyindi roi');
//     res.send(`<marquee>${name} is a Mundal Mutakor</marquee>`);
// })
app.get('/Vamsi',(req,res)=>{
    res.send('Vamsi The Mundal Mutakor');
})
app.get('/Bhushan',(req ,res)=>{
    res.send(`<marquee>Bhushan The Culprit </marquee>`);
})
app.get('/Srilekha',(req,res)=>{
    res.send(`<img src="https://logos.textgiraffe.com/logos/logo-name/bhushan-designstyle-i-love-o.png">`)})
app.get('*',(req,res)=>{
    res.send(   `Hey ${name} All are Working`);
})
app.use((res,req)=>{
    res.status(404).send('G-------vva Gorinkatho');

})
app.listen(8080,()=>{
    console.log('orey azamu');
})