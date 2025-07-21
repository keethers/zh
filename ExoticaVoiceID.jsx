import React, { useState } from 'react';
import useVoiceAuth from '@/hooks/useVoiceAuth';

export default function ExoticaVoiceID() {
  const { enrollVoiceprint, authenticateVoice, mimicVoice } = useVoiceAuth();
  const [status, setStatus] = useState('');

  return (
    <div className="p-4 bg-zinc-900 text-white rounded-lg text-center">
      <h1 className="text-xl font-bold mb-2">🎤 Exotica Voice ID</h1>
      <p className="text-gray-400 text-sm mb-4">Biometric voiceprint access system.</p>
      <div className="space-y-2">
        <button className="btn" onClick={() => enrollVoiceprint().then(() => setStatus('Voiceprint Saved'))}>🔐 Enroll My Voice</button>
        <button className="btn" onClick={() => authenticateVoice().then(match => setStatus(match ? '✅ Verified' : '❌ Failed'))}>🧠 Authenticate</button>
        <button className="btn" onClick={() => mimicVoice('target')}>🎭 Mimic Target Voice</button>
      </div>
      {status && <p className="mt-2 text-green-400">{status}</p>}
    </div>
  );
}
