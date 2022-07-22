import { X } from "phosphor-react";

interface MenuProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export const Menu = ({ closeMenu, isMenuOpen }: MenuProps) => {
  return (
    <div
      className={`w-full h-screen overflow-auto bg-gray-700 md:hidden z-50 ${
        isMenuOpen ? "absolute" : "hidden"
      }`}
    >
      <button onClick={closeMenu}>
        <X size={30} color="#81D8F7" />
      </button>
    </div>
  );
};
