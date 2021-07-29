import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body #root {
    height:100%;
  }

  body {
    font: 14px 'Roboto Mono', sans-serif;
    background: #3cf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased!important;
  }

  ul {
    list-style: none;
  }
`;
