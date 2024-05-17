import React from "react";

function Button({ onClick, value }) {
  return <button onClick={onClick} className="p-3 text-xl font-semibold text-white rounded-lg shadow bg-slate-400 hover:bg-slate-500 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-800"
  style={{backgroundColor : value === 'Clear' ? "red" : ""}}>{value}</button>;
}

export default Button;
