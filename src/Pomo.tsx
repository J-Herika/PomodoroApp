import { useEffect, useState } from "react";
import Clock from "./body/Clock";

enum State {
  Pomodoro,
  Clock,
}
type StateTP = {
  currentState: State;
};

export default function Pomo({ currentState }: StateTP) {
  return (
    <p className="font-spaceGrotesk text-6xl font-bold text-red-500 sm:text-8xl sm:text-green-500 md:text-9xl md:text-purple-500">
      {currentState == State.Clock ? <Clock /> : "Pomodoro"}
    </p>
  );
}
