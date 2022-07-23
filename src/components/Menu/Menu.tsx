import { X } from "phosphor-react";

import { Logo } from "../Logo";

interface MenuProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export const Menu = ({ closeMenu, isMenuOpen }: MenuProps) => {
  return (
    <div
      className={`w-full h-screen overflow-y-auto bg-gray-700 lg:hidden backdrop-blur-sm z-[9999] ${
        isMenuOpen ? "absolute inset-0" : "hidden"
      }`}
    >
      <header className="flex p-5 justify-between items-center bg-gray-700 border-b border-gray-600">
        <Logo />
        <button onClick={closeMenu}>
          <X size={30} color="#81D8F7" />
        </button>
      </header>
    </div>
  );
};
