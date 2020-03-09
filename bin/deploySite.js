const path = require('path')
const AWS = require('aws-sdk')
const yargs = require('yargs')
const fs = require('fs')

AWS.config.update({ region: 'ap-southeast-2' })

const deploySite = (dirPath, bucketName) => {
  const s3 = new AWS.S3()
  function walkSync (currentDirPath, cb) {
    fs.readdirSync(currentDirPath).forEach((name) => {
      const filePath = path.join(currentDirPath, name)
      const stat = fs.statSync(filePath)
      if (stat.isFile()) {
        cb(filePath)
      } else if (stat.isDirectory()) {
        walkSync(filePath, cb)
      }
    })
  }
  walkSync(dirPath, (filePath) => {
    const bucketPath = filePath.substring(dirPath.length + 1)
    let params = {
      Bucket: bucketName,
      Key: bucketPath,
      Body: fs.readFileSync(filePath)
    }
    if (/.js.gz$/.test(bucketPath)) {
      params = {
        ...params,
        Metadata: {
          'Content-Type': 'text/javascript',
          'Content-Encoding': 'gzip'
        }
      }
    }
    s3.putObject(params, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Successfully uploaded ' + bucketPath + ' to ' + bucketName)
      }
    })
  })
}

// eslint-disable-next-line no-unused-expressions
yargs
  .command(
    'deploy',
    'deploy site to s3',
    (yargs) => {},
    ({ dirPath, bucketName }) => {
      console.log('Start deploying...')
      deploySite(dirPath, bucketName)
      console.log('Deploy completed.')
    }
  )
  .help()
  .argv
