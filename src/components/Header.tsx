import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  return (
    <header
      className={`d-flex justify-content-between align-items-center px-4 py-3 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h2 className="m-0">Mood Gallery 🎭</h2>

      <button
        onClick={toggleDarkMode}
        className={`btn rounded-circle d-flex align-items-center justify-content-center ${
          darkMode ? "btn-light text-dark" : "btn-dark text-light"
        }`}
        style={{
          width: "40px",
          height: "40px",
          fontSize: "1.2rem",
          padding: 0,
          transition: "all 0.3s ease",
        }}
        title="Alternar modo"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
};
