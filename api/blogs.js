const { Blog } = require('./models')

// API LOGIC
const getBlogList = async (req, res) => {
  const blogs = await Blog.find({})
  res.send(blogs)
}

const postNewBlog = async (req, res) => {
  const blog = new Blog(req.body)
  await blog.save()
  res.status(201).send({
    message: 'New blog created!'
  })
}

// ROUTER
const blogsAPI = (router) => {
  router.get('/articles', getBlogList)
  // router.post('/articles', postNewBlog)
  return router
}

module.exports = blogsAPI
