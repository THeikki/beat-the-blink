import { type ChangeEvent, useEffect, useRef } from "react";
import { useGameStore } from "../../store/gameStore";
import { CircularTimer } from "../CircularTimer";
import { LinearTimer } from "../LinearTimer";
import { QuestionCounter } from "../QuestionCounter";
import { CorrectAnswerModal } from "../modals/CorrectAnswerModal";
import { SummaryModal } from "../modals/summary/SummaryModal";
import { AttentionModal } from "../modals/AttentionModal";
import { TimerLogic } from "../TimerLogic";

export const GameView = () => {
  const {
    answer,
    setAnswer,
    currentQuestion,
    questionNumber,
    showCorrectAnswer,
    showSummary,
    showAttention,
    timeLeft,
  } = useGameStore();

  const inputRef = useRef<HTMLInputElement>(null);

  const isModalOpen =
    showCorrectAnswer || showSummary || showAttention || timeLeft < 0;

  useEffect(() => {
    if (!isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen, currentQuestion]);

  if (!currentQuestion) return null;

  const handleText = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setAnswer(val);

    if (val.toLowerCase() === currentQuestion.a.toLowerCase()) {
      useGameStore.getState().setShowCorrectAnswer(true);
    }
  };

  return (
    <div className="relative flex-grow flex flex-col justify-start pt-24 sm:items-center sm:justify-center sm:pt-0 px-6">
      <TimerLogic />

      {showCorrectAnswer && <CorrectAnswerModal />}
      {(timeLeft < 0 || showSummary) && <SummaryModal />}
      {showAttention && <AttentionModal />}

      <div className="max-w-2xl w-full text-center space-y-4 md:space-y-12">
        <QuestionCounter current={questionNumber} total={10} />

        <h3 className="text-xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-snug mb-4">
          {currentQuestion.q}
        </h3>

        <div className="md:scale-125 md:py-8">
          <input
            id="answer-input"
            ref={inputRef}
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
