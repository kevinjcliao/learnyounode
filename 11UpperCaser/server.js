var http = require('http');
var fs   = require('fs');
var map  = require('through2-map');
var PORT = process.argv[2];

var server = http.createServer(function (request, response){
    // Request handling logic:
    if (request.method == "POST") {
	request.pipe(map(function (chunk) {
	    return chunk.toString().toUpperCase();
	})).pipe(response);
    } else {
	console.log("This was a GET request.");
	response.write("This was a GET request.");
    }
});
server.listen(PORT);
