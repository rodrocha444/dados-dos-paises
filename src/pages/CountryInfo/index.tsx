import { CountryContainer, CountryData } from "./styles";
import LogoHorizontal from '../../assets/logos/logo-horizontal.png'

export function CountryInfo() {
  return (
    <CountryContainer>
      <header>
        <img src={LogoHorizontal} alt="logo horizontal do site paises do mundo" />
      </header>

      <CountryData>
        <section className="left-side">
          <img src="https://flagcdn.com/fi.svg" className="flag" />
          <img src="https://mainfacts.com/media/images/coats_of_arms/fi.svg" className="brasao" />
          <div className="link">maps</div>
          <div className="link">Download Brasão</div>
          <div className="link">Download bandeira</div>
        </section>

        <section className="right-side">
          <h1>BRASIL (BRAZIL)</h1>
          <h2>República Federativa do Brasil (Republic of Brazil)</h2>

          <p>Capital:</p>
          <p>N° de Habitantes:</p>
          <p>Independente:</p>
          <p>Moeda: Real (R$)</p>
          <p>Continente:</p>
          <p>Região:</p>
          <p>Língua:</p>
          <p>Área (km²):</p>
          <p>População:</p>
        </section>
      </CountryData>
    </CountryContainer>
  )
}