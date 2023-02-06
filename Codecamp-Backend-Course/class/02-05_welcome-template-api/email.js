import { getToday } from "./utils.js"

export function checkValidationEmail(email) {
  if (email === undefined || !email.includes('@')) {
    console.log('ERROR: 이메일 형식을 확인해주세요!')
    return false
  }
  return true
}

export function generateWelcomeTemplate(userData) {
  const { name, age, school } = userData

  return `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!</h1>
        <hr/>
        <div>이름: ${name}</div>
        <div>나이: ${age}살</div>
        <div>학교: ${school}</div>
        <div>가입일: ${getToday()}</div>
      </body>
    </html>
  `
}

export function sendTemplateToEmail(email, template) {
  console.log(`${email}로 ${template}를 전송합니다.`)
}