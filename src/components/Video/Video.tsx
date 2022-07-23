import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";

import { useGetLessonBySlugQuery } from "../../graphql";

import "@vime/core/themes/default.css";

interface VideoProps {
  lessonSlug: string;
}

export const Video = ({ lessonSlug }: VideoProps) => {
  const { data, loading, error } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  });

  return (
    <div className="flex-1">
      {loading ? (
        <p>Loading lesson...</p>
      ) : error ? (
        <p>Error! {error.message}</p>
      ) : (
        data &&
        data?.lesson && (
          <>
            <div className="flex justify-center bg-black">
              <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                <Player>
                  <Youtube videoId={data.lesson.videoId} />
                  <DefaultUi />
                </Player>
              </div>
            </div>

            <div className="p-6 sm:p-8 max-w-[1100px] mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-start gap-16">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
                  <p className="mt-4 text-gray-200 leading-relaxed">
                    {data.lesson.description}
                  </p>

                  {data.lesson.teacher && (
                    <div className="flex items-center gap-4 mt-10 md:mt-6">
                      <img
                        src={data.lesson.teacher.avatarURL}
                        alt={data.lesson.teacher.name}
                        className="h-16 w-16 rounded-full border-2 border-blue-500"
                      />

                      <div className="leading-relaxed">
                        <strong className="font-bold text-xl block">
                          {data.lesson.teacher.name}
                        </strong>
                        <span className="text-gray-200 text-sm block">
                          {data.lesson.teacher.bio}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col xs:flex-row sm:flex-col flex-wrap justify-between gap-4">
                  <a
                    href="#"
                    className="flex-1 p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
                  >
                    <DiscordLogo size={24} />
                    Join discord server
                  </a>

                  <a
                    href="#"
                    className="flex-1 p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
                  >
                    <Lightning size={24} />
                    Lesson challenge
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8 mt-12 sm:mt-20">
                <a
                  href="#"
                  className="bg-gray-700 rounded overflow-hidden flex gap-6 hover:bg-gray-600 transition-colors pr-4 xs:pr-0"
                >
                  <div className="bg-green-700 h-full p-6 flex items-center">
                    <FileArrowDown size={40} />
                  </div>
                  <div className="py-6 leading-relaxed flex-1">
                    <strong className="text-xl xs:text-2xl">
                      Lesson files
                    </strong>
                    <p className="text-sm text-gray-200 mt-2">
                      Get the documents and exercises from this lesson to
                      improve your knowledge
                    </p>
                  </div>
                  <div className="h-full p-6 hidden xs:flex items-center">
                    <CaretRight size={24} />
                  </div>
                </a>

                <a
                  href="#"
                  className="bg-gray-700 rounded overflow-hidden flex gap-6 hover:bg-gray-600 transition-colors pr-4 xs:pr-0"
                >
                  <div className="bg-green-700 h-full p-6 flex items-center">
                    <Image size={40} />
                  </div>
                  <div className="py-6 leading-relaxed flex-1">
                    <strong className="text-xl xs:text-2xl">Wallpapers</strong>
                    <p className="text-sm text-gray-200 mt-2">
                      Download beautiful wallpapers to use wherever you want
                    </p>
                  </div>
                  <div className="h-full p-6 hidden xs:flex items-center">
                    <CaretRight size={24} />
                  </div>
                </a>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};
