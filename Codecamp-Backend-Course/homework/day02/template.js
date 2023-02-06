function printWelcomeTemplate({ email, rrn, mobile, favoriteSite }) {
  const template = `
    <html>
      <body>
        <h1>Hororoc World 가입을 환영합니다.</h1>
        <hr/>
        <div>이메일: ${email}</div>
        <div>주민번호: ${rrn}</div>
        <div>휴대폰 번호: ${mobile}</div>
        <div>내가 좋아하는 사이트: ${favoriteSite}</div>
      </body>
    </html>
  `
  console.log(template)
}

const userData = {
  email: 'exploit017@gmail.com',
  rrn: '900111-1234567',
  mobile: '000-000-0000',
  favoriteSite: 'google.com',
}

printWelcomeTemplate(userData)