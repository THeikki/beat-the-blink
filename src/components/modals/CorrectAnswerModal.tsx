import { useGameStore } from "../../store/gameStore";

export const CorrectAnswerModal = () => {
  const updateAnswer = useGameStore((state) => state.updateAnswer);
  const increasePoints = useGameStore((state) => state.increaseCorrectAnswers);
  const resetSeconds = useGameStore((state) => state.resetSeconds);
  const setCurrentQuestion = useGameStore((state) => state.setCurrentQuestion);
  const arrayIndex = useGameStore((state) => state.arrayIndex);
  const increaseArrayIndex = useGameStore((state) => state.increaseArrayIndex);
  const questions = useGameStore((state) => state.questions);
  const setShowSummary = useGameStore((state) => state.setShowSummary);
  const setShowCorrectAnswer = useGameStore(
    (state) => state.setShowCorrectAnswer,
  );
  const setShowConfirmation = useGameStore(
    (state) => state.setShowConfirmation,
  );

  const handleResumeClick = () => {
    if (arrayIndex < questions.length) {
      increaseArrayIndex();
      updateAnswerAndClose();
      setCurrentQuestion(arrayIndex);
    } else {
      increasePoints();
      resetStore();
      setShowSummary(true);
      setShowCorrectAnswer(false);
    }
  };

  const handleReturnClick = () => {
    resetStore();
    setShowCorrectAnswer(false);
    setShowConfirmation(true);
  };

  const resetStore = () => {
    resetSeconds(10);
    updateAnswer("");
  };

  const updateAnswerAndClose = () => {
    increasePoints();
    setShowCorrectAnswer(false);
    resetStore();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4">
      <div className="bg-slate-900 border-2 border-emerald-500/30 w-full max-w-sm rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.2)] overflow-hidden transform transition-all">
        <div className="h-2 w-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]"></div>
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
              ></path>
            </svg>
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">
            Oikein!
          </h2>
          <p className="text-emerald-400/80 text-sm font-medium uppercase tracking-[0.2em] mb-8">
            Loistava suoritus
          </p>
          <div className="space-y-3">
            <button
              onClick={handleResumeClick}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-4 rounded-xl transition-all duration-200 uppercase text-sm tracking-widest shadow-[0_4px_15px_rgba(16,185,129,0.3)] active:scale-95"
            >
              Jatka peliä
            </button>
            <button
              onClick={handleReturnClick}
              className="w-full bg-transparent hover:bg-white/5 text-slate-500 hover:text-white font-medium py-3 rounded-lg transition-all duration-200 text-xs uppercase tracking-wider"
            >
              Poistu päävalikkoon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
