import styled from 'styled-components'

export const BlogListWrapper = styled.div`
  width: calc(100% - 10px);

  .mansory-grid {
    display: flex;
    margin-left: -50px;
  }

  .mansory-column {
    padding-left: 50px;
    & > div {
      width: auto;
      margin-bottom: 44px;
      @media (max-width: 870px) {
        margin-bottom: 34px;
      }
    }
  }
`
