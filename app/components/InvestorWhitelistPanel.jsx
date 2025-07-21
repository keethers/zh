export default function InvestorWhitelistPanel() {
  return (
    <div style={{ padding: "2rem", background: "#001122", color: "#0ff" }}>
      <h3>🧾 Investor Whitelist Panel</h3>
      <p>Add VIP addresses to receive early access to EX$ tokens, NFTs, or system testnet.</p>
      <input type="text" placeholder="Enter wallet address" />
      <button style={{ marginLeft: "0.5rem" }}>Add to Whitelist</button>
    </div>
  );
}
