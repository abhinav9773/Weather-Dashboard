import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Toggle({ theme, toggleTheme }) {
  const isNight = theme === "night";

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 bg-white/40 backdrop-blur-md shadow-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-xs sm:text-sm md:text-base transition-all duration-200"
    >
      {isNight ? (
        <>
          <FaSun className="text-yellow-400 text-xs sm:text-sm md:text-base" />
        </>
      ) : (
        <>
          <FaMoon className="text-purple-500 text-xs sm:text-sm md:text-base" />
        </>
      )}
    </button>
  );
}

export default Toggle;
