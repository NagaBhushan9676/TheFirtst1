const name = require('./export1');
const readline =require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
var name1 = '';
rl.question('Enter Your Name: ',(input)=>{
    name1 = input;
    name.colorName(`${name1}`); 
    rl.close();
})

