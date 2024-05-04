const mongoose =  require('mongoose');

const expresSchema = new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        required:true,
        enum:[20,21,22,23,24,25]
    },
    sex:{
        type:String,
        required:true,
        enum:['Male','Female','Transgender']
    }
})

const Admission  = mongoose.model('Admission',expresSchema)

//sending Admission file to make accessble be outer files
module.exports = Admission;