import axios from 'axios'

const api = axios.create({ baseURL: "https://restcountries.com/v3.1" })

const getAll = () => api.get('/all')

export const restCountriesAPI = {
  getAll,
}