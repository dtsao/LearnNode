var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var readStream = fs.createReadStream('../Hello World/Test.txt');
readStream.pipe(map(function(chunk){
	console.log(chunk.toString().toUpperCase());
}));
