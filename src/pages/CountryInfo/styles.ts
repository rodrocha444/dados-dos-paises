import styled from "styled-components";

import { pxToRem } from "../../utils/functions";

export const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;

  & > header {
    display: flex;
    justify-content: center;

    width: 100%;
    padding: ${pxToRem(32)} 0;
    
    background: #D9D9D9;
  }
  & > header img {
    height: ${pxToRem(20)};
  }
`

export const CountryData = styled.main`
  display: flex;
  gap: ${pxToRem(40)};
  
  max-width: 800px;
  width: 100%;
  padding: ${pxToRem(40)} 0;
  overflow: hidden;

  & .right-side {
    flex:1;

    & > h2{
      margin: ${pxToRem(20)} 0;
      
      font-size: ${pxToRem(18)};
      font-style: italic  ;
      font-weight: 400;
    }

    & > .data{
      line-height: 1.8;

      & strong{
        margin-right: 0.5rem;
        
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }

  & .left-side{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 15rem);
    gap: ${pxToRem(26)};
    flex:1;

    & .flag{
      grid-column: 1/3;

      width:100%;
      height: 100%;
      object-fit: cover;

      box-shadow: 5px 5px 10px #0005;
    }
    & .brasao{
      grid-column: 1/2;
      grid-row: 2/3;

      max-width:100%;
      width: auto;
      object-fit: cover;

      filter: drop-shadow( 5px 5px 5px #0005);
    }
    & .link{
      display: flex;
      align-items: center;
      justify-content: center;
     
      width: 100%;
      padding: ${pxToRem(16)} 0;
      
      border-radius: 6px;
      font-size: 1.1rem;
      box-shadow: 5px 5px 10px #0005;
      transition: background 0.2s;
      background: #191919;
     & p{
      color: #fff;
     }
      &:hover{
        background: #393939;
        cursor: pointer;
      }
    }
  }
`