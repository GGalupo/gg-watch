import { Lesson } from "..";

export const Sidebar = () => {
  return (
    <aside className="w-[22rem] bg-gray-700 p-6 border-l border-gray-600">
      <h3 className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500">
        Lessons schedule
      </h3>

      <div className="flex flex-col gap-8">
        <Lesson
          title="Lesson 01"
          slug="lesson-1"
          availableAt={new Date()}
          type="live"
        />
        {/* <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson /> */}
      </div>
    </aside>
  );
};
