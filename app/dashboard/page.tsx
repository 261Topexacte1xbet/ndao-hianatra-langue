<div className="grid grid-cols-3 gap-3 mb-6">
  {/* MVola */}
  <button
    type="button"
    onClick={() => setSelectedMethod('mvola')}
    className={`p-4 rounded-2xl border-b-4 flex flex-col items-center justify-center transition-all transform active:translate-y-1 ${
      selectedMethod === 'mvola' 
        ? 'border-green-600 bg-green-500/20 shadow-lg shadow-green-900/50 scale-105' 
        : 'border-slate-700 bg-slate-800 hover:bg-slate-750'
    }`}
  >
    <span className="font-extrabold text-green-400 text-lg">MVola</span>
  </button>

  {/* Orange Money */}
  <button
    type="button"
    onClick={() => setSelectedMethod('orange')}
    className={`p-4 rounded-2xl border-b-4 flex flex-col items-center justify-center transition-all transform active:translate-y-1 ${
      selectedMethod === 'orange' 
        ? 'border-orange-600 bg-orange-500/20 shadow-lg shadow-orange-900/50 scale-105' 
        : 'border-slate-700 bg-slate-800 hover:bg-slate-750'
    }`}
  >
    <span className="font-extrabold text-orange-400 text-lg">Orange</span>
  </button>

  {/* Airtel Money (Indisponible) */}
  <button
    type="button"
    disabled
    className="p-4 rounded-2xl border-b-4 border-slate-900 bg-slate-900/40 opacity-40 cursor-not-allowed flex flex-col items-center justify-center"
  >
    <span className="font-bold text-slate-500">Airtel</span>
    <span className="text-[10px] text-red-400 mt-1">Tsy misy</span>
  </button>
</div>
