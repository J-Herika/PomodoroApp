import Quote from "./Quote";
import FooterBtns from "./footerBtns";
import { State } from "../App";

type StateTP = {
  state: State
  setState:  Function
  
}

export default function Footer({ state, setState }:StateTP) {
  return (
    <footer className="w-full flex flex-col items-center gap-14 md:gap-0">
      <Quote />
      <FooterBtns state={state} setState={setState}/>
    </footer>
  );
}
