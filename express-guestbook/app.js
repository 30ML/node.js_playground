var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// 전역 배열을 만들어 모든 글 저장
var entries = [];
// 모든 뷰에서 글이 있는 배열을 사용할 수 있게 만듦
app.locals.entries = entries;

// morgan을 사용해 모든 요청 기록
app.use(logger("dev"));

// 사용자가 양식을 제출하는 경우 req.body라는 변수에 담음(확장 옵션 필요)
app.use(bodyParser.urlencoded({ extended: false }));

// 루트 url을 방문할 경우 index.ejs를 렌더링
app.get('/', function(req, res) {
  res.render('index');
});

// '/new-entry' url 요청 시 new-entry.ejs 렌더링
app.get('/new-entry', function(req, res) {
  res.render('new-entry');
});

app.post('/new-entry', function(req, res) {
  if (!req.body.title || !req.body.body) {
    res.status(400).send('Entries must have a title and a body.');
    return;
  }
  entries.push({
    title: req.body.title,
    content: req.body.body,
    published: new Date(),
  });
  res.redirect('/');
});

app.use(function(req, res) {
  res.status(404).render("404");
});

http.createServer(app).listen(3000, function() {
  console.log("Guestbook app started on port 3000.");
});
