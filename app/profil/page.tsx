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
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#ffffff', padding: '16px', paddingBottom: '120px', maxWidth: '440px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', marginBottom: '16px' }}>
        <h1 style={{ color: '#4ade80', fontSize: '20px', fontWeight: '900', margin: 0, letterSpacing: '0.5px' }}>Ndao Hianatra</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '6px 12px', borderRadius: '9999px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>🔥</span>
            <span style={{ fontSize: '12px', fontWeight: '900', color: '#f59e0b' }}>2</span>
          </div>
          <button 
            onClick={() => setShowSettings(!showSettings)}
            style={{ padding: '8px 12px', backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', cursor: 'pointer', fontSize: '14px' }}
          >
            ⚙️
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', backgroundColor: '#0f172a', padding: '6px', borderRadius: '24px', border: '1px solid #1e293b', marginBottom: '24px' }}>
        <button
          onClick={() => setActiveTab('profil')}
          style={{
            padding: '12px',
            borderRadius: '18px',
            fontWeight: '900',
            fontSize: '12px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: activeTab === 'profil' ? '#06b6d4' : 'transparent',
            color: activeTab === 'profil' ? '#020617' : '#94a3b8',
            transition: 'all 0.2s'
          }}
        >
          👤 PROFIL
        </button>
        <button
          onClick={() => setActiveTab('discussion')}
          style={{
            padding: '12px',
            borderRadius: '18px',
            fontWeight: '900',
            fontSize: '12px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: activeTab === 'discussion' ? '#10b981' : 'transparent',
            color: activeTab === 'discussion' ? '#020617' : '#94a3b8',
            transition: 'all 0.2s'
          }}
        >
          💬 DISCUSSION
        </button>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div style={{ backgroundColor: '#0f172a', border: '1px solid rgba(6, 182, 212, 0.4)', padding: '16px', borderRadius: '24px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#22d3ee', margin: '0 0 12px 0' }}>🌍 Firin'ny Fiteny (Langue)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
            <button
              onClick={() => setLanguage('MG')}
              style={{ padding: '10px', borderRadius: '16px', fontSize: '11px', fontWeight: '800', border: language === 'MG' ? '2px solid #10b981' : '2px solid #1e293b', backgroundColor: language === 'MG' ? 'rgba(16, 185, 129, 0.2)' : '#1e293b', color: language === 'MG' ? '#34d399' : '#94a3b8', cursor: 'pointer' }}
            >
              🇲🇬 Malagasy
            </button>
            <button
              onClick={() => setLanguage('FR')}
              style={{ padding: '10px', borderRadius: '16px', fontSize: '11px', fontWeight: '800', border: language === 'FR' ? '2px solid #3b82f6' : '2px solid #1e293b', backgroundColor: language === 'FR' ? 'rgba(59, 130, 246, 0.2)' : '#1e293b', color: language === 'FR' ? '#60a5fa' : '#94a3b8', cursor: 'pointer' }}
            >
              🇫🇷 Français
            </button>
            <button
              onClick={() => setLanguage('EN')}
              style={{ padding: '10px', borderRadius: '16px', fontSize: '11px', fontWeight: '800', border: language === 'EN' ? '2px solid #ef4444' : '2px solid #1e293b', backgroundColor: language === 'EN' ? 'rgba(239, 68, 68, 0.2)' : '#1e293b', color: language === 'EN' ? '#f87171' : '#94a3b8', cursor: 'pointer' }}
            >
              🇺🇸 English
            </button>
          </div>
        </div>
      )}

      {/* TAB 1: PROFIL */}
      {activeTab === 'profil' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Avatar Center */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px', paddingTop: '8px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '110px', height: '110px', borderRadius: '50%', border: '4px solid #10b981', backgroundColor: 'rgba(6, 78, 59, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)' }}>
                <span style={{ fontSize: '42px' }}>😊</span>
              </div>
              <div style={{ position: 'absolute', bottom: '0', right: '0', width: '32px', height: '32px', backgroundColor: '#10b981', border: '3px solid #020617', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#020617', fontWeight: '900', fontSize: '16px' }}>
                +
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#ffffff', margin: 0 }}>Nandrian By Boy</h2>
                <span style={{ backgroundColor: '#9333ea', color: '#ffffff', fontSize: '9px', fontWeight: '900', padding: '2px 8px', borderRadius: '9999px', textTransform: 'uppercase' }}>PRO</span>
              </div>
              <p style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '700', margin: '4px 0 0 0' }}>@nandrian • Depuis 2026</p>
            </div>
          </div>

          {/* Stats Box */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '16px 12px', borderRadius: '24px', textAlign: 'center' }}>
            <div style={{ borderRight: '1px solid #1e293b', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                <span style={{ fontSize: '14px' }}>🇲🇬</span>
                <span style={{ fontSize: '14px' }}>🇺🇸</span>
              </div>
              <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '800', textTransform: 'uppercase' }}>Cours (4)</span>
            </div>
            <div style={{ borderRight: '1px solid #1e293b', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: '16px', fontWeight: '900', color: '#22d3ee' }}>12</span>
              <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '800', textTransform: 'uppercase' }}>Abonnements</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: '16px', fontWeight: '900', color: '#34d399' }}>8</span>
              <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '800', textTransform: 'uppercase' }}>Abonnés</span>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <button style={{ padding: '14px', backgroundColor: '#06b6d4', color: '#020617', fontWeight: '900', fontSize: '11px', borderRadius: '18px', border: 'none', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.2)' }}>
              👥 AMPIDIRO NAMANA
            </button>
            <button style={{ padding: '14px', backgroundColor: '#9333ea', color: '#ffffff', fontWeight: '900', fontSize: '11px', borderRadius: '18px', border: 'none', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.2)' }}>
              💬 HANGOBAKA
            </button>
          </div>

          {/* Recapitulatif */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '11px', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, paddingLeft: '4px' }}>RÉCAPITULATIF</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '16px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>🔥</span>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '900', color: '#ffffff' }}>2 jours</div>
                  <div style={{ fontSize: '9px', color: '#94a3b8', fontWeight: '800', textTransform: 'uppercase' }}>Série actuelle</div>
                </div>
              </div>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '16px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>⚡</span>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '900', color: '#ffffff' }}>261 XP</div>
                  <div style={{ fontSize: '9px', color: '#94a3b8', fontWeight: '800', textTransform: 'uppercase' }}>Total XP</div>
                </div>
              </div>
              <div style={{ gridColumn: 'span 2', backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '16px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>🏆</span>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: '900', color: '#ffffff' }}>Ligue Bronze</div>
                    <div style={{ fontSize: '9px', color: '#94a3b8', fontWeight: '800', textTransform: 'uppercase' }}>Rang #4 • Herinandro</div>
                  </div>
                </div>
                <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.2)', border: '1px solid rgba(245, 158, 11, 0.4)', color: '#f59e0b', fontWeight: '900', fontSize: '11px', padding: '6px 12px', borderRadius: '12px' }}>
                  TOP 5
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DISCUSSION */}
      {activeTab === 'discussion' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '24px', padding: '16px', height: '350px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', color: '#34d399', margin: '0 0 8px 0', paddingBottom: '8px', borderBottom: '1px solid #1e293b' }}>
              💬 Fizarana Resaka sy Hevitra
            </h3>
            {messages.map((msg) => (
              <div key={msg.id} style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '900', fontSize: '11px', color: '#34d399' }}>{msg.user}</span>
                  <span style={{ fontSize: '9px', color: '#64748b' }}>{msg.time}</span>
                </div>
                <p style={{ fontSize: '13px', color: '#e2e8f0', margin: 0 }}>{msg.text}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Soraty eto ny hevitrao..."
              style={{ flex: 1, backgroundColor: '#0f172a', border: '2px solid #1e293b', borderRadius: '16px', padding: '12px 16px', fontSize: '13px', color: '#ffffff', outline: 'none' }}
            />
            <button
              type="submit"
              style={{ backgroundColor: '#10b981', color: '#020617', fontWeight: '900', padding: '0 18px', borderRadius: '16px', border: 'none', cursor: 'pointer', fontSize: '16px' }}
            >
              📤
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
