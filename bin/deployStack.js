const path = require('path')
const fs = require('fs')
const yargs = require('yargs')
const AWS = require('aws-sdk')

AWS.config.update({ region: 'ap-southeast-2' })
const cloudformation = new AWS.CloudFormation()
const TemplateBody = fs.readFileSync(path.join(__dirname, './cftemplate.yml')).toString()
const Parameters = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../personal/cfparameters.json')).toString()
)

const stackParams = {
  StackName: 'majo21-fe-cf',
  Capabilities: ['CAPABILITY_IAM'],
  Parameters,
  TemplateBody
}

const handleCallback = (err, data) => {
  if (err) console.log(err)
  else console.log(data)
}

// eslint-disable-next-line no-unused-expressions
yargs
  .command(
    'create-stack',
    'create majo21-web stack',
    (yargs) => {},
    (argv) => {
      console.log('Start creating majo21-web stack...')
      cloudformation.createStack(stackParams, handleCallback)
    }
  )
  .command(
    'update-stack',
    'update majo21-web stack',
    (yargs) => {},
    (argv) => {
      console.log('Start updating majo21-web stack ...')
      cloudformation.updateStack(stackParams, handleCallback)
    }
  )
  .help()
  .argv
