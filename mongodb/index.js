const mongoose  = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Friends')
.then(()=>{
    console.log('Hey DB Connected');
})
.catch(err => {
    console.log('Connection Failed');
    console.log(err)
})
const friends = new mongoose.Schema({
    name :String,
    age:Number,
    pg:{
        type:Boolean,
        required:true
    },
    gf:String,
    Height:{
        type:Number,
        min:[5.0,'Pottinakodaka Pora Bayataki'],
        max:[6.5,'Thadi Nayala']
    }
});

friends.methods.printX = function(){
    this.age += 15;
};
friends.statics.updatePg = function() {
    let pgx = this.pg
    return this.updateMany({},{pg:!pgx})
};

const Friends = mongoose.model('Friends',friends);
const Battai = mongoose.model('Battai',friends);
var Subbu = new Battai({name:'Pavan Subramanyam',age:25,pg:false,gf:'No',Height:5.7});
var Kishore = new Friends({name:'Pavan Kishore',age:25,pg:false,gf:'No',Height:5.5});

Friends.insertMany([{name:'Kumar',age:24,pg:false,gf:'Yes',Height:5.3},
{name:'Satish',age:24,pg:false,gf:'Yes',Height:5.8},
{name:'Subbu',age:24,pg:false,gf:'No',Height:5.11},
{name:'Anil',age:21,pg:true,gf:'No',Height:6.0}
])


const addAge = ()=>{
    console.log(Kishore);
    Kishore.printX();
    console.log(Kishore);
}
addAge();

Battai.updatePg().then((d)=>console.log(d)
)
.catch((er)=>console.log(er))

Battai.find().then((data)=>console.log(data))
