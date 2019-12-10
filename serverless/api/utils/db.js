const AWS = require('aws-sdk')
AWS.config.update({ region: 'ap-southeast-2' })
const dynamodb = new AWS.DynamoDB.DocumentClient()
const tableName = process.env.BLOG_TABLE

module.exports = {
  put: async (item) => {
    const resp = await dynamodb.put({
      TableName: tableName,
      Item: item
    }).promise()
    return resp
  },
  query: async (type) => {
    const resp = await dynamodb.query({
      TableName: tableName,
      IndexName: 'post_type-index',
      KeyConditionExpression: '#post_type = :postType',
      ExpressionAttributeNames: { '#post_type': 'post_type' },
      ExpressionAttributeValues: { ':postType': type }
    }).promise()
    return resp
  }
}
