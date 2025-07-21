// components/SharkTradeEngine.jsx
import React, { useState, useEffect } from "react";

export default function SharkTradeEngine() {
  const [status, setStatus] = useState("Idle");
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    if (status === "Running") {
      const interval = setInterval(() => {
        setProfit((prev) => prev + Math.random() * 20); // Simulated growth
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [status]);

  return (
    <div style={{ background: "#011", color: "#0f0", padding: "1rem", borderRadius: "1rem", marginTop: "1rem" }}>
      <h3>🦈 Shark Trade Engine</h3>
      <p>Status: {status}</p>
      <p>📈 Simulated Profit: Ξ {profit.toFixed(3)}</p>

      <button onClick={() => setStatus("Running")} style={{ marginRight: "1rem", background: "#0f0", padding: "0.5rem 1rem", borderRadius: "0.5rem" }}>
        Start
      </button>
      <button onClick={() => setStatus("Idle")} style={{ background: "#f00", padding: "0.5rem 1rem", borderRadius: "0.5rem" }}>
        Stop
      </button>
    </div>
  
);
}
