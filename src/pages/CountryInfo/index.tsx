import { CountryContainer, CountryData } from "./styles";
import LogoHorizontal from '../../assets/logos/logo-horizontal.png'
import {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Country } from "../../types/main";
import NumberFormat from 'react-number-format'
import { MapPin } from "phosphor-react";

export function CountryInfo() {
  const countries: Country[] = JSON.parse(localStorage.getItem('countries')!)
  const countrySelectedCCA3 = useParams().cca3
  const [countrySelected, setCountrySelected] = useState<Country>()

  useEffect(() => {
    setCountrySelected(countries.filter(country => country.cca3 === countrySelectedCCA3)[0])
  })

  return (
    <CountryContainer>
      <header>
        <Link to="/">
          <img src={LogoHorizontal} alt="logo horizontal do site paises do mundo" />
        </Link>
      </header>

      <CountryData>
        <section className="left-side">
          <img src={countrySelected?.flags.png} className="flag" />
          <img src={countrySelected?.coatOfArms.png} className="brasao" />
          <a href={countrySelected?.maps.googleMaps}>
            <button className="link">
              <MapPin />
              <p>Localização</p>
            </button>
          </a>
        </section>

        <section className="right-side">
          <h1>{countrySelected?.translations.por.common} ({countrySelected?.name.common})</h1>
          <h2>{countrySelected?.translations.por.official} ({countrySelected?.name.official})</h2>

          <p>Capital: {countrySelected?.capital.toString()}</p>
          <NumberFormat
            prefix="N° de Habitantes: "
            value={countrySelected?.population}
            displayType="text"
            thousandSeparator='.'
            decimalSeparator=","
          />
          <p>Independente: {countrySelected?.independent ? "Sim" : "Não"}</p>
          <p>Moeda: {
            countrySelected && Object.keys(countrySelected?.currencies)
              .map(currency => `${countrySelected?.currencies[currency].name} (${countrySelected?.currencies[currency].symbol})`)
          }</p>
          <p>Continente: {countrySelected?.region}</p>
          <p>Região: {countrySelected?.subregion}</p>
          <p>Língua: {
            countrySelected && Object.keys(countrySelected?.languages)
              .map((language, index, array) => `${countrySelected?.languages[language]}${(index == array.length - 1) ? '.' : ', '}`)
          }</p>
          <NumberFormat
            prefix="Área: "
            suffix=" km²"
            value={countrySelected?.area}
            displayType="text"
            thousandSeparator='.'
            decimalSeparator=","
          />
        </section>
      </CountryData>
    </CountryContainer>
  )
}