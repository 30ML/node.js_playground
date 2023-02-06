console.log('Hello, world')

function getToken({ length }) {
  

  const result = String(Math.floor(Math.random() * (10 ** length))).padStart(length, '0')
  console.log(result)
}

getToken({ length: 3 })