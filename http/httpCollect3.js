var http = require('http');
var concat = require('concat-stream');
var write = concat(function (data) {
		data = data.toString();
		console.log(data.length);
		console.log(data);
	});
http.get(process.argv[2], function (response) {
	response.pipe(write);
});
