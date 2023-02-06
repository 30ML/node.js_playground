import { getToday } from "./utils.js"
import nodemailer from 'nodemailer'

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
      <body >
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div style="width: 500px;>
            <h1 style="color: red;">${name}님 가입을 환영합니다!</h1>
            <hr/>
            <div>이름: ${name}</div>
            <div>나이: ${age}살</div>
            <div>학교: ${school}</div>
            <div>가입일: ${getToday()}</div>
          </div>
        </div>
      </body>
    </html>
  `
}

export async function sendTemplateToEmail(email, template) {
  const { EMAIL_SENDER, EMAIL_PASSWORD } = process.env
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_SENDER,
      pass: EMAIL_PASSWORD,
    }
  })
  const result = await transporter.sendMail({
    from: EMAIL_SENDER,
    to: email,
    subject: '[HRRC] 가입을 축하합니다!!!',
    html: template,
  })
  console.log(result)
}