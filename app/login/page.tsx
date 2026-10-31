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
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setMessage('Diso ny email na teny miafina.')
    } else {
      window.location.href = '/cours'
    }
    setLoading(false)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#070b15', padding: '1rem' }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#0f172a', padding: '2rem', borderRadius: '1rem', border: '1px solid #1e293b', color: 'white', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔐</div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.25rem' }}>Se connecter</h1>
        <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem' }}>Midira ao amin'ny kaontinao.</p>

        {message && (
          <div style={{ marginBottom: '1rem', padding: '0.75rem', fontSize: '0.875rem', color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '0.5rem' }}>
            {message}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#cbd5e1', marginBottom: '0.5rem' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="anarana@example.com"
              required
              style={{ width: '100%', backgroundColor: '#070b15', color: 'white', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #334155', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#cbd5e1', marginBottom: '0.5rem' }}>Teny Miafina</label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{ width: '100%', backgroundColor: '#070b15', color: 'white', padding: '0.75rem 3rem 0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #334155', outline: 'none', boxSizing: 'border-box' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '12px', background: 'none', border: 'none', color: '#f59e0b', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer' }}
              >
                {showPassword ? 'Afino' : 'Jereo'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ marginTop: '0.5rem', width: '100%', backgroundColor: '#f59e0b', color: '#000', padding: '0.75rem', fontWeight: 'bold', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', opacity: loading ? 0.5 : 1 }}
          >
            {loading ? 'Mampiditra...' : 'Midira →'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#94a3b8' }}>
          Tsy manana kaonty?{' '}
          <a href="/register" style={{ color: '#f59e0b', textDecoration: 'none' }}>
            S'inscrire
          </a>
        </p>
      </div>
    </div>
  )
                }
