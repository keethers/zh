// File: WalletConnect.jsx

import { useState } from 'react';

export default function WalletConnect() {
  const [wallet, setWallet] = useState('');

  const connect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWallet(accounts[0]);
        console.log("MetaMask Wallet Connected:", accounts[0]);
      } catch (err) {
        console.error("Error connecting:", err);
      }
    } else {
      alert("Please install MetaMask.");
    }
  };

  return (
    <div className="p-4 bg-black text-white rounded">
      <button onClick={connect} className="bg-green-500 px-4 py-2 rounded">Connect MetaMask</button>
      {wallet && <p className="mt-2">Connected Wallet: {wallet}</p>}
    </div>
  );
}
