import { Link } from "react-router-dom";

import { useAuth } from "../../hooks";

export const UserInfo = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="flex items-center gap-4">
      <img
        src={user?.imageURL}
        alt={user?.name}
        className="rounded-full w-14 h-14 self-start"
      />
      <div className="flex flex-col">
        <span className="font-bold">{user?.name}</span>
        <span className="text-sm">{user?.email}</span>
        <div className="flex items-center gap-4 mt-2">
          <Link
            to="/lessons"
            className="text-blue-500 font-medium hover:font-bold"
          >
            Go to lessons
          </Link>
          <button
            onClick={signOut}
            className="text-red-400  font-medium hover:font-bold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
