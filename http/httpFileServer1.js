var port = process.argv[2];
var fileToServe = process.argv[3];
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	//request handling logic
	res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
	var readStream = fs.createReadStream(fileToServe);
	readStream.pipe(res);
});
server.listen(port);

