// components/GhostMode.js
import React, { useState } from "react";

export default function GhostMode() {
  const [active, setActive] = useState(false);

  const toggleGhost = () => {
    setActive(!active);
  };

  return (
    <div style={{ background: "#000", color: "#0ff", padding: "1rem", borderRadius: "1rem", marginTop: "1rem" }}>
      <h3>👻 Ghost Mode</h3>
      <p>Status: <strong>{active ? "Active (Invisible)" : "Inactive (Visible)"}</strong></p>
      <button onClick={toggleGhost} style={{ background: active ? "#f00" : "#0f0", padding: "0.5rem 1rem", borderRadius: "0.5rem" }}>
        {active ? "Deactivate" : "Activate"} Ghost Mode
      </button>
    </div>
  )
;
}
