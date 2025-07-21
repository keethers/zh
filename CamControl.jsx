import React from 'react';
import useCamAccess from '@/hooks/useCamAccess';

export default function CamControl() {
  const { takePhoto, startStream, detectFaces } = useCamAccess();

  return (
    <div className="p-4 bg-black text-lime-400 rounded-xl">
      <h1 className="text-xl font-bold text-center">📸 Camera Control</h1>
      <p className="text-center text-sm mb-4 text-lime-300">Trigger photo, stream live, and ID faces remotely.</p>
      <div className="flex flex-col items-center gap-2">
        <button className="btn" onClick={takePhoto}>📷 Snap Photo</button>
        <button className="btn" onClick={startStream}>🔴 Start Live Stream</button>
        <button className="btn" onClick={detectFaces}>🧠 Run Face Detection</button>
      </div>
    </div>
  );
}
