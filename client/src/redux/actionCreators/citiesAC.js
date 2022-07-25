import { citiesAT } from '../actionTypes/citiesAT'

export const citiesInitAC = (payload) => {
  return {
    type: citiesAT.INIT_CITIES,
    payload
  }
}

export const getCitiesFetchAC = (payload) => {
  return {
    type: citiesAT.GET_CITIES_FETCH,
    payload
  }
}
