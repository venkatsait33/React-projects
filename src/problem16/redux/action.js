import { UPDATE_RESULT, UPDATE_OPERATION, RESULT_STATE, UPDATE_EXPRESSION } from "./actionType";

export const updateResult = (result) => ({
  type: UPDATE_RESULT,
  payload: result,
});
export const updateOperation = (operation) => ({
  type: UPDATE_OPERATION,
  payload: operation,
});
export const resetState = () => ({
  type: RESULT_STATE,
});
export const updateExpression = (expression) => ({
  type: UPDATE_EXPRESSION,
  payload: expression,
});
