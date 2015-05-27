var net = require('net');

var HOST = '127.0.0.1'
var PORT = 8000;

var client = new net.Socket();
client.connect(PORT, HOST, function() {
    console.log('Client connected to: ' + HOST + ':' + PORT);
    client.write('I am Chuck Norris!');
});

client.on("data", function(data) {
    console.log("DATA: " + data);
    // close the client socket completely.

    client.destroy();
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log("Connection closed");
}); 
