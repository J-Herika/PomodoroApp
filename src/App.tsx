import { useState, createContext } from "react";
import Header from "./Header";
import Pomo from "./Pomo";
import Footer from "./footer/Footer";

export enum State {
  Pomodoro,
  Clock,
}

function App() {
  const [currentState, setCurrentState] = useState<State>(State.Clock);
  const stateContext = createContext({ currentState, setCurrentState });
  function currentStateHandler(event: React.MouseEvent<SVGElement | MouseEvent>): void {
    currentState == State.Clock
      ? setCurrentState(State.Pomodoro)
      : setCurrentState(State.Clock);
  } 

  return (
    <div className="mx-auto flex h-screen w-11/12 max-w-[90rem] flex-col items-center justify-between py-6 sm:py-10">
      <Header />
      <Pomo currentState={currentState} />
      <Footer state={currentState} setState={currentStateHandler} />

    </div>
  );
}
export const stateContext = createContext({});


export default App;
