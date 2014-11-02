/* global require, net, console */
var net = require('net');
var socketNum = process.argv[2];

function zeroFill(i) {
	'use strict';
	return (i < 10 ? '0' : '') + i;
}

function formatDate(dt) {
	'use strict';
	//return a date string formatted like: YYYY-MM-DD hh:mm
	return dt.getFullYear() +
	'-' + zeroFill(dt.getMonth() + 1) +
	'-' + zeroFill(dt.getDate()) +
	' ' + zeroFill(dt.getHours()) +
	':' + zeroFill(dt.getMinutes());
}

var server = net.createServer(function (socket) {
		//socket handling logic
		socket.write(formatDate(new Date()) + '\n');
		socket.end();
	});
server.listen(socketNum);
