var net = require('net')

var server = net.createServer(function (socket) {
	var now = new Date();
	var dateString = now.toISOString().split("T")[0] + " " + now.getHours() + ":" + now.getMinutes()
	socket.end(dateString + "\n");
});
server.listen(process.argv[2])

// USE MOMENT LIBRARY

// var moment = require('moment');

// var server = net.createServer(function (socket) {
// var data = moment().format("YYYY-MM-DD HH:mm");

// OFFICIAL SOLUTION

// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))