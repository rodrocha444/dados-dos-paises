import { Routes, Route } from 'react-router-dom';
import { CountryInfo } from './pages/CountryInfo';
import { Home } from './pages/Home';
import { DefaultLayout } from './styles/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/country/:cca3" element={<CountryInfo />} />
      </Route>
    </Routes>
  )
}