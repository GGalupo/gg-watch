import { createContext, useEffect, useState, type ReactNode } from "react";

type User = {
  name: string;
};

interface AuthContextData {
  user: User | null;
  signInWithGitHub: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {}, []);

  const signInWithGitHub = async () => {};

  const signOut = async () => {};

  return (
    <AuthContext.Provider value={{ user, signInWithGitHub, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};