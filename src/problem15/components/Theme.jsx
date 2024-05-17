import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/action";

function Theme() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleTheme = (theme) => {
    dispatch(setTheme(theme));
    document.documentElement.className =
      theme === "dark" ? "dark_theme" : "light_theme";
  };

  return (
    <div className="flex items-center justify-between gap-5 mt-5">
      <button
        disabled={theme === "light"}
        onClick={() => handleTheme("light")}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded w-100 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        Switch to Light
      </button>
      <button
        disabled={theme === "dark"}
        onClick={() => handleTheme("dark")}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded w-100 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        Switch to Dark
      </button>
    </div>
  );
}

export default Theme;
