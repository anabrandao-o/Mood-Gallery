import React, { useState, useEffect } from "react";
import { Header, MoodSelector, Gallery } from "./components";
import moods from "./data/mood";

export const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // tenta recuperar do localStorage
    return localStorage.getItem("darkMode") === "true";
  });
  const [selectedMood, setSelectedMood] = useState("happy");

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Atualiza a classe do body sempre que darkMode mudar
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#f5f5f5";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    }

    // opcional: salva no localStorage
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const imagesForMood = moods[selectedMood] || moods["happy"];

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MoodSelector selectedMood={selectedMood} onSelect={setSelectedMood} />
      <Gallery images={imagesForMood} />
    </>
  );
};
