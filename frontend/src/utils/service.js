import axios from 'axios'

var service = axios.create({
  baseURL: process.env.SERVER_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default service
