
//  var PORT = 8000; 
 var net = require('net');
 var server = net.createServer(function (socket){0
     console.log("New socket!"); 
     // socket handling logic 
     /*socket.on('data', function(data) {
	 console.log('DATA ' + socket.remoteAddress + ': ' + data);
	 // Write the data back to the client, the client will receive it as data from the servper.
	 socket.write("You said: " + data); 
     });*/

     // Add a close event handler to this instance of socket.
     socket.on("close", function(data){
	 console.log("CLOSED: " + socket.remoteAddress + " " + socket.remotePort);
     }); 
 });
 server.listen(); 
 // console.log("Server listening on  Port: " + PORT);

 function getCurrentDate() {
     var currentDate = new Date();
     var year        = currentDate.getFullYear();
     var month       = currentDate.getMonth();
     var day         = currentDate.getDate();
     var hour        = currentDate.getHours();
     var minutes     = currentDate.getMinutes();

     var now = year + "-" + month + "-" + day + " " + hour + ":" + minutes;
     return now; 
}
