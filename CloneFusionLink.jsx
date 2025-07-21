export default function CloneFusionLink() {
  const fuseClones = () => {
    console.log('🧪 Clones merged into hybrid');
    // Connect to CloneLabBuilder + MissionMatrix
  };

  return (
    <div className="p-4 bg-zinc-900 text-white rounded-xl">
      <h2 className="text-xl font-bold mb-2">🤖 Clone Fusion Link</h2>
      <p>Combine clone profiles for stronger hybrid AI agents.</p>
      <button onClick={fuseClones} className="mt-3 bg-indigo-700 px-4 py-2 rounded">Fuse Selected Clones</button>
    </div>
  );
}
