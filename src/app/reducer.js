import { combineReducers } from "redux";
import {
  REVERSE_BUTTON_GROUP_FAIL,
  REVERSE_BUTTON_GROUP_SUCCESS
} from "./frames/register-frame";

const initialState = {
  label: "Sign Up"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REVERSE_BUTTON_GROUP_FAIL: {
      console.log("AHTUNG!");
    }
    case REVERSE_BUTTON_GROUP_SUCCESS: {
      console.log("AHTUNG SUCCESS!");
    }
    default:
      return state;
  }
};
