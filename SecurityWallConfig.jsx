import React, { useState } from 'react';
import useWallConfig from '@/hooks/useWallConfig';

export default function SecurityWallConfig() {
  const [level, setLevel] = useState(3);
  const { applySecurityLevel, enableIPShield, blockRegion } = useWallConfig();

  return (
    <div className="p-4 bg-red-950 text-white rounded-xl">
      <h1 className="text-xl font-bold text-center mb-2">🧱 Security Wall Config</h1>
      <label className="text-sm mb-2">Firewall Level: {level}</label>
      <input type="range" min="1" max="5" value={level} onChange={(e) => setLevel(e.target.value)} />
      <div className="flex flex-col mt-3 gap-2">
        <button className="btn" onClick={() => applySecurityLevel(level)}>Apply Level</button>
        <button className="btn" onClick={enableIPShield}>🛡️ Enable IP Shield</button>
        <button className="btn" onClick={() => blockRegion('Russia')}>🌍 Block Region</button>
      </div>
    </div>
  );
}
