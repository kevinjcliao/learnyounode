var fs = require('fs'); 

var inFile = process.argv[2].toString(); 

var fileLength = fs.readFileSync(inFile).toString().split("\n").length - 1; 

console.log(fileLength);


