const { handleException, makeResponse } = require('./utils/http')
const db = require('./utils/db')
const github = require('./utils/github')

exports.handler = async (event) => {
  try {
    const { commits, ref } = JSON.parse(event.body)
    const commit = commits[0]
    if (!ref.endsWith('dev')) {
      return makeResponse({
        message: 'non-dev branch push event'
      })
    }
    const PostFilter = x => x.startsWith('blogs/')
    const addList = [...commit.added, ...commit.modified].filter(PostFilter)
    const removeList = [...commit.removed, ...commit.modified].filter(PostFilter)

    for (const path of removeList) {
      await db.deletePostByPath(path)
    }

    for (const path of addList) {
      const post = await github.getBlogFromGithubByPath(path)
      await db.put(post)
    }

    return makeResponse({
      addList: addList,
      removeList: removeList
    })
  } catch (err) {
    return handleException(err)
  }
}
