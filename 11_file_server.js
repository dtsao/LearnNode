/* global require, http, fs */
var port = process.argv[2];
var filePath = process.argv[3];
var fs = require('fs');
var http = require('http');
var server = http.createServer(function callback(request, response) {
	//request handling logic
	var readStream = fs.createReadStream(filePath);
	readStream.pipe(response);
});
server.listen(port);
