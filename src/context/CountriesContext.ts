import { createContext } from "react";
import { Country } from "../types/main";

export const CountriesContext = createContext<[Country[], (countries: Country[]) => void]>([[], () => { }])