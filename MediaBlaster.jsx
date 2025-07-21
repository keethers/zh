import React from 'react';
import useMediaLab from '@/hooks/useMediaLab';

export default function MediaBlaster() {
  const { generateAd, postToSocial, scheduleCampaign } = useMediaLab();

  return (
    <div className="p-4 bg-gray-950 text-white rounded-xl">
      <h1 className="text-xl font-bold text-center">🎬 Media Blaster</h1>
      <p className="text-center text-sm text-gray-400 mb-3">Generate full videos, posts, and promos instantly.</p>
      <div className="flex flex-col items-center gap-2">
        <button className="btn" onClick={() => generateAd('EX$ Launch Promo')}>Generate Launch Video</button>
        <button className="btn" onClick={() => postToSocial('EX$ is live – link in bio!')}>Post to All Channels</button>
        <button className="btn" onClick={scheduleCampaign}>Schedule 7-Day Campaign</button>
      </div>
    </div>
  );
}
