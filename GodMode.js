// components/GodMode.js
import React, { useState } from "react";

export default function GodMode() {
  const [active, setActive] = useState(false);

  const toggleGodMode = () => {
    setActive(!active);
  };

  return (
    <div style={{ background: "#111", color: "#fff", padding: "1rem", borderRadius: "1rem", marginTop: "1rem" }}>
      <h3>🧠 God Mode</h3>
      <p>Status: <strong>{active ? "FULL OVERRIDE ACTIVE" : "Idle"}</strong></p>

      <ul style={{ marginTop: "1rem" }}>
        <li>📞 Voice calls: {active ? "Enabled" : "Disabled"}</li>
        <li>📧 Emails & Messages: {active ? "Auto-Handled" : "Off"}</li>
        <li>📄 Contract Signing: {active ? "AI Authorized ✅" : "Off"}</li>
        <li>🛒 Purchases: {active ? "AI Shopping 🛍️" : "Secure Only"}</li>
      </ul>

      <button onClick={toggleGodMode} style={{ marginTop: "1rem", background: active ? "#f00" : "#0f0", padding: "0.5rem 1.5rem", borderRadius: "0.5rem" }}>
        {active ? "Deactivate God Mode" : "Activate God Mode"}
      </button>
    </div>
 
 );
}
