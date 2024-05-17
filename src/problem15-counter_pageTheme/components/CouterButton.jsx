import React from "react";
import { useDispatch } from "react-redux";
import { add, reduce } from "../redux/action";

function CounterButton() {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add());
  };

  const handleReduce = () => {
    dispatch(reduce());
  };

  return (
    <div className="flex items-center justify-between gap-5 mt-4">
      <button
        onClick={handleAdd}
        className="px-4 py-2 font-bold text-white bg-green-500 rounded w-100 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 "
      >
        ADD
      </button>
      <button
        onClick={handleReduce}
        className="px-4 py-2 font-bold text-white bg-red-500 rounded w-100 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 "
      >
        REDUCE
      </button>
    </div>
  );
}

export default CounterButton;
