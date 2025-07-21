import React from 'react';
import useAutomation from '@/hooks/useAutomation';

export default function EXLoopCore() {
  const { startAutoLoop, setLoopBehavior, stopLoop } = useAutomation();

  return (
    <div className="p-4 bg-indigo-950 text-white rounded-xl">
      <h1 className="text-xl font-bold text-center">🔁 EX$ Behavior Loop Core</h1>
      <div className="flex flex-col items-center space-y-2 mt-3">
        <button className="btn" onClick={() => setLoopBehavior('simulateCasinoActivity')}>🎰 Simulate Game Loop</button>
        <button className="btn" onClick={() => startAutoLoop()}>▶️ Start Loop</button>
        <button className="btn bg-red-600" onClick={stopLoop}>⏹️ Stop Loop</button>
      </div>
    </div>
  );
}
