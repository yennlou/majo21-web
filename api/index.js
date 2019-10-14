const R = require('ramda')
const express = require('express')

const router = express.Router()

const blogsAPI = require('./blogs')

module.exports = R.pipe(blogsAPI)(router)
