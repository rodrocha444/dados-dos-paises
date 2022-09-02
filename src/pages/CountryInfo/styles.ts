import styled from "styled-components";

import { pxToRem } from "../../utils/functions";

export const CountryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > header {
    padding: ${pxToRem(32)} 0;
    background: #D9D9D9;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  & > header img {
    height: ${pxToRem(20)};
  }
`

export const CountryData = styled.main`
  max-width: 800px;
  display: flex;
  gap: ${pxToRem(40)};
  padding: ${pxToRem(40)} 0;

  
  & .right-side {
    flex:1;

    & > h2{
      font-size: ${pxToRem(20)};
      font-weight: normal;
      margin-bottom: ${pxToRem(30)};
    }
  }
  & .left-side{
    display: grid;
    flex:1;
    height: ${pxToRem(400)};
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 4fr repeat(3, 1fr);
    gap: ${pxToRem(26)};

    & .flag{
      grid-column: 1/3;
      width: 100%;
      box-shadow: 5px 5px 10px #0005;
    }
    & .brasao{
      grid-row: 2/5;
      width: 100%;
    }
  }
`