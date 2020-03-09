const path = require('path')
const yargs = require('yargs')
const AWS = require('aws-sdk')

AWS.config.update({ region: 'ap-southeast-2' })

const s3 = new AWS.S3()

// const params = {
//   Bucket: 'majo21-fe-beta',
//   CopySource: path.join(__dirname, '../dist-dev'),
// }
