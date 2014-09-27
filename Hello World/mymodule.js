module.exports = function filteredDir(directory, ext, callback) {
	var fs = require('fs');
	var path = require('path');
	var list = fs.readdir(directory, function (err, files) {
			if (err)
				return callback(err);
			var filteredlist = files.filter(function (file) {
					if (path.extname(file) === '.' + ext)
						return file;
				});
			callback(null, filteredlist);
		});
};
