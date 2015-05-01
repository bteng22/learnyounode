var fs = require('fs');
var path = require('path');

var directoryPath = process.argv[2];

fs.readdir(directoryPath, function(err, files) {
	var extension = "." + process.argv[3];
	for(var i = 0; i < files.length; i++) {
		if(path.extname(files[i]) === extension) {
			console.log(files[i]);
		}
	}

	// alternatively

	// files.forEach(function (file) {
	// 	if(path.extname(file) === '.' + process.argv[3])
	// 		console.log(file)
	// })

});