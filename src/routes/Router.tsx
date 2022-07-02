import { Route, Routes } from "react-router-dom";

import { Event } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/lessons" element={<Event />} />
    </Routes>
  );
};
