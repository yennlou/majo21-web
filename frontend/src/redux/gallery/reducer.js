const INITIAL_STATE = {
  collection: [
    {
      id: 1,
      imgUrl: 'https://picsum.photos/id/866/400/300',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      id: 2,
      imgUrl: 'https://picsum.photos/id/656/450/800',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ],
  isFetched: false,
  isFetching: false,
  errMsg: undefined
}

const galleryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default galleryReducer
