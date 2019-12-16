const axios = require('axios')
const base64 = require('./base64')
const parseMarkdown = require('./parseMarkdown')

const githubAPI = axios.create({
  baseURL: 'https://api.github.com/repos/yennlou/Majo21'
})
githubAPI.defaults.headers.common.Authorization = 'Token ' + process.env.GITHUB_TOKEN

const getBlogListFromGithub = async () => {
  try {
    const { data } = await githubAPI.get('/contents/blogs')
    return data.map((blog) => {
      const { name } = blog
      return encodeURI(name)
    })
  } catch (err) {
    console.log(err)
    return []
  }
}

const generateBlogFromGithub = async function * () {
  const blogList = await getBlogListFromGithub()
  for (const blogName of blogList) {
    try {
      const { data } = await githubAPI.get('/contents/blogs/' + blogName)
      const content = base64.decode(data.content)
      yield {
        path: data.path,
        ...parseMarkdown(content)
      }
    } catch (err) {
      console.log(err)
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
