'use client'

import React from 'react'

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#07090e',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      
      {/* Visual Background Glow Effect */}
      <div style={{
        position: 'absolute',
        top: '2%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '320px',
        height: '220px',
        backgroundColor: 'rgba(245, 158, 11, 0.15)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      {/* Header / Navigation Bar (Tsy misy Admin intsony) */}
      <header style={{
        maxWidth: '440px',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        zIndex: 10
      }}>
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
            <h1 style={{ fontSize: '15px', fontWeight: '800', margin: 0, color: '#fff', letterSpacing: '-0.3px' }}>
              Ndao Hianatra <span style={{ color: '#f59e0b' }}>Langue</span>
            </h1>
            <p style={{ fontSize: '8px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: '600' }}>
              Écosystème d'apprentissage
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section Card */}
      <main style={{
        maxWidth: '420px',
        width: '100%',
        textAlign: 'center',
        margin: 'auto',
        zIndex: 10,
        padding: '24px 0'
      }}>
        
        {/* Globe 3D Box Style */}
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
          boxShadow: '0 0 35px rgba(245, 158, 11, 0.25), inset 0 0 15px rgba(245, 158, 11, 0.1)'
        }}>
          🌐
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
          <span style={{
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#f59e0b',
            padding: '5px 14px',
            borderRadius: '20px',
            fontSize: '10px',
            fontWeight: '700'
          }}>
            🎓 Formation Multilingue
          </span>
          <span style={{
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#94a3b8',
            padding: '5px 14px',
            borderRadius: '20px',
            fontSize: '10px',
            fontWeight: '700'
          }}>
            🏆 Édition 2026
          </span>
        </div>

        {/* Title & Description */}
        <h2 style={{
          fontSize: '28px',
          fontWeight: '900',
          margin: '0 0 12px 0',
          letterSpacing: '-0.5px',
          lineHeight: '1.25'
        }}>
          Bienvenue sur <br />
          <span style={{
            background: 'linear-gradient(to right, #f59e0b, #fb923c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Ndao Hianatra
          </span>
        </h2>
        
        <p style={{
          fontSize: '13px',
          color: '#94a3b8',
          margin: '0 0 28px 0',
          lineHeight: '1.6',
          padding: '0 10px'
        }}>
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
            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.35)',
            marginBottom: '28px',
            letterSpacing: '0.3px',
            transition: 'transform 0.2s ease'
          }}
        >
          Hanomboka izao →
        </button>

        {/* Tanjona sy Fampahafantarana (Mission Card) */}
        <div style={{
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '22px',
          padding: '20px',
          textAlign: 'left',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)'
        }}>
          <h3 style={{
            fontSize: '13px',
            color: '#f59e0b',
            fontWeight: '800',
            margin: '0 0 10px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            🎯 Ny Tanjon'ny Application
          </h3>
          <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 10px 0' }}>
            Natsangana ity sehatra ity mba <b>hanampiana sy hitarihana ireo olona mbola sahirana na mbola tsy mahay mamolaka ny fiteny vahiny</b> ary ny firesahana andavan'andro.
          </p>
          <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
            Fampianarana mora indrindra, azo ampiharina avy hatrany mba ahafahanao miteny am-pahatokiana.
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer style={{ fontSize: '11px', color: '#64748b', zIndex: 10, paddingTop: '10px' }}>
        © 2026 Ndao Hianatra Langue. Tous droits réservés.
      </footer>
    </div>
  )
      }
