import { X } from "phosphor-react";

import { Lesson, Logo, UserInfo } from "..";
import { useGetLessonsQuery } from "../../graphql";

interface MenuProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export const Menu = ({ closeMenu, isMenuOpen }: MenuProps) => {
  const { data } = useGetLessonsQuery();

  return (
    <div
      className={`w-full h-screen overflow-y-auto bg-gray-700 lg:hidden backdrop-blur-sm z-[9999] ${
        isMenuOpen ? "absolute inset-0" : "hidden"
      }`}
    >
      <header className="flex h-24 p-5 mb-2 justify-between items-center bg-gray-700 border-b border-gray-600">
        <Logo />
        <button onClick={closeMenu}>
          <X size={30} aria-label="close mobile menu" color="#81D8F7" />
        </button>
      </header>

      <div className="flex flex-col gap-8 p-6">
        <UserInfo page="menu" />
        <h3 className="font-bold text-2xl">Lessons schedule</h3>
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.slug}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </div>
  );
};
