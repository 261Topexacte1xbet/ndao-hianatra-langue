'use client'

import React from 'react'

export default function Home() {
  return (
    <main style={{
      backgroundColor: '#07090e',
      color: '#ffffff',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box'
    }}>
      
      {/* Top Header */}
      <header style={{ maxWidth: '440px', width: '100%', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)'
        }}>
          🌍
        </div>
        <div>
          <h1 style={{ fontSize: '16px', fontWeight: '900', margin: 0, letterSpacing: '-0.3px' }}>
            Ndao Hianatra <span style={{ color: '#f59e0b' }}>Langue</span>
          </h1>
          <p style={{ fontSize: '9px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: '700' }}>
            Écosystème d'apprentissage 2026
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <div style={{ maxWidth: '420px', width: '100%', textAlign: 'center', margin: 'auto', padding: '20px 0' }}>
        
        {/* Globe 3D Box */}
        <div style={{
          width: '90px',
          height: '90px',
          background: 'linear-gradient(135deg, #1e293b, #0f172a)',
          border: '1px solid rgba(245, 158, 11, 0.5)',
          borderRadius: '28px',
          margin: '0 auto 24px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '44px',
          boxShadow: '0 0 40px rgba(245, 158, 11, 0.3), inset 0 0 20px rgba(245, 158, 11, 0.1)'
        }}>
          🌐
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
          <span style={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: '1px solid rgba(255,255,255,0.08)', color: '#f59e0b', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: '800' }}>
            🎓 Formation Multilingue
          </span>
          <span style={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8', padding: '6px 14px', borderRadius: '20px', fontSize: '11px', fontWeight: '800' }}>
            🏆 Édition 2026
          </span>
        </div>

        {/* Title */}
        <h2 style={{ fontSize: '30px', fontWeight: '900', margin: '0 0 12px 0', lineHeight: '1.2', letterSpacing: '-0.5px' }}>
          Bienvenue sur <br />
          <span style={{ background: 'linear-gradient(to right, #f59e0b, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Ndao Hianatra
          </span>
        </h2>
        
        <p style={{ fontSize: '14px', color: '#94a3b8', margin: '0 0 28px 0', lineHeight: '1.6' }}>
          Accédez à vos cours interactifs et perfectionnez votre niveau dès aujourd'hui.
        </p>

        {/* Action Button */}
        <button 
          onClick={() => window.location.href = '/cours'}
          style={{
            width: '100%',
            padding: '16px',
            background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
            color: '#07090e',
            fontWeight: '900',
            fontSize: '15px',
            borderRadius: '16px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)',
            marginBottom: '28px',
            letterSpacing: '0.3px'
          }}
        >
          Hanomboka izao →
        </button>

        {/* Mission Box */}
        <div style={{
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '24px',
          padding: '22px',
          textAlign: 'left',
          boxShadow: '0 15px 30px rgba(0,0,0,0.5)'
        }}>
          <h3 style={{ fontSize: '14px', color: '#f59e0b', fontWeight: '900', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🎯 Ny Tanjon'ny Application
          </h3>
          <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 10px 0' }}>
            Natsangana ity sehatra ity mba <b>hanampiana sy hitarihana ireo olona mbola sahirana na mbola tsy mahay mamolaka ny fiteny vahiny</b> ary ny firesahana an-davan'andro.
          </p>
          <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
            Fampianarana mora indrindra, azo ampiharina avy hatrany mba ahafahanao miteny am-pahatokiana.
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer style={{ fontSize: '11px', color: '#64748b', textAlign: 'center' }}>
        © 2026 Ndao Hianatra Langue. Tous droits réservés.
      </footer>

    </main>
  )
      }
