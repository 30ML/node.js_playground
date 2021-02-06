const { response } = require('express');
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

var publicPath = path.resolve(__dirname, 'public');

// 모든 요청은 아래 정적 미들웨어를 통과함. 해당하는 파일이 없으면 다음 미들웨어로 넘어감.
app.use(express.static(publicPath));

// '/'(루트) URL로 GET 요청이 들어올 때 호출됨
app.get('/', function(req, res) {
  res.end("Welcome to my homepage!");
});

// '/about' URL로 GET 요청이 들어올 때 호출됨
app.get('/about', function(req, res) {
  res.end("Welcome to the about page!");
});

// '/weather' URL로 GET 요청이 들어올 때 호출됨
app.get('/weather', function(req, res) {
  res.end("Current weather is NICE.");
});

// 동적 URL
// 경로의 "hello" 부분 고정, req.params는 who 속성을 가짐
// 보안 이슈를 가지고 있음 ;(
app.get('/hello/:who', function(req, res) {
  res.end("Hello, " + req.params.who + ".");
});

// 요청에 해당하는 매핑이 없을 경우 호출됨
app.use(function(req, res) {
  res.statusCode = 404;
  res.end("404!");
});

http.createServer(app).listen(3000);
