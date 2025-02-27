import { GoHomeFill } from "react-icons/go";
import { FaLightbulb } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";

import { State } from "../App";

type StateTP = {
  state: State;
  setState: (event: React.MouseEvent<SVGElement | MouseEvent>) => void;
};

export default function FooterBtns({ state, setState }: StateTP) {
  return (
    <div className="flex w-full justify-between">
      <div
        className={`flex gap-4 rounded-xl border-3 border-neutral-950 px-1 py-2 transition-all duration-300 hover:bg-neutral-950 hover:text-neutral-50`}
      >
        <GoHomeFill
          onClick={setState}
          size={35}
          color={state == State.Clock ? "#FF1053" : ""}
        />{" "}
        <FaLightbulb
          onClick={setState}
          size={35}
          color={state == State.Pomodoro ? "#FF1053" : ""}
        />
      </div>
      <div
        className={`transition-full rounded-xl border-3 border-neutral-950 p-2 duration-300 hover:bg-neutral-950 hover:text-neutral-50`}
      >
        <SlSizeFullscreen onClick={toggleFullScreen} size={35} />
      </div>
    </div>
  );
}

function toggleFullScreen() {
  const screen = document.body;
  const isFullscreen = document.fullscreenElement;
  if (!isFullscreen) {
    screen
      ?.requestFullscreen()
      .then(() => console.log("Entered full screen Successfully :", screen))
      .catch((err) => console.log(err));
  } else if (isFullscreen) {
    document.exitFullscreen();
  }
  console.log(screen);
}
