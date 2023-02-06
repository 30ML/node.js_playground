import { checkValidationEmail, generateWelcomeTemplate, sendTemplateToEmail } from "./email.js"

function createUser(user) {
  const { email } = user
  // 1. 이메일이 정상인지 확인(1- 존재 여부, 2-'@' 포함 여부)
  const isValid = checkValidationEmail(email)

  if (isValid) {
    // 2. 가입 환영 템플릿 만들기
    const emailTemplate = generateWelcomeTemplate(user)

    // 3. 이메일에 가입 환영 템플릿 전송하기
    sendTemplateToEmail(email, emailTemplate)
  }
}

const myUser = {
  name: '철수',
  age: 8,
  school: '다람쥐초등학교',
  email: 'test@test.com',
}

createUser(myUser)