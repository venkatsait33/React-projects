import { ADD, REDUCE } from "./action";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        count: state.count + 1,
      };
    case REDUCE:
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
