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
              className={`py-2
