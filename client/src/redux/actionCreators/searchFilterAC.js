import { searchFilterAT } from '../actionTypes/searchFilterAT'

export const setSearchFilterAC = (payload) => {
  return {
    type: searchFilterAT.SET_SEARCH_FILTER,
    payload
  }
}
