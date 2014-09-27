var port = Number(process.argv[2]);
var net = require('net');

// String.prototype.zeroFill = function () {
	// return Number(this) < 10 ? '0' + this : this;
// }

function zerofill(i) {
	return (i<10? '0' : '') + i;
}

function now() {
	var dt = new Date();
	return dt.getFullYear() + '-' + 
	zerofill(dt.getMonth() + 1) + '-' + 
	zerofill(dt.getDate()) + ' ' + 
	zerofill(dt.getHours()) + ':' + 
	zerofill(dt.getMinutes());
	// + ':' +
	// zerofill(dt.getSeconds());
}

// console.log(now());

var server = net.createServer(function(socket) {
		socket.end(now() + '\n');
});

server.listen(port);
