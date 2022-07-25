import { combineReducers } from "redux";
import { citiesReducer } from './citiesReducer.js'
import { currentPageReducer } from './currentPageReducer.js'

export const rootReducer = combineReducers({
  citiesReducer, currentPageReducer
})
