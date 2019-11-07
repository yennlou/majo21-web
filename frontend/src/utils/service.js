import axios from 'axios'

var service = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default service
