import React from 'react';
import useWalletLink from '@/hooks/useWalletLink';

export default function WalletLinker() {
  const { connectTrust, connectMetaMask, connectVenmo } = useWalletLink();

  return (
    <div className="p-4 bg-zinc-900 text-white rounded-lg text-center">
      <h1 className="text-xl font-bold">🔗 Link Your Wallet</h1>
      <p className="text-sm text-gray-400 mb-4">Connect your financial tools to the ExoticaEco$ystem.</p>
      <div className="flex flex-col space-y-2">
        <button className="btn" onClick={connectTrust}>Connect Trust Wallet</button>
        <button className="btn" onClick={connectMetaMask}>Connect MetaMask</button>
        <button className="btn" onClick={connectVenmo}>Connect Venmo</button>
      </div>
    </div>
  );
}
