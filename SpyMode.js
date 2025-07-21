// components/SpyMode.js
import React, { useState } from "react";

export default function SpyMode() {
  const [enabled, setEnabled] = useState(false);

  const toggleSpy = () => {
    setEnabled(!enabled);
  };

  return (
    <div style={{ background: "#100", color: "#f0f", padding: "1rem", borderRadius: "1rem", marginTop: "1rem" }}>
      <h3>🕵️ Spy Mode</h3>
      <p>Status: <strong>{enabled ? "ACTIVE (Full Control Enabled)" : "INACTIVE"}</strong></p>

      <ul style={{ marginTop: "1rem" }}>
        <li>📍 GPS Tracking: {enabled ? "On" : "Off"}</li>
        <li>📸 Camera Access: {enabled ? "On" : "Off"}</li>
        <li>🎤 Microphone: {enabled ? "On" : "Off"}</li>
        <li>📱 App Monitoring: {enabled ? "On" : "Off"}</li>
        <li>✉️ Messages & Calls: {enabled ? "On" : "Off"}</li>
      </ul>

      <button onClick={toggleSpy} style={{ background: enabled ? "#f00" : "#0f0", padding: "0.5rem 1rem", borderRadius: "0.5rem", marginTop: "1rem" }}>
        {enabled ? "Deactivate Spy Mode" : "Activate Spy Mode"}
      </button>
    </div>
  );
}
