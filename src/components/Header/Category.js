import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { selectSeries, selectTags } from '../../redux/category/selectors'

export const CategoryWrapper = styled.div`
`

const CategorySection = styled.div`
  margin-bottom: 20px;
`

const CategoryTitle = styled.h3`
  border-bottom: 1px solid ${({ theme }) => theme.data.SEARCH_FONT}44;
  padding-bottom: 6px;
  text-transform: uppercase;
  margin-bottom: 12px;
`

const BaseTag = styled.span`
  display: inline-block;
  padding: 4px 6px;
  color: ${({ theme }) => theme.data.SEARCH_FONT};
  border: 1px solid currentColor;
  margin: 0 8px;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  &:first-of-type {
    margin-left: 0;
  }

  &:hover, &.selected{
    background-color: ${({ theme }) => theme.data.SEARCH_FONT};
    color: ${({ theme }) => theme.data.BG};
  }
`

const Tag = styled(BaseTag)``
const Series = styled(BaseTag)``

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

const Category = ({ series, tags, onCategoryChange }) => {
  const [chosenCategory, categoryDispatch] = useReducer(categoryReducer, { series: '', tags: {} })

  useEffect(() => {
    onCategoryChange && onCategoryChange(chosenCategory)
  }, [chosenCategory])

  return (
    <CategoryWrapper>
      <CategorySection>
        <CategoryTitle>Series</CategoryTitle>
        {series.map(s => (
          <Series
            key={s}
            className={classNames({ selected: s === chosenCategory.series })}
            onClick={() => {
              categoryDispatch({ type: 'toggleSeries', payload: s })
            }}
          >
            {s}
          </Series>
        ))}
      </CategorySection>
      <CategorySection>
        <CategoryTitle>Tags</CategoryTitle>
        {tags.map(t => (
          <Tag
            key={t}
            className={classNames({ selected: chosenCategory.tags[t] })}
            onClick={() => {
              categoryDispatch({ type: 'toggleTags', payload: t })
            }}
          >
            {t}
          </Tag>
        ))}
      </CategorySection>
    </CategoryWrapper>)
}

const mapStateToProps = (states) => ({
  series: selectSeries(states),
  tags: selectTags(states)
})

export default connect(mapStateToProps)(Category)
