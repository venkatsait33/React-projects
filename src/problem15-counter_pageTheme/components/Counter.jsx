import React from "react";
import CounterValue from "./CounterValue";
import CounterButton from "./CouterButton";

function Counter() {
  return (
    <div className="flex flex-col items-center justify-center w-1/2 py-10 mx-auto mt-5 border-2 border-gray-400 rounded-md shadow-lg">
      <CounterValue />
      <CounterButton />
    </div>
  );
}

export default Counter;
