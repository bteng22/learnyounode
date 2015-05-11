var http = require('http');
var fs = require('fs');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
	fs.createReadStream(process.argv[3]).pipe(res);
})

server.listen(port);
console.log("Server listening to " + port)

// OFFICIAL SOLUTION

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))