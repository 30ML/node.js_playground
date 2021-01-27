// 1. express, http 모듈 import
var express = require('express');
var http = require('http');

// 2. 요청 핸들러를 반환하는 express() 호출
var app = express();

// 
app.use(function(request, response) {
  console.log('In comes a request to: ' + request.url);
  response.end('Hello world!');
});

// 4. 서버 객체 생성 / 특정 포트에서 요청 수신 대기
http.createServer(app).listen(3000);