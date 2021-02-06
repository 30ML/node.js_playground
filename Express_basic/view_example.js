var express = require("express");
var path = require("path");
var http = require("http");

var app = express();

// View Directory: Express에게 views라는 폴더에 뷰가 있음을 알려줌
app.set('views', path.resolve(__dirname, 'views'));
// View Engine: Express에게 EJS 템플릿 엔진을 사용할 것이라고 알려줌
// TODO: ejs 패키지 설치 필요
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  // 변수를 전달함과 동시에 index.ejs를 렌더링
  res.render('index', {
    message: "Hey everyone! This is my webpage."
  });
});

http.createServer(app).listen(3000);