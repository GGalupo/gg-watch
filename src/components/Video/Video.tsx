import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";

import "@vime/core/themes/default.css";

export const Video = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-center bg-black">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="N3AkSS5hXMA" />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Lesson 01 - What is ReactJS</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              quo explicabo magnam ipsum aut qui voluptatibus repellendus sequi
              soluta voluptatum iure eius repellat vitae cumque, pariatur
              recusandae. Repudiandae, minus distinctio.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://github.com/GGalupo.png"
                alt="Gustavo Galupo"
                className="h-16 w-16 rounded-full border-2 border-blue-500"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-xl block">
                  Gustavo Galupo
                </strong>
                <span className="text-gray-200 text-sm block">
                  Front-end developer
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Join discord server
            </a>

            <a
              href="#"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Lesson challenge
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-20">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Lesson files</strong>
              <p className="text-sm text-gray-200 mt-2">
                Get the documents and exercises from this lesson to improve your
                knowledge
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers</strong>
              <p className="text-sm text-gray-200 mt-2">
                Download beautiful wallpapers to use wherever you want
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
