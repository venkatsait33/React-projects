import React from "react";

function Display({ result }) {
  return (
    <div className="w-full p-4 text-center bg-gray-400 rounded">
      <h2 className="text-xl font-semibold text-gray-800">{result}</h2>
    </div>
  );
}

export default Display;
