import { createGlobalStyle } from "styled-components";
import mingzat from "./fonts/Mingzat-Regular.ttf";
import backgroundWinter from "../../images/background-winter.jpg";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Mingzat';
    src: url(${mingzat});
  }

  :root {
    font-size: 16px;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Mingzat', sans-serif;
    word-spacing: -1px;
    background-image: url(${backgroundWinter});
    background-attachment: fixed;
  }

  #root {
    min-height: 100vh;
  }
`;

export { GlobalStyle };
