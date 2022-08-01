import { Link } from "react-router-dom";

import { useAuth } from "../../hooks";
import { useSignOut } from "../../hooks/useSignOut";

interface UserInfoProps {
  page: "home" | "menu" | "lessons";
}

export const UserInfo = ({ page }: UserInfoProps) => {
  const { user } = useAuth();
  const { signOut } = useSignOut();

  return (
    <div
      className={`items-center gap-4 ${
        page === "lessons" ? "hidden lg:flex" : "flex"
      }`}
    >
      <img
        src={user?.imageURL}
        alt={user?.name}
        className="rounded-full w-14 h-14 self-start"
      />
      <div className="flex flex-col">
        <span className="font-bold">{user?.name}</span>
        <span className="text-sm">{user?.email}</span>

        <div
          className={`flex items-center gap-4 ${
            page === "lessons" ? "" : "mt-2"
          }`}
        >
          {page === "home" && (
            <Link
              to="/lessons"
              className="text-blue-500 font-medium hover:font-bold"
            >
              Go to lessons
            </Link>
          )}
          <button
            onClick={signOut}
            className={`text-red-400  font-medium hover:font-bold ${
              page === "lessons" ? "self-start mt-1" : ""
            }`}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
