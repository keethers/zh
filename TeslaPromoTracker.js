// components/TeslaPromoTracker.js
import React, { useState } from "react";

export default function TeslaPromoTracker() {
  const [entries, setEntries] = useState(1210);
  const [winners, setWinners] = useState([
    { name: "User243", ticket: "72841" },
    { name: "KeetherX", ticket: "10000" }
  ]);

  return (
    <div style={{ background: "#111", color: "#fff", padding: "1rem", borderRadius: "1rem", marginTop: "1rem" }}>
      <h3>🚗 Tesla Promo Tracker</h3>
      <p>🎟️ Total Entries: {entries}</p>

      <h4 style={{ marginTop: "1rem" }}>Latest Winners:</h4>
      <ul>
        {winners.map((w, i) => (
          <li key={i}>🏆 {w.name} - Ticket #{w.ticket}</li>
        ))}
      </ul>
    </div>
  )
;
}
