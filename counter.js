const counter = (state, action) => {
  if (action === "INCREMENT") {
    return state + 1;
  } else if (action === "DECREMENT") {
    return state - 1;
  }
};

export default counter;
