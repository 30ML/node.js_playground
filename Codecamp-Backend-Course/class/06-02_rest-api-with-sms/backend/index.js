import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'

import { checkValidationPhoneNumber, getToken, sendTokenToSMS } from './phone.js'
import { swaggerOptions } from './swagger/config.js'

const port = 3000

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerOptions)))

app.get('/boards', (_, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {
      number: 1,
      writer: '철수',
      title: '제목1',
      content: '내용1',
    },
    {
      number: 2,
      writer: '영희',
      title: '제목2',
      content: '내용2',
    },
    {
      number: 3,
      writer: '훈이',
      title: '제목3',
      content: '내용3',
    },
  ]

  // 2. 꺼내온 결과 응답 주기
  res.send(result)
})

app.post('/boards', (req, res) => {
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  // CODE
  console.log(req.body)

  // 2. 저장한 결과 응답 주기
  res.send('게시물이 성공적으로 저장되었습니다.')
})

app.post('/tokens/phone', (req, res) => {
  const { phoneNumber } = req.body

  // 1. 휴대폰 번호 자릿수 유효성 검사
  if (!checkValidationPhoneNumber({ phoneNumber })) return
  
  // 2. 휴대폰 토큰 6자리 만들기
  const token = getToken({ length: 6 })

  // 3. 휴대폰으로 토큰 전송
  sendTokenToSMS({ phoneNumber, token })

  res.send('인증 완료')
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})
