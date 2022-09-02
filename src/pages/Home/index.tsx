import { CountryGrid, HomeContainer, LinkStyled, Logo, RandomButton, SearchBar } from "./styles";
import LogoPrincipal from '../../assets/logos/logo-principal.png'
import { ArrowsClockwise, MagnifyingGlass } from "phosphor-react";
import { restCountriesAPI } from '../../api'
import { useEffect, useState } from "react";
import { getArrayOfRandomNumbers } from "../../utils/functions";

interface Country {
  name: {
    common: string
    official: string
  }
  independent: boolean
  currencies: {}
  cca3: string
  capital: string[]
  subregion: string
  languages: {}
  translations: {
    por: {
      official: string
      common: string
    }
  },
  area: number
  maps: {
    googleMaps: string
  },
  population: number
  continents: string[]
  flags: {
    png: string
    svg: string
  },
  coatOfArms: {
    png: string
    svg: string
  }
}

export function Home() {

  const [countries, setCountries] = useState<Country[]>([])
  const [randomCountries, setRandomCountries] = useState<Country[]>([])

  async function initializeCountries() {
    let response = await restCountriesAPI.getAll()
    setCountries(response.data)
  }
  function constructCoutriesButtons() {
    if (randomCountries.length > 0) {
      return randomCountries.map((country, index) => (
        <LinkStyled key={country ? country?.cca3 : index} to="country">
          <img src={country?.flags.png} alt="country flag" />
          <span>{country?.translations.por.common}</span>
        </LinkStyled>
      ))
    }
    else {
      return []
    }



  }
  function defineRandomCountries(lengthOfCountries: number) {
    let numberOfCountriesInHome = 12;
    let indexOfRandomCountries = getArrayOfRandomNumbers(0, lengthOfCountries - 1, numberOfCountriesInHome)
    let countriesSelecteds = indexOfRandomCountries.map(index => countries[index])
    setRandomCountries(countriesSelecteds.filter(function (item, pos) {
      return countriesSelecteds.indexOf(item) == pos;
    }))
  }

  useEffect(() => {
    initializeCountries()
  }, [])

  useEffect(() => {
    defineRandomCountries(countries.length)
  }, [countries])

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
        {constructCoutriesButtons()}
      </CountryGrid>
    </HomeContainer>

  )
}