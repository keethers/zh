// components/ManualWalletCreator.jsx
import React, { useState } from "react";

export default function ManualWalletCreator() {
  const [walletAddress, setWalletAddress] = useState("");

  const generateWallet = () => {
    // Replace this with actual wallet creation logic
    const fakeWallet = "0x" + Math.random().toString(16).slice(2, 42);
    setWalletAddress(fakeWallet);
  };

  return (
    <div style={{
      background: "#111",
      color: "#fff",
      padding: "1rem",
      borderRadius: "1rem",
      marginTop: "1rem",
    }}>
      <h3>🛠 Manual Wallet Creator</h3>
      <button onClick={generateWallet} style={{
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        background: "#0ff",
        color: "#000",
        borderRadius: "0.5rem"
      }}>
        Generate Wallet
      </button>
      {walletAddress && (
        <p style={{ marginTop: "1rem" }}>
          New Wallet: <code>{walletAddress}</code>
        </p>
      )}
    </div>
  )
;
}
