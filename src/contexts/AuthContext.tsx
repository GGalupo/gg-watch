import { createContext, useEffect, useState, type ReactNode } from "react";

import { supabaseClient } from "../lib";

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

  const signInWithGitHub = async () => {
    try {
      await supabaseClient.auth.signIn({
        provider: "github",
      });
    } catch (e) {
      // TODO: better error handling
      console.error(e);
    }
  };

  const signOut = async () => {
    try {
      await supabaseClient.auth.signOut();
      setUser(null);
    } catch (e) {
      // TODO: better error handling
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGitHub, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
