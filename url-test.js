/* 내장 모듈 */

var url = require("url");
// 느슨한 명명 규칙: 모듈을 요청할 때 대부분은 모듈 자체와 같은 이름을 갖는 변수에 넣음
var parsedURL = url.parse("http://www.example.com/profile?name=kim");

console.log(parsedURL.protocol); // "http:"
console.log(parsedURL.host); // "www.example.com"
console.log(parsedURL.query); // "name=kim"