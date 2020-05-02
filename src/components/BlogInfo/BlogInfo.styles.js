import styled from 'styled-components'
import { HyperLink } from '../BaseLink'

export const BlogInfoWrapper = styled.div`
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

  .label--series svg,
  .label--tags svg {
    margin-right: 8px;
  }

  .label--tags {
    position: relative;
    bottom: -1px;
    ${HyperLink} {
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
