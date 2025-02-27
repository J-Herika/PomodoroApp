import { useState } from "react";
import Header from "./Header";
import MainContent from "./mainContent/MainContent";
import Footer from "./footer/Footer";

export enum State {
  Pomodoro,
  Clock,
}

function App() {
  const [currentState, setCurrentState] = useState<State>(State.Pomodoro);
  function currentStateHandler(): void {
    currentState == State.Clock
      ? setCurrentState(State.Pomodoro)
      : setCurrentState(State.Clock);
  }

  return (
    <div className="mx-auto flex h-screen w-11/12 max-w-[90rem] flex-col items-center justify-between py-6 sm:py-10">
      <Header />
      <MainContent currentState={currentState} />
      <Footer state={currentState} setState={currentStateHandler} />
    </div>
  );
}

export default App;
