const { makeResponse, handleException } = require('./utils/http')
const db = require('./utils/db')

exports.handler = async (event) => {
  try {
    const data = await db.queryPosts('blog')
    return makeResponse(data.Items)
  } catch (err) {
    return handleException(err)
  }
}
