export const toggleReducer = (state = { toggle: false }, action) => {
  switch (action.type) {
    case "TOGGLE":
      console.log("ppp", state.toggle);
      return { ...state, toggle: !state.toggle };
    default:
      return state;
  }
};

export const REDUCERS = {
  header: toggleReducer
};
