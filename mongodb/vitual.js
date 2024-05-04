const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Family')
  .then(() => {
    console.log('Hey DB Connected');
  })
  .catch(err => {
    console.log('Connection Failed');
    console.log(err);
  });

  const familySchema = new mongoose.Schema({
     fname:String,
     lname:String,
     sname:String  
    })
// MIDDLEWARES 
    familySchema.pre('save',function(){
      console.log('Orey Battakai Pre Middelware executrd First ra Save Avtundiraa')
    }) 
    familySchema.post('save',function(){
      console.log(' Post Middelware ra Azamu save ayindi lagettaroii')
    }) 
familySchema.virtual('Fullname').get(
    function(){
        return `${this.fname} ${this.lname}-${this.sname}`;
    }
).set((v)=>{
 var full = v.sname + "Battakai";
 
  return full
})


const Kailu  = mongoose.model('Kailu',familySchema);
const bhushan = new Kailu({fname:'Naga',lname:'Bhushan',sname:"Kailu"});
bhushan.save();

console.log(bhushan.Fullname);
