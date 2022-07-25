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
    const { user, session, error } = await supabaseClient.auth.signIn({
      provider: "github",
    });

    console.log(user, session, error);
  };

  const signOut = async () => {
    await supabaseClient.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGitHub, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
