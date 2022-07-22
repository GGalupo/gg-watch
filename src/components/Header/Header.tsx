import { List } from "phosphor-react";

import { Logo } from "..";

interface HeaderProps {
  toggleMenu: () => void;
}

export const Header = ({ toggleMenu }: HeaderProps) => {
  return (
    <header className="flex p-5 justify-between lg:justify-center items-center bg-gray-700 border-b border-gray-600">
      <Logo />
      <button className="lg:hidden" onClick={toggleMenu}>
        <List size={30} aria-label="open mobile menu" color="#81D8F7" />
      </button>
    </header>
  );
};
