//get urls from command line, then print the strings received for each url in url order
var http = require('http');
var bl = require('bl');
var result = [];
var completedResponses = 0;
const firstUrlArg = 2;

function printResults() {
	result.forEach(function (item) {
		console.log(item);
	});
}

function httpGet(i) {
	http.get(process.argv[i + firstUrlArg], function (response) {
		response.pipe(bl(function (err, data) {
				if (err)
					return console.error(err);
				result[i] = data.toString();
				completedResponses += 1;
				if (completedResponses == process.argv.length - firstUrlArg) {
					printResults();
				}
			}));
	});
}

for (var i = 0; i < process.argv.length - firstUrlArg; i++) {
	httpGet(i);
}
