import React, { useState } from 'react';
import usePersona from '@/hooks/usePersona';

export default function PersonaSwitchBoard() {
  const [activePersona, setActivePersona] = useState('');
  const { switchPersona } = usePersona();

  const personas = ['Queen Bee', 'Legal Clerk', 'Doctor', 'Dealer', 'Realtor', 'Hacker', 'Host'];

  return (
    <div className="p-4 bg-indigo-950 text-white rounded-lg">
      <h1 className="text-xl font-bold text-center mb-3">🎭 Persona Switchboard</h1>
      <ul className="space-y-2 text-center">
        {personas.map((p, i) => (
          <li key={i}>
            <button className="btn" onClick={() => { switchPersona(p); setActivePersona(p); }}>
              Activate {p}
            </button>
          </li>
        ))}
      </ul>
      {activePersona && <p className="mt-3 text-green-300 text-center">🧠 Persona Active: {activePersona}</p>}
    </div>
  );
}
