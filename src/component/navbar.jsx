import { Link, NavLink } from "react-router-dom";
import AppRouting from "../config/AppRoutes";
import { useMenu } from "../context/UseMenu";
import { useEffect } from "react";

function Navbar() {
  const { isMenuOpen, toggleMenu } = useMenu();
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <nav className={`relative top-0 left-0 w-full z-50 flex items-center p-4 justify-between lg:justify-around bg-transparent transition-all duration-300`}>
      <Link to="/">
        <h1 className="text-warna2 font-bold text-2xl">NurAdli.</h1>
      </Link>

      {/* Tombol Hamburger */}
      <button className="lg:hidden focus:outline-none z-50" onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`w-6 flex flex-col gap-1 items-end ${isMenuOpen ? "gap-1.5" : ""}`}>
          <span className={`block h-0.5 w-6 bg-warna1 rounded-md transition-all duration-300 ${isMenuOpen ? " rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-5 bg-warna1 rounded-md transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-4 bg-warna1 rounded-md transition-all duration-300 ${isMenuOpen ? " -rotate-45 -translate-y-2 w-6" : ""}`} />
        </div>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex text-warna2 gap-9">
        {AppRouting.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path}>
              {({ isActive }) => (
                <span className={`relative group ${isActive ? "text-warna4 font-bold" : "text-warna2 hover:text-warna4"}`}>
                  <span className="text-warna4 mr-1">*</span>
                  {item.name}
                  <span className={`absolute left-0 h-[2px] bg-warna4 transition-all duration-300 ease-in-out bottom-[-2px] ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-warna6 z-1 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
        <ul className="flex flex-col gap-10 text-2xl">
          {AppRouting.map((item) => (
            <li key={item.path}>
              <Link to={item.path} onClick={toggleMenu} className="text-warna2 relative group">
                <span className="text-warna4">*</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
