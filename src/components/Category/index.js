import React from 'react'
import styled from 'styled-components'

const CategoryWrapper = styled.div`
`

const CategorySection = styled.div`

`

const CategoryTitle = styled.h3`
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
