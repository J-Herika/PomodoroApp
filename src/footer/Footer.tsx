import Quote from "./Quote";
import FooterBtns from "./footerBtns";
import { State } from "../App";

type StateTP = {
  state: State;
  setState: (event: React.MouseEvent<SVGElement | MouseEvent>) => void;
};

export default function Footer({ state, setState }: StateTP) {
  return (
    <footer className="flex w-full flex-col items-center gap-14 md:gap-0">
      <Quote />
      <FooterBtns state={state} setState={setState} />
    </footer>
  );
}
