import * as actionName from "./string";

const counterInitialState = {
  counter: 0
}

const initialState = {
  ...counterInitialState,
  action: ''
}

// Ini contoh reducer individual
const counterReducer = (state = initialState, action) => {
  const _actions = {
    [actionName.COUNTER_INCREMENT]: () => ({
      ...state,
      action: action.type,
      counter: state.counter + 1
    }),
    [actionName.COUNTER_DECREMENT]: () => ({
      ...state,
      action: action.type,
      counter: state.counter - 1
    }),
    DEFAULT: () => state
  }
  return (_actions[action.type] || _actions.DEFAULT)()
}

export default counterReducer