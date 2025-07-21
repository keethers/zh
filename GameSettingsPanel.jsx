import React, { useState } from 'react';
import useSettings from '@/hooks/useSettings';

export default function GameSettingsPanel() {
  const { updateOdds, toggleGame, setPayoutCap } = useSettings();
  const [odds, setOdds] = useState(0.25);
  const [cap, setCap] = useState(10000);

  return (
    <div className="bg-slate-900 p-4 mt-4 rounded-xl">
      <h2 className="text-xl font-semibold mb-2">🎮 Game Control Settings</h2>
      <div className="flex flex-col gap-3">
        <div>
          <label>🎯 Odds (% Win): </label>
          <input type="number" value={odds} onChange={(e) => setOdds(Number(e.target.value))} />
          <button className="btn ml-2" onClick={() => updateOdds(odds)}>Apply Odds</button>
        </div>
        <div>
          <label>💸 Max Payout Cap:</label>
          <input type="number" value={cap} onChange={(e) => setCap(Number(e.target.value))} />
          <button className="btn ml-2" onClick={() => setPayoutCap(cap)}>Apply Cap</button>
        </div>
        <div>
          <button className="btn bg-red-600" onClick={() => toggleGame('LuckyDraw5150')}>Toggle Lottery</button>
          <button className="btn bg-blue-600 ml-2" onClick={() => toggleGame('ExoticaRaceway')}>Toggle Racing</button>
        </div>
      </div>
    </div>
  );
}
