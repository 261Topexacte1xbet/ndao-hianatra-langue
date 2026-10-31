'use client'

import React, { useState } from 'react'
import { 
  Globe, 
  Lock, 
  Mail, 
  CreditCard, 
  BookOpen, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react'

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
    <main className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between p-4 md:p-8 relative overflow-hidden font-sans">
      
      {/* Background Glow FX */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Header / Navbar */}
      <header className="max-w-5xl w-full mx-auto flex justify-between items-center py-4 border-b border-slate-800/80 z-10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl text-slate-950 font-bold shadow-lg shadow-amber-500/20">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
              Ndao Hianatra <span className="text-amber-400">Langue</span>
            </h1>
            <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Écosystème d'apprentissage</p>
          </div>
        </div>

        <button 
          onClick={() => alert("Rohy ho an'ny Admin: /admin")}
          className="text-xs font-semibold px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 transition-all"
        >
          Espace Admin
        </button>
      </header>

      {/* Main Content */}
      <div className="max-w-md w-full mx-auto my-8 z-10">
        
        {/* Banner Tag */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 text-[11px] font-medium text-amber-400 flex items-center gap-1.5 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" /> Formation Multilingue 2026
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-white tracking-tight">
            Bienvenue sur <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Ndao Hianatra</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Accédez à vos cours interactifs et perfectionnez votre niveau dès aujourd'hui.
          </p>
        </div>

        {/* Card Form container (Glassmorphism) */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl shadow-black/50">
          
          {/* Tabs Navigation */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-slate-950/80 rounded-xl border border-slate-800 mb-6">
            <button
              onClick={() => setActiveTab('login')}
              className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'login' 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Connexion
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'register' 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              S'inscrire
            </button>
          </div>

          {/* LOGIN FORM */}
          {activeTab === 'login' && (
            <form onSubmit={(e) => { e.preventDefault(); setActiveTab('payment'); }} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Adresse email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input 
                    type="email" 
                    required 
                    placeholder="ex: nom@email.com"
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Mot de passe</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input 
                    type="password" 
                    required 
                    placeholder="••••••••"
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                Se Connecter <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* REGISTER FORM */}
          {activeTab === 'register' && (
            <form onSubmit={(e) => { e.preventDefault(); setActiveTab('payment'); }} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Nom complet</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Votre nom"
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Adresse email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="nom@email.com"
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Mot de passe</label>
                <input 
                  type="password" 
                  required 
                  placeholder="Minimum 6 caractères"
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>

              <button 
                type="submit"
                className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                Créer mon compte <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* PAYMENT SECTION */}
          {activeTab === 'payment' && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider border-b border-slate-800 pb-3">
                <CreditCard className="w-4 h-4" /> Activation Premium / Mobile Money
              </div>

              {/* Toggle Payment Mode */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setPaymentMethod('mvola')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                    paymentMethod === 'mvola'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                      : 'bg-slate-950/40 border-slate-800 text-slate-400'
                  }`}
                >
                  MVola
                </button>
                <button
                  onClick={() => setPaymentMethod('orange')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                    paymentMethod === 'orange'
                      ? 'bg-orange-500/10 border-orange-500 text-orange-400'
                      : 'bg-slate-950/40 border-slate-800 text-slate-400'
                  }`}
                >
                  Orange Money
                </button>
              </div>

              {/* Beneficiary Info */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800/80 space-y-3">
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Titulaire du compte</div>
                <div className="text-sm font-bold text-white">ANDRO FARA NIEZAKA</div>
                
                <div className="flex items-center justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-sm font-mono text-amber-400 font-bold">0382969974</span>
                  <button 
                    onClick={() => handleCopy('0382969974')}
                    className="px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copie !' : 'Copier'}
                  </button>
                </div>
              </div>

              {/* Transaction Ref Input */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Référence / Solde SMS de confirmation</label>
                <input 
                  type="text" 
                  value={txRef}
                  onChange={(e) => setTxRef(e.target.value)}
                  placeholder="ex: Ref: 123456789"
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>

              <button 
                onClick={() => alert("Merci ! Votre demande d'activation a été transmise à l'administrateur.")}
                className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" /> Envoyer la preuve de paiement
              </button>
            </div>
          )}

        </div>

        {/* Features Bullet Points */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-xs text-slate-400">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>Cours interactifs en direct & enregistrés</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>Suivi personnalisé de votre progression</span>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-600 py-4 border-t border-slate-800/40 z-10">
        © 2026 Ndao Hianatra Langue. Tous droits réservés.
      </footer>
    </main>
  )
               }
