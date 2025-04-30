import { useCursor } from "../context/cursorContext";
import { Button1 } from "./button";

function Footer() {
  const { textEnter, textLeave } = useCursor();
  return (
    <footer className="mt-10">
      <div className="bg-warna6 border-t-warna4 gap-1 border border-solid h-full w-full flex p-10 flex-col item-center justify-center">
        <div className="text-center">
          <h3 onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-warna2 text-xl lg:text-2xl font-bold">NurAdli.</h3>
          <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-warna3 text-sm lg:text-sm">&copy;Copyright. All Rights Reserved</p>
        </div>
        <div className="flex item-center justify-center">
          <Button1 />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
