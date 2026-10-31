'use client'

import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setMessage('Diso ny email na teny miafina.')
    } else {
      window.location.href = '/cours'
    }
    setLoading(false)
  }

  return (
    <div style={{ backgroundColor: '#07090e', color: '#fff', minHeight: '100vh', padding: '24px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '400px', width: '100%', backgroundColor: '#0f172a', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '22px', padding: '24px', boxShadow: '0 15px 30px rgba(0,0,0,0.5)' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>🔐</div>
          <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#f59e0b', margin: 0 }}>Se connecter</h2>
          <p style={{ fontSize: '12px', color: '#94a3b8', margin: '6px 0 0 0' }}>Midira ao amin'ny kaontinao.</p>
        </div>

        {message && (
          <div style={{ padding: '10px', backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', borderRadius: '10px', fontSize: '12px', color: '#fca5a5', marginBottom: '14px', textAlign: 'center' }}>
            {message}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="anarana@example.com" style={{ width: '100%', backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px', color: '#fff', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '11px', color: '#cbd5e1', display: 'block', marginBottom: '6px', fontWeight: '600' }}>Teny Miafina</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" style={{ width: '100%', backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px', color: '#fff', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#07090e', fontWeight: '900', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '14px', marginTop: '6px' }}>
            {loading ? 'Midirana...' : 'Midira →'}
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: '#94a3b8' }}>
          Tsy manana kaonty? <a href="/register" style={{ color: '#f59e0b', fontWeight: 'bold', textDecoration: 'none' }}>S'inscrire</a>
        </div>
      </div>
    </div>
  )
}
