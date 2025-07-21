import React from 'react';
import useMaintenance from '@/hooks/useMaintenance';

export default function EXMaintenanceHub() {
  const { runDiagnostics, cleanMemory, applyUpdates } = useMaintenance();

  return (
    <div className="p-4 bg-gray-950 text-white rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-3">🧰 System Maintenance Hub</h1>
      <p className="text-sm text-gray-400 text-center mb-4">Keep Exotica running sharp.</p>
      <div className="flex flex-col items-center space-y-2">
        <button className="btn" onClick={runDiagnostics}>🧠 Run Diagnostics</button>
        <button className="btn" onClick={cleanMemory}>🧼 Clean Memory</button>
        <button className="btn" onClick={applyUpdates}>⬆️ Apply Updates</button>
      </div>
    </div>
  );
}
