var http = require('http');
var url  = require('url');
var PORT = process.argv[2];

var server = http.createServer(function(req, res) {
    var urlData = url.parse(req.url, true);
    if (urlData.pathname == "/api/parsetime") {
	var isoDate = new Date(urlData.query.iso);

	// Dealing with data returned from parseInfo
	var hours    = isoDate.getHours();
	var minutes  = isoDate.getMinutes();
	var seconds  = isoDate.getSeconds();

	var json = JSON.stringify({
	    hour: hours,
	    minute: minutes,
	    second: seconds
	});
	console.log(json);
	
	res.writeHead(200, {'Content-Type': 'application/json' });
	res.write(json);
	res.end();
    } else if (urlData.pathname == "/api/unixtime") {
	var isoDate = new Date(urlData.query.iso);
	
	res.writeHead(200, {'Content-Type': 'application/json'});

	isoDateUnixTime = isoDate.getTime();
	
	var json = JSON.stringify({
	    unixtime: isoDateUnixTime
	});
	res.write(json);
	res.end();
    } else {
	res.writeHead(404);
	res.end();
    }
});

server.listen(PORT);

function getUnixTime(urlString){
    return 0;
}
