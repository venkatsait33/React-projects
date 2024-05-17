import { SET_THEME } from "../redux/action";

const initialState = {
  theme: "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
