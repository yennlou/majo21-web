import React from 'react'
import styled from 'styled-components'

export const MobileFooterWrapper = styled.div`
  padding: 10px 0;
  margin-bottom: 10px;
  text-align: center;
  color: ${({ theme }) => theme.data.BLOG_FONT};
  display: none;
`

const MobileFooter = () => (
  <MobileFooterWrapper>Designed by Majo21</MobileFooterWrapper>
)

export default styled(MobileFooter)``
