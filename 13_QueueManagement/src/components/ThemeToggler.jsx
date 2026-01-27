import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };
  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}

const ThemeToggler = () => {
   const { theme, toggleTheme, isDark } = useTheme();
    return (
      <button
        onClick={toggleTheme}
        className={`relative w-16 h-8 rounded-full transitions-colors duration-300 ${
          isDark ? "bg-blue-500" : "bg-gray-400"
        }`}
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 flex items-center justify-center ${
            isDark ? "transform translate-x-8" : ""
          }`}
        >
          {isDark ? "🌙" : "☀"}
        </div>
      </button>
    );
};

export default ThemeToggler;
