// components/WalletFactory.js
import React, { useState } from "react";

export default function WalletFactory() {
  const [newWallet, setNewWallet] = useState(null);

  const createWallet = () => {
    const wallet = "0x" + Math.random().toString(16).slice(2, 42);
    setNewWallet(wallet);
  };

  return (
    <div style={{ background: "#011", color: "#0ff", padding: "1rem", borderRadius: "1rem", marginTop: "1rem" }}>
      <h3>🏦 EX$ Wallet Factory</h3>
      <p>Generate new EX$ wallets for users or triggers (e.g., Venmo pay-ins).</p>

      <button onClick={createWallet} style={{ marginTop: "0.5rem", background: "#0ff", padding: "0.5rem 1rem", borderRadius: "0.5rem", color: "#000" }}>
        Create Wallet
      </button>

      {newWallet && (
        <p style={{ marginTop: "1rem" }}>🆕 New Wallet: <code>{newWallet}</code></p>
      )}
    </div>
 
 );
}
