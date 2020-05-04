import styled from 'styled-components'

export const ThemeSwitcherWrapper = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
`

export const ThemeOption = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.data.NAV_FONT};
  cursor: pointer;
`

export const ThemeOptionLight = styled(ThemeOption)`
  background-color: ${({ theme }) => theme.pallete.WHITESMOKE};
`
export const ThemeOptionDark = styled(ThemeOption)`
  background-color: ${({ theme }) => theme.pallete.BLACKRUSSIAN};
`
