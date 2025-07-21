import React, { useState } from 'react';
import usePayload from '@/hooks/usePayload';

export default function PayloadDropManager() {
  const { sendToAllClones, sendToGuests, attachMedia } = usePayload();
  const [payload, setPayload] = useState('');

  return (
    <div className="p-4 bg-slate-800 text-white rounded-xl">
      <h1 className="text-xl font-bold text-center">📦 Payload Drop Manager</h1>
      <textarea className="input mb-2" placeholder="Enter message or content…" value={payload} onChange={(e) => setPayload(e.target.value)} />
      <div className="flex flex-col items-center space-y-2">
        <button className="btn" onClick={() => sendToGuests(payload)}>Drop to Guests</button>
        <button className="btn" onClick={() => sendToAllClones(payload)}>Drop to Clones</button>
        <button className="btn" onClick={() => attachMedia(payload)}>📎 Attach Media</button>
      </div>
    </div>
  );
}
