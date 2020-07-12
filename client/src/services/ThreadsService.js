const baseURL = 'http://localhost:3000/api/threads';

export default {
  getThreads(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
