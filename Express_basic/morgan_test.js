var express = require('express');
var logger = require('morgan');
var http = require('http');

var app = express();

app.use(logger('short')); // * logger('short')는 함수를 반환함

app.use(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello, world!');
});

http.createServer(app).listen(3000);