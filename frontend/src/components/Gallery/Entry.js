import React from 'react'
import styled from 'styled-components'

const EntryWrapper = styled.div``

const Entry = ({ data: { imgUrl, description } }) => (
  <EntryWrapper>
    <img src={imgUrl} alt='' />
    <div>{description}</div>
  </EntryWrapper>
)

export default styled(Entry)``
