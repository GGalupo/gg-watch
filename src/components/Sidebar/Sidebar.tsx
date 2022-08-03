import { Lesson } from "..";
import { useGetLessonsQuery } from "../../graphql";

export const Sidebar = () => {
  const { data, loading, error, refetch } = useGetLessonsQuery();

  const refetchOnError = async () => {
    await refetch();
  };

  return (
    <aside className="hidden lg:block w-[22rem] bg-gray-700 p-6 border-l border-gray-600">
      <h3 className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500">
        Lessons schedule
      </h3>

      <div className="flex flex-col gap-8">
        {loading ? (
          [...Array(5)].map((_element, index) => (
            <div
              className="flex flex-col gap-3 animate-pulse"
              key={`lesson-skeleton-${index}`}
            >
              <div className="w-2/3 bg-gray-400 h-5" />
              <div className="rounded border-gray-500 bg-gray-400 h-20" />
            </div>
          ))
        ) : error ? (
          <div className="flex flex-col gap-4">
            <p>{error.message}</p>
            <button
              className="px-5 py-2 bg-blue-500 hover:brightness-90 text-black rounded font-medium hover:"
              onClick={refetchOnError}
            >
              Try again
            </button>
          </div>
        ) : (
          data?.lessons.map((lesson) => (
            <Lesson key={lesson.slug} {...lesson} />
          ))
        )}
      </div>
    </aside>
  );
};
