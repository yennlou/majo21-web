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
  border: 3px solid var(--nav-font);
  cursor: pointer;
`

export const ThemeOptionLight = styled(ThemeOption)`
  background-color: var(--color-whitesmoke);
`
export const ThemeOptionDark = styled(ThemeOption)`
  background-color: var(--color-blackrussian);
`
