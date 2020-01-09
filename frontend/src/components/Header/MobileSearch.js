import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { debounced } from '../../utils/function'
import { setQuery } from '../../redux/config/actions'
import Icon from '../Icon'

const SearchWrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.pallete.CABARET};
  ${Icon} {
    font-size: 28px;
  }
  .search-input-enter {
    width: 5%;
  }
  .search-input-enter-active {
    width: 100%;
    transition: all .3s;
  }
  .search-input-exit {
    display: none;
  }
`

const SearchInput = styled.input`
  color: ${({ theme }) => theme.data.SEARCH_FONT};
  padding: 6px;
  position: absolute;
  width: 100%;
  background: ${({ theme }) => theme.data.SEARCH_BG};
  border:none;
  outline: none;

`

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      searchOn: false
    }
    this.inputRef = null
  }

  componentDidMount () {
    this.setState({
      input: this.props.query
    })
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = (e) => {
    if (this.inputRef && !this.inputRef.contains(e.target)) {
      this.setState({
        searchOn: false
      })
    }
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

  handleSearchToggle = (e) => {
    this.setState(({ searchOn }) => {
      return {
        searchOn: true
      }
    })
  }

  render () {
    const { input, searchOn } = this.state

    return (
      <SearchWrapper>
        {!searchOn && (<Icon name='search' onClick={this.handleSearchToggle} />)}
        <CSSTransition
          in={searchOn}
          timeout={{
            enter: 1000,
            exit: 0
          }}
          unmountOnExit
          classNames='search-input'
        >
          <SearchInput
            type='text'
            ref={(node) => { this.inputRef = node }}
            value={input}
            onChange={this.handleInputChange}
          />
        </CSSTransition>
      </SearchWrapper>
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
