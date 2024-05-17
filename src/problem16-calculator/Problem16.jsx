import React from "react";
import Calculator from "./components/Calculator";
import { Provider } from "react-redux";
import store from "./redux/store";

const Problem16 = () => {
  return (
    <Provider store={store}>
      <div
        className="flex flex-col items-center gap-2 mx-auto w-[80%] bg-slate-300 p-4 rounded-lg shadow-lg mt-10 h-full mb-10
      "
      >
        <h1 className="text-2xl font-bold text-center">Calculator</h1>
        <Calculator />
      </div>
    </Provider>
  );
};

export default Problem16;
