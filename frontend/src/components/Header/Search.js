import React from 'react'
import styled from 'styled-components'

const SearchWrapper = styled.div`
  padding: 16px;
  width: 70%;
  background: ${({ theme }) => theme.data.SEARCH_BG};
`

const Search = () => (
  <SearchWrapper />
)

export default Search
