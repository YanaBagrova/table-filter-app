import { combineReducers } from "redux";
import { citiesReducer } from './citiesReducer'
import { currentPageReducer } from './currentPageReducer'
import { errorReducer } from './errorReducer'
import { filterReducer } from "./filterReducer";
import { searchFilterReducer } from "./searchFilterReducer";
import { formReducer } from "./formReducer";
import { messageReducer } from "./messageReducer";

export const rootReducer = combineReducers({
  citiesReducer, currentPageReducer, errorReducer, filterReducer, searchFilterReducer, formReducer, messageReducer
})
