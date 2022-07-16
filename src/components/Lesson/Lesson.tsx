import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export const Lesson = ({
  title,
  slug: lessonSlug,
  availableAt,
  type,
}: LessonProps) => {
  const { slug } = useParams<{ slug: string }>();
  const isActiveLesson = slug === lessonSlug;

  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'MMM do', 'yyyy' • 'p"
  );

  return (
    <Link to={`/lessons/${lessonSlug}`} className="group">
      <time className="text-gray-300 text-sm">{availableDateFormatted}</time>

      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
          {
            "bg-green-500": isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "flex items-center gap-2 text-sm font-medium",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
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
            <span
              className={classNames(
                "text-xs rounded px-2 py-[0.125rem] text-white border font-bold",
                {
                  "border-green-300": !isActiveLesson,
                  "border-white": isActiveLesson,
                }
              )}
            >
              LIVE
            </span>
          )}
        </header>

        <strong
          className={classNames("block mt-4", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};
