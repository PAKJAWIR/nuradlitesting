import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import AppRouting, { GetRouteByName } from "../config/AppRoutes";
import { useCursor } from "../context/cursorContext";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const iconClass = "text-sm md:text-xl";

export function Button1() {
  const { textEnter, textLeave } = useCursor();
  const buttonClass =
    "flex items-center gap-2 bg-warna1 hover:bg-warna2 text-warna5 rounded-md transition-all duration-300 transform hover:scale-105 " +
    " text-sm px-5 py-2 sm:text-base sm:px-4 sm:py-1.5 md:text-lg md:px-10 md:py-2 lg:text-xl lg:px-9 lg:py-2.5";

  return (
    <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="flex gap-2 sm:gap-3 md:gap-4 mt-2">
      <a href="https://github.com/PAKJAWIR" target="_blank" rel="noopener noreferrer" className={buttonClass}>
        <FaGithub className={iconClass} />
      </a>

      <a href="https://www.linkedin.com/in/m-nur-adli-al-ghifari-97106230a/" target="_blank" rel="noopener noreferrer" className={buttonClass}>
        <FaLinkedin className={iconClass} />
      </a>

      <a href="https://instagram.com/na_athenaa" target="_blank" rel="noopener noreferrer" className={buttonClass}>
        <FaInstagram className={iconClass} />
      </a>
    </div>
  );
}

export function Button2({ text, to, href, onClick, className = "" }) {
  const { textEnter, textLeave } = useCursor();
  const baseClass =
    "whitespace-nowrap w-fit text-xs sm:text-sm md:text-base lg:text-lg px-5 py-2 md:px-6 lg:px-9  lg:py-2 mt-2 text-warna1 rounded-md border border-solid border-warna4  transition-all duration-300 transform hover:bg-warna4 hover:text-warna1 hover:scale-105  " +
    className;

  if (to) {
    return (
      <NavLink to={to} onMouseEnter={textEnter} onMouseLeave={textLeave} className={baseClass}>
        {text}
      </NavLink>
    );
  }

  if (href) {
    return (
      <a href={href} onMouseEnter={textEnter} onMouseLeave={textLeave} className={baseClass}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} onMouseEnter={textEnter} onMouseLeave={textLeave} className={baseClass}>
      {text}
    </button>
  );
}

export function BackToTopButton() {
  const { textEnter, textLeave } = useCursor();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.a
          key="back-to-top"
          href="#"
          aria-label="Back to top"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2, ease: "easeOut",}}
          className="fixed z-10 bottom-4 right-4 p-3 rounded-full border border-solid border-warna4 text-warna4 shadow-md hover:bg-warna4 hover:text-warna1 hover:scale-105 transition-all ease-in-out duration-300 "
        >
          <FaArrowUp className="text-base md:text-lg" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
