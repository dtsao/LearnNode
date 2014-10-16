/*globals require, process, console */

var filterls = require('./make_it_mod_filter.js');
var dir = process.argv[2];
var extension = process.argv[3];

filterls(dir, extension, function (err, list) {
	'use strict';
	var i;
	if (err) {
		console.error('There was an error:', err);
	}
	for (i = 0; i < list.length; i += 1) {
		console.log(list[i]);
	}
});
