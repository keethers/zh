// components/ExoticaDreamMachine.jsx
import React, { useState } from 'react';
import SlotSymbolCard from './SlotSymbolCard';
import slotData from './slotData';

const ExoticaDreamMachine = () => {
  const [reels, setReels] = useState(Array(5).fill(0));
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');

  const spin = () => {
    setSpinning(true);
    const newReels = reels.map(() =>
      Math.floor(Math.random() * slotData.length)
    );
    setTimeout(() => {
      setReels(newReels);
      setSpinning(false);
      checkWin(newReels);
    }, 1200);
  };

  const checkWin = (reels) => {
    const symbols = reels.map((r) => slotData[r].name);
    const counts = symbols.reduce((acc, sym) => {
      acc[sym] = (acc[sym] || 0) + 1;
      return acc;
    }, {});
    const winSymbol = Object.keys(counts).find((key) => counts[key] >= 3);
    if (winSymbol) {
      setResult(`You win with ${winSymbol}!`);
    } else {
      setResult('No match. Try again!');
    }
  };

  return (
    <div className="slot-machine">
      <h2>🎰 Exotica Dream Machine</h2>
      <div className="reels">
        {reels.map((value, i) => (
          <SlotSymbolCard key={i} symbol={slotData[value]} spinning={spinning} />
        ))}
      </div>
      <button onClick={spin} disabled={spinning}>
        {spinning ? 'Spinning...' : 'Spin'}
      </button>
      <p>{result}</p>

      <style jsx>{`
        .slot-machine {
          text-align: center;
          background: #111;
          color: #fff;
          padding: 20px;
          border-radius: 16px;
          box-shadow: 0 0 10px #f0f;
          max-width: 600px;
          margin: 40px auto;
        }
        .reels {
          display: flex;
          justify-content: center;
          margin: 20px 0;
          gap: 10px;
        }
        button {
          padding: 10px 20px;
          background: #f0f;
          border: none;
          color: #fff;
          font-size: 18px;
          border-radius: 8px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ExoticaDreamMachine;
