import { HomeContainer } from "./styles";
import LogoPrincipal from '../../assets/logos/logo-principal.png'
import LogoHorizontal from '../../assets/logos/logo-horizontal.png'

export function Home() {
  return (
    <HomeContainer>
      <img src={LogoPrincipal} alt="logotipo de Países do Mundo" /> 
    </HomeContainer>

  )
}