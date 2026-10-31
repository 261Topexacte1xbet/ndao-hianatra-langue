'use client'

import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Eye, EyeOff } from 'lucide-react'

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
    <div className="flex min-h-screen items-center justify-center bg-[#070b15] px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#0f172a] p-8 shadow-xl border border-gray-800 text-white text-center">
        <div className="mb-4 text-4xl">🔐</div>
        <h1 className="text-2xl font-bold text-amber-500 mb-1">Se connecter</h1>
        <p className="text-sm text-gray-400 mb-6">Midira ao amin'ny kaontinao.</p>

        {message && (
          <div className="mb-4 rounded bg-red-500/10 p-3 text-sm text-red-500 border border-red-500/20">
            {message}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4 text-left">
          <div>
            <label className="mb-2 block text-xs text-gray-300 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="anarana@example.com"
              required
              className="w-full rounded-lg bg-[#070b15] px-4 py-3 text-white border border-gray-800 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs text-gray-300 font-medium">Teny Miafina</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-lg bg-[#070b15] px-4 py-3 pr-10 text-white border border-gray-800 focus:border-amber-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-400 hover:text-white focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-lg bg-amber-500 py-3 font-bold text-black transition hover:bg-amber-400 disabled:opacity-50"
          >
            {loading ? 'Mampiditra...' : 'Midira →'}
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400">
          Tsy manana kaonty?{' '}
          <a href="/register" className="text-amber-500 hover:underline">
            S'inscrire
          </a>
        </p>
      </div>
    </div>
  )
}
