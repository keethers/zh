import React from 'react';
import useDronePilot from '@/hooks/useDronePilot';

export default function DroneOperatorHQ() {
  const { moveUp, moveDown, rotate, captureView, returnToBase } = useDronePilot();

  return (
    <div className="p-4 bg-black text-green-300 rounded-xl">
      <h1 className="text-xl font-bold text-center">🎮 Drone Operator HQ</h1>
      <div className="flex flex-col items-center gap-2 mt-3">
        <button className="btn" onClick={moveUp}>⬆️ Up</button>
        <button className="btn" onClick={moveDown}>⬇️ Down</button>
        <button className="btn" onClick={rotate}>🔁 Rotate</button>
        <button className="btn" onClick={captureView}>📸 Capture View</button>
        <button className="btn bg-red-700" onClick={returnToBase}>🏠 Return to Base</button>
      </div>
    </div>
  );
}
