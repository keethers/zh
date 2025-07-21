export default function LegalMotionGenerator() {
  return (
    <div style={{ padding: "2rem", background: "#110033", color: "#fff" }}>
      <h3>⚖️ Motion Generator</h3>
      <p>Draft legal motions for civil, criminal, or probate filings.</p>
      <textarea placeholder="Describe the motion you need…" rows={6} cols={60} />
      <br />
      <button>Generate Motion</button>
    </div>
  );
}
