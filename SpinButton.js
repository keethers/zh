export default function SpinButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '15px 30px',
        fontSize: '1.2rem',
        marginTop: '20px',
        backgroundColor: '#FFD700',
        color: '#000',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      🎯 Spin
    </button>
  );
}
