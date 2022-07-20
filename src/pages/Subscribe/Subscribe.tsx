import { gql, useMutation } from "@apollo/client";
import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "../../components";
import { useCreateSubscriberMutation } from "../../graphql";

export const Subscribe = () => {
  const [createSubscriber, { loading }] = useCreateSubscriberMutation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await createSubscriber({
        variables: {
          name,
          email,
        },
      });

      navigate("/lessons");
    } catch (e) {
      console.error(e);
    }
  };

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

          <form
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
          </form>
        </div>
      </div>
      <img src="/src/assets/subscribe-page-img.png" className="mt-10" />
    </div>
  );
};
