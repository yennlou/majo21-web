import React from 'react'
import styled from 'styled-components'

export const CategoryWrapper = styled.div`
`

const CategorySection = styled.div`
  margin-bottom: 20px;
`

const CategoryTitle = styled.h3`
  border-bottom: 1px solid currentColor;
  padding-bottom: 8px;
  text-transform: uppercase;
`

const Category = ({ series, tags }) => {
  return (
    <CategoryWrapper>
      <CategorySection>
        <CategoryTitle>Series</CategoryTitle>
      </CategorySection>
      <CategorySection>
        <CategoryTitle>Tags</CategoryTitle>
      </CategorySection>
    </CategoryWrapper>)
}

export default Category
