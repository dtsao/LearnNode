var http = require('http');
var port = process.argv[2];

function parseDate(dt) {
	var d = {};
	d.hour = dt.getHours();
	d.minute = dt.getMinutes();
	d.second = dt.getSeconds();
	return d;
}

function unixDate(dt) {
	var u = {};
	u.unixtime = dt.getTime();
	return u;
}

function toJson(obj) {
	return JSON.stringify(obj);
}

var server = http.createServer(function (req, res) {
		if (req.method === 'GET') {
			var dtIn;
			var url = require('url').parse(req.url, true);
			var urlPath = url.pathname;
			if (urlPath === '/api/parsetime' || urlPath === '/api/unixtime') {
				if (url.query.iso) {
					dtIn = new Date(url.query.iso);
				} else {
					dtIn = new Date();
				}
				res.writeHead(200, {
					'Content-Type' : 'application/json'
				});
				if (urlPath === '/api/parsetime') {
					res.write(toJson(parseDate(dtIn)));
				} else {
					res.write(toJson(unixDate(dtIn)));
				}
			} else {
				res.writeHead(400);
			}
			res.end();
		};
	});
server.listen(port);
