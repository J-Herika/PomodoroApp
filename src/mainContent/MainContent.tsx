import Clock from "./Clock";
import Pomodoro from "./Pomodoro";

enum State {
  Pomodoro,
  Clock,
}
type StateTP = {
  currentState: State;
};

export default function MainContent({ currentState }: StateTP) {
  return (
    <div className="flex flex-col items-center gap-4">
      {currentState == State.Clock ? <Clock /> : <Pomodoro />}
    </div>
  );
}
