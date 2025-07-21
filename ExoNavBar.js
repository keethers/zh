import React from 'react';
import Link from 'next/link';

export default function ExoNavBar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#111', color: '#fff' }}>
      <Link href="/" style={{ marginRight: '20px', color: '#0ff' }}>🏠 Home</Link>
      <Link href="/casino/slots" style={{ marginRight: '20px', color: '#0ff' }}>🎰 Slots</Link>
      <Link href="/casino/jackpot" style={{ color: '#0ff' }}>💰 Jackpot</Link>
    </nav>
  );
}
