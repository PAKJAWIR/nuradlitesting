import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AppRouting, { GetRouteByName } from "../config/AppRoutes";

const iconClass = "text-sm md:text-xl";

export function Button1() {
  const buttonClass =
    "flex items-center gap-2 bg-warna1 hover:bg-warna2 text-warna5 rounded-md transition-all duration-300 transform hover:scale-105 " +
    "text-sm px-5 py-2 sm:text-base sm:px-4 sm:py-1.5 md:text-lg md:px-5 md:py-2 lg:text-xl lg:px-9 lg:py-2.5";

  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4 mt-2">
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
  const baseClass =
    "whitespace-nowrap w-fit text-xs sm:text-sm md:text-base lg:text-lg px-5 py-2 md:px-6 lg:px-9  lg:py-2 mt-2 text-warna1 rounded-md border border-solid border-warna4  transition-all duration-300 transform hover:scale-105 " + className;

  if (to) {
    return (
      <NavLink to={to} className={baseClass}>
        {text}
      </NavLink>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {text}
    </button>
  );
}

export function BackToTopButton() {
  return (
    <a href="#" className="fixed  bottom-4 right-4 p-3 rounded-full bg-warna4 text-warna1 shadow-md hover:bg-warna1 hover:text-warna4 transition-colors duration-300" aria-label="Back to top">
      <FaArrowUp className={iconClass} />
    </a>
  );
}
