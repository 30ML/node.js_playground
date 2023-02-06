import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { checkValidationPhoneNumber, getToken, sendTokenToSMS } from './phone.js'

const typeDefs = `#graphql
  type BoardReturn {
    number: Int
    writer: String
    title: String
    content: String
  }

  input CreateBoardInput {
    writer: String
    title: String
    content: String
  }

  type Query {
    # fetchBoards: BoardReturn # => 객체 1개를 의미
    fetchBoards: [BoardReturn] # => 배열 안에 객체 1개 이상을 의미
  }

  type Mutation {
    createBoard(createBoardInput: CreateBoardInput): String
    createTokenAndSendToPhone(phoneNumber: String): String
  }
`

const resolvers = {
  Query: {
    fetchBoards() {
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
          content: '내용3'
        },
      ]

      // 2. 꺼내온 결과 응답 주기
      return result
    },
  },
  Mutation: {
    createBoard(_, { createBoardInput: { writer, title, content } }) {
      // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      // CODE
      console.log(`
        writer: ${writer}
        title: ${title}
        content: ${content}
       `)

      // 2. 저장한 결과 응답 주기
      return '등록 성공'
    },
    createTokenAndSendToPhone(_, { phoneNumber }) {
      // 1. 휴대폰 번호 자릿수 유효성 검사
      if (!checkValidationPhoneNumber({ phoneNumber })) return
      
      // 2. 휴대폰 토큰 6자리 만들기
      const token = getToken({ length: 6 })
    
      // 3. 휴대폰으로 토큰 전송
      sendTokenToSMS({ phoneNumber, token })

      return '인증 완료'
    }
    
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server)
console.log(`🚀 Server ready at ${url}`)
