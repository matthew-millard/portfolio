import { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { IS_AUTHENTICATED } from "../graphql/queries";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { data, loading, error } = useQuery(IS_AUTHENTICATED);

  //   Check if user is authenticated when app initializes
  useEffect(() => {
    if (!loading) {
      if (error) {
        console.error("Error checking authentication status:", error);
      } else if (data && data.isAuthenticated) {
        setIsAuthenticated(data.isAuthenticated.isAuthenticated);
      }
      setIsLoading(false);
    }
  }, [data, loading, error]);

  const logout = async () => {
    setIsAuthenticated(false);
    // TODO: Send a request to your server to clear the cookie
  };

  const setAuthenticated = (state) => {
    setIsAuthenticated(state);
  };

  const value = {
    isAuthenticated,
    isLoading,
    logout,
    setAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
