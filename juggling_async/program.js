var http = require('http');
var bl = require('bl');
var completed_requests = 0;
var urls = process.argv.slice(2,5);
var responses = [];

function httpCollect(index) {
// for(index in urls) DON'T DO THIS...
// Although iterating the index remains stuck at "2"
// inside response function scope on line 15.
// Setting method as an argument parameter fixes scope
  http.get(urls[index], function(response) {
    response.pipe(bl(function(err,data) {
      if(err)
        return console.error(err)
      responses[index] = data.toString();
      completed_requests++;

      if(completed_requests === urls.length) {
        for(i in responses)
          console.log(responses[i]);
      }
    }));
  });
}

for(index in urls)
  httpCollect(index);

// learn third-party libraries
// [async](http://npm.im/async)
// [after](http://npm.im/after)
