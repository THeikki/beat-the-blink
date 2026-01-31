import { useNavigate } from "react-router-dom";
import { useGameStore } from "../../../store/gameStore";
import { GoldenModal } from "./GoldenModal";
import { StandardModal } from "./StandartModal";
import { FailedModal } from "./FailedModal";
import questionData from "../../../data/questions.json";

export const SummaryModal = () => {
  const navigate = useNavigate();
  const points = useGameStore((state) => state.points);
  const resetPoints = useGameStore((state) => state.resetPoints);
  const updateAnswer = useGameStore((state) => state.updateAnswer);
  const resetSeconds = useGameStore((state) => state.resetSeconds);
  const setShowSummary = useGameStore((state) => state.setShowSummary);
  const initializeQuestions = useGameStore(
    (state) => state.initializeQuestions,
  );
  const setCurrentQuestion = useGameStore((state) => state.setCurrentQuestion);
  const increaseArrayIndex = useGameStore((state) => state.increaseArrayIndex);
  const resetArrayIndex = useGameStore((state) => state.resetArrayIndex);

  const handleResumeClick = () => {
    resetStore();
    setShowSummary(false);
    getRandomQuestions();
  };

  const handleExitClick = () => {
    resetStore();
    setShowSummary(false);
    navigate("/");
  };

  const resetStore = () => {
    resetArrayIndex(0);
    resetPoints(0);
    resetSeconds(10);
    updateAnswer("");
    initializeQuestions([]);
  };

  const getRandomQuestions = () => {
    const shuffled = [...questionData.questions].sort(
      () => 0.5 - Math.random(),
    );
    const questions = shuffled.slice(0, 10);
    initializeQuestions(questions);

    setCurrentQuestion(0);
    increaseArrayIndex();
  };

  if (points >= 8) {
    return (
      <GoldenModal
        handleResumeClick={handleResumeClick}
        handleExitClick={handleExitClick}
      />
    );
  } else if (points >= 4) {
    return (
      <StandardModal
        handleResumeClick={handleResumeClick}
        handleExitClick={handleExitClick}
      />
    );
  } else {
    return (
      <FailedModal
        handleResumeClick={handleResumeClick}
        handleExitClick={handleExitClick}
      />
    );
  }
};
