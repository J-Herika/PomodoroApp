import { GoHome } from "react-icons/go";
import { MdLightbulbOutline } from "react-icons/md";
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
        className={`flex gap-4 rounded-xl border-3 border-neutral-950 px-1 py-2`}
      >
        <GoHome
          onClick={setState}
          size={35}
          color={state == State.Clock ? "purple" : "black"}
        />{" "}
        <MdLightbulbOutline
          onClick={setState}
          size={35}
          color={state == State.Pomodoro ? "purple" : "black"}
        />
      </div>
      <div className={`rounded-xl border-3 border-neutral-950 p-2`}>
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
