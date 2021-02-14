### 2. 라우팅 *`express().[method]([url], [callback])`*
<u>특정 HTTP 메서드</u>, <u>특정 URL</u>을 방문할 때만 함수가 호출되는 것
{ '특정 HTTP 메서드에 의존하는 특정 핸들러'에 대한 요청 }을 URL과 매핑하는 방식

* 첫 번째 인수 - 경로
* 두 번째 인수 - 요청 핸들러 함수

```js
var publicPath = path.resolve(__dirname, "public");

// 정적 미들웨어
app.use(express.static(publicPath));

// '/'(루트) URL로 GET 요청이 들어올 때 호출
app.get('/', function(req, res) {
  res.end("Welcome to my homepage!");
});

// '/about'으로 GET 요청이 들어올 때 호출
app.get('/about', function(req, res) {
  res.end("Welcome to the about page!");
});

// 동적 URL
// 경로의 "hello" 부분 고정, req.params는 who 속성을 가짐
// 보안 이슈를 가지고 있음 ;(
app.get("/hello/:who", function(req, res) {
  res.end("Hello, " + req.params.who + ".");
});

// 요청에 해당하는 매핑이 없을 경우 호출
app.use(function(req, res) {
  res.status = 404;
  res.end("404!");
});
```