import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CountriesContext } from './context/CountriesContext';
import { CountryInfo } from './pages/CountryInfo';
import { Home } from './pages/Home';
import { DefaultLayout } from './styles/DefaultLayout';
import { Country } from './types/main';

export function Router() {
  const [countries, setCountries] = useState<Country[]>([])
  function updateCountries(countries: Country[]): void {
    setCountries(countries);
  }
  return (
    <CountriesContext.Provider value={[countries, updateCountries]}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/country/:cca3" element={<CountryInfo />} />
        </Route>
      </Routes>
    </CountriesContext.Provider>

  )
}