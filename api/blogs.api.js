const getBlogList = (req, res) => {
  res.send({
    blog1: 'lalala',
    blog2: 'hahaha'
  })
}

const blogsAPI = (router) => {
  router.get('/blogs', getBlogList)
  return router
}

module.exports = blogsAPI
