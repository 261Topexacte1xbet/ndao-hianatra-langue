'use client'

import React, { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [tab, setTab] = useState('home')

  return (
    <div style={{ backgroundColor: '#07090e', color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      
      {/* Header */}
      <header style={{ maxWidth: '600px', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setTab('home')}>
          <div style={{ width: '38px', height: '38px', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
            🌍
          </div>
          <div>
            <h1 style={{ fontSize: '15px', fontWeight: 'bold', margin: 0, color: '#fff' }}>Ndao Hianatra <span style={{ color: '#f59e0b' }}>Langue</span></h1>
            <p style={{ fontSize: '9px', color: '#94a3b8', margin: 0, textTransform: 'uppercase' }}>Écosystème</p>
          </div>
        </div>

        {/* Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
        >
          <span style={{ width: '18px', height: '2px', backgroundColor: '#f59e0b', borderRadius: '2px' }}></span>
          <span style={{ width: '18px', height: '2px', backgroundColor: '#f59e0b', borderRadius: '2px' }}></span>
          <span style={{ width: '18px', height: '2px', backgroundColor: '#f59e0b', borderRadius: '2px' }}></span>
        </button>
      </header>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div style={{ maxWidth: '568px', width: '100%', margin: '10px auto', backgroundColor: '#0f172a', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '16px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px', boxSizing: 'border-box' }}>
          <button onClick={() => { setTab('home'); setMenuOpen(false); }} style={{ padding: '10px 14px', borderRadius: '10px', textAlign: 'left', backgroundColor: tab === 'home' ? 'rgba(245,158,11,0.2)' : 'transparent', color: tab === 'home' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>• Accueil</button>
          <button onClick={() => { setTab('courses'); setMenuOpen(false); }} style={{ padding: '10px 14px', borderRadius: '10px', textAlign: 'left', backgroundColor: tab === 'courses' ? 'rgba(245,158,11,0.2)' : 'transparent', color: tab === 'courses' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>• Mes Cours</button>
          <button onClick={() => { setTab('premium'); setMenuOpen(false); }} style={{ padding: '10px 14px', borderRadius: '10px', textAlign: 'left', backgroundColor: tab === 'premium' ? 'rgba(245,158,11,0.2)' : 'transparent', color: tab === 'premium' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>• Espace Premium (MVola)</button>
          <button onClick={() => { setTab('profile'); setMenuOpen(false); }} style={{ padding: '10px 14px', borderRadius: '10px', textAlign: 'left', backgroundColor: tab === 'profile' ? 'rgba(245,158,11,0.2)' : 'transparent', color: tab === 'profile' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>• Mon Profil</button>
          <button onClick={() => { setTab('contact'); setMenuOpen(false); }} style={{ padding: '10px 14px', borderRadius: '10px', textAlign: 'left', backgroundColor: tab === 'contact' ? 'rgba(245,158,11,0.2)' : 'transparent', color: tab === 'contact' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>• Contact</button>
        </div>
      )}

      {/* Content */}
      <div style={{ maxWidth: '420px', width: '100%', margin: '20px auto', textAlign: 'center', boxSizing: 'border-box' }}>
        {tab === 'home' && (
          <div>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>🌍</div>
            <h2 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '10px' }}>Bienvenue sur Ndao Hianatra</h2>
            <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '20px' }}>Sélectionnez le menu en haut à droite pour naviguer.</p>
            <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p style={{ fontSize: '13px', color: '#f59e0b', fontWeight: 'bold', margin: '0 0 10px 0' }}>Paiement MVola / Orange Money</p>
              <p style={{ fontSize: '12px', color: '#cbd5e1', margin: '0 0 5px 0' }}>Compte: <b>ANDRO FARA NIEZAKA</b></p>
              <p style={{ fontSize: '14px', color: '#f59e0b', fontFamily: 'monospace', fontWeight: 'bold', margin: 0 }}>0382969974</p>
            </div>
          </div>
        )}

        {tab === 'courses' && <h3 style={{ color: '#f59e0b' }}>📚 Mes Cours Interactifs</h3>}
        {tab === 'premium' && <h3 style={{ color: '#f59e0b' }}>💎 Espace Premium Mobile Money</h3>}
        {tab === 'profile' && <h3 style={{ color: '#f59e0b' }}>👤 Mon Profil Étudiant</h3>}
        {tab === 'contact' && <h3 style={{ color: '#f59e0b' }}>📞 Contact & Support</h3>}
      </div>

      <footer style={{ textAlign: 'center', fontSize: '11px', color: '#64748b', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '14px' }}>
        © 2026 Ndao Hianatra Langue. Tous droits réservés.
      </footer>
    </div>
  )
      }
