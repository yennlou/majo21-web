import { createSelector } from 'reselect'

const selectBlogData = state => state.blog

export const selectCollection = createSelector(
  [selectBlogData],
  blog => blog.collection
)

export const selectBlog = blogId =>
  createSelector(
    [selectCollection],
    collection => collection.find(blog => blog.id === blogId)
  )

export const selectBlogCollectionByQuery = query =>
  createSelector(
    [selectCollection],
    collection => collection.filter(blog => blog.title.toUpperCase().includes(query.toUpperCase()))
  )
