import styled from "styled-components";
import { Link } from "react-router-dom";

import { pxToRem } from "../../utils/functions";

export const HomeContainer = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  & > header{
    padding: ${pxToRem(32)} 0;
  }

  & > .search-and-randomize{
    display: flex;
    width: 100%;
    gap:${pxToRem(16)};
  }
`
export const Logo = styled.img`
  height: ${pxToRem(90)};
`
export const SearchBar = styled.form`
  background: #E8E8E8;
  border-radius: 5px;
  flex: 6;
  display: flex;
  padding: ${pxToRem(10)} ${pxToRem(20)};
  transition: background 0.4s;
  &:focus-within{
    background: #CBCBCB;
  }
  & > input{
    background: transparent;
    border: 0;
    outline: 0;
    flex:1;

    &:focus {
      
    } 
    
  }
`
export const RandomButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${pxToRem(6)};
  background: #E8E8E8;
  border-radius: 6px;
  flex: 2;
  justify-content: center;

  transition: background 0.2s;

  &:hover{
    background: #CBCBCB;
  }

`
export const CountryGrid = styled.div`
  padding: ${pxToRem(32)} 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: ${pxToRem(15)};

`
export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 3px 3px 4px #0004;
  border-radius: 6px;
  overflow: hidden;
  background: transparent;
  text-decoration: none;
  text-overflow: clip;
  color:#000;
  position: relative;

  transition: scale 0.2s ease-in;

  &:hover{
    scale: 1.05;
    cursor: pointer;
  }

  & > img{
    height: ${pxToRem(120)};
  }

  &> span{
    margin-top: -${pxToRem(26)};
    line-height: 1;
    font-weight: 500;
    color:#fff;
    background: #0007;
    padding: ${pxToRem(5)};
    text-transform: uppercase;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`