var http  = require('http');
var fs    = require('fs');

var PORT  = process.argv[2];
var FILE  = process.argv[3].toString();

var server = http.createServer(function (request, response){
    // request handling logic
    var readStream = fs.createReadStream(FILE);
    readStream.pipe(response);
});
server.listen(PORT);
