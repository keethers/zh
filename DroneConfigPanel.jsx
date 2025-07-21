import React, { useState } from 'react';
import useDroneSettings from '@/hooks/useDroneSettings';

export default function DroneConfigPanel() {
  const [speed, setSpeed] = useState(50);
  const [altitude, setAltitude] = useState(100);
  const { applySettings, configurePayload } = useDroneSettings();

  return (
    <div className="p-4 bg-zinc-900 text-white rounded-xl">
      <h1 className="text-xl font-bold text-center">⚙️ Drone Config Panel</h1>
      <div className="space-y-2 mt-3">
        <label>Speed: <input type="range" min="0" max="100" value={speed} onChange={(e) => setSpeed(e.target.value)} /></label>
        <label>Altitude: <input type="number" value={altitude} onChange={(e) => setAltitude(e.target.value)} /></label>
        <button className="btn" onClick={() => applySettings(speed, altitude)}>Apply Settings</button>
        <button className="btn" onClick={() => configurePayload('thermal-camera')}>🎥 Attach Payload</button>
      </div>
    </div>
  );
}
