const argv = require('yargs')
const mongoose = require('mongoose')
const { Blog } = require('../api/models')
const { generateBlogFromGithub } = require('../utils/github')

const connectMongoose = () => {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

const disconnectMongoose = () => {
  mongoose.disconnect()
}

// eslint-disable-next-line no-unused-expressions
argv
  .command('delete_all', 'Delete all blogs', () => {
    connectMongoose()
    Blog.deleteMany({}, () => {
      console.log('Blogs are all deleted')
    })
    disconnectMongoose()
  })
  .command('reload_all', 'Reload all blogs', async () => {
    connectMongoose()
    const blogIterator = generateBlogFromGithub()
    for await (const blogData of blogIterator) {
      const blog = new Blog(blogData)
      await blog.save()
    }
    console.log('Blogs are all reloaded successfully.')
    disconnectMongoose()
  })
  .argv
