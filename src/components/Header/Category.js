import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
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
  &:first-of-type {
    margin-left: 0;
  }

  &:hover{
    background-color: ${({ theme }) => theme.data.SEARCH_FONT};
    color: ${({ theme }) => theme.data.BG};
  }
`

const Tag = styled(BaseTag)``
const Series = styled(BaseTag)``

const Category = ({ series, tags }) => {
  return (
    <CategoryWrapper>
      <CategorySection>
        <CategoryTitle>Series</CategoryTitle>
        {series.map(s => (<Series key={s}>{s}</Series>))}
      </CategorySection>
      <CategorySection>
        <CategoryTitle>Tags</CategoryTitle>
        {tags.map(t => (<Tag key={t}>{t}</Tag>))}
      </CategorySection>
    </CategoryWrapper>)
}

const mapStateToProps = (states) => ({
  series: selectSeries(states),
  tags: selectTags(states)
})

export default connect(mapStateToProps)(Category)
