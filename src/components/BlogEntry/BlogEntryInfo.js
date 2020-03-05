import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { setQuery } from '../../redux/global/actions'
import BaseLink from '../BaseLink'
import Icon from '../Icon'

const InfoLink = styled(BaseLink)`
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`

export const BlogEntryInfoWrapper = styled.div`
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  > span {
    margin-right: 16px;
    margin-bottom: 8px;
  }

  svg {
    margin-right: 6px;
  }

  .label--series svg, .label--tags svg{
    margin-right: 8px;
  }

  .label--tags {
    position: relative;
    bottom: -1px;
    ${InfoLink} {
      margin-right: 1px;
      &:last-child {
        margin-right: 0px;
      }
    }
    svg {
      bottom: -2px;
    }
  }
`

const BlogEntryInfo = ({ createdAt, readingTime, series, tags, linkable, setQuery }) => {
  const history = useHistory()

  const handleSeriesClicked = (series) => {
    setQuery(`series:${series}`)
    history.push('/')
  }

  const handleTagClicked = (tag) => {
    setQuery(`tags:${tag}`)
    history.push('/')
  }

  return (
    <BlogEntryInfoWrapper>
      {createdAt && (
        <span>
          <Icon name='calendar' />
          {createdAt && createdAt.split(' ')[0]}
        </span>
      )}
      {readingTime && (
        <span>
          <Icon name='stopwatch' />
          {readingTime}
        </span>
      )}
      {series && (
        <span className='label--series'>
          <Icon name='book' />
          {linkable
            ? (<InfoLink onClick={() => handleSeriesClicked(series)}>{series}</InfoLink>)
            : series}
        </span>
      )}
      {tags && (
        <span className='label--tags'>
          <Icon name='price-tag' />
          {linkable
            ? tags.map(tag => (
              <InfoLink onClick={() => handleTagClicked(tag)} key={tag}>{tag}</InfoLink>
            ))
            : tags.join(',')}
        </span>
      )}
    </BlogEntryInfoWrapper>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch(setQuery(query))
})

export default connect(null, mapDispatchToProps)(BlogEntryInfo)
