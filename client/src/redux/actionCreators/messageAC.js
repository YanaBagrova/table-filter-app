import { messageAT } from '../actionTypes/messageAT'

export const setMessageAC = (payload) => {
  return {
    type: messageAT.SET_MESSAGE,
    payload
  }
}
