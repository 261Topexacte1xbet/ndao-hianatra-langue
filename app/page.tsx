'use client'

import React, { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'payment'>('login')
  const [paymentMethod, setPaymentMethod] = useState<'mvola' | 'orange'>('mvola')
  const [copied, setCopied] = useState(false)
  const [txRef, setTxRef] = useState('')

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ backgroundColor: '#07090e', color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      
      {/* Header */}
      <header style={{ maxWidth: '800px', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: '#f59e0b', color: '#07090e', padding: '8px 12px', borderRadius: '10px', fontWeight: 'bold' }}>🌐</div>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>Ndao Hianatra <span style={{ color: '#f59e0b' }}>Langue</span></h1>
            <p style={{ fontSize: '10px', color: '#94a3b8', margin: 0, textTransform: 'uppercase' }}>Écosystème d'apprentissage</p>
          </div>
        </div>
        <a href="/admin" style={{ fontSize: '12px', padding: '6px 14px', borderRadius: '20px', backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#fcd34d', textDecoration: 'none' }}>
          Espace Admin
        </a>
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: '420px', width: '100%', margin: '30px auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <span style={{ backgroundColor: '#1e293b', color: '#f59e0b', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' }}>✨ Formation Multilingue 2026</span>
          <h2 style={{ fontSize: '26px', fontWeight: '900', marginTop: '15px', marginBottom: '8px' }}>Bienvenue sur Ndao Hianatra</h2>
          <p style={{ fontSize: '13px', color: '#94a3b8' }}>Accédez à vos cours interactifs et perfectionnez votre niveau dès aujourd'hui.</p>
        </div>

        {/* Card Box */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '24px', padding: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
          
          {/* Tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', backgroundColor: '#020617', padding: '4px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #1e293b' }}>
            <button onClick={() => setActiveTab('login')} style={{ padding: '10px', fontSize: '12px', fontWeight: 'bold', borderRadius: '8px', border: 'none', backgroundColor: activeTab === 'login' ? '#f59e0b' : 'transparent', color: activeTab === 'login' ? '#07090e' : '#94a3b8', cursor: 'pointer' }}>
              Connexion
            </button>
            <button onClick={() => setActiveTab('register')} style={{ padding: '10px', fontSize: '12px', fontWeight: 'bold', borderRadius: '8px', border: 'none', backgroundColor: activeTab === 'register' ? '#f59e0b' : 'transparent', color: activeTab === 'register' ? '#07090e' : '#94a3b8', cursor: 'pointer' }}>
              S'inscrire
            </button>
          </div>

          {/* Login Form */}
          {activeTab === 'login' && (
            <form onSubmit={(e) => { e.preventDefault(); setActiveTab('payment'); }} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ fontSize: '12px', color: '#cbd5e1', display: 'block', marginBottom: '6px' }}>Adresse email</label>
                <input type="email" required placeholder="ex: nom@email.com" style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px', outline: 'none' }} />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: '#cbd5e1', display: 'block', marginBottom: '6px' }}>Mot de passe</label>
                <input type="password" required placeholder="••••••••" style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px', outline: 'none' }} />
              </div>
              <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#f59e0b', color: '#07090e', fontWeight: 'bold', borderRadius: '10px', border: 'none', cursor: 'pointer', marginTop: '5px' }}>
                Se Connecter →
              </button>
            </form>
          )}

          {/* Register Form */}
          {activeTab === 'register' && (
            <form onSubmit={(e) => { e.preventDefault(); setActiveTab('payment'); }} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ fontSize: '12px', color: '#cbd5e1', display: 'block', marginBottom: '6px' }}>Nom complet</label>
                <input type="text" required placeholder="Votre nom" style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px', outline: 'none' }} />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: '#cbd5e1', display: 'block', marginBottom: '6px' }}>Adresse email</label>
                <input type="email" required placeholder="nom@email.com" style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px', outline: 'none' }} />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: '#cbd5e1', display: 'block', marginBottom: '6px' }}>Mot de passe</label>
                <input type="password" required placeholder="Minimum 6 caractères" style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px', outline: 'none' }} />
              </div>
              <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#f59e0b', color: '#07090e', fontWeight: 'bold', borderRadius: '10px', border: 'none', cursor: 'pointer', marginTop: '5px' }}>
                Créer mon compte →
              </button>
            </form>
          )}

          {/* Payment Section */}
          {activeTab === 'payment' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#f59e0b', borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}>
                💳 Activation Premium / Mobile Money
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <button onClick={() => setPaymentMethod('mvola')} style={{ padding: '10px', borderRadius: '10px', border: paymentMethod === 'mvola' ? '1px solid #f59e0b' : '1px solid #1e293b', backgroundColor: paymentMethod === 'mvola' ? 'rgba(245, 158, 11, 0.1)' : '#020617', color: paymentMethod === 'mvola' ? '#f59e0b' : '#94a3b8', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
                  MVola
                </button>
                <button onClick={() => setPaymentMethod('orange')} style={{ padding: '10px', borderRadius: '10px', border: paymentMethod === 'orange' ? '1px solid #ea580c' : '1px solid #1e293b', backgroundColor: paymentMethod === 'orange' ? 'rgba(234, 88, 12, 0.1)' : '#020617', color: paymentMethod === 'orange' ? '#fb923c' : '#94a3b8', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
                  Orange Money
                </button>
              </div>

              <div style={{ backgroundColor: '#020617', padding: '14px', borderRadius: '14px', border: '1px solid #1e293b' }}>
                <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>Titulaire du compte</div>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#fff', margin: '4px 0 10px 0' }}>ANDRO FARA NIEZAKA</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '8px 12px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                  <span style={{ fontFamily: 'monospace', color: '#f59e0b', fontWeight: 'bold' }}>0382969974</span>
                  <button onClick={() => handleCopy('0382969974')} style={{ padding: '4px 10px', backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#fcd34d', border: 'none', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>
                    {copied ? 'Copie !' : 'Copier'}
                  </button>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#cbd5e1', display: 'block', marginBottom: '6px' }}>Référence / Solde SMS de confirmation</label>
                <input type="text" value={txRef} onChange={(e) => setTxRef(e.target.value)} placeholder="ex: Ref: 123456789" style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px', outline: 'none' }} />
              </div>

              <button onClick={() => alert("Merci ! Votre demande a été transmise.")} style={{ width: '100%', padding: '12px', backgroundColor: '#10b981', color: '#07090e', fontWeight: 'bold', borderRadius: '10px', border: 'none', cursor: 'pointer' }}>
                Envoyer la preuve de paiement
              </button>
            </div>
          )}

        </div>

      </div>

      <footer style={{ textAlign: 'center', fontSize: '12px', color: '#64748b', borderTop: '1px solid #1e293b', paddingTop: '15px' }}>
        © 2026 Ndao Hianatra Langue. Tous droits réservés.
      </footer>
    </div>
  )
                      }
