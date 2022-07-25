import { citiesAT } from '../actionTypes/citiesAT';

const citiesInitialState = {
  cities: [],
}

export const citiesReducer = (state = citiesInitialState, action) => {

  switch (action.type) {
    case citiesAT.INIT_CITIES:
      const cities = action.payload
      return {
        ...state,
        cities: cities,
      };

    default:
      return state
  }
}
