import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setQuery } from '../../redux/global/actions'
import { BlogInfoWrapper } from './BlogInfo.styles'
import { HyperLink } from '../BaseLink'
import Icon from '../Icon'

const BlogInfo = ({
  createdAt,
  readingTime,
  series,
  tags,
  linkable,
  setQuery
}) => {
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
    <BlogInfoWrapper>
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
          {linkable ? (
            <HyperLink onClick={() => handleSeriesClicked(series)}>
              {series}
            </HyperLink>
          ) : (
            series
          )}
        </span>
      )}
      {tags && (
        <span className='label--tags'>
          <Icon name='price-tag' />
          {linkable
            ? tags.map((tag) => (
                <HyperLink onClick={() => handleTagClicked(tag)} key={tag}>
                  {tag}
                </HyperLink>
              ))
            : tags.join(',')}
        </span>
      )}
    </BlogInfoWrapper>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch(setQuery(query))
})

export default connect(null, mapDispatchToProps)(BlogInfo)
