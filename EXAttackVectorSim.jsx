import React from 'react';
import useAttackSim from '@/hooks/useAttackSim';

export default function EXAttackVectorSim() {
  const { simulatePhishing, simulateDDOS, simulateMalware } = useAttackSim();

  return (
    <div className="p-4 bg-red-950 text-white rounded-xl text-center">
      <h1 className="text-xl font-bold text-yellow-400">💥 Attack Vector Simulator</h1>
      <p className="text-sm text-red-300 mb-3">Test your defenses. Simulate real threats.</p>
      <div className="space-y-2">
        <button className="btn" onClick={simulatePhishing}>🎯 Simulate Phishing</button>
        <button className="btn" onClick={simulateDDOS}>🌐 Simulate DDoS</button>
        <button className="btn" onClick={simulateMalware}>🦠 Deploy Malware Test</button>
      </div>
    </div>
  );
}
