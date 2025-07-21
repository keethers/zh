export default function GlobalBroadcastOverride() {
  return (
    <div style={{ padding: "2rem", background: "#001122", color: "#0ff" }}>
      <h3>📡 Global Broadcast Override</h3>
      <p>Interrupt all active modules with a system-wide message or alert.</p>
      <textarea placeholder="Enter message to broadcast..." rows={4} cols={60} />
      <br />
      <button>Send Alert</button>
    </div>
  );
}
