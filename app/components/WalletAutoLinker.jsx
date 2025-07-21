export default function WalletAutoLinker() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>🔄 Wallet Auto-Linker</h2>
      <p>Connect Trust Wallet, MetaMask, Venmo, or add a new one below.</p>
      <input type="text" placeholder="Paste wallet address or handle" />
      <button style={{ marginLeft: "1rem" }}>Link Wallet</button>
    </div>
  );
}
