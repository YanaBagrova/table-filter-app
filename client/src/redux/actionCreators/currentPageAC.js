import { currentPageAT } from '../actionTypes/currentPageAT'

export const setCurrentPageAC = (payload) => {
  return {
    type: currentPageAT.SET_CURRENT_PAGE,
    payload
  }
}
