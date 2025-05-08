import { Link, NavLink, useLocation } from "react-router-dom"; // lokasi langsung disini
import { useMenu } from "../context/UseMenu";
import { useEffect, useState } from "react";
import { mainRoutes } from "../config/AppRoutes";
import { useCursor } from "../context/cursorContext";
import gsap from "gsap";

function Navbar() {
  const location = useLocation(); 
  const [prevPath, setPrevPath] = useState(location.pathname);

  const { textEnter, textLeave } = useCursor();
  const { isMenuOpen, toggleMenu } = useMenu();

  useEffect(() => {
    if (prevPath !== location.pathname) {
      const prevLink = document.querySelector(`[data-path='${prevPath}'] .underline-anim`);
      if (prevLink) {
        gsap.to(prevLink, {
          scaleX: 0,
          duration: 0.4,
          ease: "power2.out",
          transformOrigin: "right",
        });
      }

      setPrevPath(location.pathname);
    }
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  return (
    <nav className="fixed lg:relative top-0 left-0 w-full z-50 bg-warna5/50 backdrop-blur-md lg:bg-warna5">
      {/* Main Navigation Bar */}
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="z-50">
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-warna2 font-bold text-2xl ">
            NurAdli.
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {mainRoutes.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                data-path={item.path}
                onMouseEnter={(e) => {
                  textEnter();
                  const underline = e.currentTarget.querySelector(".underline-anim");
                  gsap.to(underline, {
                    scaleX: 1,
                    duration: 0.4,
                    transformOrigin: "left",
                    overwrite: true,
                  });
                }}
                onMouseLeave={(e) => {
                  textLeave();
                  const underline = e.currentTarget.querySelector(".underline-anim");
                  const isActive = e.currentTarget.classList.contains("router-link-active"); // ← cek jika NavLink aktif
                  if (!isActive) {
                    gsap.to(underline, {
                      scaleX: 0,
                      duration: 0.4,
                      ease: "power2.out",
                      transformOrigin: "right",
                      overwrite: true,
                    });
                  }
                }}
                className={({ isActive }) => `relative group px-3 py-2 transition-colors duration-300 ${isActive ? "text-warna4 font-semibold router-link-active" : "text-warna2 hover:text-warna4"}`}
              >
                {({ isActive }) => (
                  <>
                    <span className="text-warna4 mr-1.5">*</span>
                    {item.name}
                    <span className={`absolute left-3 right-3 bottom-0 h-[2px] bg-warna4 ${isActive ? "scale-x-100" : "scale-x-0"} underline-anim`} style={{ transformOrigin: "left", transform: `scaleX(${isActive ? 1 : 0})` }} />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button className="lg:hidden focus:outline-none z-50" onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`w-6 flex flex-col gap-1 items-end ${isMenuOpen ? "gap-1.5" : ""}`}>
            <span className={`block h-0.5 w-6 bg-warna1 rounded-md transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-warna1 rounded-md transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-0.5 w-4 bg-warna1 rounded-md transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2 w-6" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 h-screen bg-warna6 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}`}>
        <div className="h-full flex flex-col items-center justify-center">
          <ul className="space-y-8 text-justify">
            {mainRoutes.map((item) => (
              <li key={item.path}>
                <Link to={item.path} onClick={toggleMenu} className="inline-block text-2xl text-warna2 px-4 py-2 hover:text-warna4 transition-colors">
                  <span className="text-warna4 mr-2">*</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
