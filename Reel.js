export default function Reel({ symbol }) {
  return (
    <div style={{
      width: '80px',
      height: '80px',
      border: '2px solid #fff',
      borderRadius: '10px',
      margin: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      backgroundColor: '#000',
      color: '#FFD700'
    }}>
      {symbol}
    </div>
  );
}
