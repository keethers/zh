import React, { useState } from 'react';
import useCloneLab from '@/hooks/useCloneLab';

export default function CloneCustomizer() {
  const { setVoice, assignStyle, applyBehavior } = useCloneLab();
  const [name, setName] = useState('CloneX');

  return (
    <div className="p-4 bg-indigo-950 text-white rounded-xl">
      <h1 className="text-xl font-bold text-center mb-3">🧬 Clone Customizer</h1>
      <input className="input mb-2" placeholder="Clone Name" value={name} onChange={(e) => setName(e.target.value)} />
      <div className="space-y-2">
        <button className="btn" onClick={() => setVoice(name, 'deep')}>🗣️ Deep Voice</button>
        <button className="btn" onClick={() => assignStyle(name, 'cyberpunk')}>🎨 Cyberpunk Style</button>
        <button className="btn" onClick={() => applyBehavior(name, 'aggressive')}>⚔️ Aggressive Behavior</button>
      </div>
    </div>
  );
}
