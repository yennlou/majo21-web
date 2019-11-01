const argv = require('yargs')
const mongoose = require('mongoose')
const { Blog } = require('../api/models')

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true
})

argv
  .command('delete_all', 'Delete all blogs', () => {
    Blog.deleteMany({}, () => {

    })
  })
  .command('reload_all', 'Reload all blogs', () => {

  })
