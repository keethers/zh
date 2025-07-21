// components/VenmoChecker.jsx
import React from "react";

export default function VenmoChecker() {
  const paymentConfirmed = true; // Replace with API logic or email scan

  return (
    <div style={{
      background: "#220011",
      color: "#f0c",
      padding: "1rem",
      borderRadius: "1rem",
      marginTop: "1rem",
    }}>
      <h3>💸 Venmo Payment Status</h3>
      <p>Status: {paymentConfirmed ? "Confirmed ✅" : "Pending ⏳"}</p>
    </div>
  );

}
