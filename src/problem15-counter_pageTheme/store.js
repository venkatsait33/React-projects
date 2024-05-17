import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./redux/counterReducer";
import themeReducer from "./redux/themeReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
