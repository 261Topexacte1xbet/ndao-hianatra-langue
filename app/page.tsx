'use client'

import React from 'react'

export default function Home() {
  return (
    <div style={{ backgroundColor: '#07090e', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '20px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', position: 'relative', overflow: 'hidden', boxSizing: 'border-box' }}>
      
      {/* Background Glow */}
      <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '200px', backgroundColor: 'rgba(245, 158, 11, 0.15)', filter: 'blur(100px)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Header / Navigation Bar */}
      <header style={{ maxWidth: '440px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', boxShadow: '0 0 15px rgba(245,158,11,0.4)' }}>
            🌍
          </div>
          <div>
            <h1 style={{ fontSize: '15px', fontWeight: 'bold', margin: 0, color: '#fff' }}>Ndao Hianatra <span style={{ color: '#f59e0b' }}>Langue</span></h1>
            <p style={{ fontSize: '8px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Écosystème d'apprentissage</p>
          </div>
        </div>

        <button onClick={() => alert('Admin portal')} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(245,158,11,0.3)', color: '#f59e0b', padding: '6px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }}>
          👤 Admin
        </button>
      </header>

      {/* Main Hero Card */}
      <main style={{ maxWidth: '420px', width: '100%', textAlign: 'center', margin: 'auto', zIndex: 10, padding: '20px 0' }}>
        
        {/* Glowing Globe */}
        <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #1e293b, #0f172a)', border: '1px solid rgba(245, 158, 11, 0.5)', borderRadius: '24px', margin: '0 auto 20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '38px', boxShadow: '0 0 35px rgba(245,158,11,0.3)' }}>
          🌐
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '18px' }}>
          <span style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.08)', color: '#f59e0b', padding: '5px 14px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold' }}>
            🎓 Formation Multilingue
          </span>
          <span style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8', padding: '5px 14px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold' }}>
            🏆 Édition 2026
          </span>
        </div>

        {/* Hero Title */}
        <h2 style={{ fontSize: '28px', fontWeight: '900', margin: '0 0 10px 0', letterSpacing: '-0.5px', lineHeight: '1.2' }}>
          Bienvenue sur <br />
          <span style={{ background: 'linear-gradient(to right, #f59e0b, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ndao Hianatra</span>
        </h2>
        <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 24px 0', lineHeight: '1.5' }}>
          Accédez à vos cours interactifs et perfectionnez votre niveau dès aujourd'hui.
        </p>

        {/* Action Button */}
        <button 
          onClick={() => window.location.href = '/cours'}
          style={{ width: '100%', padding: '15px', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#07090e', fontWeight: '900', fontSize: '14px', borderRadius: '14px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 25px rgba(245,158,11,0.35)', marginBottom: '24px', letterSpacing: '0.3px' }}
        >
          Hanomboka izao →
        </button>

        {/* Tanjona sy Fampahafantarana */}
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

      <footer style={{ fontSize: '11px', color: '#64748b', zIndex: 10, paddingTop: '10px' }}>
        © 2026 Ndao Hianatra Langue. Tous droits réservés.
      </footer>
    </div>
  )
      }
