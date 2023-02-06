import axios from 'axios'

// Sync
function fetchPostSync() {
  const post = axios.get('https://koreanjson.com/posts/1')
  console.log('sync', post)
  //post.then(({data}) => {console.log(data)})
}

// Async
async function fetchPostAsync() {
  const post = await axios.get('https://koreanjson.com/posts/1')
  console.log('async: data', post.data)
}

fetchPostSync()
fetchPostAsync()
