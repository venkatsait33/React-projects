import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./store";
import Theme from "./components/Theme";
import './problem15.css'

function Problem15() {
  return (
    <Provider store={store}>
      <div  className="w-[80%] mx-auto">
        <Theme />
        <Counter />
      </div>
    </Provider>
  );
}

export default Problem15;
