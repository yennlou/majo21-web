const INITIAL_STATE = {
  directory: [
    {
      id: 1,
      title: 'some title LALALALALALALA',
      excerpt: 'Lorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem'
    },
    {
      id: 2,
      title: 'some title LALALALALALALA',
      excerpt: 'Lorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem'
    },
    {
      id: 3,
      title: 'some title LALALALALALALA',
      excerpt: 'Lorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem'
    },
    {
      id: 4,
      title: 'some title LALALALALALALA',
      excerpt: 'Lorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem'
    }
  ]
}

const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default blogReducer
