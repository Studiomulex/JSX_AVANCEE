import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../utils/Context'
import colors from '../../utils/style/color'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => 
    theme === 'dark' ? colors.secondary : colors.light};
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <FooterContainer theme={theme}>
      <NightModeButton onClick={toggleTheme}>
        {theme === 'light' ? 'Mode Sombre' : 'Mode Clair'}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer
