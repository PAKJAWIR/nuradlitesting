import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

function Preloader({ onComplete }) {
  const container = useRef();
  const layerRef1 = useRef();
  const layerRef2 = useRef();
  const textLayer = useRef();

  useEffect(() => {
    const split = new SplitText(textLayer.current, { types: "chars" });

    gsap.from(split.chars, {
      opacity: 0,
      x: 50,
      rotateX: 50,
      stagger: 0.05,
      ease: "power2.out",
      duration: 1,
    });

    // Optional cleanup
    return () => split.revert();
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.set(layerRef2.current, {
        yPercent: -100,
      });

      tl.to(textLayer.current, {
        opacity: 1,
        duration: 2,
      });

      tl.to(layerRef2.current, {
        yPercent: 0,
        duration: 1,
      });

      tl.to(
        textLayer.current,
        {
          color: "#f5f5f5",
          duration: 3,
        },
        "<"
      );

      tl.to([layerRef1.current, layerRef2.current], {
        yPercent: 100,
        ease: "power3.inOut",
        duration: 1,
      });

      tl.set(layerRef1.current, { display: "none" });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative">
      <div ref={layerRef1} className="flex items-center justify-center bg-warna2 w-screen h-screen absolute z-99">
        <div ref={layerRef2} className="bg-warna6 w-screen h-screen z-100 absolute"></div>
        <div className="text-warna5 tracking-widest text-center text-2xl lg:text-7xl z-101 font-bold">
          <h1 ref={textLayer}>NurAdli.</h1>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
