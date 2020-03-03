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

export const selectNextBlog = blogId =>
  createSelector(
    [selectCollection],
    collection => {
      const itemIdx = collection.findIndex(blog => blog.id === blogId)
      return itemIdx > 0 ? collection[itemIdx - 1] : null
    }
  )

export const selectPrevBlog = blogId =>
  createSelector(
    [selectCollection],
    collection => {
      const itemIdx = collection.findIndex(blog => blog.id === blogId)
      return itemIdx < collection.length - 1
        ? collection[itemIdx + 1]
        : null
    }
  )

export const selectBlogCollectionByQuery = query =>
  createSelector(
    [selectCollection],
    collection => {
      if (query.startsWith('tags:')) {
        const tags = query.replace('tags:', '').trim().split(',')
        return collection.filter(blog => blog.tags && blog.tags.some(t => tags.includes(t)))
      } else if (query.startsWith('series:')) {
        const series = query.replace('series:', '').trim()
        return collection.filter(blog => blog.series === series).reverse()
      }
      return collection.filter(blog => blog.title.toUpperCase().includes(query.toUpperCase()))
    }
  )
