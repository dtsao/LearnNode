/*
HTTP JSON API SERVER
Exercise 13 of 13

Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

/api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:{
"hour": 14,
"minute": 23,
"second": 15
}

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time under the property 'unixtime'. For example:{ "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your program.
 */
/* global require, http, url */
var port = process.argv[2];
var http = require('http');
var url = require('url');
var result;

function parseIso(iso) {
	'use strict';
	return new Date(iso);
}

function getTimeObject(dt) {
	'use strict';
	var time = {};
	time.hour = dt.getHours();
	time.minute = dt.getMinutes();
	time.second = dt.getSeconds();
	return time;
}

function getUnixTimeObject(dt) {
	'use strict';
	var time = {};
	time.unixtime = dt.getTime();
	return time;
}

var server = http.createServer(function (req, res) {
		if (req.method === 'GET') {
			var reqUrl = url.parse(req.url, true);
			if (reqUrl.pathname === '/api/parsetime' && reqUrl.query.iso) {
				result = JSON.stringify(getTimeObject(parseIso(reqUrl.query.iso)));
			} else if (reqUrl.pathname === '/api/unixtime' && reqUrl.query.iso) {
				result = JSON.stringify(getUnixTimeObject(parseIso(reqUrl.query.iso)));
			} 
			if (result) {
				res.writeHead(200, {'Content-Type': 'application/json'});
				res.end(result);
			} else {
				res.writeHead(404);
				res.end();
			}
		}
	});
server.listen(port);
