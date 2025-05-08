import { useCursor } from "../context/cursorContext";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function CustomCursor() {
  const { cursorVariant, mousePosition } = useCursor();
  const [isMobile, setIsMobile] = useState(null);
  const [hasMoved, setHasMoved] = useState(false); // 🆕 state
  const cursorRef = useRef(null);
  const rippleRef = useRef(null);

  // Deteksi mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Deteksi first movement
  useEffect(() => {
    const handleMouseMove = () => {
      if (!hasMoved) setHasMoved(true);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hasMoved]);

  // Ripple animation
  useEffect(() => {
    if (!rippleRef.current) return;

    let rippleTween;
    if (cursorVariant === "text") {
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
      gsap.set(rippleRef.current, { scale: 1, opacity: 1 });
      gsap.killTweensOf(rippleRef.current);
    }

    return () => {
      if (rippleTween) rippleTween.kill();
    };
  }, [cursorVariant]);

  // Cursor movement
  useEffect(() => {
    if (!cursorRef.current) return;
    const { x, y } = mousePosition;
    const size = cursorVariant === "text" ? 80 : 50;
    const offset = size / 2;

    gsap.to(cursorRef.current, {
      x: x - offset,
      y: y - offset,
      width: size,
      height: size,
      duration: 2,
      ease: "power3.out",
    });
  }, [mousePosition, cursorVariant]);

  if (isMobile ?? true) return null;
  if (isMobile || !hasMoved) return null;

  return (
    <div
      ref={cursorRef}
      className="rounded-full fixed pointer-events-none z-[9999] border border-warna4 hidden lg:block"
      style={{
        width: 50,
        height: 50,
        transition: "background-color 0.3s ease",
      }}
    >
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
