import { useNavigate } from "react-router-dom";
import { useGameStore } from "../../store/gameStore";
import questionData from "../../data/questions.json";

export const FallbackModal = () => {
  const navigate = useNavigate();
  const initializeGame = useGameStore((state) => state.initializeGame);
  const setShowErrorModal = useGameStore((state) => state.setShowError);

  const handleConfirm = () => {
    setShowErrorModal(false);

    if (questionData && questionData.questions) {
      initializeGame(questionData.questions);
      navigate("/game");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[2rem] shadow-2xl p-8 max-w-sm w-full text-center border-4 border-blue-500 animate-in fade-in zoom-in duration-300">
        <div className="text-5xl mb-4 text-blue-500">ℹ️</div>

        <h2 className="text-2xl font-black text-slate-800 mb-3 uppercase tracking-tight">
          Yhteysvirhe
        </h2>

        <p className="text-slate-600 mb-8 font-medium leading-relaxed">
          Uusien kysymysten haku epäonnistui. Ei hätää! Käytetään pelin omia
          varakysymyksiä, niin pääset pelaamaan heti.
        </p>

        <button
          onClick={handleConfirm}
          className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-black text-lg rounded-2xl shadow-[0_4px_0_rgb(37,99,235)] active:translate-y-1 active:shadow-none transition-all"
        >
          SELVÄ, PELATAAN!
        </button>
      </div>
    </div>
  );
};
