import { checkLength, generateBlindNumber, isHasHyphen } from "./utils.js"


function customRegistrationNumber({ number }) {
  if (!isHasHyphen({ number })) return
  if (!checkLength({ number })) return
  const blindedNumber = generateBlindNumber({ number, blindLength: 6 })
  if (!blindedNumber) return
  console.log('주민등록번호 처리 완료 >', blindedNumber)
}

customRegistrationNumber({ number: '210510-1010101' })