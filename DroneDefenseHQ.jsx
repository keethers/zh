import React from 'react';
import useDroneShield from '@/hooks/useDroneShield';

export default function DroneDefenseHQ() {
  const { detectDrones, jamSignal, takeControl, crashDrone } = useDroneShield();

  return (
    <div className="p-4 bg-slate-950 text-white rounded-xl text-center">
      <h1 className="text-2xl font-bold text-lime-300 mb-2">🛸 Drone Defense HQ</h1>
      <p className="text-sm text-lime-400 mb-4">Detect, hijack, or destroy hostile drones.</p>
      <div className="space-y-2">
        <button className="btn" onClick={detectDrones}>📡 Scan Airspace</button>
        <button className="btn" onClick={jamSignal}>📶 Jam Drone Signal</button>
        <button className="btn" onClick={takeControl}>🎮 Hijack Drone</button>
        <button className="btn bg-red-700" onClick={crashDrone}>💥 Crash It</button>
      </div>
    </div>
  );
}
