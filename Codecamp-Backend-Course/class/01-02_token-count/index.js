console.log('Hello, world')

function getToken({ length }) {
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

  const result = String(Math.floor(Math.random() * (10 ** length))).padStart(length, '0')
  console.log(result)
}

getToken({ length: 10 })