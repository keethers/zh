export default function CloneSelfDestructCode() {
  return (
    <div style={{ padding: "2rem", background: "#200", color: "#f55" }}>
      <h3>💣 Clone Self-Destruct Command</h3>
      <p>Issue a destruct signal to a specific clone ID.</p>
      <input type="text" placeholder="Enter Clone ID" />
      <button style={{ marginLeft: "1rem", backgroundColor: "red", color: "white" }}>
        Execute
      </button>
    </div>
  );
}
