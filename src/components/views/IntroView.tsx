import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../../actions";
import { useGameStore, type APIResponse } from "../../store/gameStore";
import { FallbackModal } from "../modals/FallbackModal";

export const IntroView = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initializeQuestions = useGameStore(
    (state) => state.initializeQuestions,
  );
  const setCurrentQuestion = useGameStore((state) => state.setCurrentQuestion);
  const increaseArrayIndex = useGameStore((state) => state.increaseArrayIndex);
  const showErrorModal = useGameStore((state) => state.showError);
  const setShowErrorModal = useGameStore((state) => state.setShowError);

  const handleStart = async () => {
    setLoading(true);
    const result: APIResponse = await getQuestions();

    if (result.success) {
      initializeQuestions(result.data);

      setCurrentQuestion(0);
      increaseArrayIndex();
      navigate("/game");
      setLoading(false);
    } else {
      setLoading(false);
      setShowErrorModal(true);
    }
  };

  if (showErrorModal) {
    return <FallbackModal />;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="max-w-lg w-full px-6 text-center">
        <div className="mb-12 space-y-2">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-400 to-blue-600 animate-pulse"></h1>
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
              <span className="block text-white mb-1">1</span> Kysymys
            </div>
            <div className="p-3 border border-white/5 rounded-xl bg-white/5">
              <span className="block text-white mb-1">10</span> Sekuntia
            </div>
            <div className="p-3 border border-white/5 rounded-xl bg-white/5 break-all">
              <span className="block text-white mb-1">∞</span> Adrenaliinia
            </div>
          </div>
        </div>
        <button
          onClick={handleStart}
          disabled={loading}
          className="group relative inline-flex items-center justify-center px-12 py-4 font-bold text-slate-900 transition-all duration-200 bg-cyan-400 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          {loading ? "Alustetaan..." : "Aloita peli"}
          <svg
            className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
