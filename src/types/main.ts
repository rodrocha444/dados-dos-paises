export interface Country {
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