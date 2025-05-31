import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="px-4 py-1 bg-gray-300 dark:bg-gray-700 rounded">
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
