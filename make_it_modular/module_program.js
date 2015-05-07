var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, fileExt, callback) {
	fs.readdir(dirPath, function(err, list) {
		if(err) return callback(err);

		list = list.filter(function (file) {
			return path.extname(file) === "." + fileExt
		});

		callback(null, list);
	})
};