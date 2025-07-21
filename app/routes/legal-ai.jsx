export default function LegalAI() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>⚖️ Legal Assistant</h2>
      <p>Drafts motions, files patents, and handles court filings automatically.</p>
      <textarea placeholder="What do you need help with?" rows={5} cols={50} />
      <br />
      <button>Generate Legal Document</button>
    </div>
  );
}
