import {combineReducers} from "redux"
import counterReducer from "./counter/reducer.js";

// Kumpulan Reducer
const reducer = combineReducers({
  counter: counterReducer
})

export default reducer