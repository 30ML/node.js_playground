var fs = require("fs"); // Node.js의 file system 모듈 불러옴

var options = { encoding: "utf-8" }; // 바이트를 UTF-8로 해석
fs.readFile("myfile.txt", options, function(err, data) {
  if (err) { // 파일을 읽는 동안 발생할 수 있는 에러 처리
    console.error("Error reading file!");
    return;
  }
  console.log(data.match(/x/gi).length + " letter X's"); // 정규식을 사용해 X의 횟수 출력
});

console.log("Hello, world!");