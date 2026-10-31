'use client'

import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qkdpts.supabase.co'
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setMessage(error.message)
    } else {
      setSuccess(true)
      setMessage('Tafita ny famoronana kaonty! Jereo ny email-nao na midira anao amin\'izay.')
    }
    setLoading(false)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#070b15', padding: '1rem' }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#0f172a', padding: '2rem', borderRadius: '1rem', border: '1px solid #1e293b', color: 'white', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✨</div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.25rem' }}>Mamorona Kaonty</h1>
        <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem' }}>Manomboka ny fianaranao.</p>

        {message && (
          <div style={{ marginBottom: '1rem', padding: '0.75rem', fontSize: '0.875rem', color: success ? '#10b981' : '#ef4444', backgroundColor: success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', border: `1px solid ${success ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`, borderRadius: '0.5rem' }}>
            {message}
          </div>
        )}

        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
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
                style={{ position: 'absolute', right: '12px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#94a3b8' }}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ marginTop: '0.5rem', width: '100%', backgroundColor: '#f59e0b', color: '#000', padding: '0.75rem', fontWeight: 'bold', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', opacity: loading ? 0.5 : 1 }}
          >
            {loading ? 'Mamorona...' : 'Mamorona Kaonty →'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#94a3b8' }}>
          Efa manana kaonty ve ianao?{' '}
          <a href="/login" style={{ color: '#f59e0b', textDecoration: 'none' }}>
            Se connecter
          </a>
        </p>
      </div>
    </div>
  )
            }
