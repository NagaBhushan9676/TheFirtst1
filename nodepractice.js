const color = require('colors');
console.log('Pani chuskora badakav'.rainbow);
// console.log(process.argv);
// fs.mkdir('mulakkai2',(err)=>{
//     console.log('Hyderabad mirapakayalu tellaguntai');
//     if(err) throw err;
// });
const fs = require('fs');

const fname = process.argv[2] || 'battakai';
try{
fs.mkdirSync(fname);
console.log("exicuted after".zebra);
fs.writeFileSync(`${fname}/index.html`,'<h1>hi jigel<h1>');
fs.writeFileSync(`${fname}/bhushan.txt`,'Hiroshima Nagasakhi');
}catch(e){
    console.log(`Edo theda jarigindiro azamu ${e}`);
}