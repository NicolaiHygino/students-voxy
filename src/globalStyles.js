import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-color: #342866;
    --scd-color: #46CCDB;
    --highlight: #E5F6F6;
  }

  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: 1px solid var(--main-color);
    outline-offset: 0;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;
