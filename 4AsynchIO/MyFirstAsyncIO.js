var fs = require('fs'); 

var inFile = process.argv[2].toString(); 

/*function numberOfLines(inFile){
	return fs.readFileSync(inFile).toString().split("\n").length - 1; 
} */


fs.readFile(inFile, function(err, data){
	if (err) throw err; 
	lines = (data.toString().split("\n").length-1);
	console.log(lines);
}); 


