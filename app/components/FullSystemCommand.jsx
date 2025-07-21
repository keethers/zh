export default function FullSystemCommand() {
  return (
    <div style={{ padding: "2rem", background: "#000", color: "#ff0" }}>
      <h3>🧠 Full System Command</h3>
      <p>Issue a root-level command to all connected modules — AI, games, clones, wallets, defense.</p>
      <textarea placeholder="Enter command…" rows={4} cols={60} />
      <br />
      <button>Execute Command</button>
    </div>
  );
}
