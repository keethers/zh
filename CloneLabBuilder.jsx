import React, { useState } from 'react';
import useCloneCreator from '@/hooks/useCloneCreator';

export default function CloneLabBuilder() {
  const { spawnClone, assignPersonality, logClone } = useCloneCreator();
  const [name, setName] = useState('CloneX');
  const [type, setType] = useState('Surveillance');

  return (
    <div className="p-4 bg-slate-900 text-white rounded-xl">
      <h1 className="text-2xl font-bold text-center mb-3">🧬 Clone Lab Builder</h1>
      <input className="input mb-2" placeholder="Clone Name" value={name} onChange={(e) => setName(e.target.value)} />
      <select className="input mb-2" value={type} onChange={(e) => setType(e.target.value)}>
        <option>Surveillance</option>
        <option>Trader</option>
        <option>Dealer</option>
        <option>Hacker</option>
      </select>
      <div className="flex flex-col space-y-2 items-center">
        <button className="btn" onClick={() => spawnClone(name, type)}>Spawn Clone</button>
        <button className="btn" onClick={() => assignPersonality(name, 'Loyal')}>Assign Personality</button>
        <button className="btn" onClick={() => logClone(name)}>Log Entry</button>
      </div>
    </div>
  );
}
