import { useEffect, type ChangeEvent } from "react";
import CircularTimer from "../CircularTimer";
import { CorrectAnswerModal } from "../modals/CorrectAnswerModal";
import { useGameStore } from "../../store/gameStore";
import { QuestionCounter } from "../QuestionCounter";
import { SummaryModal } from "../modals/summary/SummaryModal";
import { ConfirmationModal } from "../modals/ConfirmationModal";
import { LinearTimer } from "../LinearTimer";

export const GameView = () => {
  const updatedAnswer = useGameStore((state) => state.updateAnswer);
  const answer = useGameStore((state) => state.answer);
  const currentQuestion = useGameStore((state) => state.currentQuestion);
  const arrayIndex = useGameStore((state) => state.arrayIndex);
  const time = useGameStore((state) => state.secondsLeft);
  const showConfirmationModal = useGameStore((state) => state.showConfirmation);
  const showSummaryModal = useGameStore((state) => state.showSummary);
  const showCorrectAnswerModal = useGameStore(
    (state) => state.showCorrectAnswer,
  );
  const decreaseSeconds = useGameStore((state) => state.decreaseSeconds);
  const questionsAmount = 10;

  const handleText = (event: ChangeEvent<HTMLInputElement>) => {
    updatedAnswer(event.target.value);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      decreaseSeconds();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [decreaseSeconds]);

  if (
    answer.toLowerCase() === currentQuestion.a.toLowerCase() ||
    showCorrectAnswerModal
  ) {
    return <CorrectAnswerModal />;
  }

  if (time < 0 || showSummaryModal) {
    return <SummaryModal />;
  }

  if (showConfirmationModal) {
    return <ConfirmationModal />;
  }

  return (
  <div className="flex-grow flex flex-col justify-start pt-24 sm:items-center sm:justify-center sm:pt-0 px-6">
    <div className="max-w-2xl w-full text-center space-y-4 md:space-y-12">
      <QuestionCounter current={arrayIndex} total={questionsAmount} />
      <h3 className="text-xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-snug mb-4 text-center transition-all">
        {currentQuestion.q}
      </h3>
      <div className="md:scale-125 md:py-8 transition-transform">
        <input
          id="answer-input"
          type="text"
          autoFocus
          value={answer}
          onChange={handleText}
          placeholder="Kirjoita vastaus..."
          className="w-full max-w-xs md:max-w-md mx-auto bg-transparent border-b-2 border-slate-600 p-2 text-lg md:text-3xl text-center focus:outline-none focus:border-cyan-400 transition-colors"
        />
      </div>

      <div className="md:hidden flex flex-col items-center w-full">
        <LinearTimer />
      </div>
      <div className="hidden md:flex flex-col items-center pt-12 lg:pt-20 md:scale-150 transition-transform">
        <CircularTimer />
      </div>
    </div>
  </div>
);
};
