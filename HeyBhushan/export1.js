const color = require('colors');
//const name = process.argv[2];

let colorName =(name)=>{
    console.log(`
    ${name}`.rainbow);
}

module.exports.colorName = colorName;