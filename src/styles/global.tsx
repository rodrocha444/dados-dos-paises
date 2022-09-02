import { createGlobalStyle } from "styled-components";
import { pxToRem } from "../utils/functions";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    text-decoration: none;
  }
  html{
    font-size: ${pxToRem(16)};
  }
  button{
    border:0;
    background: transparent;

    &:hover{
      cursor: pointer;
    }
  }
`