var strftime = require('strftime');
var net = require('net');
var port = Number(process.argv[2]);
// console.log('port %d', port);
// var curTime = new Date();
// console.log(curTime);
// console.log(strftime('%Y-%m-%d %H:%M'));
var curTimeString = strftime('%Y-%m-%d %H:%M');
// console.log(curTimeString);

var server = net.createServer(function(socket) {
	socket.write(curTimeString + '\n');
	socket.end();
});
server.listen(port);
