// 1. http 모듈 불러옴
var http = require('http');

// 2. 요청 핸들러 정의
function requestHandler(request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello, world!");
}

// 3. (요청 핸들러를 사용하는) 서버 생성
var server = http.createServer(requestHandler);

// 4. 서버 수신 대기 (3000번 포트)
server.listen(3000);