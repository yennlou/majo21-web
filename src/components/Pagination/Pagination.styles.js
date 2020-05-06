import styled from 'styled-components'

export const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: ${({ active }) => (active ? 'var(--bg)' : 'var(--pagination)')};
  background: ${({ active }) => (active ? 'var(--pagination)' : 'var(--bg)')};
  z-index: ${({ active }) => (active ? 1 : 0)};
  font-size: 14px;
  margin-bottom: 20px;
  cursor: pointer;
`

export const PaginationWrapper = styled.div`
  display: flex;
  position: fixed;
  right: 20px;
  top: 116px;
  flex-direction: column;
  @media (max-width: 1290px) {
    right: 12px;
  }
  @media (max-width: 940px) {
    position: relative;
    right: 0;
    top: 0;
    flex-direction: row;
    ${IndexWrapper} {
      margin-bottom: 0px;
      margin-right: 20px;
    }
  }
`
