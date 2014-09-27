//console.log(process.argv);

// var sum = 0;
// for (i=2; i < process.argv.length; i++) {
	// sum += +process.argv[i];
	// //console.log(process.argv[i]);
// }

// console.log(sum);

//console.log(process.argv[2]);
var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
// console.log(buffer);
// console.log(buffer.toString());
var str = buffer.toString();
var lines = str.split(/\r\n|\r|\n/);
console.log(lines.length - 1);


