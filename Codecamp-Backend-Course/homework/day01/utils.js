export function isHasHyphen({ number }) {
  if (number.indexOf('-') === -1) {
    console.log('ERROR: 주민등록번호는 반드시 "-" 을 포함해야 합니다!')
    return false
  }
  return true
}

export function checkLength({ number }) {
  const [ fore, back ] = number.split('-')
  if (fore.length !== 6 || back.length !== 7) {
    console.log('ERROR: 주민등록번호의 앞부분은 6자리, 뒷부분은 7자리이어야 합니다!')
    return false
  }
  return true
}

export function generateBlindNumber({ number, blindLength }) {
  if (blindLength > 7){
    console.log('ERROR: 주민등록번호의 뒷자리만 가릴 수 있으며 최대 7자리를 넘을 수 없습니다!')
    return null
  }
  const [fore, back] = number.split('-')
  const blindBack = back.slice(0, back.length - blindLength) + '*'.repeat(blindLength)
  return [fore, blindBack].join('-')
}