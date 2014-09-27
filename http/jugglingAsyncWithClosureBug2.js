//get urls from command line, then print the strings received for each url in url order
var http = require('http');
var bl = require('bl');
var responseData = [];
var completedResponses = 0;
const firstUrlArg = 2;
console.log('Url count: %d', process.argv.length - firstUrlArg);
console.log('responseData.length %d', responseData.length);
var setResponseData = [];

function createSetResponseData(index) {
	return function (data) {
		responseData[index] = data;
	}
}

for (var i = 0; i < process.argv.length - firstUrlArg; i++) {
	setResponseData[i] = createSetResponseData(i);
}
console.log('setResponseData: ' + setResponseData);

for (var i = 0; i < process.argv.length - firstUrlArg; i++) {
	http.get(process.argv[i + firstUrlArg], function (response) {
		response.pipe(bl(function (err, data) {
				var index = i;
				if (err)
					return console.error(err);
				data = data.toString();
				setResponseData[i](data);
			}));
		response.on('end', function () {
			completedResponses += 1;
			console.log('completedResponses: ' + completedResponses);
			console.log('responseData.length: %d', responseData.length);
			console.log(responseData);
			if (completedResponses === process.argv.length - firstUrlArg) {
				responseData.forEach(function (item) {
					console.log(item);
				});
			}
		});
	});
};
