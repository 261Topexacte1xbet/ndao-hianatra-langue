export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white overflow-hidden">

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center text-3xl shadow-lg shadow-yellow-500/20">
            🌍
          </div>

          <div>
            <h1 className="text-xl font-extrabold">
              Ndao Hianatra <span className="text-yellow-400">Langue</span>
            </h1>
            <p className="text-[10px] tracking-[2px] text-gray-400">
              ÉCOSYSTÈME D'APPRENTISSAGE 2026
            </p>
          </div>
        </div>

        <span className="hidden sm:block text-yellow-400 border border-yellow-500/30 rounded-full px-4 py-2 text-sm">
          👤 Admin
        </span>
      </header>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-14 pb-20 text-center">

        {/* GOLDEN GLOBE */}
        <div className="relative flex justify-center mb-12">
          <div className="absolute w-64 h-64 bg-yellow-500/10 blur-[90px] rounded-full"></div>

          <div className="relative">
            <div className="text-[120px] sm:text-[155px] drop-shadow-[0_0_30px_rgba(255,190,40,0.65)]">
              🌍
            </div>

            <div className="w-48 sm:w-56 h-5 mx-auto rounded-full bg-gradient-to-r from-yellow-900 via-yellow-300 to-yellow-900 shadow-[0_0_35px_rgba(255,190,40,0.5)]"></div>
          </div>
        </div>

        {/* BADGES */}
        <div className="flex justify-center flex-wrap gap-3 mb-8">
          <span className="rounded-full bg-[#171c2d] border border-yellow-500/20 px-5 py-2 text-sm text-yellow-400 font-semibold">
            🎓 Formation Multilingue
          </span>

          <span className="rounded-full bg-[#171c2d] border border-gray-600/40 px-5 py-2 text-sm text-gray-300">
            🏆 Édition 2026
          </span>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
          Bienvenue sur
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
            Ndao Hianatra
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Accédez à vos cours interactifs et perfectionnez
          votre niveau dès aujourd'hui.
        </p>

        {/* BUTTONS */}
        <div className="max-w-md mx-auto space-y-4">

          <a
            href="/login"
            className="block w-full rounded-2xl py-5 text-lg font-extrabold text-black bg-gradient-to-r from-yellow-400 to-orange-500 shadow-[0_8px_30px_rgba(245,158,11,0.25)] hover:scale-[1.02] transition"
          >
            Se connecter →
          </a>

          <a
            href="/register"
            className="block w-full rounded-2xl py-4 border border-gray-600 text-gray-200 font-semibold hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            S'inscrire
          </a>

        </div>

        {/* INFORMATION CARD */}
        <div className="mt-12 bg-[#111629] border border-yellow-500/20 rounded-3xl p-6 text-left shadow-xl">

          <h3 className="text-yellow-400 font-bold text-lg mb-4">
            🎯 Ny Tanjon'ny Application
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Natsangana ity sehatra ity mba hanampiana sy
            hitarahana ireo olona mbola sahirana na mbola tsy
            mahay mamolaka ny fiteny vahiny ary ny firesahana
            an-davan'andro.
          </p>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Fampianarana mora idirana, azo ampiharina ary
            hatrany mba hahafahanao miteny am-pahatokiana.
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-600 text-xs pb-8">
        © 2026 Ndao Hianatra Langue. Tous droits réservés.
      </footer>

    </main>
  );
        }
