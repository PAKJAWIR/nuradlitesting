// Runningtext Jsx

import Marquee from "react-fast-marquee";

function RunningText() {
  return (
<div className="sticky bottom-0 w-full bg-warna5 text-warna1 lg:text-sm sm:text-sm md:text-sm p-2 z-40 border-warna4 border-t border-b transition-all duration-500 ease-in-out">

      <Marquee speed={50} direction="left" pauseOnHover autoFill={true}>
        <span className="text-warna4 mr-3">*</span>AVAILABLE FOR HIRE
      </Marquee>
    </div>
  );
}

export default RunningText;
