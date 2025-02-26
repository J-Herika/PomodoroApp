import { useEffect, useState } from "react";

enum State {
  Pomodoro,
  Clock,
}

export default function Pomo() {
  const [currentState, setCurrentState] = useState<State>(State.Clock);
  const [clock, setClock] = useState<Date>(new Date());

  function currentStateHandler() {
    currentState == State.Clock
      ? setCurrentState(State.Pomodoro)
      : setCurrentState(State.Clock);
  }

  function clockHandler() {
    setClock(new Date());
  }

  useEffect(() => {
    if (currentState == State.Clock) setInterval(clockHandler, 1000);
  });
  
  return (
    <p>
      {currentState == State.Clock
        ? `${clock.getHours()} : ${String(clock.getMinutes()).padStart(2, "0")} : ${String(clock.getSeconds()).padStart(2, "0")}`
        : "Pomodoro"}
    </p>
  );
}
