import {
  RESULT_STATE,
  UPDATE_RESULT,
  UPDATE_OPERATION,
  UPDATE_EXPRESSION,
} from "./actionType";

const initialState = {
  result: "0",
  operation: "",
  preValue: "",
  nextValue: "",
  expression: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    case UPDATE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case RESULT_STATE:
      return initialState;
    case UPDATE_EXPRESSION:
      return {
        ...state,
        expression: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
