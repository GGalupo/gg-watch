import { type ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks";

interface PrivateRouteProps {
  children: ReactElement;
  redirectPath?: string;
}

export const PrivateRoute = ({
  children,
  redirectPath = "/",
}: PrivateRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
