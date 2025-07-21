import React, { useState } from 'react';
import useChainGenesis from '@/hooks/useChainGenesis';

export default function BlockchainBuilder5150() {
  const { createNewChain, setGasLogic, initValidatorNodes } = useChainGenesis();
  const [chainName, setChainName] = useState('ExoticaChain');
  const [symbol, setSymbol] = useState('E$');

  return (
    <div className="p-4 bg-indigo-950 text-white rounded-xl">
      <h1 className="text-2xl font-bold text-center">Blockchain Builder 5150</h1>
      <p className="text-center text-indigo-300 mb-4">Launch your own chain. Gas optional.</p>
      <div className="flex flex-col gap-2">
        <input className="input" placeholder="Chain Name" value={chainName} onChange={(e) => setChainName(e.target.value)} />
        <input className="input" placeholder="Native Symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        <button className="btn" onClick={() => createNewChain(chainName, symbol)}>Create Chain</button>
        <button className="btn" onClick={() => setGasLogic(0)}>Set Zero Gas</button>
        <button className="btn" onClick={initValidatorNodes}>Start Validators</button>
      </div>
    </div>
  );
}
