const axios = require('axios')
const base64 = require('./base64')

const githubAPI = axios.create({
  baseURL: 'https://api.github.com/repos/yennlou/Majo21'
})
githubAPI.defaults.headers.common.Authorization = 'Token ' + process.env.GITHUB_TOKEN

const getBlogListFromGithub = async () => {
  const { data } = await githubAPI.get('/contents/blogs')
  return data.map((blog) => {
    const { name } = blog
    const title = name.split('.').slice(0, -1).join('.')
    return {
      name,
      title,
      encodedName: encodeURI(name)
    }
  })
}

const generateBlogFromGithub = async function * () {
  const blogList = await getBlogListFromGithub()
  for (const blog of blogList) {
    const { data } = await githubAPI.get('/contents/blogs/' + blog.encodedName)
    yield {
      title: blog.title,
      content: base64.decode(data.content)
    }
  }
}

const debugIt = async () => {
  const blogIterator = generateBlogFromGithub()
  for await (const blog of blogIterator) {
    console.log(blog)
  }
}

module.exports = {
  githubAPI,
  generateBlogFromGithub,
  debugIt
}
