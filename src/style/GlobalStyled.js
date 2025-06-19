import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
 background-color: ${({ theme }) => theme.colors.fndColor};
 margin: 0;
}
 div{
  background-color: ${({ theme }) => theme.colors.fndColor};
  text: ${({ theme }) => theme.colors.textColor};
  shadow: ${({ theme }) => theme.colors.swdColor};
 }
  header{
   background-color: ${({ theme }) => theme.colors.fndColor};
  }
`