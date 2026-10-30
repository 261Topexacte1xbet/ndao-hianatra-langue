'use client';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseBrowser } from '../../lib/supabase/client';

export default function Dashboard() {
  const [selectedMethod, setSelectedMethod] = useState('mvola');
  const [selectedPlan, setSelectedPlan] = useState('1 volana');
  const [amount, setAmount] = useState('10 000 Ar');
  const [reference, setReference] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handlePaymentSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Afaka ampiana eto ny fomba fandefasana any amin'ny Supabase
    setMessage(' Tafita soa aman-tsara ny fangatahanao! Miandry ny fanamarinan\'ny admin.');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Fandaharana sy Fandoavam-bola (Premium)</h1>

        {/* Safidy Fomba Fandoavana */}
        <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-800">
          <h2 className="text-xl font-bold mb-4">Safidio ny fomba fandoavana</h2>
          
          <div className="grid grid-cols-3 gap-3 mb-6">
            {/* MVola */}
            <button
              type="button"
              onClick={() => setSelectedMethod('mvola')}
              className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                selectedMethod === 'mvola' ? 'border-green-500 bg-green-950/30' : 'border-slate-700 bg-slate-800'
              }`}
            >
              <span className="font-bold text-green-400">MVola</span>
            </button>

            {/* Orange Money */}
            <button
              type="button"
              onClick={() => setSelectedMethod('orange')}
              className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                selectedMethod === 'orange' ? 'border-orange-500 bg-orange-950/30' : 'border-slate-700 bg-slate-800'
              }`}
            >
              <span className="font-bold text-orange-400">Orange</span>
            </button>

            {/* Airtel Money (Indisponible) */}
            <button
              type="button"
              disabled
              className="p-3 rounded-xl border-2 border-slate-800 bg-slate-900/50 opacity-50 cursor-not-allowed flex flex-col items-center justify-center"
            >
              <span className="font-bold text-slate-500">Airtel</span>
              <span className="text-[10px] text-red-400">Tsy misy</span>
            </button>
          </div>

          {/* Fampisehoana ny Laharana arakaraka ny safidy */}
          <div className="p-4 bg-slate-800 rounded-xl mb-6 border border-slate-700">
            {selectedMethod === 'mvola' && (
              <div>
                <p className="text-sm text-slate-400">Alefaso amin'ny MVola:</p>
                <p className="text-lg font-bold text-green-400">038 29 699 74</p>
                <p className="text-xs text-slate-300 mt-1">Anarana: ANDRO FARA NIEZAKA</p>
              </div>
            )}
            {selectedMethod === 'orange' && (
              <div>
                <p className="text-sm text-slate-400">Alefaso amin'ny Orange Money:</p>
                <p className="text-lg font-bold text-orange-400">037 25 149 00</p>
                <p className="text-xs text-slate-300 mt-1">Anarana: ANDRO FARA NIEZAKA</p>
              </div>
            )}
          </div>

          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-2">Laharana'ny transaction (Référence)</label>
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="Ohatra: MP261030..."
                required
                className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-500 font-bold rounded-xl transition-all"
            >
              Handefa fangatahana
            </button>
          </form>

          {message && <p className="mt-4 text-sm text-green-400 text-center">{message}</p>}
        </div>
      </div>
    </div>
  );
        }
