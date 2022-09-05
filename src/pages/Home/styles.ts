import styled from "styled-components";
import { Link } from "react-router-dom";

import { pxToRem } from "../../utils/functions";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 800px;
  width: 100%;
  
  & > header{
    padding: ${pxToRem(32)} 0;
  }

  & > .search-and-randomize{
    display: flex;
    gap:${pxToRem(16)};

    width: 100%;
  }
`
export const Logo = styled.img`
  height: ${pxToRem(90)};
`
export const SearchBar = styled.form`
  display: flex;
  flex: 6;

  padding: ${pxToRem(10)} ${pxToRem(20)};
  
  background: #E8E8E8;
  border-radius: 5px;
  transition: background 0.4s;
  
  &:focus-within{
    background: #CBCBCB;
  }
  
  & > input{
    flex:1;
    
    background: transparent;
    border: 0;
    outline: 0;
  }
`
export const RandomButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${pxToRem(6)};
  flex: 2;
  justify-content: center;

  background: #E8E8E8;
  border-radius: 6px;

  transition: background 0.2s;

  &:hover{
    background: #CBCBCB;
  }
`

export const CountryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: ${pxToRem(15)};

  padding: ${pxToRem(32)} 0;
  width: 100%;
`
export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  
  width: 100%;
  
  box-shadow: 3px 3px 4px #0004;
  border-radius: 6px;
  overflow: hidden;
  background: transparent;
  text-decoration: none;
  text-overflow: clip;
  color:#000;

  transition: scale 0.2s ease-in;

  &:hover{
    scale: 1.05;
    cursor: pointer;
  }

  & > img{
    height: ${pxToRem(120)};
  }

  &> span{
    position: absolute;
    bottom: 0;
    
    margin-top: -${pxToRem(26)};
    padding: ${pxToRem(5)};
    width: 100%;
    
    line-height: 1;
    font-weight: 500;
    color:#fff;
    background: #0007;
    text-transform: uppercase;
  }
`