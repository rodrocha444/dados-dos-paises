export interface Country {
  name: {
    common: string
    official: string
  }
  independent: boolean
  currencies: {
    [currency: string]: {
      name: string
      symbol: string
    }
  }
  cca3: string
  capital: string[]
  region: string
  subregion: string
  languages: {
    [language: string]: string
  }
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