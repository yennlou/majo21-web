const getResponseHeaders = () => {
  return {
    'Access-Control-Allow-Origin': '*'
  }
}

const handleException = (err) => {
  console.log('Error', err)
  return {
    statusCode: err.statusCode ? err.statusCode : 500,
    headers: getResponseHeaders(),
    body: JSON.stringify({
      error: err.name || 'Exception',
      message: err.message || 'Unknown error'
    })
  }
}

const makeResponse = (body, statusCode = 200) => {
  return {
    statusCode,
    headers: getResponseHeaders(),
    body: JSON.stringify(body)
  }
}

module.exports = {
  getResponseHeaders,
  handleException,
  makeResponse
}
