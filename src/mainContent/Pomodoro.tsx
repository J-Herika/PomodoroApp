import { useEffect, useState, useRef } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import bellSound from "../../public/bell.mp3"

let userChoice: number = 0.5;
const bell = new Audio(bellSound)

export default function Pomodoro() {
  const [currentTimer, setCurrentTimer] = useState<string>("00:00:00");
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [imputedTimerMin, setImputedTimerMin] = useState<number>(
    userChoice * 60,
  );
  const intervalRef = useRef<number | null>(null);
  useEffect(() => {
    if (isTimerRunning) {
      intervalRef.current = setInterval(() => {
        setImputedTimerMin((prev) => {
          if (prev <= 0) {
            clearInterval(intervalRef.current!);
            setIsTimerRunning(false);
            bell.play()
            return 0;
          }

          return prev - 1; // Reduce time
        });
      }, 1000) as unknown as number;
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isTimerRunning]);

  useEffect(() => {
    const { hours, minutes, seconds } = handleTimer(imputedTimerMin);
    setCurrentTimer(
      `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
    );
  }, [imputedTimerMin]);

  function handleIsTimerRunning() {
    setIsTimerRunning((prev) => !prev);
  }

  function resetTimer() {
    setIsTimerRunning(false);
    setImputedTimerMin(userChoice * 60);
  }

  function handleTimer(totalSeconds: number) {
    const hours: number = Math.floor(totalSeconds / 3600);
    const minutes: number = Math.floor((totalSeconds % 3600) / 60);
    const seconds: number = Math.floor(totalSeconds % 60);
    return { hours, minutes, seconds };
  }

  return (
    <>
      <p className="font-spaceGrotesk w-min text-6xl font-bold text-neutral-950 sm:text-8xl md:w-[35.9rem] md:text-9xl">
        {currentTimer}
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={handleIsTimerRunning}
          title="Start timer"
          className="mx-center rounded-2xl border-3 px-8 py-2 text-xl font-bold transition-all duration-300 hover:cursor-pointer hover:border-neutral-950 hover:bg-neutral-950 hover:text-neutral-50 hover:shadow-md"
        >
          {isTimerRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="rotate-45 transition-all duration-300 hover:-rotate-45 hover:cursor-pointer"
        >
          <VscDebugRestart size={40} />
        </button>
      </div>
    </>
  );
}
