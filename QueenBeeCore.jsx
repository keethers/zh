// components/QueenBeeCore.jsx
import React, { useState } from "react";

export default function QueenBeeCore() {
  const [missions, setMissions] = useState([]);
  const [input, setInput] = useState("");

  const deployClone = () => {
    if (!input.trim()) return;
    setMissions([...missions, input]);
    setInput("");
  };

  return (
    <div style={{ background: "#220022", color: "#f0f", padding: "1rem", borderRadius: "1rem", marginTop: "1rem" }}>
      <h3>👑 Queen Bee Core</h3>
      <p>Command center for clone deployment</p>

      <input
        type="text"
        placeholder="Enter mission (e.g. Monitor Wallets)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "80%",
          marginRight: "0.5rem",
          borderRadius: "0.5rem",
        }}
      />
      <button onClick={deployClone} style={{ padding: "0.5rem 1rem", background: "#f0f", color: "#000", borderRadius: "0.5rem" }}>
        Deploy Clone
      </button>

      <ul style={{ marginTop: "1rem" }}>
        {missions.map((m, i) => (
          <li key={i}>🛰️ Clone #{i + 1} → {m}</li>
        ))}
      </ul>
    </div>
 
 );
}
