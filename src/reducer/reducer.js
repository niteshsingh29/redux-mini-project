let initialState = 0;
const reducer = (state = initialState, action) => {
  if (action.type === "increase") {
    return (state = state + action.payload);
  } else if (action.type === "decrease") {
    return (state = state - 1);
  } else if (action.type === "multiply") {
    return (state = state * action.payload);
  }
  return state;
};
export default reducer;
