// components/TrustWalletSync.jsx
import React from "react";

export default function TrustWalletSync() {
  const walletConnected = true; // Replace with actual wallet sync logic

  return (
    <div style={{
      background: "#001a1a",
      color: "#0ff",
      padding: "1rem",
      borderRadius: "1rem",
      marginTop: "1rem",
    }}>
      <h3>🔗 Trust Wallet Sync</h3>
      <p>Status: {walletConnected ? "Connected ✅" : "Not Connected ❌"}</p>
    </div>
  );

}
