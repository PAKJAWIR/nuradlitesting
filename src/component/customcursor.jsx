import { useCursor } from "../context/cursorContext";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function CustomCursor() {
  const { cursorVariant, mousePosition } = useCursor();
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);
  const rippleRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Looping ripple effect
  useEffect(() => {
    if (!rippleRef.current) return;

    let rippleTween;

    if (cursorVariant === "text") {
      // Mulai animasi ripple looping
      rippleTween = gsap.to(rippleRef.current, {
        scale: 1.8,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: false,
        transformOrigin: "center center",
      });
    } else {
      // Reset ripple ke kondisi awal & kill animasi
      gsap.set(rippleRef.current, { scale: 1, opacity: 1 });
      gsap.killTweensOf(rippleRef.current);
    }

    return () => {
      if (rippleTween) rippleTween.kill(); // Pastikan ripple tidak nyangkut
    };
  }, [cursorVariant]);

  useEffect(() => {
    if (!cursorRef.current) return;

    const { x, y } = mousePosition;
    const size = cursorVariant === "text" ? 80 : 50;
    const offset = size / 2;

    // Smooth cursor follow
    gsap.to(cursorRef.current, {
      x: x - offset,
      y: y - offset,
      width: size,
      height: size,
      duration: 2,
      ease: "power3.out",
    });
  }, [mousePosition, cursorVariant]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="rounded-full fixed top-0 left-0 pointer-events-none z-[9999] border border-warna4"
      style={{
        width: 50,
        height: 50,
        transition: "background-color 0.3s ease",
        position: "fixed",
      }}
    >
      {/* Ripple looping effect */}
      <div
        ref={rippleRef}
        className="absolute top-1/2 left-1/2 w-full h-full rounded-full border border-warna4"
        style={{
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      />
    </div>
  );
}

export default CustomCursor;
