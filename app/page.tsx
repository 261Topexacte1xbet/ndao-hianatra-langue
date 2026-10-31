'use client'

import React, { useState } from 'react'

export default function Home() {
  // Raha false dia ny Landing Page (Fampahafantarana) no miseho, raha true dia ny Espace Fianarana
  const [hasEntered, setHasEntered] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [tab, setTab] = useState<'courses' | 'premium' | 'profile' | 'contact'>('courses')
  const [copied, setCopied] = useState(false)
  const [txRef, setTxRef] = useState('')

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // --- 1. PEJY FANDRAISANA (LANDING PAGE - TSY MISY MENU PANDOAVANA ALOHA) ---
  if (!hasEntered) {
    return (
      <div style={{ backgroundColor: '#07090e', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '20px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', position: 'relative', overflow: 'hidden', boxSizing: 'border-box' }}>
        
        {/* Visual Glow Effect */}
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '280px', height: '180px', backgroundColor: 'rgba(245, 158, 11, 0.18)', filter: 'blur(90px)', borderRadius: '50%', pointerEvents: 'none' }} />

        {/* Header simple */}
        <header style={{ maxWidth: '440px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', boxShadow: '0 0 12px rgba(245,158,11,0.4)' }}>
              🌍
            </div>
            <div>
              <h1 style={{ fontSize: '14px', fontWeight: 'bold', margin: 0, color: '#fff' }}>Ndao Hianatra <span style={{ color: '#f59e0b' }}>Langue</span></h1>
              <p style={{ fontSize: '8px', color: '#94a3b8', margin: 0, textTransform: 'uppercase' }}>Écosystème d'apprentissage</p>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main style={{ maxWidth: '420px', width: '100%', textAlign: 'center', margin: 'auto', zIndex: 10, padding: '20px 0' }}>
          
          {/* Globe Icon Box */}
          <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #1e293b, #0f172a)', border: '1px solid rgba(245, 158, 11, 0.4)', borderRadius: '22px', margin: '0 auto 20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '34px', boxShadow: '0 0 30px rgba(245,158,11,0.25)' }}>
            🌐
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.08)', color: '#f59e0b', padding: '4px 12px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold' }}>
              🎓 Formation Multilingue
            </span>
            <span style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8', padding: '4px 12px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold' }}>
              Édition 2026
            </span>
          </div>

          {/* Title */}
          <h2 style={{ fontSize: '26px', fontWeight: '900', margin: '0 0 10px 0', letterSpacing: '-0.5px', lineHeight: '1.2' }}>
            Bienvenue sur <span style={{ background: 'linear-gradient(to right, #f59e0b, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ndao Hianatra</span>
          </h2>
          <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 24px 0', lineHeight: '1.5' }}>
            Accédez à vos cours interactifs et perfectionnez votre niveau dès aujourd'hui.
          </p>

          {/* Action Button */}
          <button 
            onClick={() => setHasEntered(true)}
            style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#07090e', fontWeight: '900', fontSize: '14px', borderRadius: '14px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 25px rgba(245,158,11,0.35)', marginBottom: '24px', letterSpacing: '0.3px' }}
          >
            Hanomboka izao →
          </button>

          {/* Tanjona sy Fampahafantarana (Mission Statement) */}
          <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '18px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '13px', color: '#f59e0b', fontWeight: 'bold', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
              🎯 Ny Tanjon'ny Application
            </h3>
            <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.5', margin: '0 0 8px 0' }}>
              Natsangana ity sehatra ity mba <b>hanampiana sy hitarihana ireo olona mbola sahirana na mbola tsy mahay mamolaka ny fiteny vahiny</b> ary ny firesahana an-davan'andro.
            </p>
            <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
              Fampianarana mora indrindra, azo ampiharina avy hatrany mba ahafahanao miteny am-pahatokiana.
            </p>
          </div>

        </main>

        <footer style={{ fontSize: '11px', color: '#64748b', zIndex: 10 }}>
          © 2026 Ndao Hianatra Langue. Tous droits réservés.
        </footer>
      </div>
    )
  }

  // --- 2. PEJY ANATINY (REHEFA TAFIDITRA AMIN'NY FIANARANA ZAY VAO MISY MENU, PROFIL SY FANDOAVAM-BOLA) ---
  return (
    <div style={{ backgroundColor: '#07090e', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      
      {/* Header inside course space */}
      <header style={{ maxWidth: '600px', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => setHasEntered(false)}>
          <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
            🌍
          </div>
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Ndao Hianatra</span>
        </div>

        {/* Menu Button (Tsipika Telo) */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
        >
          <span style={{ width: '16px', height: '2px', backgroundColor: '#f59e0b', borderRadius: '2px' }}></span>
          <span style={{ width: '16px', height: '2px', backgroundColor: '#f59e0b', borderRadius: '2px' }}></span>
          <span style={{ width: '16px', height: '2px', backgroundColor: '#f59e0b', borderRadius: '2px' }}></span>
        </button>
      </header>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div style={{ maxWidth: '568px', width: '100%', margin: '10px auto', backgroundColor: '#0f172a', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '16px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px', boxSizing: 'border-box' }}>
          <button onClick={() => { setTab('courses'); setMenuOpen(false); }} style={{ padding: '10px 12px', borderRadius: '8px', textAlign: 'left', backgroundColor: tab === 'courses' ? 'rgba(245,158,11,0.15)' : 'transparent', color: tab === 'courses' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>• Mes Cours (Lesona)</button>
          <button onClick={() => { setTab('premium'); setMenuOpen(false); }} style={{ padding: '10px 12px', borderRadius: '8px', textAlign: 'left', backgroundColor: tab === 'premium' ? 'rgba(245,158,11,0.15)' : 'transparent', color: tab === 'premium' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>• Espace Premium (MVola/Orange)</button>
          <button onClick={() => { setTab('profile'); setMenuOpen(false); }} style={{ padding: '10px 12px', borderRadius: '8px', textAlign: 'left', backgroundColor: tab === 'profile' ? 'rgba(245,158,11,0.15)' : 'transparent', color: tab === 'profile' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>• Mon Profil (Kaonty)</button>
          <button onClick={() => { setTab('contact'); setMenuOpen(false); }} style={{ padding: '10px 12px', borderRadius: '8px', textAlign: 'left', backgroundColor: tab === 'contact' ? 'rgba(245,158,11,0.15)' : 'transparent', color: tab === 'contact' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>• Contact (Fanampiana)</button>
        </div>
      )}

      {/* Main Course Content */}
      <main style={{ maxWidth: '420px', width: '100%', margin: 'auto', padding: '20px 0' }}>
        
        {/* COURSES TAB */}
        {tab === 'courses' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#f59e0b', margin: 0 }}>📚 Ny Lesona Rehetra</h2>
            <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Safidio ny lesona tianao asongadina sy handrosoana.</p>
            
            <div style={{ backgroundColor: '#0f172a', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#fff' }}>Module 1: Fiteny Anglisy sy Firesahana</div>
              <div style={{ fontSize: '11px', color: '#10b981', marginTop: '4px' }}>● Mandeha • 85% Vita</div>
            </div>

            <div style={{ backgroundColor: '#0f172a', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#fff' }}>Module 2: Voambolana Fototra & Grammaire</div>
              <div style={{ fontSize: '11px', color: '#f59e0b', marginTop: '4px' }}>🔒 Mitaky Premium</div>
            </div>
          </div>
        )}

        {/* PREMIUM / PAYMENT TAB */}
        {tab === 'premium' && (
          <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '20px', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#f59e0b', margin: 0 }}>💎 Activation Premium</h3>
            <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Aloavy ny saram-pisoratana anarana handraisana ny lesona rehetra.</p>
            
            <div style={{ backgroundColor: '#020617', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '9px', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>Titulaire MVola / Orange Money</div>
              <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#fff', margin: '2px 0 6px 0' }}>ANDRO FARA NIEZAKA</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '6px 10px', borderRadius: '8px' }}>
                <span style={{ fontFamily: 'monospace', color: '#f59e0b', fontWeight: 'bold', fontSize: '13px' }}>0382969974</span>
                <button onClick={() => handleCopy('0382969974')} style={{ padding: '4px 8px', backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#fcd34d', border: 'none', borderRadius: '6px', fontSize: '10px', cursor: 'pointer' }}>
                  {copied ? 'Copie !' : 'Copier'}
                </button>
              </div>
            </div>

            <div>
              <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '4px' }}>Référence SMS / Porofo</label>
              <input type="text" value={txRef} onChange={(e) => setTxRef(e.target.value)} placeholder="ex: Ref: 123456789" style={{ width: '100%', backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px', color: '#fff', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <button onClick={() => alert('Porofo voaray, miandry validation!')} style={{ width: '100%', padding: '11px', backgroundColor: '#10b981', color: '#07090e', fontWeight: 'bold', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '12px' }}>
              Alefaso ny porofo
            </button>
          </div>
        )}

        {/* PROFILE TAB */}
        {tab === 'profile' && (
          <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#1e293b', border: '1px solid #f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px auto', fontSize: '22px' }}>👤</div>
            <h3 style={{ fontSize: '16px', color: '#fff', margin: '0 0 4px 0' }}>Mpianatra</h3>
            <p style={{ fontSize: '12px', color: '#f59e0b', margin: 0 }}>Statut: Kaonty Tsotra</p>
          </div>
        )}

        {/* CONTACT TAB */}
        {tab === 'contact' && (
          <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '16px', color: '#f59e0b', margin: '0 0 8px 0' }}>📞 Fifandraisana</h3>
            <p style={{ fontSize: '12px', color: '#cbd5e1' }}>Raha misy fanontaniana na olana amin'ny fandoavam-bola dia mifandraisa amin'ny mpanohana.</p>
          </div>
        )}

      </main>

      <footer style={{ textAlign: 'center', fontSize: '11px', color: '#64748b', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
        © 2026 Ndao Hianatra Langue.
      </footer>
    </div>
  )
            }
