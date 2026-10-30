'use client';
import { useState } from 'react';

export default function ProfilePage() {
  const [language, setLanguage] = useState<'MG' | 'FR' | 'EN'>('MG');
  const [showSettings, setShowSettings] = useState(false);
  const [activeTab, setActiveTab] = useState<'profil' | 'discussion'>('profil');
  
  const [messages, setMessages] = useState([
    { id: 1, user: 'Nandrian', text: 'Salama daholo! Tonga soa eto amin\'ny Ndao Hianatra.', time: '12:20' },
    { id: 2, user: 'Julio Mario', text: 'Miarahaba! Tena tsara ilay endrika vaovao an\'ny site.', time: '12:22' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), user: 'Mpianatra', text: newMessage, time: 'Ankehitriny' }
    ]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 pb-24 max-w-md mx-auto font-sans">
      {/* Header sy Paramètres */}
      <div className="flex justify-between items-center py-4 border-b border-slate-800/60 mb-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveTab('profil')}
            className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all ${
              activeTab === 'profil' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'bg-slate-900 text-slate-400'
            }`}
          >
            👤 Profil
          </button>
          <button
            onClick={() => setActiveTab('discussion')}
            className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all ${
              activeTab === 'discussion' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'bg-slate-900 text-slate-400'
            }`}
          >
            💬 Discussion
          </button>
        </div>

        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl transition-all shadow-md"
        >
          ⚙️
        </button>
      </div>

      {/* Menu Paramètres Fiteny */}
      {showSettings && (
        <div className="bg-slate-900 border border-emerald-500/30 p-4 rounded-3xl mb-6 shadow-2xl space-y-3">
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-emerald-400">🌍 Firin'ny Fiteny (Langue)</h3>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setLanguage('MG')}
              className={`p-2.5 rounded-2xl text-xs font-extrabold border-2 ${
                language === 'MG' ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300' : 'border-slate-800 bg-slate-800 text-slate-400'
              }`}
            >
              🇲🇬 Malagasy
            </button>
            <button
              onClick={() => setLanguage('FR')}
              className={`p-2.5 rounded-2xl text-xs font-extrabold border-2 ${
                language === 'FR' ? 'border-blue-500 bg-blue-500/20 text-blue-300' : 'border-slate-800 bg-slate-800 text-slate-400'
              }`}
            >
              🇫🇷 Français
            </button>
            <button
              onClick={() => setLanguage('EN')}
              className={`p-2.5 rounded-2xl text-xs font-extrabold border-2 ${
                language === 'EN' ? 'border-red-500 bg-red-500/20 text-red-300' : 'border-slate-800 bg-slate-800 text-slate-400'
              }`}
            >
              🇺🇸 English
            </button>
          </div>
        </div>
      )}

      {/* TAB 1: PROFIL */}
      {activeTab === 'profil' && (
        <div className="space-y-6">
          <div className="flex flex-col items-center space-y-3 pt-2">
            <div className="w-28 h-28 rounded-full border-4 border-dashed border-emerald-400 bg-emerald-950/30 flex items-center justify-center shadow-xl">
              <span className="text-3xl text-emerald-400">+</span>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-black text-white">Nandrian By Boy</h2>
              <p className="text-xs text-emerald-400/80 font-bold mt-1">@nandrian • Depuis 2026</p>
            </div>
          </div>

          <div className="flex justify-around items-center py-4 bg-slate-900/80 border border-slate-800 rounded-3xl">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🇲🇬</span>
              <span className="text-xl">🇺🇸</span>
            </div>
            <div className="text-center">
              <p className="font-extrabold text-lg text-emerald-400">4</p>
              <p className="text-[10px] text-slate-400 uppercase">Cours</p>
            </div>
            <div className="text-center">
              <p className="font-extrabold text-lg text-yellow-400">0</p>
              <p className="text-[10px] text-slate-400 uppercase">Abonnés</p>
            </div>
          </div>

          <button className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 border-b-4 border-emerald-700 text-slate-950 font-black rounded-2xl shadow-lg">
            👥 AJOUTER DES AMIS
          </button>

          <div className="space-y-3">
            <h3 className="font-extrabold text-slate-400 tracking-wider text-xs uppercase px-1">RÉCAPITULATIF</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-slate-900 border-2 border-slate-800 rounded-3xl flex items-center space-x-3 shadow-lg">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="font-extrabold text-lg">2 jours</p>
                  <p className="text-[11px] text-slate-400">Série actuelle</p>
                </div>
              </div>
              <div className="p-4 bg-slate-900 border-2 border-slate-800 rounded-3xl flex items-center space-x-3 shadow-lg">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-extrabold text-lg">261 XP</p>
                  <p className="text-[11px] text-slate-400">Total XP</p>
                </div>
              </div>
              <div className="p-4 bg-slate-900 border-2 border-slate-800 rounded-3xl flex items-center space-x-3 col-span-2 shadow-lg">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-extrabold text-lg">Ligue Bronze</p>
                  <p className="text-[11px] text-slate-400">Fizarana misy anao</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DISCUSSION */}
      {activeTab === 'discussion' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 h-[350px] overflow-y-auto space-y-3 flex flex-col">
            <h3 className="text-xs font-extrabold uppercase text-emerald-400 tracking-wider pb-2 border-b border-slate-800">
              💬 Fizarana Resaka sy Hevitra
            </h3>
            {messages.map((msg) => (
              <div key={msg.id} className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700/50 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-xs text-emerald-400">{msg.user}</span>
                  <span className="text-[10px] text-slate-500">{msg.time}</span>
                </div>
                <p className="text-sm text-slate-200">{msg.text}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Soraty eto ny hevitrao..."
              className="flex-1 bg-slate-900 border-2 border-slate-800 focus:border-emerald-500 rounded-2xl px-4 py-3 text-sm text-white outline-none"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-5 rounded-2xl shadow-lg"
            >
              📤
            </button>
          </form>
        </div>
      )}
    </div>
  );
      }
