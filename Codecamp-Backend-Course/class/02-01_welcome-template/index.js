

function getWelcomeTemplate({ name, age, school, createdAt }) {
  const result = `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!!!</h1>
        <hr/>
        <div>이름: ${name}</div>
        <div>나이: ${age}살</div>
        <div>학교: ${school}</div>
        <div>가입일: ${createdAt}</div>
      </body>
    </html>
  `
  console.log(result)
}

const userData = {
  name: '철수', 
  age: 13, 
  school: '토끼 초등학교', 
  createdAt: '2020-01-01',
}

getWelcomeTemplate(userData)