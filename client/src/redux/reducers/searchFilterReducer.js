import { searchFilterAT } from '../actionTypes/searchFilterAT';

const searchFilterInitialState = {
  searchFilter: '',
}

export const searchFilterReducer = (state = searchFilterInitialState, action) => {

  switch (action.type) {
    case searchFilterAT.SET_SEARCH_FILTER:
      const searchFilter = action.payload
      return {
        ...state,
        searchFilter: searchFilter,
      };

    default:
      return state
  }
}
