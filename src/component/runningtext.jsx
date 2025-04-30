import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import { useCursor } from "../context/cursorContext";

gsap.registerPlugin(ScrollTrigger);

function RunningText() {
  const { textEnter, textLeave } = useCursor();
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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      ref={runningRef}
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
      className="sticky bottom-0 w-full bg-warna5 text-warna1 lg:text-sm sm:text-sm md:text-sm p-2 z-40 border-warna4 border-t border-b transition-all duration-500 ease-in-out"
    >
      <Marquee speed={50} direction="left" pauseOnHover autoFill={true}>
        <span className="text-warna4 mr-3">*</span>AVAILABLE FOR HIRE
      </Marquee>
    </motion.div>
  );
}

export default RunningText;
