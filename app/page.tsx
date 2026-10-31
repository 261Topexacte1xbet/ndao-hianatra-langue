'use client'

import React, { useState } from 'react'

export default function Home() {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState('home')

  return (
    <div style={{ backgroundColor: '#07090e', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '16px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '600px', margin: '0 auto', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
        <h1 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>Ndao Hianatra <span style={{ color: '#f59e0b' }}>Langue</span></h1>
        <button onClick={() => setOpen(!open)} style={{ background: '#1e293b', border: '1px solid #334155', color: '#f59e0b', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>≡ Menu</button>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div style={{ maxWidth: '600px', margin: '10px auto', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <button onClick={() => { setPage('home'); setOpen(false); }} style={{ background: 'none', border: 'none', color: '#fff', textAlign: 'left', padding: '8px', cursor: 'pointer', fontWeight: 'bold' }}>• Accueil</button>
          <button onClick={() => { setPage('courses'); setOpen(false); }} style={{ background: 'none', border: 'none', color: '#fff', textAlign: 'left', padding: '8px', cursor: 'pointer', fontWeight: 'bold' }}>• Mes Cours</button>
          <button onClick={() => { setPage('premium'); setOpen(false); }} style={{ background: 'none', border: 'none', color: '#fff', textAlign: 'left', padding: '8px', cursor: 'pointer', fontWeight: 'bold' }}>• Espace Premium (MVola)</button>
          <button onClick={() => { setPage('profile'); setOpen(false); }} style={{ background: 'none', border: 'none', color: '#fff', textAlign: 'left', padding: '8px', cursor: 'pointer', fontWeight: 'bold' }}>• Mon Profil</button>
          <button onClick={() => { setPage('contact'); setOpen(false); }} style={{ background: 'none', border: 'none', color: '#fff', textAlign: 'left', padding: '8px', cursor: 'pointer', fontWeight: 'bold' }}>• Contact</button>
        </div>
      )}

      {/* Content */}
      <div style={{ maxWidth: '400px', margin: '30px auto', textAlign: 'center' }}>
        {page === 'home' && (
          <div>
            <h2 style={{ fontSize: '20px', color: '#f59e0b', marginBottom: '10px' }}>Bienvenue !</h2>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>Safidio ao amin'ny menu ambony ny fizarana tianao jerena.</p>
            <div style={{ backgroundColor: '#0f172a', padding: '15px', borderRadius: '12px', border: '1px solid #1e293b' }}>
              <p style={{ fontSize: '12px', color: '#cbd5e1', margin: '0 0 5px 0' }}>MVola / Orange Money</p>
              <p style={{ fontSize: '13px', color: '#fff', fontWeight: 'bold', margin: '0 0 5px 0' }}>ANDRO FARA NIEZAKA</p>
              <p style={{ fontSize: '14px', color: '#f59e0b', fontFamily: 'monospace', fontWeight: 'bold', margin: 0 }}>0382969974</p>
            </div>
          </div>
        )}
        {page === 'courses' && <h3>📚 Lesona rehetra</h3>}
        {page === 'premium' && <h3>💎 Fandoavam-bola MVola</h3>}
        {page === 'profile' && <h3>👤 Mombamomba anao</h3>}
        {page === 'contact' && <h3>📞 Fifandraisana</h3>}
      </div>

    </div>
  )
      }
