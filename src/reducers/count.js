import { handleActions } from 'redux-actions'

import * as actions from "actions/count";

const initialState = 0

const increment = (state, action) => {
  return ++state
}

const decrement = (state, action) => {
  return --state
}

export default handleActions(
  {
    [actions.increment]: increment,
    [actions.decrement]: decrement,
  },
  initialState,
)
