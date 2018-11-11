import { combineReducers } from "redux";

const initialState = {
  label: "Redux Works"
};

export default (state = initialState, action) => {
  console.log(state);
  return state;
};
