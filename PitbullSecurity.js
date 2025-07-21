// components/PitbullSecurity.js
import React, { useState } from "react";

export default function PitbullSecurity() {
  const [status, setStatus] = useState("Idle");
  const [logs, setLogs] = useState([]);

  const simulateThreat = () => {
    const alert = `⚠️ Intrusion detected at ${new Date().toLocaleTimeString()}`;
    setLogs([alert, ...logs]);
    setStatus("Engaged");
  };

  return (
    <div style={{ background: "#100", color: "#f00", padding: "1rem", borderRadius: "1rem", marginTop: "1rem" }}>
      <h3>🐶 Pitbull Security</h3>
      <p>Status: <strong>{status}</strong></p>
      <button onClick={simulateThreat} style={{ background: "#f00", padding: "0.5rem 1rem", borderRadius: "0.5rem" }}>
        Simulate Threat
      </button>

      <ul style={{ marginTop: "1rem" }}>
        {logs.map((log, i) => (
          <li key={i}>{log}</li>
        ))}
      </ul>
    </div>
  
);
}
