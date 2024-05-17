import React from "react";
import { useSelector } from "react-redux";

function CounterValue() {
  const count = useSelector((state) => state.counter.count);
  return <div>CounterValue : {count}</div>;
}

export default CounterValue;
