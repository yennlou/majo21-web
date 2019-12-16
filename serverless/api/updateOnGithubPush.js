const { handleException, makeResponse } = require('./utils/http')
const db = require('./utils/db')
const github = require('./utils/github')

exports.handler = async (event) => {
  try {
    const { commits, ref } = JSON.parse(event.body)[0]
    if (!ref.endsWith('dev')) {
      return makeResponse({
        message: 'non-dev branch push event'
      })
    }
    const PostFilter = x => x.startsWith('blogs/')
    const addList = [...commits.added, ...commits.modified].filter(PostFilter)
    const removeList = [...commits.removed, ...commits.modified].filter(PostFilter)

    for (const path of removeList) {
      const post = await github.getBlogFromGithubByPath(path)
      await db.put(post)
    }

    for (const path of addList) {
      await db.deletePostByPath(path)
    }

    return makeResponse({
      addList: addList,
      removeList: removeList
    })
  } catch (err) {
    return handleException(err)
  }
}
