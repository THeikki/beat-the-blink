import { useGameStore } from "../../../store/gameStore";

type Props = {
  handleResumeClick: () => void;
  handleExitClick: () => void;
};

export const GoldenModal = ({ handleResumeClick, handleExitClick }: Props) => {
  const points = useGameStore((state) => state.points);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-slate-900 border-2 border-yellow-500/50 p-10 max-w-sm w-[85%] rounded-tr-[60px] rounded-bl-[60px] shadow-[0_0_60px_rgba(234,179,8,0.25)] overflow-hidden">
        <div className="absolute -inset-full h-[200%] w-[200%] bg-gradient-to-tr from-transparent via-yellow-500/10 to-transparent rotate-45 animate-[pulse_3s_infinite]"></div>

        <div className="relative z-10 text-center">
          <div className="text-yellow-500 mb-4 flex justify-center gap-1">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-8 h-8 -mt-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h2 className="text-5xl font-black italic text-white uppercase tracking-tighter leading-none mb-2">
            Blink God
          </h2>
          <p className="text-yellow-500 text-[10px] uppercase tracking-[0.5em] mb-10 font-bold">
            Sinä olet järjestelmä
          </p>

          <div className="bg-yellow-500 text-slate-950 py-8 mb-8 skew-x-[-10deg] shadow-[0_0_30px_rgba(234,179,8,0.4)]">
            <div className="skew-x-[10deg]">
              <span className="text-7xl font-black italic">{points}/10</span>
            </div>
          </div>
          <button
            onClick={handleResumeClick}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black py-4 skew-x-[-10deg] transition-all uppercase italic tracking-widest"
          >
            <div className="skew-x-[10deg]">Puolusta kruunuasi</div>
          </button>
          <button
            onClick={handleExitClick}
            className="w-full py-2 text-yellow-500/40 hover:text-yellow-500 text-[10px] font-black uppercase tracking-[0.4em] transition-all"
          >
            Päävalikko
          </button>
        </div>
      </div>
    </div>
  );
};
