const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const api = require('./api')

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', api)
app.use(express.static('./frontend/dist'))

module.exports = app
