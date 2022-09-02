import { CountryContainer, CountryData } from "./styles";
import LogoHorizontal from '../../assets/logos/logo-horizontal.png'
import { restCountriesAPI } from "../../api";
import { useContext, useEffect, useState } from "react";
import { CountriesContext } from "../../context/CountriesContext";
import { useParams } from "react-router-dom";
import { Country } from "../../types/main";

export function CountryInfo() {
  const [countries,] = useContext(CountriesContext)
  const countrySelectedCCA3 = useParams().cca3
  const [countrySelected, setCountrySelected] = useState<Country>()

  useEffect(() => {
    setCountrySelected(countries.filter(country => country.cca3 === countrySelectedCCA3)[0])
  }, [])

  async function handleClick() {
    console.log('alo')
    console.log(await restCountriesAPI.getAll())
  }

  return (
    <CountryContainer>
      <header>
        <img src={LogoHorizontal} alt="logo horizontal do site paises do mundo" />
      </header>

      <CountryData>
        <section className="left-side">
          <img src={countrySelected?.flags.png} className="flag" />
          <img src={countrySelected?.coatOfArms.png} className="brasao" />
          <a href={countrySelected?.maps.googleMaps}>
            <button className="link">Localização</button>
          </a>
          <div className="link">Download Brasão</div>
          <div className="link">Download bandeira</div>
        </section>

        <section className="right-side">
          <h1>{countrySelected?.translations.por.common} ({countrySelected?.name.common})</h1>
          <h2>{countrySelected?.translations.por.official} ({countrySelected?.name.official})</h2>

          <p>Capital: {countrySelected?.capital.toString()}</p>
          <p>N° de Habitantes: {countrySelected?.population}</p>
          <p>Independente: {countrySelected?.independent ? "Sim" : "Não"}</p>
          <p>Moeda: Real (R$)</p>
          <p>Continente:</p>
          <p>Região:</p>
          <p>Língua:</p>
          <p>Área (km²):</p>
          <p>População:</p>

          <button onClick={handleClick}>Get ALL</button>
        </section>
      </CountryData>
    </CountryContainer>
  )
}