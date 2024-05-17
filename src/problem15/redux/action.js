export const ADD = "ADD";
export const REDUCE = "REDUCEC";
export const SET_THEME = "SET_THEME";

export const add = () => ({
  type: ADD,
});

export const reduce = () => ({
  type: REDUCE,
});
export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});
