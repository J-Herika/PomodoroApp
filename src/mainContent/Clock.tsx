import { useEffect, useState } from "react";

export default function Clock() {
  const [clock, setClock] = useState<Date>(new Date());

  function clockHandler() {
    setClock(new Date());
  }
  useEffect(() => {
    setInterval(clockHandler, 1000);
  });

  return (
    <p className="font-spaceGrotesk w-[42.98rem] text-6xl font-bold text-neutral-950 sm:text-8xl md:text-9xl">
      {String(
        clock.getHours() > 12 ? clock.getHours() - 12 : clock.getHours(),
      ).padStart(2, "0")}{" "}
      : {String(clock.getMinutes()).padStart(2, "0")} :{" "}
      {String(clock.getSeconds()).padStart(2, "0")}
    </p>
  );
}
  