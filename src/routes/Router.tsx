import { Route, Routes } from "react-router-dom";

import { Event, Subscribe } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/lessons" element={<Event />} />
      <Route path="/lessons/:slug" element={<Event />} />
    </Routes>
  );
};
