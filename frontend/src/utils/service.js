import axios from 'axios'

var service = axios.create({
  baseURL: process.env.SERVER_BASE_URL
})

export default service
