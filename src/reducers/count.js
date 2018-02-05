import { handleActions } from "redux-actions";

const initialState = 0;

const increment = (state, action) => {
  return { count: state.count + 1};
};

const decrement = (state, action) => {
  return { count: state.count - 1};
};

export default handleActions({
  increment,
  decrement,
}, initialState);
