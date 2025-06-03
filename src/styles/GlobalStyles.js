// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.sans};
    background-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.5;
    scroll-behavior: smooth;
  }

  a {
    color: ${({ theme }) => theme.colors.green};
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  
  html {
      scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
