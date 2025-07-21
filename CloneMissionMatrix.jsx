import React, { useState, useEffect } from 'react';
import useMissionAI from '@/hooks/useMissionAI';

export default function CloneMissionMatrix() {
  const { getAvailableClones, assignToDrone, trackMissionStatus } = useMissionAI();
  const [clones, setClones] = useState([]);
  const [targetDrone, setTargetDrone] = useState('DroneA');

  useEffect(() => {
    getAvailableClones().then(setClones);
  }, []);

  return (
    <div className="p-4 bg-indigo-950 text-white rounded-xl">
      <h1 className="text-xl font-bold text-center mb-2">🧬 Clone Mission Matrix</h1>
      <div className="flex flex-col gap-2">
        {clones.map((c, i) => (
          <div key={i} className="flex justify-between items-center border-b border-indigo-700 pb-1">
            <span>{c.name}</span>
            <button className="btn" onClick={() => assignToDrone(c.name, targetDrone)}>Assign to {targetDrone}</button>
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm text-indigo-300">
        <button onClick={trackMissionStatus}>📍 Track Missions</button>
      </div>
    </div>
  );
}
