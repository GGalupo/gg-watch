import { Lesson } from "..";
import { useGetLessonsQuery } from "../../graphql";

export const Sidebar = () => {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="w-[22rem] bg-gray-700 p-6 border-l border-gray-600">
      <h3 className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500">
        Lessons schedule
      </h3>

      <div className="flex flex-col gap-8">
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
    </aside>
  );
};
