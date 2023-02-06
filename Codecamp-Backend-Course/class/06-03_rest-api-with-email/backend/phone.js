import coolsms from 'coolsms-node-sdk'

export function checkValidationPhoneNumber({ phoneNumber }) {
  if (phoneNumber.length !== 10 && phoneNumber.length !== 11) {
    console.log('ERROR: PHone Number length has something wrong!')
    return false
  }
  return true
}

export function getToken({ length }) {
  if (length === undefined || length === null) {
    console.log('ERROR: Input length')
    return
  }
  if (length <= 0) {
    console.log('ERROR: Too short')
    return
  }
  if (length > 10) {
    console.log('ERROR: Too long')
    return
  }

  const generatedToken = String(Math.floor(Math.random() * (10 ** length))).padStart(length, '0')
  console.log('Token is generated successfully!! :::', generatedToken)
  return generatedToken
}

export async function sendTokenToSMS({ phoneNumber, token }) {
  const coolSMS = coolsms.default
  const { SMS_KEY, SMS_SECRET, SMS_SENDER } = process.env
  const messageService = new coolSMS(SMS_KEY, SMS_SECRET)

  // sendMany / sendOne
  const result = await messageService.sendOne({
      to: phoneNumber,
      from: SMS_SENDER,
      text: `[HRRC] 안녕하세요. 요청하신 인증번호는 [${token}] 입니다.`,
    })
  console.log('result:', result)
    // .then(res => console.log(`${phoneNumber} 번호로 인증번호 ${token}을 전송합니다!`))
    // .catch(err => console.error(err))
}
