import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../../actions";
import { useGameStore } from "../../store/gameStore";
import { FallbackModal } from "../modals/FallbackModal";

export const IntroView = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initializeGame = useGameStore((state) => state.initializeGame);

  const showErrorModal = useGameStore((state) => state.showError);
  const setShowErrorModal = useGameStore((state) => state.setShowError);

  const handleStart = async () => {
    setLoading(true);
    try {
      const result = await getQuestions();

      if (result.success && result.data) {
        initializeGame(result.data);
        navigate("/game");
      } else {
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error("Pelin alustus epäonnistui:", error);
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  if (showErrorModal) {
    return <FallbackModal />;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-950 overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="max-w-lg w-full px-6 text-center">
        <div className="mb-12 space-y-2">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-400 to-blue-600">
            QUIZ AI
          </h1>
          <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-6 mb-12">
          <p className="text-slate-300 text-lg font-light leading-relaxed">
            Vastaa kysymyksiin ennen kuin{" "}
            <span className="text-cyan-400 font-semibold uppercase tracking-widest">
              ajastin nollautuu
            </span>
            . Nopeus on valttia – jokainen sekunti merkitsee.
          </p>
          <div className="grid grid-cols-3 gap-4 text-xs uppercase tracking-widest text-slate-500">
            <div className="p-3 border border-white/5 rounded-xl bg-white/5">
              <span className="block text-white mb-1 font-bold">10</span>{" "}
              Kysymystä
            </div>
            <div className="p-3 border border-white/5 rounded-xl bg-white/5">
              <span className="block text-white mb-1 font-bold">100</span>{" "}
              Sekuntia
            </div>
            <div className="p-3 border border-white/5 rounded-xl bg-white/5">
              <span className="block text-white mb-1 font-bold">∞</span> Hienoa
            </div>
          </div>
        </div>

        <button
          onClick={handleStart}
          disabled={loading}
          className="group relative inline-flex items-center justify-center px-12 py-4 font-bold text-slate-900 transition-all duration-200 bg-cyan-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900"
                xmlns="http://www.w3.org"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Ladataan...
            </span>
          ) : (
            <>
              Aloita peli
              <svg
                className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
