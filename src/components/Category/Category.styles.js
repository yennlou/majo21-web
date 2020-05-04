import styled from 'styled-components'
import BaseTag from '../BaseTag'

export const Tag = styled(BaseTag)``
export const Series = styled(BaseTag)``

export const CategorySection = styled.div`
  margin-bottom: 20px;
`

export const CategoryTagGroup = styled.div`
  margin-left: -8px;
`

export const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.data.SEARCH_FONT};
  border-bottom: 1px solid ${({ theme }) => theme.data.SEARCH_FONT}44;
  padding-bottom: 6px;
  text-transform: uppercase;
  margin-bottom: 12px;
`

export const CategoryWrapper = styled.div`
  @media (max-width: 520px) {
    margin-top: 2px;
    margin-bottom: 6px;
    ${CategoryTitle} {
      padding-bottom: 2px;
      margin-bottom: 8px;
      font-size: 14px;
    }
    ${CategorySection} {
      margin-bottom: 4px;
    }

    ${BaseTag} {
      padding: 3px 4px;
    }
  }
`
