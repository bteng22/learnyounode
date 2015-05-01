var fs = require('fs');

var newlineCount = fs.readFileSync(process.argv[2], 'utf8').split('\n').length -1;

// var bufArray = buf.toString().split('\n');

console.log(newlineCount);