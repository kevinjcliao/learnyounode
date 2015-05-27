var bl = require('bl'); 
var http = require('http'); 
var url = process.argv[2]; 

http.get(url, function callback (response){


	response.setEncoding('utf8'); 
	response.pipe(bl(function(err, data){
		if(err) throw error(err); 
		data = data.toString(); 
		console.log(data.length); 	
		console.log(data); 
	})); 
}); 

