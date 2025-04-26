import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

function RunningText() {
  const runningRef = useRef(null);

  useEffect(() => {
    const running = runningRef.current;

    
    gsap.to(running, {
      scrollTrigger: {
        trigger: "#last-header-section", 
        start: "top bottom",
        toggleActions: "play none none reverse",
        onEnter: () => {
          running.style.position = "static"; 
        },
        onLeaveBack: () => {
          running.style.position = "sticky";
          running.style.bottom = "0";
        },
      },
    });
  }, []);

  return (
    <div ref={runningRef} className="sticky bottom-0 w-full bg-warna5 text-warna1 lg:text-sm sm:text-sm md:text-sm p-2 z-40 border-warna4 border-t border-b transition-all duration-500 ease-in-out">
      <Marquee speed={50} direction="left" pauseOnHover autoFill={true}>
        <span className="text-warna4 mr-3">*</span>AVAILABLE FOR HIRE
      </Marquee>
    </div>
  );
}

export default RunningText;
