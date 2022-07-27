import { filterAT } from '../actionTypes/filterAT'

export const setFilterAC = (payload) => {
  return {
    type: filterAT.SET_FILTER,
    payload
  }
}
