"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(activeTab, email, password);
  };

  return (
    <main className="min-h-screen bg-[#0a0d14] text-white flex flex-col justify-between p-4 sm:p-6 relative overflow-hidden font-sans">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-5xl mx-auto flex justify-between items-center z-10 py-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-wide text-amber-500">
              Ndao Hianatra Langue
            </h1>
            <p className="text-[10px] text-gray-400 tracking-wider uppercase">
              Écosystème d'apprentissage
            </p>
          </div>
        </div>

        {/* Bouton Espace Admin */}
        <Link
          href="/admin"
          className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium hover:bg-amber-500/20 transition-all flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          Espace Admin
        </Link>
      </header>

      {/* Hero Section & Formulaire */}
      <section className="w-full max-w-md mx-auto my-auto z-10 flex flex-col items-center text-center py-6">
        {/* Logo central & Badges */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-amber-500/20 to-amber-950/40 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-[0_0_25px_rgba(245,158,11,0.25)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Formation Multilingue
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-800/80 border border-gray-700 text-gray-300 text-xs">
            Édition 2026
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight">
          Bienvenue sur <span className="text-amber-500">Ndao Hianatra</span>
        </h2>
        <p className="text-xs text-gray-400 mb-6 leading-relaxed max-w-sm">
          Accédez à vos cours interactifs et perfectionnez votre niveau dès aujourd'hui.
        </p>

        {/* Boîte de formulaire */}
        <div className="w-full bg-[#111622]/90 border border-gray-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
          {/* Tabs: Connexion / S'inscrire */}
          <div className="grid grid-cols-2 bg-[#0a0d14] p-1 rounded-xl mb-6 border border-gray-800/80">
            <button
              onClick={() => setActiveTab("login")}
              className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "login"
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/30 shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Connexion
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "register"
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/30 shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              S'inscrire
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-[11px] text-gray-400 mb-1 font-medium">
                Adresse e-mail
              </label>
              <div className="relative">
                <svg className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  required
                  placeholder="votre.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0a0d14] border border-gray-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-[11px] text-gray-400 font-medium">
                  Mot de passe
                </label>
                {activeTab === "login" && (
                  <button
                    type="button"
                    className="text-[10px] text-amber-400 hover:underline"
                  >
                    Oublié ?
                  </button>
                )}
              </div>
              <div className="relative">
                <svg className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0a0d14] border border-gray-800 rounded-xl pl-9 pr-10 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(245,158,11,0.3)]"
            >
              {activeTab === "login" ? "Se connecter →" : "Créer un compte →"}
            </button>
          </form>

          <p className="text-[10px] text-gray-500 text-center mt-4">
            En continuant, vous acceptez nos{" "}
            <span className="text-gray-400 underline cursor-pointer">
              Conditions d'utilisation
            </span>
            .
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-2 z-10 text-[11px] text-gray-500">
        © 2026 Ndao Hianatra Langue. Tous droits réservés.
      </footer>
    </main>
  );
}
