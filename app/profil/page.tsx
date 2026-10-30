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
    <div className="min-h-screen bg-slate-950 text-white p-4 pb-28 max-w-md mx-auto font-sans">
      {/* Header sy Logo */}
      <div className="flex justify-between items-center py-3 mb-4">
        <h1 className="text-emerald-400 font-black text-lg tracking-wider">Ndao Hianatra</h1>
        <div className="flex items-center space-x-2">
          <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md">
            <span className="text-amber-400 text-sm">🔥</span>
            <span className="text-xs font-black text-amber-400">2</span>
          </div>
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl transition-all shadow-md text-sm"
          >
            ⚙️
          </button>
        </div>
      </div>

      {/* Navigation Onglets (PROFIL / DISCUSSION) */}
      <div className="grid grid-cols-2 gap-2 bg-slate-900 p-1.5 rounded-3xl border border-slate-800 mb-6 shadow-inner">
        <button
          onClick={() => setActiveTab('profil')}
          className={`py-2.5 rounded-2xl font-black text-xs transition-all shadow-md ${
            activeTab === 'profil' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
          }`}
        >
          👤 PROFIL
        </button>
        <button
          onClick={() => setActiveTab('discussion')}
          className={`py-2.5 rounded-2xl font-black text-xs transition-all shadow-md ${
            activeTab === 'discussion' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
          }`}
        >
          💬 DISCUSSION
        </button>
      </div>

      {/* Menu Paramètres Fiteny */}
      {showSettings && (
        <div className="bg-slate-900 border border-cyan-500/30 p-4 rounded-3xl mb-6 shadow-2xl space-y-3">
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-cyan-400">🌍 Firin'ny Fiteny (Langue)</h3>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setLanguage('MG')}
              className={`p-2 rounded-2xl text-xs font-extrabold border-2 ${
                language === 'MG' ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300' : 'border-slate-800 bg-slate-800 text-slate-400'
              }`}
            >
              🇲🇬 Malagasy
            </button>
            <button
              onClick={() => setLanguage('FR')}
              className={`p-2 rounded-2xl text-xs font-extrabold border-2 ${
                language === 'FR' ? 'border-blue-500 bg-blue-500/20 text-blue-300' : 'border-slate-800 bg-slate-800 text-slate-400'
              }`}
            >
              🇫🇷 Français
            </button>
            <button
              onClick={() => setLanguage('EN')}
              className={`p-2 rounded-2xl text-xs font-extrabold border-2 ${
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
          {/* Avatar / Photo de profil afovoany */}
          <div className="flex flex-col items-center space-y-3 pt-2">
            <div className="relative">
              <div className="w-28 h-28 rounded-full border-4 border-emerald-500 bg-emerald-950/40 flex items-center justify-center shadow-2xl">
                <span className="text-4xl">😊</span>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-emerald-500 border-2 border-slate-950 rounded-full flex items-center justify-center text-slate-950 font-black text-sm shadow-md">
                +
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <h2 className="text-xl font-black text-white">Nandrian By Boy</h2>
                <span className="bg-purple-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">PRO</span>
              </div>
              <p className="text-xs text-slate-400 font-bold mt-1">@nandrian • Depuis 2026</p>
            </div>
          </div>

          {/* Stats Box (Cours & Abonnés) */}
          <div className="grid grid-cols-3 gap-2 bg-slate-900 border border-slate-800 p-3 rounded-3xl shadow-xl text-center">
            <div className="border-r border-slate-800">
              <div className="flex justify-center space-x-1 mb-1">
                <span className="text-base">🇲🇬</span>
                <span className="text-base">🇺🇸</span>
              </div>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Cours (4)</p>
            </div>
            <div className="border-r border-slate-800 flex flex-col justify-center">
              <p className="font-black text-base text-cyan-400">12</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Abonnements</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-black text-base text-emerald-400">8</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Abonnés</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs rounded-2xl shadow-lg transition-all">
              👥 AMPIDIRO NAMANA
            </button>
            <button className="py-3 bg-purple-600 hover:bg-purple-500 text-white font-black text-xs rounded-2xl shadow-lg transition-all">
              💬 HANGOBAKA
            </button>
          </div>

          {/* Récapitulatif sy Statistiques */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-slate-400 tracking-wider text-xs uppercase px-1">RÉCAPITULATIF</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-3xl flex items-center space-x-3 shadow-lg">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="font-black text-base text-white">2 jours</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Série actuelle</p>
                </div>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-3xl flex items-center space-x-3 shadow-lg">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-black text-base text-white">261 XP</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Total XP</p>
                </div>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-3xl flex items-center space-x-3 col-span-2 shadow-lg justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-black text-base text-white">Ligue Bronze</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Rang #4 • Herinandro</p>
                  </div>
                </div>
                <span className="bg-amber-500/20 border border-amber-500/40 text-amber-400 font-black text-xs px-3 py-1 rounded-xl">
                  TOP 5
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DISCUSSION */}
      {activeTab === 'discussion' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 h-[350px] overflow-y-auto space-y-3 flex flex-col shadow-inner">
            <h3 className="text-xs font-black uppercase text-emerald-400 tracking-wider pb-2 border-b border-slate-800">
              💬 Fizarana Resaka sy Hevitra
            </h3>
            {messages.map((msg) => (
              <div key={msg.id} className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700/50 space-y-1 shadow-md">
                <div className="flex justify-between items-center">
                  <span className="font-black text-xs text-emerald-400">{msg.user}</span>
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
              className="flex-1 bg-slate-900 border-2 border-slate-800 focus:border-emerald-500 rounded-2xl px-4 py-3 text-sm text-white outline-none shadow-inner"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-5 rounded-2xl shadow-lg transition-all"
            >
              📤
            </button>
          </form>
        </div>
      )}
    </div>
  );
    }
