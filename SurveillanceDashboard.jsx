import React, { useEffect, useState } from 'react';
import useSurveillance from '@/hooks/useSurveillance';

export default function SurveillanceDashboard() {
  const { fetchTargets, viewLiveFeed, lockDevice } = useSurveillance();
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    fetchTargets().then(setTargets);
  }, []);

  return (
    <div className="p-4 bg-black text-lime-400 rounded-xl">
      <h1 className="text-2xl font-bold mb-3">🎯 Surveillance Dashboard</h1>
      <ul className="text-sm space-y-2">
        {targets.map((t, i) => (
          <li key={i} className="border-b border-lime-800 py-1">
            {t.name} — <button onClick={() => viewLiveFeed(t.id)}>📹 View</button> — 
            <button onClick={() => lockDevice(t.id)} className="ml-2 text-red-400">🔒 Lock</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
