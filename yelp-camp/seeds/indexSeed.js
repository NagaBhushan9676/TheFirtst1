const express  = require('express');
const app = express();
const path = require('path');
const CampGround = require('../ycdb');
const cities = require('./cities');
const {places,descriptors} = require('./seedHelpers');
const mongoose = require('mongoose');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

mongoose.connect('mongodb://127.0.0.1:27017/YelpCamp')
.then(()=>{
    console.log('Hey YelpCamp DB Connected');
})
.catch(err => {
    console.log('Connection Failed');
    console.log(err)
})
const sample = array => array[Math.floor(Math.random() * array.length)];
const seedDB = async () =>{
    await CampGround.deleteMany({});
    for(let i = 0 ;i < 50; i++){
        const rate = Math.floor(Math.random()*1000)+10;
        const rand1000 = Math.floor(Math.random()*1000);
        const camp = new CampGround({
        location : `${cities[rand1000].city} ,${cities[rand1000].state}`,
        name:`${sample(descriptors)} ${sample(places)}`,
        image:'https://unsplash.com/collections/483251/in-the-woods',
        price:rate,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, maxime dolor nostrum debitis quia quas voluptatem odio vero voluptatum facere sed similique soluta pariatur laudantium maiores repellat alias voluptate nulla.'
        })
        await camp.save();
    }
}

seedDB();