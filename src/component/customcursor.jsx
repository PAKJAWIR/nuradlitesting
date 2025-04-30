import { motion } from "framer-motion";
import { useCursor } from "../context/cursorContext";
import { useEffect, useState } from "react";

function CustomCursor() {
  const { cursorVariant, mousePosition } = useCursor();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // cek awal
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;

  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      height: 50,
      width: 50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.5,
      },
    },
    text: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.5,
      },
    },
  };
  

  return <motion.div variants={variants} animate={cursorVariant} className="border border-warna4 rounded-full fixed top-0 left-0 pointer-events-none z-[9999]" />;
}

export default CustomCursor;
