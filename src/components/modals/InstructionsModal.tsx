import { useGameStore } from "../../store/gameStore";

export const InstructionsModal = () => {
  const setShowInstructions = useGameStore(
    (state) => state.setShowInstructions,
  );
  const handleCloseClick = () => {
    setShowInstructions(false);
  };

  return (
    <div
      id="how-to-play-modal"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 backdrop-blur-md px-4"
    >
      <div className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="p-8 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-cyan-500/20 rounded-2xl">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">
              Näin pelaat
            </h2>
          </div>
          <div className="space-y-6 text-left">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-cyan-400 font-bold text-sm">
                1
              </span>
              <p className="text-slate-300 text-sm leading-relaxed">
                Lue ruudulle ilmestyvä kysymys välittömästi. Sinulla on vain
                muutama sekunti aikaa.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-cyan-400 font-bold text-sm">
                2
              </span>
              <p className="text-slate-300 text-sm leading-relaxed">
                Kirjoita vastauksesi tekstikenttään. Sinun ei tarvitse painaa
                Enteriä tai erillistä painiketta, peli tarkistaa vastauksen
                lennosta.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-cyan-400 font-bold text-sm">
                3
              </span>
              <p className="text-slate-300 text-sm leading-relaxed">
                Seuraa{" "}
                <span className="text-red-400 font-semibold uppercase">
                  ajastin ympyrää
                </span>
                . Jos se ehtii loppuun, peli päättyy välittömästi!
              </p>
            </div>
          </div>
          <button
            onClick={() => handleCloseClick()}
            className="mt-10 w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl border border-white/10 transition-all duration-200 uppercase text-xs tracking-[0.2em]"
          >
            Selvä, olen valmis
          </button>
        </div>
      </div>
    </div>
  );
};
