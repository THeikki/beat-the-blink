import { useGameStore } from "../../../store/gameStore";

type Props = {
  handleResumeClick: () => void;
  handleExitClick: () => void;
};

export const FailedModal = ({ handleResumeClick, handleExitClick }: Props) => {
  const points = useGameStore((state) => state.points);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-slate-950 border-2 border-red-600 p-8 max-w-sm w-[85%] rounded-none shadow-[0_0_30px_rgba(220,38,38,0.2)]">
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-red-500"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-red-500"></div>
        <div className="text-center">
          <h2 className="text-4xl font-black text-red-600 uppercase tracking-tighter mb-1 animate-pulse">
            Yhteys katkesi
          </h2>
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] mb-8">
            Status: Too Slow // Latency High
          </p>

          <div className="bg-red-950/20 py-6 mb-8 border-y border-red-900/50 text-red-500 font-mono">
            <span className="text-5xl font-black italic">{points}/10</span>
          </div>

          <button
            onClick={handleResumeClick}
            className="w-full bg-red-600 hover:bg-red-500 text-white font-black py-4 rounded-none transition-all uppercase italic tracking-widest"
          >
            Yritä uudelleen
          </button>
          <button
            onClick={handleExitClick}
            className="w-full py-2 text-red-900 hover:text-red-500 text-[10px] font-mono uppercase tracking-[0.3em] transition-colors border border-red-900/30"
          >
            [ Palaa päävalikkoon ]
          </button>
        </div>
      </div>
    </div>
  );
};
