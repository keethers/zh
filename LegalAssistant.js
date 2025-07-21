// components/LegalAssistant.js
import React, { useState } from "react";

export default function LegalAssistant() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const runLegalCheck = () => {
    if (!input.trim()) return;
    setResponse(`📚 Researching: "${input}"...`);
    setTimeout(() => {
      setResponse(`✅ Suggested Filing: ${input} → Drafted motion complete.`);
    }, 2500);
  };

  return (
    <div style={{ background: "#1a1a1a", color: "#fff", padding: "1rem", borderRadius: "1rem", marginTop: "1rem" }}>
      <h3>⚖️ Legal Assistant</h3>
      <input
        type="text"
        placeholder="e.g., File motion in superior court..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "80%", padding: "0.5rem", borderRadius: "0.5rem" }}
      />
      <button onClick={runLegalCheck} style={{ marginLeft: "1rem", background: "#fc0", padding: "0.5rem 1rem", borderRadius: "0.5rem", color: "#000" }}>
        File / Research
      </button>
      <p style={{ marginTop: "1rem" }}>{response}</p>
    </div>
  );
}
