var express = require('express');
var http = require('http');

var app = express();

// logging
app.use(function(request, response, next) {
  console.log('In comes a ' + request.mothod + ' to ' + request.url);
  next();
});

// auth
app.use(function(request, response, next) {
  var minute = new Date().getMinutes();
  if (minute % 2 === 0) {
    next();
  } else {
    response.statusCode = 403;
    response.end('Not authorized.');
  }
});

app.use(function(request, response) {
  response.end('Secret info: the password is "MJDN0011"!');
});

http.createServer(app).listen(3000);