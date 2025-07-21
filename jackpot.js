import React, { useState } from 'react';
import ExoNavBar from '../../../components/ExoNavBar';

export default function JackpotPage() {
  const [jackpot, setJackpot] = useState(Math.floor(Math.random() * 10000));

  const claim = () => {
    alert('💵 Jackpot claimed! Not really... but imagine!');
    setJackpot(0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <ExoNavBar />
      <h1>💰 EX$ Jackpot</h1>
      <p>Current Jackpot: <strong>{jackpot} EX$</strong></p>
      <button onClick={claim} style={{ marginTop: '20px', padding: '10px' }}>
        Claim Jackpot
      </button>
    </div>
  );
}
