// import { createStore } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const createStore = reducer => {
  let state;
  let listners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listners.forEach(listner => listner());
  };

  const subscribe = listner => {
    listners.push(listner);
    return () => {
      listners = listners.filter(l => l !== listner);
    };
  };

  return { getState, dispatch, subscribe };
};

const store = createStore(counter);
console.log(store.getState());
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());

export default counter;
