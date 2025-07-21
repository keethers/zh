import React, { useState, useEffect } from 'react';
import useChat from '@/hooks/useChat';

export default function GuestChatRoom() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { fetchMessages, sendMessage, subscribeToNew } = useChat();

  useEffect(() => {
    fetchMessages().then(setMessages);
    const unsubscribe = subscribeToNew((msg) => setMessages((prev) => [...prev, msg]));
    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4 bg-slate-800 text-white rounded-xl">
      <h2 className="text-xl font-bold mb-2">🗣️ Guest Chat Room</h2>
      <div className="max-h-64 overflow-y-scroll bg-slate-700 p-2 rounded mb-2">
        {messages.map((msg, i) => (
          <div key={i} className="text-sm border-b border-slate-600 py-1">{msg.user}: {msg.text}</div>
        ))}
      </div>
      <input className="input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Say something…" />
      <button className="btn mt-2" onClick={() => { sendMessage(input); setInput(''); }}>Send</button>
    </div>
  );
}
