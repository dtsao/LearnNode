/*globals require, process, console */
var http = require('http');
var bl = require('bl');
var firstUrlParm = 2;
var results = [];
var responsesCompleted = 0;
var urlParmCount = process.argv.length - firstUrlParm;

function getUrl(urlNum) {
	http.get(process.argv[urlNum + firstUrlParm], function (res) {
		res.pipe(bl(function (err, data) {
				if (err) {
					return console.error(err);
				}
				results[urlNum] = data.toString();
				responsesCompleted += 1;
				if (responsesCompleted === urlParmCount) {
					results.forEach(function (item) {
						console.log(item);
					});
				}
			}));
	});
}

for (var i = 0; i < urlParmCount; i++) {
	getUrl(i);
}
