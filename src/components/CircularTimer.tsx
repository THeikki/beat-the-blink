import { useGameStore } from "../store/gameStore";

const CircularTimer = () => {
  const startTime = 10;
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const time = useGameStore((state) => state.secondsLeft);
  const circle = document.getElementById("timer-circle");

  if (time <= 3) {
    circle?.classList.remove("text-cyan-400", "text-yellow-400");
    circle?.classList.add("text-red-500");
  } else if (time <= 6) {
    circle?.classList.remove("text-cyan-400");
    circle?.classList.add("text-yellow-400");
  }

  // Calculate the filled area of the circle
  const strokeOffset = circumference - (time / startTime) * circumference;

  if (time >= 0) {
    return (
      <div className="relative flex items-center justify-center">
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-slate-800"
          />
          <circle
            id="timer-circle"
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset="0"
            style={{
              strokeDashoffset: strokeOffset,
              transition: "none",
            }}
            className="text-cyan-400"
          />
        </svg>
        <div
          id="timer-text"
          className="absolute text-2xl font-black font-mono text-white neon-text"
        >
          {time}
        </div>
      </div>
    );
  }
};

export default CircularTimer;
