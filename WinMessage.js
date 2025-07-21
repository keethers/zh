export default function WinMessage({ visible }) {
  if (!visible) return null;

  return (
    <div style={{
      marginTop: '15px',
      padding: '10px',
      color: '#00FF00',
      fontWeight: 'bold',
      fontSize: '1.2rem'
    }}>
      🎉 Winner! You hit the jackpot!
    </div>
  );
}
