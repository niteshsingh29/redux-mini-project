let initialState = {
  addition: 0,
  subtract: 0,
  multiply: 5,
};
const reducer = (state = initialState, action) => {
  if (action.type === "increase") {
    console.log(state);
    console.log(state.addition);
    return {
      addition: state.addition + 1,
      subtract: state.subtract,
      multiply: state.multiply,
    };
  } else if (action.type === "decrease") {
    console.log(state);
    console.log(state.subtract);
    return {
      addition: state.addition,
      subtract: state.subtract - 1,
      multiply: state.multiply,
    };
  } else if (action.type === "multiply") {
    console.log(state);
    console.log(state.multiply);
    return {
      addition: state.addition,
      subtract: state.subtract,
      multiply: state.multiply * 2,
    };
  }
  return state;
};
export default reducer;
