export default function ManualWalletCreator() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>💰 Create EX$ Wallet</h2>
      <label>
        Enter user email:
        <input type="email" placeholder="user@email.com" />
      </label>
      <button style={{ marginLeft: "1rem" }}>Generate Wallet</button>
    </div>
  );
}
