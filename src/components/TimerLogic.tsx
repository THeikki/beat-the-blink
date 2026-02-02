import { useEffect } from "react";
import { useGameStore } from "../store/gameStore";

export const TimerLogic = () => {
  const decreaseTime = useGameStore((state) => state.decreaseTime);
  const isPaused = useGameStore(
    (state) =>
      state.showCorrectAnswer || state.showAttention || state.showSummary,
  );

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      decreaseTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [decreaseTime, isPaused]);

  return null;
};
