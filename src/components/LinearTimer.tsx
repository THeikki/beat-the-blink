import { useGameStore } from "../store/gameStore";

export const LinearTimer = () => {
  const startTime = 10;
  const time = useGameStore((state) => state.timeLeft);
  const percentage = (time / startTime) * 100;

  return (
    <>
      <div className="text-2xl font-black font-mono text-white neon-text">
        {time}
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          id="timer-linear"
          className="h-full bg-red-400 transition-none"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </>
  );
};
