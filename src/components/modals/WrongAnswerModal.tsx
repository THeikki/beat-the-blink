import { useGameStore } from "../../store/gameStore";

export const WrongAnswerModal = () => {
  const { currentQuestion, setShowWrongAnswer, nextQuestion } = useGameStore();

  if (!currentQuestion) return null;

  const handleClose = () => {
    setShowWrongAnswer(false);
    nextQuestion();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 backdrop-blur-md px-6">
      <div className="bg-slate-900 border border-red-500/30 w-full max-w-sm rounded-[2.5rem] shadow-[0_0_50px_-12px_rgba(239,68,68,0.3)] overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="h-2 w-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>

        <div className="p-10 text-center">
          <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-500/20">
            <span className="text-red-500 text-5xl font-light">✕</span>
          </div>

          <h2 className="text-4xl font-black uppercase text-white mb-2 tracking-tight">
            Huti!
          </h2>

          <div className="space-y-1 mb-10">
            <p className="text-slate-500 uppercase text-[10px] font-bold tracking-[0.2em]">
              Oikea vastaus oli:
            </p>
            <p className="text-xl md:text-2xl font-medium text-red-400 italic">
              "{currentQuestion.a}"
            </p>
          </div>

          <button
            onClick={handleClose}
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-black py-5 rounded-2xl transition-all transform active:scale-95 uppercase text-sm tracking-widest border border-slate-700"
          >
            Jatka peliä
          </button>
        </div>
      </div>
    </div>
  );
};
