import { List } from "phosphor-react";

import { Logo } from "..";

interface HeaderProps {
  toggleMenu: () => void;
}

export const Header = ({ toggleMenu }: HeaderProps) => {
  return (
    <header className="flex p-5 justify-between lg:justify-center items-center bg-gray-700 border-b border-gray-600">
      <Logo />
      <div className="flex items-center gap-4 lg:hidden">
        <span className="text-[0.6rem] font-medium text-blue-500">LESSONS</span>
        <button onClick={toggleMenu}>
          <List size={30} aria-label="open mobile menu" color="#81D8F7" />
        </button>
      </div>
    </header>
  );
};
