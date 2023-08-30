import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  * {
    box-sizing: border-box;
  }

  html, body { 
    width: 100%;
    height: 100%;
    min-width: 1200px;
    background-color: #fff;
    font-family:'Noto Sans KR',Arial,sans-serif;
    color: #323232;
  }

  ul, ol {
    list-style: none;
  }
`;
