import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { debounced } from '../../utils/function'
import { setQuery } from '../../redux/config/actions'

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
    input: ''
  }

  onDebounce = debounced(() => {
    this.props.setQuery(this.state.input)
  })

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
    this.onDebounce()
  }

  componentDidMount () {
    this.setState({
      input: this.props.query
    })
  }

  render () {
    const { input } = this.state
    return (
      <SearchInput
        type='text'
        value={input}
        onChange={this.handleInputChange}
      />
    )
  }
}

const mapStateToProps = ({ config: { query } }) => ({
  query
})

const mapDispatchToProps = dispatch => ({
  setQuery: (query) => dispatch(setQuery(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
