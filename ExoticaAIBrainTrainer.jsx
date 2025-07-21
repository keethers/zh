import React, { useState } from 'react';
import useTrainerCore from '@/hooks/useTrainerCore';

export default function ExoticaAIBrainTrainer() {
  const [prompt, setPrompt] = useState('');
  const { teachAI, viewKnowledge } = useTrainerCore();

  return (
    <div className="p-4 bg-zinc-900 text-white rounded-lg">
      <h1 className="text-xl font-bold text-center mb-3">🧠 Exotica AI Brain Trainer</h1>
      <textarea className="input mb-2" placeholder="Teach Exotica something new…" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <div className="flex justify-center gap-2">
        <button className="btn" onClick={() => teachAI(prompt)}>🧬 Teach</button>
        <button className="btn" onClick={viewKnowledge}>📖 View Knowledge</button>
      </div>
    </div>
  );
}
