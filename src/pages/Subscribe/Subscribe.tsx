import { Logo } from "../../components";

export const Subscribe = () => {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Watch the <strong className="text-blue-500">best videos</strong> and
            become a greater <strong className="text-blue-500">ReactJS</strong>{" "}
            developer!
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Learn with the best teachers the incredible world of ReactJS, the
            most used front-end library to build beautiful and performatic user
            interfaces.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded md:min-w-[380px]">
          <strong className="text-2xl mb-5 block">Subscribe for free</strong>

          <form action="" className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="Your name"
              className="bg-gray-900 rounded px-5 h-14"
            />
            <input
              type="email"
              placeholder="Your best e-mail"
              className="bg-gray-900 rounded px-5 h-14"
            />

            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
            >
              Subscribe now
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/subscribe-page-img.png" className="mt-10" />
    </div>
  );
};
