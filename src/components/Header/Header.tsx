import { List } from "phosphor-react";
import { Link } from "react-router-dom";

import { Logo, UserInfo } from "..";

interface HeaderProps {
  toggleMenu: () => void;
}

export const Header = ({ toggleMenu }: HeaderProps) => {
  return (
    <header className="flex h-24 p-5 justify-between items-center bg-gray-700 border-b border-gray-600">
      <Link to="/lessons">
        <Logo />
      </Link>
      <UserInfo page="lessons" />
      <div className="flex items-center gap-4 lg:hidden">
        <span className="text-[0.6rem] font-medium text-blue-500">LESSONS</span>
        <button onClick={toggleMenu}>
          <List size={30} aria-label="open mobile menu" color="#81D8F7" />
        </button>
      </div>
    </header>
  );
};
