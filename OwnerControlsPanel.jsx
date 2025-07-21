// components/OwnerControlsPanel.jsx
import React, { useState } from "react";

export default function OwnerControlsPanel() {
  const [droneDefense, setDroneDefense] = useState(false);
  const [sharkMode, setSharkMode] = useState(false);

  return (
    <div style={{ background: "#002", color: "#0ff", padding: "1rem", borderRadius: "1rem", marginTop: "1rem" }}>
      <h3>🛡 Owner Control Panel</h3>

      <div>
        <label>
          <input type="checkbox" checked={droneDefense} onChange={() => setDroneDefense(!droneDefense)} />
          Activate Drone Defense Mode
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" checked={sharkMode} onChange={() => setSharkMode(!sharkMode)} />
          Activate Shark Mode
        </label>
      </div>

      <p style={{ marginTop: "1rem" }}>
        Current Modes: <strong>{droneDefense ? "🛡 Drone Defense ON" : "🛡 OFF"} | {sharkMode ? "🦈 Shark Mode ON" : "🦈 OFF"}</strong>
      </p>
    </div>
  );
}
