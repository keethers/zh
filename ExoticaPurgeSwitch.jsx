import React from 'react';
import useSelfDestruct from '@/hooks/useSelfDestruct';

export default function ExoticaPurgeSwitch() {
  const { purgeLogs, wipeEvidence, shutdownAllSystems } = useSelfDestruct();

  return (
    <div className="p-4 bg-red-950 text-white rounded-xl text-center">
      <h1 className="text-2xl font-extrabold text-yellow-400 mb-2">☢️ Exotica PURGE Mode</h1>
      <p className="text-sm text-red-300 mb-4">Emergency use only. No undo. Full system wipe.</p>
      <button className="btn bg-red-600" onClick={purgeLogs}>🧨 Purge Logs</button>
      <button className="btn bg-orange-600 mt-2" onClick={wipeEvidence}>🗑️ Wipe Traces</button>
      <button className="btn bg-black text-red-400 mt-4" onClick={shutdownAllSystems}>💀 SHUTDOWN EVERYTHING</button>
    </div>
  );
}
