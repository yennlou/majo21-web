import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import useSearch from '../../hooks/useSearch'
import { setQuery } from '../../redux/config/actions'

const SearchInput = styled.input`
  color: ${({ theme }) => theme.data.SEARCH_FONT};
  padding: 6px;
  width: 100%;
  max-width: 300px;
  background: ${({ theme }) => theme.data.SEARCH_FONT}44;
  border:none;
  outline: none;
`

const Search = ({ query, setQuery }) => {
  const [input, handleInputChange] = useSearch(query, setQuery)
  return (
    <SearchInput
      type='text'
      value={input}
      onChange={handleInputChange}
    />
  )
}

const mapStateToProps = ({ config: { query } }) => ({
  query
})

const mapDispatchToProps = dispatch => ({
  setQuery: (query) => dispatch(setQuery(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
