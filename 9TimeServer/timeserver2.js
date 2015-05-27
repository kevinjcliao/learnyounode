var net = require('net');
var PORT = process.argv[2];

var server = net.createServer(function (socket){
    //console.log("New socket!");
    // socket handling logic
    var now = getCurrentDate(); 
    socket.write(now);

    socket.end();
});

server.listen(PORT);

 function getCurrentDate() {
     var currentDate = new Date();
     var year        = currentDate.getFullYear().toString();
     var month       = (currentDate.getMonth()+1).toString();
     var day         = currentDate.getDate().toString();
     var hour        = currentDate.getHours().toString();
     var minutes     = currentDate.getMinutes().toString();
     if (minutes.length < 2) {
	 minutes = "0" + minutes;
     }

     if (day.length < 2){
	 day = "0" + day;
     }

     if (hour.length < 2) {
	 hour = "0" + hour;
     }

     if (month.length < 2) {
	 month = "0" + month;
     }

     var now = year + "-" + month + "-" + day + " " + hour + ":" + minutes + "\n";
     return now; 
 }
