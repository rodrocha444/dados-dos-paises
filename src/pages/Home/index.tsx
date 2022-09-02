import { CountryGrid, HomeContainer, LinkStyled, Logo, RandomButton, SearchBar } from "./styles";
import LogoPrincipal from '../../assets/logos/logo-principal.png'
import { ArrowsClockwise, MagnifyingGlass } from "phosphor-react";
import { restCountriesAPI } from '../../api'
import { useContext, useEffect, useState } from "react";
import { getArrayOfRandomNumbers } from "../../utils/functions";
import { Country } from "../../types/main";
import { CountriesContext } from "../../context/CountriesContext";



export function Home() {

  const [countries, updateCountries] = useContext(CountriesContext)
  const [randomCountries, setRandomCountries] = useState<Country[]>([])
  const [filter, setFilter] = useState('')

  async function initializeCountries() {
    let response = await restCountriesAPI.getAll()
    updateCountries(response.data)
  }
  function constructCoutriesButtons() {
    if (randomCountries.length > 0) {
      return randomCountries.map((country, index) => (
        <LinkStyled key={country ? country?.cca3 : index} to={`country/${country?.cca3}`}>
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

  useEffect(() => {
    let filteredCouontries = countries.filter(country => country.translations.por.common
      .toLowerCase()
      .normalize("NFKD")
      .includes(filter.toLowerCase().normalize("NFKD")))

    setRandomCountries(filteredCouontries)
  }, [filter])
  return (
    <HomeContainer>
      <header>
        <Logo src={LogoPrincipal} alt="logotipo de Países do Mundo" />
      </header>
      <div className="search-and-randomize">

        <SearchBar action="" method="GET">
          <input
            type="text"
            spellCheck={false}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button type="submit">
            <MagnifyingGlass weight="bold" size={20} />
          </button>
        </SearchBar>

        <RandomButton onClick={() => defineRandomCountries(countries.length)}>
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