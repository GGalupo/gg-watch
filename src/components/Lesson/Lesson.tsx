import { CheckCircle, Lock } from "phosphor-react";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "recorded";
}

export const Lesson = ({ title, slug, availableAt, type }: LessonProps) => {
  const isLessonAvailable = false;

  return (
    <a href="#">
      <time className="text-gray-300 text-sm">{availableAt.toString()}</time>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Watchable
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Coming soon
            </span>
          )}

          {type === "live" && (
            <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
              LIVE
            </span>
          )}
        </header>

        <strong className="text-gray-200 block mt-4">{title}</strong>
      </div>
    </a>
  );
};
