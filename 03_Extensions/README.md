
### 3. 확장: 요청과 응답 객체에 대한 확장
Express에서는 개발자 편의를 위해 추가 메서드와 속성으로 요청 및 응답 객체를 확장
기본적으로 Node.js에는 아래와 같은 메서드가 없음

#### # *res.redirect*

```js
res.redirect("/hello/world");
res.redirect("http://expressjs.com");
```

#### # *res.sendFile*
```js
res.sendFile("/path/to/blues_guitar.mp3");
```

#### # *req.ip*
```js
/* 특정 IP 블랙리스트로 관리하기 */
var EVIL_IP = "123.45.67.89"

app.use(function(req, res, next) {
  if (req.ip === EVIL_IP) {
    res.status(401).send("Not Allowed!");
  } else {
    next();
  }
});

app.use(function(req, res) {
  res.end("Hello :)");
});
```
#### # *req.get*
HTTP 헤더 얻기