const AWS = require('aws-sdk')
AWS.config.update({ region: 'ap-southeast-2' })
const dynamodb = new AWS.DynamoDB.DocumentClient()
const TableName = process.env.BLOG_TABLE

const queryItems = async (IndexName, KeyName, KeyValue) => {
  const AttributeNameKey = '#' + KeyName
  const AttributeValueKey = ':' + KeyName
  const KeyConditionExpression = `${AttributeNameKey} = ${AttributeValueKey}`
  const ExpressionAttributeNames = { [AttributeNameKey]: KeyName }
  const ExpressionAttributeValues = { [AttributeValueKey]: KeyValue }
  const resp = await dynamodb.query({
    TableName,
    IndexName,
    KeyConditionExpression,
    ExpressionAttributeNames,
    ExpressionAttributeValues
  }).promise()
  return resp
}

const putPost = async (post) => {
  const resp = await dynamodb.put({
    TableName,
    Item: post
  }).promise()
  return resp
}

const deletePost = async (id) => {
  const resp = await dynamodb.delete({
    TableName,
    Key: {
      post_id: id
    }
  }).promise()
  return resp
}

module.exports = {
  put: putPost,
  delete: deletePost,
  deletePostByPath: async (path) => {
    const { Items } = await queryItems('post_path-index', 'path', path)
    if (!(Items && Items.length)) return null
    const resp = await deletePost(Items[0].post_id)
    return resp
  },
  queryItems,
  queryPosts: async (type) => {
    const resp = await queryItems('post_type-index', 'post_type', type)
    return resp
  }
}
