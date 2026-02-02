import { useGameStore } from "../store/gameStore";

export const Header = () => {
  const setShowInstructions = useGameStore(
    (state) => state.setShowInstructions,
  );
  const handleButtonClick = () => {
    setShowInstructions(true);
  };
  return (
    <header className="glass-header p-4 md:p-6 fixed top-0 w-full z-20 flex items-center justify-between px-8">
      <div className="w-10"></div>
      <h1 className="text-2xl md:text-4xl font-black tracking-tighter uppercase neon-text text-cyan-400 italic">
        Beat The Blink
      </h1>
      <button
        onClick={() => handleButtonClick()}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 group shadow-lg"
        title="Näytä ohjeet"
      >
        <svg
          className="w-6 h-6 group-hover:scale-110 transition-transform"
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
      </button>
    </header>
  );
};
