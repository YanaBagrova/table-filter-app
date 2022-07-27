import { formAT } from '../actionTypes/formAT';

const formInitialState = {
  form: false,
}

export const formReducer = (state = formInitialState, action) => {

  switch (action.type) {
    case formAT.SET_FORM:
      const form = action.payload
      return {
        ...state,
        form: form,
      };

    default:
      return state
  }
}
