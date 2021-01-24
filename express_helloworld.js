var express = require("express"); // Express 모듈을 불러옴

var app = express(); // express()를 호출하고, 새로운 Express 애플리케이션을 app 변수에 넣음

// '/' url로 요청이 왔을 경우, "Hello, world" 응답
app.get ("/", function(request, response) {
  response.send("Hello, world"); 
});

// 3000번 포트에서 Express 서버를 시작하고, 시작했다는 로그 기록
app.listen(3000, function() {
  console.log("Express app started on port 3000.");
});