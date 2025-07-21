import React from 'react';
import useGlobalOps from '@/hooks/useGlobalOps';

export default function GlobalCommandDeck() {
  const {
    lockdownAll,
    alertAllClones,
    resetEcosystem,
    broadcastOverride
  } = useGlobalOps();

  return (
    <div className="p-4 bg-black text-green-400 rounded-xl">
      <h1 className="text-2xl font-bold text-center">🕹️ Global Command Deck</h1>
      <div className="flex flex-col gap-3 mt-4 items-center">
        <button className="btn bg-red-700" onClick={lockdownAll}>🔒 Lockdown All</button>
        <button className="btn" onClick={alertAllClones}>🧠 Alert Clones</button>
        <button className="btn" onClick={broadcastOverride}>📢 Global Override</button>
        <button className="btn bg-yellow-600" onClick={resetEcosystem}>♻️ Reset Ecosystem</button>
      </div>
    </div>
  );
}
