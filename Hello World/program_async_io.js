//console.log(process.argv);

// var sum = 0;
// for (i=2; i < process.argv.length; i++) {
// sum += +process.argv[i];
// //console.log(process.argv[i]);
// }

// console.log(sum);

//console.log(process.argv[2]);
var fs = require('fs');
fs.readFile(process.argv[2], function (err, data) {
	if (err)
		throw err;
	// console.log(data.toString());
	var lines = data.toString().split("\n").length - 1;
	console.log(lines);
});
// console.log(buffer);
// console.log(buffer.toString());
// var str = buffer.toString();
// var lines = str.split(/\r\n|\r|\n/);
// console.log(lines.length - 1);

