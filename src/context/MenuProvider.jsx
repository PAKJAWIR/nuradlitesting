import { useState } from "react";
import { MenuContext } from "./MenuContext";

export function MenuProvider({ children }) {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen((prev) => !prev);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}