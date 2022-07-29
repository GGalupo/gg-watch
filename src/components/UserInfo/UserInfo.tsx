import { Link } from "react-router-dom";

import { useAuth } from "../../hooks";

interface UserInfoProps {
  isLessonsPages?: boolean;
}

export const UserInfo = ({ isLessonsPages }: UserInfoProps) => {
  const { user, signOut } = useAuth();

  return (
    <div
      className={`items-center gap-4 ${
        isLessonsPages ? "hidden lg:flex" : "flex"
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
          className={`flex items-center gap-4 ${isLessonsPages ? "" : "mt-2"}`}
        >
          {!isLessonsPages && (
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
              isLessonsPages ? "self-start mt-1" : ""
            }`}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
