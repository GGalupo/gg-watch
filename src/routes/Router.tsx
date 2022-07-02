import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/lessons" element={<h1>Lessons</h1>} />
    </Routes>
  );
};
