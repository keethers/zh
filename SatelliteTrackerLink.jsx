import React, { useEffect, useState } from 'react';
import useSatelliteNet from '@/hooks/useSatelliteNet';

export default function SatelliteTrackerLink() {
  const [targets, setTargets] = useState([]);
  const { fetchLiveCoordinates, pingDronePath } = useSatelliteNet();

  useEffect(() => {
    fetchLiveCoordinates().then(setTargets);
  }, []);

  return (
    <div className="p-4 bg-black text-white rounded-xl">
      <h1 className="text-xl font-bold text-center mb-2">🛰️ Satellite Tracker Link</h1>
      <ul className="text-sm max-h-60 overflow-y-scroll border-t border-gray-700 pt-2">
        {targets.map((t, i) => (
          <li key={i} className="border-b border-gray-700 pb-1">
            {t.name} — {t.coords} — 
            <button className="ml-2 text-blue-400 underline" onClick={() => pingDronePath(t.name)}>Ping</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
