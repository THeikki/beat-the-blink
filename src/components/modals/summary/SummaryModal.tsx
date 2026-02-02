import { useNavigate } from "react-router-dom";
import { useGameStore } from "../../../store/gameStore";
import { GoldenModal } from "./GoldenModal";
import { StandardModal } from "./StandartModal";
import { FailedModal } from "./FailedModal";
import questionData from "../../../data/questions.json";

export const SummaryModal = () => {
  const navigate = useNavigate();

  // HAETAAN PISTEET: Käytetään correctAnswers-nimeä, joka määriteltiin storessa
  const correctAnswers = useGameStore((state) => state.correctAnswers);
  const initializeGame = useGameStore((state) => state.initializeGame);
  const setShowSummary = useGameStore((state) => state.setShowSummary);

  const handleResumeClick = () => {
    // initializeGame nollaa correctAnswers-tilanteen ja aloittaa alusta
    initializeGame(questionData.questions);
  };

  const handleExitClick = () => {
    setShowSummary(false);
    navigate("/");
  };

  // Logiikka mitalien näyttämiseen pisteiden perusteella
  if (correctAnswers >= 8) {
    return (
      <GoldenModal
        points={correctAnswers}
        handleResumeClick={handleResumeClick}
        handleExitClick={handleExitClick}
      />
    );
  } else if (correctAnswers >= 4) {
    return (
      <StandardModal
        points={correctAnswers}
        handleResumeClick={handleResumeClick}
        handleExitClick={handleExitClick}
      />
    );
  } else {
    return (
      <FailedModal
        points={correctAnswers}
        handleResumeClick={handleResumeClick}
        handleExitClick={handleExitClick}
      />
    );
  }
};
