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

export function sendTokenToSMS({ phoneNumber, token }) {
  console.log(`${phoneNumber} 번호로 인증번호 ${token}을 전송합니다!`)
}