//get urls from command line, then print the strings received for each url in url order
//hard code for 3 urls to see if we can get around closure bugs
var http = require('http');
var bl = require('bl');
var data1, data2, data3 = '';
var completedResponses = 0;
function onResponseEnd() {
	completedResponses += 1;
	if (completedResponses == 3) {
		console.log(data1);
		console.log(data2);
		console.log(data3);
	}
}

http.get(process.argv[2], function (response) {
	response.pipe(bl(function (err, data) {
			if (err)
				return console.error(err);
			data = data.toString();
			data1 = data;
		}));
	response.on('end', onResponseEnd);
});
http.get(process.argv[3], function (response) {
	response.pipe(bl(function (err, data) {
			if (err)
				return console.error(err);
			data = data.toString();
			data2 = data;
		}));
	response.on('end', onResponseEnd);
});
http.get(process.argv[4], function (response) {
	response.pipe(bl(function (err, data) {
			if (err)
				return console.error(err);
			data = data.toString();
			data3 = data;
		}));
	response.on('end', onResponseEnd);
});
