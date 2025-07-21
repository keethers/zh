import React from 'react';
import useCloningLab from '@/hooks/useCloningLab';

export default function RFIDClonePatch() {
  const { scanRFID, cloneCardToPhone, logKeyClone } = useCloningLab();

  return (
    <div className="p-4 bg-black text-lime-300 rounded-lg">
      <h1 className="text-2xl font-bold text-center">RFID Cloner</h1>
      <p className="text-sm text-center text-lime-400 mb-4">Clone access cards using NFC-capable device.</p>
      <div className="flex flex-col items-center gap-2">
        <button className="btn" onClick={scanRFID}>Scan RFID Tag</button>
        <button className="btn" onClick={() => cloneCardToPhone('accessCardA')}>Clone to Phone</button>
        <button className="btn" onClick={() => logKeyClone('Card_A')}>Log Clone</button>
      </div>
    </div>
  );
}
