const categoryReducer = (state = { series: '', tags: {} }, action) => {
  switch (action.type) {
    case 'toggleTags':
      if (state.tags[action.payload]) {
        const newTags = { ...state.tags }
        delete newTags[action.payload]
        return {
          ...state,
          tags: newTags
        }
      } else {
        return {
          series: '',
          tags: {
            ...state.tags,
            [action.payload]: true
          }
        }
      }
    case 'toggleSeries':
      if (state.series === action.payload) {
        return {
          ...state,
          series: ''
        }
      } else {
        return {
          tags: {},
          series: action.payload
        }
      }
    default:
      return state
  }
}

export { categoryReducer }
