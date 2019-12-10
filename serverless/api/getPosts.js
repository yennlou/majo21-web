const AWS = require('aws-sdk')
AWS.config.update({ region: 'ap-southeast-2' })

const { makeResponse, handleException } = require('./utils/http')
const db = require('./utils/db')

exports.handler = async (event) => {
  try {
    const data = await db.query('blog')
    return makeResponse(data.Items)
  } catch (err) {
    return handleException(err)
  }
}
