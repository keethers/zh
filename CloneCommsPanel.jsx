import React, { useState } from 'react';
import useCloneNetwork from '@/hooks/useCloneNetwork';

export default function CloneCommsPanel() {
  const { sendToAllClones } = useCloneNetwork();
  const [msg, setMsg] = useState('');

  const send = () => {
    sendToAllClones(msg);
    setMsg('');
  };

  return (
    <div className="p-4 bg-indigo-950 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">📡 Clone Comms Panel</h1>
      <textarea
        className="w-full p-2 bg-black rounded mb-2"
        placeholder="Broadcast message to all active clones"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={send} className="btn bg-blue-600 w-full">📢 Send Command</button>
    </div>
  );
}
