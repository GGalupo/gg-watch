// import { type FormEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";

import pageImage from "../../assets/subscribe-page-img.png";
import { GitHubIcon, Logo, UserInfo } from "../../components";
// import { useCreateSubscriberMutation } from "../../graphql";
import { useAuth } from "../../hooks";

export const Subscribe = () => {
  // const [createSubscriber, { loading }] = useCreateSubscriberMutation();
  // const navigate = useNavigate();
  const { signInWithGitHub, user } = useAuth();

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const handleSubscribe = async (event: FormEvent) => {
  //   event.preventDefault();

  //   try {
  //     await createSubscriber({
  //       variables: {
  //         name,
  //         email,
  //       },
  //     });

  //     navigate("/lessons");
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center px-6">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row md:items-center justify-between gap-6 mt-10 md:mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-12 md:mt-8 text-[2.5rem] leading-tight">
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

        <div className="p-8 bg-gray-700 border border-gray-500 rounded md:min-w-[380px] mt-6 md:mt-0">
          {user ? (
            <>
              <strong className="text-2xl mb-6 block">Welcome!</strong>
              <UserInfo page="home" />
            </>
          ) : (
            <>
              <strong className="text-2xl mb-3 block">Watch for free</strong>
              <p className="mb-4 text-gray-100">
                Login with your GitHub account to watch the lessons which have
                been already released.
              </p>
              <button
                onClick={signInWithGitHub}
                className="bg-gray-900 hover:bg-gray-800 transition-colors text-white font-medium flex items-center justify-center gap-3 rounded px-3 py-2 w-full h-16"
              >
                <GitHubIcon />
                Sign in with GitHub
              </button>
            </>
          )}

          {/* <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              placeholder="Your name"
              className="bg-gray-900 rounded px-5 h-14"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your best e-mail"
              className="bg-gray-900 rounded px-5 h-14"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Subscribe now
            </button>
          </form> */}
        </div>
      </div>
      <img src={pageImage} className="mt-10" />
    </div>
  );
};
