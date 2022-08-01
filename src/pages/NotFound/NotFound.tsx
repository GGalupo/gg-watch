import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-5 items-center mt-20 font-medium">
      <h1 className="text-2xl">404 - Page not found</h1>
      <p className="text-lg">We couldn't find the page you want 😥</p>
      <Link
        className="text-lg outline px-6 py-4 rounded bg-blue-500 text-black mt-5"
        to="/"
      >
        Back to home
      </Link>
    </div>
  );
};
