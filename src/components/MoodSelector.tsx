import React from "react";

interface MoodSelectorProps {
  selectedMood: string;
  onSelect: (mood: string) => void;
}

export const MoodSelector = ({ selectedMood, onSelect }: MoodSelectorProps) => {
  const moods = ["happy", "calm", "creative", "introspective"];

  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px", marginBottom: "20px" }}>
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => onSelect(mood)}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: selectedMood === mood ? "2px solid blue" : "1px solid #ccc",
            backgroundColor: selectedMood === mood ? "#d0eaff" : "#f0f0f0",
            cursor: "pointer",
          }}
        >
          {mood}
        </button>
      ))}
    </div>
  );
};
