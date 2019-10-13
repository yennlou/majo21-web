const getUserList = (req, res) => {
  res.send({
    blog1: 'lalala',
    blog2: 'hahaha'
  })
}

const usersAPI = (router) => {
  router.get('/users', getUserList)
  return router
}

module.exports = usersAPI
