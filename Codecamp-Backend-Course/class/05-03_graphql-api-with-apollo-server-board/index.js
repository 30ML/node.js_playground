import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

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
    createBoard(
      writer: String,
      title: String,
      content: String,
    ): String
    createBoard2(createBoardInput: CreateBoardInput): String
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
          content: '내용3',
        },
      ]

      // 2. 꺼내온 결과 응답 주기
      return result
    },
  },
  Mutation: {
    createBoard(_, { writer, title, content }) {
      // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      // CODE
      console.log(`
        writer: ${writer}, 
        title: ${title}, 
        content: ${content}
      `)

      // 2. 저장한 결과 응답 주기
      return '등록 성공'
    },
    createBoard2(_, { createBoardInput: { writer, title, content } }) {
      // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      // CODE
      console.log(`
        writer: ${writer},
        title: ${title},
        content: ${content}
       `)

      // 2. 저장한 결과 응답 주기
      return '등록 성공'
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server)
console.log(`🚀 Server ready at ${url}`)
