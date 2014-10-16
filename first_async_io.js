var fs = require('fs');
fs.readFile(process.argv[2], function (err, contents) {
	if (err)
		console.log(err);
	var lines = contents.toString().split('\n').length - 1;
	console.log(lines);
});
