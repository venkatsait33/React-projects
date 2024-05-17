import React, { useState } from "react";
import useTodos from "./useTodos";

const Todos2 = ({ initialData }) => {
  const { data, clearData, addData, removeDataByIndex } = useTodos(initialData);
  const [inputTask, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (inputTask.trim() !== "") {
      addData(inputTask);
      setTaskInput("");
    }
  };
  return (
    <div className="flex flex-col gap-2 px-4 py-5 bg-gray-200 w-[49%] rounded shadow-lg">
      <h1 className="text-2xl font-bold text-center">Todos-2</h1>

      <span>
        <input
          type="text"
          value={inputTask}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task"
          className="p-2 mr-2 border-2 border-gray-300 rounded-md shadow-md text-md "
        />
        <button
          className="p-2 text-white bg-blue-500 rounded-md"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </span>

      <ul className="flex flex-col gap-2">
        {data.map((todo, index) => (
          <li
            className="flex items-center justify-between gap-5 p-2 text-xl bg-white rounded-md shadow-md"
            key={index}
          >
            {todo}
            <button
              onClick={() => removeDataByIndex(index)}
              className="p-2 mr-2 text-white bg-red-500 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button
        className="p-2 mt-4 text-white bg-red-500 rounded-md"
        onClick={clearData}
      >
        Clear Todos
      </button>
    </div>
  );
};

export default Todos2;
