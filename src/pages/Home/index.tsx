import { CountryGrid, HomeContainer, LinkStyled, Logo, RandomButton, SearchBar } from "./styles";
import LogoPrincipal from '../../assets/logos/logo-principal.png'
import { ArrowsClockwise, MagnifyingGlass } from "phosphor-react";
import { restCountriesAPI } from '../../api'
import { useEffect, useState } from "react";

export function Home() {
  const [countries, setCountries] = useState(getCountries())

  async function getCountries() {
    return await restCountriesAPI.getAll()
  }

  return (
    <HomeContainer>
      <header>
        <Logo src={LogoPrincipal} alt="logotipo de Países do Mundo" />
      </header>
      <div className="search-and-randomize">

        <SearchBar action="" method="GET">
          <input type="text" name="country" spellCheck={false} />
          <button type="submit">
            <MagnifyingGlass weight="bold" size={20} />
          </button>
        </SearchBar>

        <RandomButton>
          <ArrowsClockwise size={16} weight="bold" />
          <span>Sortear</span>
        </RandomButton>
      </div>

      <CountryGrid>
        <LinkStyled to="country">
          <img src="https://flagcdn.com/w320/fi.png" alt="country flag" />
          <span>Finlandia</span>
        </LinkStyled>
        <LinkStyled to="country">
          <img src="https://flagcdn.com/w320/fi.png" alt="country flag" />
          <span>Finlandia</span>
        </LinkStyled>
        <LinkStyled to="country">
          <img src="https://flagcdn.com/w320/fi.png" alt="country flag" />
          <span>Finlandia</span>
        </LinkStyled>
        <LinkStyled to="country">
          <img src="https://flagcdn.com/w320/fi.png" alt="country flag" />
          <span>Finlandia</span>
        </LinkStyled>
        <LinkStyled to="country">
          <img src="https://flagcdn.com/w320/fi.png" alt="country flag" />
          <span>Finlandia</span>
        </LinkStyled>
        <LinkStyled to="country" type="submit">
          <img src="https://flagcdn.com/w320/fi.png" alt="country flag" />
          <span>Finlandia</span>
        </LinkStyled>
        <LinkStyled to="country">
          <img src="https://flagcdn.com/w320/fi.png" alt="country flag" />
          <span>Finlandia</span>
        </LinkStyled>
        <LinkStyled to="country">
          <img src="https://flagcdn.com/w320/fi.png" alt="country flag" />
          <span>Finlandia</span>
        </LinkStyled>
        <LinkStyled to="country">
          <img src="https://flagcdn.com/w320/fi.png" alt="country flag" />
          <span>Finlandia</span>
        </LinkStyled>
        <LinkStyled to="country" type="submit">
          <img src="https://flagcdn.com/w320/fi.png" alt="country flag" />
          <span>Finlandia</span>
        </LinkStyled>
        <LinkStyled to="country">
          <img src="https://flagcdn.com/w320/fi.png" alt="country flag" />
          <span>Finlandia</span>
        </LinkStyled>
        <LinkStyled to="country">
          <img src="https://flagcdn.com/w320/fi.png" alt="country flag" />
          <span>Finlandia</span>
        </LinkStyled>
      </CountryGrid>
    </HomeContainer>

  )
}