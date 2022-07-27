import { formAT } from '../actionTypes/formAT'

export const setFormAC = (payload) => {
  return {
    type: formAT.SET_FORM,
    payload
  }
}
