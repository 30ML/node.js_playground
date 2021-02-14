var http = require('http');

function requestHandler (req, res) {
  // 요청 핸들러로 요청 URL 분석
  if (req.url === '/') {
    res.end('Welcome to the homepage!');
  } else if (req.url === '/about') {
    res.end('Welcome to the about page!');
  } else {
    res.end('Error! File not found.');
  }
}

var server = http.createServer(requestHandler);

server.listen(3000);