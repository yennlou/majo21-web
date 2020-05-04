import React, { useReducer, useEffect } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { selectSeries, selectTags } from '../../redux/category/selectors'
import { categoryReducer } from './Category.reducers'
import {
  Tag,
  Series,
  CategorySection,
  CategoryTagGroup,
  CategoryTitle,
  CategoryWrapper
} from './Category.styles'

const Category = ({
  value = { series: '', tags: {} },
  series,
  tags,
  onCategoryChange
}) => {
  const [chosenCategory, categoryDispatch] = useReducer(categoryReducer, value)

  useEffect(() => {
    onCategoryChange && onCategoryChange(chosenCategory)
  }, [chosenCategory])

  return (
    <CategoryWrapper>
      <CategorySection>
        <CategoryTitle>Series</CategoryTitle>
        <CategoryTagGroup>
          {series.map((s) => (
            <Series
              key={s}
              className={classNames({ selected: s === value.series })}
              onClick={() => {
                categoryDispatch({ type: 'toggleSeries', payload: s })
              }}
            >
              {s}
            </Series>
          ))}
        </CategoryTagGroup>
      </CategorySection>
      <CategorySection>
        <CategoryTitle>Tags</CategoryTitle>
        <CategoryTagGroup>
          {tags.map((t) => (
            <Tag
              key={t}
              className={classNames({ selected: value.tags[t] })}
              onClick={() => {
                categoryDispatch({ type: 'toggleTags', payload: t })
              }}
            >
              {t}
            </Tag>
          ))}
        </CategoryTagGroup>
      </CategorySection>
    </CategoryWrapper>
  )
}

const mapStateToProps = (states) => ({
  series: selectSeries(states),
  tags: selectTags(states)
})

export default connect(mapStateToProps)(Category)
