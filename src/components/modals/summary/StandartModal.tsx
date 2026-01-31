import { useGameStore } from "../../../store/gameStore";

type Props = {
  handleResumeClick: () => void;
  handleExitClick: () => void;
};

export const StandardModal = ({
  handleResumeClick,
  handleExitClick,
}: Props) => {
  const points = useGameStore((state) => state.points);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 max-w-sm w-[85%] rounded-[2rem] shadow-2xl">
        <div className="absolute inset-0 bg-cyan-500/5 rounded-[2rem] -z-10"></div>
        <div className="text-center">
          <div className="w-16 h-1 w-full bg-cyan-500 mx-auto mb-6 rounded-full opacity-50"></div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-1">
            Vahva suoritus
          </h2>
          <p className="text-cyan-400 text-xs uppercase tracking-[0.2em] mb-8 font-semibold">
            Yhteys vakaa
          </p>

          <div className="bg-slate-800/50 py-6 rounded-2xl border border-white/5 mb-8">
            <span className="text-5xl font-black text-white">{points}/10</span>
          </div>
          <button
            onClick={handleResumeClick}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition-all uppercase tracking-widest shadow-lg"
          >
            Paranna tulosta
          </button>
          <button
            onClick={handleExitClick}
            className="w-full text-slate-500 hover:text-cyan-400 text-xs font-medium uppercase tracking-widest transition-colors"
          >
            Palaa päävalikkoon
          </button>
        </div>
      </div>
    </div>
  );
};
