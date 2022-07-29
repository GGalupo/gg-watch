import { createContext, useEffect, useState, type ReactNode } from "react";

import { supabaseClient } from "../lib";
import type { User } from "../types";

interface AuthContextData {
  isLoadingAuth: boolean;
  user: User | null;
  signInWithGitHub: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let mounted = true;
    const getUserSession = async () => {
      const session = supabaseClient.auth.session();

      if (session) {
        await new Promise((res) => setTimeout(res, 400));

        setUser({
          name: session.user?.user_metadata.name || "",
          email: session.user?.email || "",
          imageURL: session.user?.user_metadata.avatar_url || "",
        });
      }

      setIsLoadingAuth(false);

      return () => {
        mounted = false;
      };
    };

    getUserSession();
  }, []);

  useEffect(() => {
    const { data } = supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser({
          name: session?.user?.user_metadata.name || "",
          email: session?.user?.email || "",
          imageURL: session?.user?.user_metadata.avatar_url || "",
        });
      }
    });

    return () => {
      if (data) {
        data.unsubscribe();
      }
    };
  }, []);

  const signInWithGitHub = async () => {
    try {
      const { error } = await supabaseClient.auth.signIn({
        provider: "github",
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const signOut = async () => {
    try {
      await supabaseClient.auth.signOut();
      setUser(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoadingAuth, user, signInWithGitHub, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
