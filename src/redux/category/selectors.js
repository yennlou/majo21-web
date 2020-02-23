import { createSelector } from 'reselect'

const selectCategoryData = state => state.category

export const selectSeries = createSelector(
  [selectCategoryData],
  category => category.series
)

export const selectTags = createSelector(
  [selectCategoryData],
  category => category.tags
)
