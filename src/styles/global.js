import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, html, body {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif !important;
    background: #ecf1f8;
    -webkit-font-smoothing: antialiased !important;
  }
`;
