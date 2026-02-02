import { useGameStore } from "../../store/gameStore";

export const CorrectAnswerModal = () => {
  const nextQuestion = useGameStore((state) => state.nextQuestion);
  const increasePoints = useGameStore((state) => state.increaseCorrectAnswers);
  const setShowAttention = useGameStore((state) => state.setShowAttention);

  const handleResume = () => {
    increasePoints();
    nextQuestion();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4">
      <div className="bg-slate-900 border-2 border-emerald-500/30 w-full max-w-sm rounded-3xl shadow-lg overflow-hidden transform transition-all">
        <div className="h-2 w-full bg-emerald-500"></div>
        <div className="p-8 text-center">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <svg
              className="w-10 h-10 text-emerald-500 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-black uppercase text-white mb-2">
            Oikein!
          </h2>
          <div className="space-y-3 mt-8">
            <button
              onClick={handleResume}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-4 rounded-xl transition-all uppercase text-sm tracking-widest"
            >
              Jatka peliä
            </button>
            <button
              onClick={() => setShowAttention(true)}
              className="w-full text-slate-500 hover:text-white py-3 text-xs uppercase tracking-wider"
            >
              Poistu päävalikkoon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
