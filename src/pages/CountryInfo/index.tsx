import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NumberFormat from 'react-number-format'
import { MapPin } from "phosphor-react";

import { CountryContainer, CountryData } from "./styles";
import { Country } from "../../types/main";
import { getCountriesInStorage } from "../../utils/functions";

import LogoHorizontal from '../../assets/logos/logo-horizontal.png'

export function CountryInfo() {
  const countries: Country[] = getCountriesInStorage();
  const countrySelectedCCA3 = useParams().cca3
  const [countrySelected, setCountrySelected] = useState<Country>()

  useEffect(() => {
    setCountrySelected(countries.filter(country => country.cca3 === countrySelectedCCA3)[0])
  }, [])

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
          <a href={countrySelected?.maps.googleMaps} target="_blank">
            <button className="link">
              <MapPin color="#fff" />
              <p>Localização</p>
            </button>
          </a>
        </section>

        <section className="right-side">
          <h1>
            <p>{countrySelected?.translations.por.common}</p>
            <p>({countrySelected?.name.common})</p>
          </h1>


          <h2>
            <p>{countrySelected?.translations.por.official}</p>
            <p>({countrySelected?.name.official})</p>
          </h2>

          <div className="data">
            <div>
              <strong>Capital:</strong> {countrySelected?.capital.toString()}
            </div>

            <div>
              <strong>N° de Habitantes: </strong>
              <NumberFormat
                value={countrySelected?.population}
                displayType="text"
                thousandSeparator='.'
                decimalSeparator=","
              />
            </div>

            <div>
              <strong>Independente: </strong>
              {countrySelected?.independent ? "Sim" : "Não"}
            </div>

            <div>
              <strong>Moeda: </strong>
              {
                countrySelected && Object.keys(countrySelected?.currencies)
                  .map((currency, index, array) => `${countrySelected?.currencies[currency].name} 
                  (${countrySelected?.currencies[currency].symbol})${index === array.length - 1 ? '' : ', '}`)
              }
            </div>

            <div>
              <strong>Continente: </strong>
              {countrySelected?.region}
            </div>

            <div>
              <strong>Região: </strong>
              {countrySelected?.subregion}
            </div>

            <div>
              <strong>Língua: </strong>
              {
                countrySelected && Object.keys(countrySelected?.languages)
                  .map((language, index, array) => `${countrySelected?.languages[language]}${(index == array.length - 1) ? '' : ', '}`)
              }
            </div>

            <div>
              <strong>Área: </strong>
              <NumberFormat
                suffix=" km²"
                value={countrySelected?.area}
                displayType="text"
                thousandSeparator='.'
                decimalSeparator=","
              />
            </div>
          </div>
        </section>
      </CountryData>
    </CountryContainer>
  )
}