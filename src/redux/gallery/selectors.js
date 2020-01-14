import { createSelector } from 'reselect'

const selectGalleryDate = state => state.gallery

export const selectCollection = createSelector(
  [selectGalleryDate],
  gallery => gallery.collection
)
