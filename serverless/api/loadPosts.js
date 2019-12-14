const uuidv4 = require('uuid/v4')
const db = require('./utils/db')
const { handleException, makeResponse } = require('./utils/http')
const { generateBlogFromGithub } = require('./utils/github')

exports.handler = async (event) => {
  try {
    const blogIterator = generateBlogFromGithub()
    for await (const blog of blogIterator) {
      await db.put({
        post_id: uuidv4(),
        ...blog,
        post_type: 'blog'
      })
    }
    return makeResponse({
      message: 'All posts are reloaded.'
    })
  } catch (err) {
    return handleException(err)
  }
}
