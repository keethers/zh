// components/CinematicsBuilder.js
import React, { useState } from "react";

export default function CinematicsBuilder() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  const generateMedia = () => {
    if (!prompt.trim()) return;
    setOutput(`🎞️ Generating cinematic: "${prompt}"...`);
    setTimeout(() => {
      setOutput(`✅ Scene ready: "${prompt}" → Download or View`);
    }, 2000);
  };

  return (
    <div style={{ background: "#111", color: "#fff", padding: "1rem", borderRadius: "1rem", marginTop: "1rem" }}>
      <h3>🎬 Cinematics Builder</h3>
      <input
        type="text"
        placeholder="Enter scene description or hook..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "80%", padding: "0.5rem", borderRadius: "0.5rem" }}
      />
      <button onClick={generateMedia} style={{ marginLeft: "1rem", background: "#0ff", padding: "0.5rem 1rem", borderRadius: "0.5rem" }}>
        Generate
      </button>
      <p style={{ marginTop: "1rem" }}>{output}</p>
    </div>
  )
;
}
