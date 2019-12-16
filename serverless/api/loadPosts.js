const db = require('./utils/db')
const { handleException, makeResponse } = require('./utils/http')
const { generateBlogFromGithub } = require('./utils/github')

exports.handler = async (event) => {
  try {
    const blogIterator = generateBlogFromGithub()
    for await (const blog of blogIterator) {
      await db.put(blog)
    }
    return makeResponse({
      message: 'All posts are reloaded.'
    })
  } catch (err) {
    return handleException(err)
  }
}
