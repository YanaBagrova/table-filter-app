import { errorAT } from '../actionTypes/errorAT'

export const errorInitAC = (payload) => {
  return {
    type: errorAT.INIT_ERROR,
    payload
  }
}
