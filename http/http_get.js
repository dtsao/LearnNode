var http = require('http');
var request = http.get(process.argv[2], function (response) {
		response.setEncoding('utf8');
		response.on("data", console.log);
		response.on("error", console.error);
	});

request.on("error", function (e) {
	console.log('problem with request: ' + e);
});
