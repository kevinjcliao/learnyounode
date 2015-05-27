var fs = require('fs'); 
var path = require('path'); 

var inDirName = process.argv[2]; 

var searchFileType = "." + process.argv[3]; 

fs.readdir(inDirName, function callback(err, list){
	for(i=0; i<list.length; i++){
		if(searchFileType == path.extname(list[i])) {
			console.log(list[i]); 
		}
	}
}); 
