'use client'

import React from 'react'

export default function Home() {
  return (
    <div style={{
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
      
      {/* Top Header with Admin Badge */}
      <header style={{ maxWidth: '440px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            boxShadow: '0 0 16px rgba(245, 158, 11, 0.4)'
          }}>
            🌍
          </div>
          <div>
            <h1 style={{ fontSize: '15px', fontWeight: '800', margin: 0, color: '#fff' }}>
              Ndao Hianatra <span style={{ color: '#f59e0b' }}>Langue</span>
            </h1>
            <p style={{ fontSize: '8px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', fontWeight: '600' }}>
              Écosystème d'apprentissage
            </p>
          </div>
        </div>

        {/* Admin Button */}
        <button 
          onClick={() => alert('Espace Admin')}
          style={{
            background: 'rgba(30, 41, 59, 0.6)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: '#f59e0b',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: '700',
            cursor: 'pointer'
          }}
        >
          👤 Admin
        </button>
      </header>

      {/* Main Hero Area */}
      <div style={{ maxWidth: '420px', width: '100%', textAlign: 'center', margin: 'auto', padding: '20px 0' }}>
        
        {/* Globe 3D Box */}
        <div style={{
          width: '84px',
          height: '84px',
          background: 'linear-gradient(135deg, #1e293b, #0f172a)',
          border: '1px solid rgba(245, 158, 11, 0.45)',
          borderRadius: '26px',
          margin: '0 auto 24px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '40px',
          boxShadow: '0 0 35px rgba(245, 158, 11, 0.25)'
        }}>
          🌐
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
          <span style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', color: '#f59e0b', padding: '5px 14px', borderRadius: '20px', fontSize: '10px', fontWeight: '700' }}>
            🎓 Formation Multilingue
          </span>
          <span style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', color: '#94a3b8', padding: '5px 14px', borderRadius: '20px', fontSize: '10px', fontWeight: '700' }}>
            🏆 Édition 2026
          </span>
        </div>

        {/* Title */}
        <h2 style={{ fontSize: '28px', fontWeight: '900', margin: '0 0 12px 0', lineHeight: '1.25' }}>
          Bienvenue sur <br />
          <span style={{ background: 'linear-gradient(to right, #f59e0b, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Ndao Hianatra
          </span>
        </h2>
        
        <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 24px 0', lineHeight: '1.6' }}>
          Accédez à vos cours interactifs et perfectionnez votre niveau dès aujourd'hui.
        </p>

        {/* Bokotra Voalohany: Hanomboka izao */}
        <button 
          onClick={() => window.location.href = '/cours'}
          style={{
            width: '100%',
            padding: '15px',
            background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
            color: '#07090e',
            fontWeight: '900',
            fontSize: '14px',
            borderRadius: '14px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(245, 158, 11, 0.35)',
            marginBottom: '12px'
          }}
        >
          Hanomboka izao →
        </button>

        {/* Bokotra Faharoa: S'inscrire (Miverina amin'ilay sary) */}
        <button 
          onClick={() => alert('Fizarana S\'inscrire')}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: 'rgba(30, 41, 59, 0.4)',
            color: '#cbd5e1',
            fontWeight: '700',
            fontSize: '14px',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            marginBottom: '28px'
          }}
        >
          S'inscrire
        </button>

        {/* Tanjona Card */}
        <div style={{
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '22px',
          padding: '20px',
          textAlign: 'left'
        }}>
          <h3 style={{ fontSize: '13px', color: '#f59e0b', fontWeight: '800', margin: '0 0 10px 0' }}>
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

      <footer style={{ fontSize: '11px', color: '#64748b' }}>
        © 2026 Ndao Hianatra Langue. Tous droits réservés.
      </footer>

    </div>
  )
        }
