import React, { useState } from 'react';
import useWhisper from '@/hooks/useWhisper';

export default function WhisperMode() {
  const [targetUser, setTargetUser] = useState('');
  const [msg, setMsg] = useState('');
  const { sendWhisper } = useWhisper();

  return (
    <div className="p-4 bg-black text-gray-100 rounded-lg">
      <h2 className="text-xl font-bold text-center">💬 Whisper Mode</h2>
      <input className="input mt-2" placeholder="Target Guest Username" value={targetUser} onChange={(e) => setTargetUser(e.target.value)} />
      <textarea className="input mt-2" placeholder="Private message…" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button className="btn mt-3" onClick={() => sendWhisper(targetUser, msg)}>Send Whisper</button>
    </div>
  );
}
