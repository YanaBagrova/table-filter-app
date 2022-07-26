import { combineReducers } from "redux";
import { citiesReducer } from './citiesReducer'
import { currentPageReducer } from './currentPageReducer'
import { errorReducer } from './errorReducer'

export const rootReducer = combineReducers({
  citiesReducer, currentPageReducer, errorReducer,
})
