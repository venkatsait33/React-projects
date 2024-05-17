export const INITIAL_STATE = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

export const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "UPDATE_GENDER":
      return {
        ...state,
        gender: action.payload,
      };
    case "UPDATE_ROLE":
      return {
        ...state,
        role: action.payload,
      };
    case "TOGGLE_MARITAL_STATUS":
      return {
        ...state,
        maritalStatus: !state.maritalStatus,
      };
    case "RESET":
      return INITIAL_STATE;
    default:
      throw new Error("invalid action type ");
  }
};
