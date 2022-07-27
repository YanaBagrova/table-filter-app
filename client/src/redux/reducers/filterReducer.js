import { filterAT } from '../actionTypes/filterAT';

const filterInitialState = {
  filter: '',
}

export const filterReducer = (state = filterInitialState, action) => {

  switch (action.type) {
    case filterAT.SET_FILTER:
      const filter = action.payload
      return {
        ...state,
        filter: filter,
      };

    default:
      return state
  }
}
