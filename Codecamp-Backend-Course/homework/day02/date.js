function printCurrentTime() {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  const date = String(currentDate.getDate()).padStart(2, '0')
  const hour = String(currentDate.getHours()).padStart(2, '0')
  const minute = String(currentDate.getMinutes()).padStart(2, '0')
  const second = String(currentDate.getSeconds()).padStart(2, '0')

  console.log(`오늘은 ${year}년 ${month}월 ${date}일 ${hour}:${minute}:${second}입니다.`)
}

printCurrentTime()