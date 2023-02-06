import { checkValidationPhoneNumber, getToken, sendTokenToSMS } from "./phone.js"

function createTokenAndSendToPhone({ phoneNumber }) {
  // 1. 휴대폰 번호 자릿수 유효성 검사
  if (!checkValidationPhoneNumber({ phoneNumber })) return
  
  // 2. 휴대폰 토큰 6자리 만들기
  const token = getToken({ length: 6 })

  // 3. 휴대폰으로 토큰 전송
  sendTokenToSMS({ phoneNumber, token })
}

createTokenAndSendToPhone({ phoneNumber: '01012345678' })
