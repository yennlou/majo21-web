const { handleException, makeResponse } = require('./utils/http')

exports.handler = async (event) => {
  try {
    return makeResponse({
      eventBody: JSON.parse(event.body)
    })
  } catch (err) {
    return handleException(err)
  }
}
