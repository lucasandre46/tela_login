import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
 background-image: ${({ theme }) => theme.colors.fndColor};
 margin: 0;
}
 div{
  text: ${({ theme }) => theme.colors.textColor};
  shadow: ${({ theme }) => theme.colors.swdColor};
 }
`