import { currentPageAT } from '../actionTypes/currentPageAT';

const currentPageInitialState = {
  currentPage: 0
}

export const currentPageReducer = (state = currentPageInitialState, action) => {

  switch (action.type) {
    case currentPageAT.SET_CURRENT_PAGE:
      const currentPage = action.payload
      return { ...state, currentPage: currentPage };

    default:
      return state
  }

}
