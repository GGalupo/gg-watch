import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useSignOut = () => {
  const navigate = useNavigate();
  const { signOut: signOutFromGitHub } = useAuth();

  const signOut = async () => {
    await signOutFromGitHub();
    navigate("/", { replace: true });
  };

  return { signOut };
};
