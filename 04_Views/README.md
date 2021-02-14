### 4. 뷰 *`express().set()`*
뷰를 사용하면 HTML을 동적으로 렌더링할 수 있음
뷰에서는 바로 HTML을 변경하고 다른 언어로 HTML을 작성할 수 있음

HTML을 생성하는 것들
* EJS(Embedded JavaScript)
* Handlebars
* Pug

#### Express에서 뷰 설정하기
```js
/* Express에서 뷰 설정하기 */
// View Directory: Express에게 views라는 폴더에 뷰가 있음을 알려줌
app.set("views", path.resolve(__dirname, "views"));
// View Engine: Express에게 EJS 템플릿 엔진을 사용할 것이라고 알려줌
app.set("view engine", "ejs");

app.get('/', function(res, req) {
  // 변수 전달 및 index.ejs 렌더링
  res.render('index', {
    message: "Hey everyone! This is my webpage.",
  });
})
```