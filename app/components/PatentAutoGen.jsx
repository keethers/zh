export default function PatentAutoGen() {
  return (
    <div style={{ padding: "2rem", background: "#200044", color: "#fff" }}>
      <h3>🧾 Patent Auto-Generator</h3>
      <p>Drafts full patent application based on input invention description.</p>
      <textarea placeholder="Describe your invention..." rows={6} cols={60} />
      <br />
      <button>Generate Patent Draft</button>
    </div>
  );
}
