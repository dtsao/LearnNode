/*global module, require, console */

function filterls(directory, extension, cb) {
	'use strict';
	var fs = require('fs'),
		path = require('path');
	fs.readdir(directory, function (err, list) {
		if (err) {
			return cb(err);
		}
		// console.log(list);
		var filteredlist = list.filter(function (item) {
				return path.extname(item) === '.' + extension;
			});
		cb(null, filteredlist);
	});
}

module.exports = filterls;
