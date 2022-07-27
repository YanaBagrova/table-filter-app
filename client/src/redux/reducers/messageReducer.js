import { messageAT } from '../actionTypes/messageAT';

const messageInitialState = {
  message: false,
}

export const messageReducer = (state = messageInitialState, action) => {

  switch (action.type) {
    case messageAT.SET_MESSAGE:
      const message = action.payload
      return {
        ...state,
        message: message,
      };

    default:
      return state
  }
}
