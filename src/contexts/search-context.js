import React from 'react'

const SearchContext = React.createContext({
  searchOn: false,
  setSearchOn: () => {}
})

export default SearchContext
