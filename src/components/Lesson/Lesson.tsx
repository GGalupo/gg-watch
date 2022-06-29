import { CheckCircle } from "phosphor-react";

export const Lesson = () => {
  return (
    <a href="#">
      <time className="text-gray-300 text-sm">Tuesday • June 22 • 7pm</time>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
            <CheckCircle size={20} />
            Watchable
          </span>
          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
            LIVE
          </span>
        </header>

        <strong className="text-gray-200 block mt-4">What is ReactJS</strong>
      </div>
    </a>
  );
};
