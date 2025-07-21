import React from 'react';
import GameSettingsPanel from './GameSettingsPanel';
import EXLedgerViewer from './EXLedgerViewer';

export default function OwnerDashboard5150() {
  return (
    <div className="p-6 bg-neutral-900 text-white rounded-2xl">
      <h1 className="text-3xl font-bold text-center mb-4">Owner Dashboard 5150</h1>
      <p className="text-center text-gray-400 mb-6">Manage games, payouts, wallets, and system overrides.</p>
      <GameSettingsPanel />
      <EXLedgerViewer />
    </div>
  );
}
