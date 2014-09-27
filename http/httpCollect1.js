var http = require('http');
var responseData ='';
http.get(process.argv[2], function (response) {
	response.on('data', function (data) {
		responseData += data;
	});
	response.on('error', console.error);
	response.on('end', function () {
		console.log(responseData.length);
		console.log(responseData);
	});
});
