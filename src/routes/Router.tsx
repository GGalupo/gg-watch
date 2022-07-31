import { Route, Routes } from "react-router-dom";

import { Logo, ReactIcon } from "../components";
import { useAuth } from "../hooks";
import { Event, Subscribe } from "../pages";

import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
  const { isLoadingAuth } = useAuth();

  if (isLoadingAuth)
    return (
      <div className="w-full h-screen bg-gray-800 flex flex-col gap-7 justify-center items-center">
        <Logo />
        <ReactIcon className="w-28 h-28 animate-spin-slow fill-blue-500" />
      </div>
    );

  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route
        path="/lessons"
        element={
          <PrivateRoute>
            <Event />
          </PrivateRoute>
        }
      />
      <Route
        path="/lessons/:slug"
        element={
          <PrivateRoute>
            <Event />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
