const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampSchema = new Schema({
    name:String,
    image:String,
    price:Number,
    description:String,
    location:String
})

module.exports= mongoose.model('CampGround',CampSchema)