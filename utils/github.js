const axios = require('axios')

const githubAPI = axios.create({
  baseURL: 'https://api.github.com/repos/yennlou/Majo21'
})
githubAPI.defaults.headers.common.Authorization = 'token ' + process.env.GITHUB_TOKEN

module.exports = githubAPI
