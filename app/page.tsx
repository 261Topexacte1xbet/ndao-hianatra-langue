'use client'

import React from 'react'

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#070b15', color: 'white', padding: '1rem', textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.5rem' }}>
        Ndao Hianatra Langue
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: '400px' }}>
        Tsé tsara ny manomboka mianatra fiteny vaovao androany. Midira na mamorona kaonty mba hanombohana.
      </p>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <a
          href="/login"
          style={{ backgroundColor: '#f59e0b', color: '#000', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none' }}
        >
          Se connecter
        </a>
        <a
          href="/register"
          style={{ backgroundColor: '#1e293b', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', border: '1px solid #334155', textDecoration: 'none' }}
        >
          S'inscrire
        </a>
      </div>
    </div>
  )
}
