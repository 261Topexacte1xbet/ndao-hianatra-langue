'use client';
import { useState } from 'react';

export default function DashboardPage() {
  const [selectedMethod, setSelectedMethod] = useState<'mvola' | 'orange'>('mvola');
  const [copied, setCopied] = useState(false);

  const mvolaNumber = '0382969974';
  const orangeNumber = '0372514900';
  const accountName = 'ANDRO FARA NIEZAKA';

  const handleCopy = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 pb-24 max-w-md mx-auto font-sans">
      {/* Header */}
      <div className="py-4 border-b border-slate-800/60 mb-6 text-center">
        <h1 className="text-xl font-black text-emerald-400">Ndao Hianatra Langue</h1>
        <p className="text-xs text-slate-400 mt-1">Fandoavam-bola sy Fanavaozana Premium</p>
      </div>

      {/* Main Container */}
      <div className="space-y-6">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-3xl shadow-xl space-y-4">
          <h2 className="text-sm font-extrabold text-white uppercase tracking-wider">Safidio ny fomba handoavam-bola</h2>
          
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setSelectedMethod('mvola')}
              className={`p-3 rounded-2xl font-extrabold text-xs border-2 transition-all ${
                selectedMethod === 'mvola' 
                  ? 'border-amber-500 bg-amber-500/20 text-amber-300' 
                  : 'border-slate-800 bg-slate-800 text-slate-400'
              }`}
            >
              📱 MVola
            </button>
            <button
              onClick={() => setSelectedMethod('orange')}
              className={`p-3 rounded-2xl font-extrabold text-xs border-2 transition-all ${
                selectedMethod === 'orange' 
                  ? 'border-orange-500 bg-orange-500/20 text-orange-300' 
                  : 'border-slate-800 bg-slate-800 text-slate-400'
              }`}
            >
              🟠 Orange Money
            </button>
          </div>

          {/* Credentials Display */}
          <div className="bg-slate-950/70 border border-slate-800/80 p-4 rounded-2xl space-y-3 mt-4">
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">Anaran'ny Tompony</p>
              <p className="font-black text-white text-base mt-0.5">{accountName}</p>
            </div>

            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">Laharana Finday</p>
              <div className="flex justify-between items-center mt-1">
                <span className="font-mono font-bold text-lg text-emerald-400">
                  {selectedMethod === 'mvola' ? mvolaNumber : orangeNumber}
                </span>
                <button
                  onClick={() => handleCopy(selectedMethod === 'mvola' ? mvolaNumber : orangeNumber)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs px-3 py-1.5 rounded-xl transition-all shadow-md"
                >
                  {copied ? '✅ Voikaika' : '📋 Mandika'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-3xl space-y-2">
          <h3 className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider">Toromarika:</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            1. Manaova fandefasana vola amin'ireo laharana voalaza etsy ambony.<br />
            2. Alefaso ny porofo na ny hafatra fanamafisana amin'ny mpandrindra mba hampavitrika ny kaontinao Premium.
          </p>
        </div>
      </div>
    </div>
  );
      }
