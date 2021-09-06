import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #fafafa;
    font-family: 'Raleway', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  textarea:focus, button:focus, li:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  button {
    border: none;
  }

  input:focus {
    border: 1px solid #2c2c2c;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export default GlobalStyle;
