// console.log(process.argv);
var dir = process.argv[2];
var ext = '.' + process.argv[3];
// console.log('dir: ' + dir);
// console.log('ext: ' + ext);

var path = require('path');
var fs = require('fs');
fs.readdir(process.argv[2], function(err, files) {
	if (err) throw err;
	//console.log(files);
	files.filter(function(file) {
		if (path.extname(file) === ext)
			console.log(file);
	});
});

