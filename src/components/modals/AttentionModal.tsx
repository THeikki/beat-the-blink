import { useNavigate } from "react-router-dom";
import { useGameStore } from "../../store/gameStore";

export const AttentionModal = () => {
  const navigate = useNavigate();
  const setShowAttention = useGameStore((state) => state.setShowAttention);

  const handleCancel = () => {
    setShowAttention(false);
  };

  const handleExit = () => {
    setShowAttention(false);
    navigate("/");
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[2rem] shadow-2xl p-8 max-w-sm w-full text-center border-4 border-purple-900 animate-in fade-in zoom-in duration-200">
        <div className="text-5xl mb-4">⚠️</div>

        <h2 className="text-2xl font-black text-purple-900 mb-3 uppercase tracking-tight">
          Lopetetaanko peli?
        </h2>

        <p className="text-gray-600 mb-8 font-medium">
          Jos palaat valikkoon nyt, nykyinen edistymisesi menetetään!
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleExit}
            className="w-full py-4 bg-red-500 hover:bg-red-600 text-white font-black text-lg rounded-2xl shadow-[0_4px_0_rgb(185,28,28)] active:translate-y-1 active:shadow-none transition-all"
          >
            KYLLÄ, LOPETA
          </button>
          <button
            onClick={handleCancel}
            className="w-full py-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-black text-lg rounded-2xl shadow-[0_4px_0_rgb(156,163,175)] active:translate-y-1 active:shadow-none transition-all"
          >
            EI, JATKA PELIÄ
          </button>
        </div>
      </div>
    </div>
  );
};
