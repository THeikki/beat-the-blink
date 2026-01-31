import { useGameStore } from "../store/gameStore";

export const LinearTimer = () => {
  const startTime = 10;
  const time = useGameStore((state) => state.secondsLeft);
  const percentage = (time / startTime) * 100;
  const linearBar = document.getElementById("timer-linear");

  if (time <= 3) {
    linearBar?.classList.remove("bg-cyan-400", "bg-yellow-400");
    linearBar?.classList.add("bg-red-500");
  } else if (time <= 6) {
    linearBar?.classList.remove("bg-cyan-400");
    linearBar?.classList.add("bg-yellow-400");
  }

  return (
    <>
      <div className="text-2xl font-black font-mono text-white neon-text">
        {time}
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          id="timer-linear"
          className="h-full bg-cyan-400 transition-none"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </>
  );
};
