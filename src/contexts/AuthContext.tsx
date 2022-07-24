import { createContext, useState, type ReactNode } from "react";

type User = {
  name: string;
};

interface AuthContextData {
  user: User;
  signInWithGitHub: () => void;
  signOut: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
