const mongoose = require('mongoose')

// BlOG
const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  }
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = { Blog }
