'use client'

import React, { useState } from 'react'

export default function Home() {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState('home')

  return (
    <div style={{ backgroundColor: '#07090e', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '600px', width: '100%', margin: '0 auto', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h1 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>Ndao Hianatra <span style={{ color: '#f59e0b' }}>Langue</span></h1>
        <button onClick={() => setOpen(!open)} style={{ background: '#1e293b', border: '1px solid #334155', color: '#f59e0b', padding: '8px 14px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>≡ Menu</button>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div style={{ maxWidth: '600px', width: '100%', margin: '10px auto', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px', boxSizing: 'border-box' }}>
          <button onClick={() => { setPage('home'); setOpen(false); }} style={{ background: page === 'home' ? 'rgba(245,158,11,0.15)' : 'none', border: 'none', color: page === 'home' ? '#f59e0b' : '#fff', textAlign: 'left', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>• Accueil</button>
          <button onClick={() => { setPage('courses'); setOpen(false); }} style={{ background: page === 'courses' ? 'rgba(245,158,11,0.15)' : 'none', border: 'none', color: page === 'courses' ? '#f59e0b' : '#fff', textAlign: 'left', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>• Mes Cours</button>
          <button onClick={() => { setPage('premium'); setOpen(false); }} style={{ background: page === 'premium' ? 'rgba(245,158,11,0.15)' : 'none', border: 'none', color: page === 'premium' ? '#f59e0b' : '#fff', textAlign: 'left', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>• Espace Premium (MVola)</button>
          <button onClick={() => { setPage('profile'); setOpen(false); }} style={{ background: page === 'profile' ? 'rgba(245,158,11,0.15)' : 'none', border: 'none', color: page === 'profile' ? '#f59e0b' : '#fff', textAlign: 'left', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>• Mon Profil</button>
          <button onClick={() => { setPage('contact'); setOpen(false); }} style={{ background: page === 'contact' ? 'rgba(245,158,11,0.15)' : 'none', border: 'none', color: page === 'contact' ? '#f59e0b' : '#fff', textAlign: 'left', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>• Contact</button>
        </div>
      )}

      {/* Content */}
      <div style={{ maxWidth: '420px', width: '100%', margin: 'auto', textAlign: 'center', padding: '20px 0' }}>
        {page === 'home' && (
          <div>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎓</div>
            <h2 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '8px', color: '#fff' }}>Bienvenue sur Ndao Hianatra</h2>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '24px', lineHeight: '1.4' }}>Tsindrio ilay bokotra Menu any an-tampony hahita ny lesona sy fizarana rehetra.</p>
            
            <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '20px', border: '1px solid #1e293b', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
              <p style={{ fontSize: '11px', color: '#f59e0b', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px' }}>💳 Fandoavam-bola MVola / Orange</p>
              <p style={{ fontSize: '12px', color: '#cbd5e1', margin: '0 0 4px 0' }}>Kaonty: <b>ANDRO FARA NIEZAKA</b></p>
              <p style={{ fontSize: '16px', color: '#f59e0b', fontFamily: 'monospace', fontWeight: 'bold', margin: '8px 0 0 0' }}>0382969974</p>
            </div>
          </div>
        )}

        {page === 'courses' && (
          <div style={{ backgroundColor: '#0f172a', padding: '24px', borderRadius: '20px', border: '1px solid #1e293b' }}>
            <h3 style={{ color: '#f59e0b', margin: '0 0 10px 0' }}>📚 Mes Cours Interactifs</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Manomboka eto ny fianarana teny malagasy sy anglisy.</p>
          </div>
        )}

        {page === 'premium' && (
          <div style={{ backgroundColor: '#0f172a', padding: '24px', borderRadius: '20px', border: '1px solid #1e293b' }}>
            <h3 style={{ color: '#f59e0b', margin: '0 0 10px 0' }}>💎 Espace Premium</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Alefaso ny saram-pisoratana amin'ny MVola dia alefaso ny reference SMS.</p>
          </div>
        )}

        {page === 'profile' && (
          <div style={{ backgroundColor: '#0f172a', padding: '24px', borderRadius: '20px', border: '1px solid #1e293b' }}>
            <h3 style={{ color: '#f59e0b', margin: '0 0 10px 0' }}>👤 Mon Profil</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Mombamomba ny kaontinao mpianatra.</p>
          </div>
        )}

        {page === 'contact' && (
          <div style={{ backgroundColor: '#0f172a', padding: '24px', borderRadius: '20px', border: '1px solid #1e293b' }}>
            <h3 style={{ color: '#f59e0b', margin: '0 0 10px 0' }}>📞 Contact</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Mifandraisa aminay raha misy fanontaniana.</p>
          </div>
        )}
      </div>

      <footer style={{ textAlign: 'center', fontSize: '11px', color: '#64748b', borderTop: '1px solid #1e293b', paddingTop: '14px' }}>
        © 2026 Ndao Hianatra Langue. Tous droits réservés.
      </footer>
    </div>
  )
          }
