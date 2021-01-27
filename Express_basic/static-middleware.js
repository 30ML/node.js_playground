var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// path 모듈 사용하여 path 설정
var publicPath = path.resolve(__dirname, 'public');

// publicPath 디렉터리에서 정적 파일 전송
app.use(express.static(publicPath));

// 일치하는 파일이 없을 경우 다음 미들웨어로 넘어감
app.use(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end("Looks like you didn't find a static file.");
});

http.createServer(app).listen(3000);
