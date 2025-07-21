import React, { useEffect, useState } from 'react';
import useSpyStream from '@/hooks/useSpyStream';

export default function SpyModeOverlay() {
  const { getLiveVideo, getMicFeed } = useSpyStream();
  const [videoSrc, setVideoSrc] = useState('');
  const [audioSrc, setAudioSrc] = useState('');

  useEffect(() => {
    getLiveVideo().then(setVideoSrc);
    getMicFeed().then(setAudioSrc);
  }, []);

  return (
    <div className="p-4 bg-black text-white rounded-xl">
      <h1 className="text-xl font-bold text-center mb-3">🕵️ Spy Mode Overlay</h1>
      <video src={videoSrc} autoPlay controls className="w-full mb-2 rounded" />
      <audio src={audioSrc} controls className="w-full" />
    </div>
  );
}
