import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded text-gray-900 dark:text-gray-100"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
