'use client'

import React, { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentView, setCurrentView] = useState<'home' | 'courses' | 'premium' | 'profile' | 'contact'>('home')
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
    <div style={{ backgroundColor: '#07090e', color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
      
      {/* Glow Effects */}
      <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '150px', backgroundColor: 'rgba(245, 158, 11, 0.15)', filter: 'blur(80px)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Header with Hamburger Menu */}
      <header style={{ maxWidth: '600px', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', zIndex: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setCurrentView('home')}>
          <div style={{ width: '38px', height: '38px', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(245,158,11,0.4)', fontSize: '18px' }}>
            🌍
          </div>
          <div>
            <h1 style={{ fontSize: '15px', fontWeight: 'bold', margin: 0, color: '#fff' }}>Ndao Hianatra <span style={{ color: '#f59e0b' }}>Langue</span></h1>
            <p style={{ fontSize: '9px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Écosystème d'apprentissage</p>
          </div>
        </div>

        {/* Hamburger Button (Tsipika Telo) */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
        >
          <span style={{ width: '18px', height: '2px', backgroundColor: '#f59e0b', borderRadius: '2px', transition: '0.3s' }}></span>
          <span style={{ width: '18px', height: '2px', backgroundColor: '#f59e0b', borderRadius: '2px', transition: '0.3s' }}></span>
          <span style={{ width: '18px', height: '2px', backgroundColor: '#f59e0b', borderRadius: '2px', transition: '0.3s' }}></span>
        </button>
      </header>

      {/* Dropdown Menu (Overlay Menu) */}
      {menuOpen && (
        <div style={{ position: 'absolute', top: '70px', right: '16px', left: '16px', maxWidth: '568px', margin: '0 auto', backgroundColor: '#0f172a', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '20px', padding: '16px', zIndex: 30, boxShadow: '0 20px 40px rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button onClick={() => { setCurrentView('home'); setMenuOpen(false); }} style={{ padding: '12px 16px', borderRadius: '12px', textAlign: 'left', backgroundColor: currentView === 'home' ? 'rgba(245,158,11,0.15)' : 'transparent', color: currentView === 'home' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>
              • Accueil
            </button>
            <button onClick={() => { setCurrentView('courses'); setMenuOpen(false); }} style={{ padding: '12px 16px', borderRadius: '12px', textAlign: 'left', backgroundColor: currentView === 'courses' ? 'rgba(245,158,11,0.15)' : 'transparent', color: currentView === 'courses' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
              <span>• Mes Cours</span>
              <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 'normal' }}>Lesona</span>
            </button>
            <button onClick={() => { setCurrentView('premium'); setMenuOpen(false); }} style={{ padding: '12px 16px', borderRadius: '12px', textAlign: 'left', backgroundColor: currentView === 'premium' ? 'rgba(245,158,11,0.15)' : 'transparent', color: currentView === 'premium' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
              <span>• Espace Premium</span>
              <span style={{ fontSize: '11px', color: '#f59e0b', fontWeight: 'normal' }}>MVola / Orange</span>
            </button>
            <button onClick={() => { setCurrentView('profile'); setMenuOpen(false); }} style={{ padding: '12px 16px', borderRadius: '12px', textAlign: 'left', backgroundColor: currentView === 'profile' ? 'rgba(245,158,11,0.15)' : 'transparent', color: currentView === 'profile' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
              <span>• Mon Profil</span>
              <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 'normal' }}>Kaonty</span>
            </button>
            <button onClick={() => { setCurrentView('contact'); setMenuOpen(false); }} style={{ padding: '12px 16px', borderRadius: '12px', textAlign: 'left', backgroundColor: currentView === 'contact' ? 'rgba(245,158,11,0.15)' : 'transparent', color: currentView === 'contact' ? '#f59e0b' : '#fff', border: 'none', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
              <span>• Contact</span>
              <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 'normal' }}>Fanampiana</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div style={{ maxWidth: '420px', width: '100%', margin: '20px auto', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {currentView === 'home' && (
          <>
            <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #1e293b, #0f172a)', border: '1px solid rgba(245, 158, 11, 0.4)', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 25px rgba(245,158,11,0.25)', marginBottom: '16px', fontSize: '28px' }}>
              🌍
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <span style={{ backgroundColor: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255,255,255,0.08)', color: '#f59e0b', padding: '4px 12px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold' }}>
                🎓 Formation Multilingue
              </span>
              <span style={{ backgroundColor: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8', padding: '4px 12px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold' }}>
                Édition 2026
              </span>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '900', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
                Bienvenue sur <span style={{ background: 'linear-gradient(to right, #f59e0b, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ndao Hianatra</span>
              </h2>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>
                Accédez à vos cours interactifs et perfectionnez votre niveau dès aujourd'hui.
              </p>
            </div>

            <div style={{ width: '100%', backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '20px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', backgroundColor: '#020617', padding: '4px', borderRadius: '12px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <button onClick={() => setActiveTab('login')} style={{ padding: '9px', fontSize: '11px', fontWeight: 'bold', borderRadius: '9px', border: 'none', backgroundColor: activeTab === 'login' ? '#f59e0b' : 'transparent', color: activeTab === 'login' ? '#07090e' : '#94a3b8', cursor: 'pointer', transition: 'all 0.2s' }}>
                  Connexion
                </button>
                <button onClick={() => setActiveTab('register')} style={{ padding: '9px', fontSize: '11px', fontWeight: 'bold', borderRadius: '9px', border: 'none', backgroundColor: activeTab === 'register' ? '#f59e0b' : 'transparent', color: activeTab === 'register' ? '#07090e' : '#94a3b8', cursor: 'pointer', transition: 'all 0.2s' }}>
                  S'inscrire
                </button>
              </div>

              {activeTab === 'login' && (
                <form onSubmit={(e) => { e.preventDefault(); setActiveTab('payment'); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>Adresse email</label>
                    <input type="email" required placeholder="ex: nom@email.com" style={{ width: '100%', backgroundColor: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px 12px', color: '#fff', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>Mot de passe</label>
                    <input type="password" required placeholder="••••••••" style={{ width: '100%', backgroundColor: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px 12px', color: '#fff', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <button type="submit" style={{ width: '100%', padding: '11px', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#07090e', fontWeight: 'bold', borderRadius: '10px', border: 'none', cursor: 'pointer', marginTop: '4px', fontSize: '12px', boxShadow: '0 4px 12px rgba(245,158,11,0.3)' }}>
                    Se Connecter →
                  </button>
                </form>
              )}

              {activeTab === 'register' && (
                <form onSubmit={(e) => { e.preventDefault(); setActiveTab('payment'); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>Nom complet</label>
                    <input type="text" required placeholder="Votre nom" style={{ width: '100%', backgroundColor: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px 12px', color: '#fff', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>Adresse email</label>
                    <input type="email" required placeholder="nom@email.com" style={{ width: '100%', backgroundColor: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px 12px', color: '#fff', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>Mot de passe</label>
                    <input type="password" required placeholder="Minimum 6 caractères" style={{ width: '100%', backgroundColor: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px 12px', color: '#fff', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <button type="submit" style={{ width: '100%', padding: '11px', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#07090e', fontWeight: 'bold', borderRadius: '10px', border: 'none', cursor: 'pointer', marginTop: '4px', fontSize: '12px', boxShadow: '0 4px 12px rgba(245,158,11,0.3)' }}>
                    Créer mon compte →
                  </button>
                </form>
              )}

              {activeTab === 'payment' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#f59e0b', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                    💳 Activation Premium / Mobile Money
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <button onClick={() => setPaymentMethod('mvola')} style={{ padding: '9px', borderRadius: '10px', border: paymentMethod === 'mvola' ? '1px solid #f59e0b' : '1px solid rgba(255,255,255,0.08)', backgroundColor: paymentMethod === 'mvola' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(2, 6, 23, 0.6)', color: paymentMethod === 'mvola' ? '#f59e0b' : '#94a3b8', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }}>
                      MVola
                    </button>
                    <button onClick={() => setPaymentMethod('orange')} style={{ padding: '9px', borderRadius: '10px', border: paymentMethod === 'orange' ? '1px solid #ea580c' : '1px solid rgba(255,255,255,0.08)', backgroundColor: paymentMethod === 'orange' ? 'rgba(234, 88, 12, 0.1)' : 'rgba(2, 6, 23, 0.6)', color: paymentMethod === 'orange' ? '#fb923c' : '#94a3b8', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }}>
                      Orange Money
                    </button>
                  </div>

                  <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.7)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '9px', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Titulaire du compte</div>
                    <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#fff', margin: '3px 0 8px 0' }}>ANDRO FARA NIEZAKA</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '8px 10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ fontFamily: 'monospace', color: '#f59e0b', fontWeight: 'bold', fontSize: '13px' }}>0382969974</span>
                      <button onClick={() => handleCopy('0382969974')} style={{ padding: '4px 10px', backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#fcd34d', border: 'none', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
                        {copied ? 'Copie !' : 'Copier'}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '11px', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '5px' }}>Référence / Solde SMS de confirmation</label>
                    <input type="text" value={txRef} onChange={(e) => setTxRef(e.target.value)} placeholder="ex: Ref: 123456789" style={{ width: '100%', backgroundColor: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px 12px', color: '#fff', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>

                  <button onClick={() => alert("Merci ! Votre demande a été transmise.")} style={{ width: '100%', padding: '11px', backgroundColor: '#10b981', color: '#07090e', fontWeight: 'bold', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '12px', boxShadow: '0 4px 12px rgba(16,185,129,0.3)' }}>
                    Envoyer la preuve de paiement
                  </button>
                </div>
              )}

            </div>
          </>
        )}

        {currentView === 'courses' && (
          <div style={{ width: '100%', backgroundColor: 'rgba(15, 23, 42, 0.8)', padding: '24px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>📚 Mes Cours</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>Ireto avy ny lesona rehetra natokana ho anao ao amin'ny Ndao Hianatra.</p>
            <div style={{ backgroundColor: '#020617', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '12px', textAlign: 'left' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#fff' }}>Module 1: Fiteny Malagasy & Anglisy</div>
              <div style={{ fontSize: '11px', color: '#10b981', marginTop: '4px' }}>Mandeha tsara • 85% vita</div>
            </div>
            <button onClick={() => setCurrentView('home')} style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#f59e0b', color: '#07090e', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' }}>
              Hiverina an-tsaha (Accueil)
            </button>
          </div>
        )}

        {currentView === 'premium' && (
          <div style={{ width: '100%', backgroundColor: 'rgba(15, 23, 42, 0.8)', padding: '24px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>💎 Espace Premium</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>Aloavy ny saram-pisoratana amin'ny MVola na Orange Money mba hahazoana ny fidirana feno.</p>
            <button onClick={() => setCurrentView('home')} style={{ padding: '10px 20px', backgroundColor: '#f59e0b', color: '#07090e', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' }}>
              Hanao Paimanta izao
            </button>
          </div>
        )}

        {currentView === 'profile' && (
          <div style={{ width: '100%', backgroundColor: 'rgba(15, 23, 42, 0.8)', padding: '24px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
            <h3 style={{ color: '#f59e0b', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>👤 Mon Profil</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '15px' }}>Anarana: <b>Mpianatra</b></p>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>Statut: <span style={{ color: '#f59e0b' }}>Mbola miandry Validation</span></p>
            <button onClick={() => setCurrentVie
