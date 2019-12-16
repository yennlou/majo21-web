const uuidv4 = require('uuid/v4')
const axios = require('axios')
const base64 = require('./base64')
const parseMarkdown = require('./parseMarkdown')

const githubAPI = axios.create({
  baseURL: 'https://api.github.com/repos/yennlou/Majo21'
})
githubAPI.defaults.headers.common.Authorization = 'Token ' + process.env.GITHUB_TOKEN

const getBlogListFromGithub = async () => {
  try {
    const { data } = await githubAPI.get('/contents/blogs' + '?ref=dev')
    return data.map((blog) => {
      const { name } = blog
      return encodeURI(name)
    })
  } catch (err) {
    console.log(err)
    return []
  }
}

const getBlogFromGithubByPath = async (path) => {
  const { data } = await githubAPI.get('/contents/' + path + '?ref=dev')
  const content = base64.decode(data.content)
  return {
    post_id: uuidv4(),
    post_type: 'blog',
    path: data.path,
    ...parseMarkdown(content)
  }
}

const generateBlogFromGithub = async function * () {
  const blogList = await getBlogListFromGithub()
  for (const blogName of blogList) {
    try {
      const blog = await getBlogFromGithubByPath('blogs/' + blogName)
      yield blog
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
  getBlogFromGithubByPath,
  generateBlogFromGithub,
  debugIt
}
