export default function ChainConfigPanel() {
  return (
    <div style={{ padding: "2rem", background: "#001a1a", color: "#00ffee" }}>
      <h3>🛠️ Chain Config Panel</h3>
      <p>Adjust gas fees, validator count, and tokenomics of your blockchain.</p>
      <label>
        Gas Fee (GWEI): <input type="number" defaultValue={1} />
      </label>
      <br />
      <label>
        Validators: <input type="number" defaultValue={10} />
      </label>
      <br />
      <button>Update Chain</button>
    </div>
  );
}
