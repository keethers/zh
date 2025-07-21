import React, { useEffect } from 'react';
import useVoiceCommands from '@/hooks/useVoiceCommands';

export default function VoiceControlCore() {
  const { startListening, onCommand } = useVoiceCommands();

  useEffect(() => {
    startListening();

    onCommand('launch jackpot', () => {
      window.location.href = '/casino/pages/Jackpot5150';
    });

    onCommand('broadcast message', () => {
      alert('Opening OwnerBroadcast Panel...');
    });

    onCommand('lock all clones', () => {
      // Connect to HiveCloneControl here
      console.log('Clones locked down.');
    });
  }, []);

  return (
    <div className="p-4 bg-black text-green-300 text-center rounded-xl">
      <h1 className="text-2xl font-bold">🎙️ Voice Control Core</h1>
      <p className="text-sm text-green-400">Say commands like “launch jackpot” or “lock all clones”</p>
    </div>
  );
}
