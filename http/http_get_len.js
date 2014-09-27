var http = require('http');
var request = http.get(process.argv[2], function (response) {
		response.setEncoding('utf8');
		response.on("data", function (chunk) {
			console.log('got %d bytes of data', chunk.length);
		});
		response.on("error", console.error);
		response.on('end', function () {
			console.log('end event');
		});
	});

request.on("error", function (e) {
	console.log('problem with request: ' + e);
});
