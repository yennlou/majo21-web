const express = require('express')
const router = express.Router()

const blogsAPI = require('./blogs.api')
const usersAPI = require('./users.api')

blogsAPI(router)
usersAPI(router)

module.exports = router
