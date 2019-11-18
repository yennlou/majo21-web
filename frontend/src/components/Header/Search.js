import React from 'react'
import styled from 'styled-components'
import { debounced } from '../../utils/function'

const SearchInput = styled.input`
  color: ${({ theme }) => theme.data.NAV_FONT};
  padding: 6px;
  width: 70%;
  background: ${({ theme }) => theme.data.SEARCH_BG};
  outline: none;
  border:none;

  &:focus {
    outline: none;
  }
`

class Search extends React.Component {
  state = {
    query: ''
  }

  onDebounce = debounced(() => {
    console.log('query confirmd: ' + this.state.query)
  })

  handleQueryInputChange = (e) => {
    this.setState({
      query: e.target.value
    })
    this.onDebounce()
  }

  render () {
    const { query } = this.state
    return (
      <SearchInput
        type='text'
        value={query}
        onChange={this.handleQueryInputChange}
      />
    )
  }
}

export default Search
