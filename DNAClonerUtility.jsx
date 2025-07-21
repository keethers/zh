import React, { useState } from 'react';
import useDNA from '@/hooks/useDNA';

export default function DNAClonerUtility() {
  const { generateDNA, remixTraits } = useDNA();
  const [dna, setDna] = useState('');
  const [traits, setTraits] = useState([]);

  return (
    <div className="p-4 bg-zinc-900 text-white rounded-xl">
      <h1 className="text-xl font-bold mb-2">🧬 DNA Cloner Utility</h1>
      <div className="flex flex-col gap-2">
        <button onClick={() => setDna(generateDNA())} className="btn bg-cyan-700">🧪 Generate DNA</button>
        <button onClick={() => setTraits(remixTraits())} className="btn bg-fuchsia-700">🌀 Remix Traits</button>
        <p className="text-sm mt-2">DNA: {dna}</p>
        <ul className="text-xs list-disc ml-4">
          {traits.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>
    </div>
  );
}
