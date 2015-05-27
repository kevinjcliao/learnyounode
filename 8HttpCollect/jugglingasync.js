var http = require('http'); 
var bl = require('bl'); 
var data = process.argv.slice(2); 
var counter = 0
var dataArray = new Array(2); 

function getRequest(url){
	http.get(url, function callback (response){
		response.setEncoding('utf8'); 
		response.pipe(bl(function(err, response){
			if(err) throw error(err); 
			dataArray[counter]=response.toString(); 	
			if(counter == 2){
				printData(); 
			} else {
				counter++; 
				getRequest(data[counter]); 
			}
		})); 
	}).on('error', function(e){
		console.log("Got error: " + e.message); 
	}); 
	//	setTimeout(getRequest, 0); 

}

function printData(){
	for (var printCounter = 0; printCounter<3; printCounter++){
		console.log(dataArray[printCounter]); 
	}
}


getRequest(data[counter]); 
