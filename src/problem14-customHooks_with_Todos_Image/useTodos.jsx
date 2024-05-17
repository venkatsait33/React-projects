import React, { useState } from "react";

const useTodos = (initialData = ["Task1"]) => {
  const [data, setData] = useState(initialData);

  const addData = (task) => {
    setData([...data, task]);
  };

  const clearData = () => {
    setData([]);
  };

  const removeDataByIndex = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return { data, setData, addData, clearData, removeDataByIndex };
};

export default useTodos;
