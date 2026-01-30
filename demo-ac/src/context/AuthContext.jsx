/**
 * Auth Context Provider
 * Manages authentication state across the application
 */

/* eslint-disable react-refresh/only-export-components */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import authService from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Initialize auth state from localStorage on mount
   */
  useEffect(() => {
    const initializeAuth = async () => {
      const token = authService.getToken();

      if (token) {
        try {
          // Verify token with backend
          const response = await authService.getCurrentUser();
          if (response.user) {
            setUser(response.user);
            setIsAuthenticated(true);
          }
        } catch (error) {
          // Token is invalid, clear auth data
          console.warn("Auth initialization failed:", error.message);
          authService.clearAuthData();
          setUser(null);
          setIsAuthenticated(false);
        }
      }

      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  /**
   * Login handler
   */
  const login = useCallback(async (credentials) => {
    const response = await authService.login(credentials);

    if (response.user) {
      setUser(response.user);
      setIsAuthenticated(true);
    }

    return response;
  }, []);

  /**
   * Register handler
   */
  const register = useCallback(async (userData) => {
    const response = await authService.register(userData);
    return response;
  }, []);

  /**
   * Logout handler
   */
  const logout = useCallback(async () => {
    await authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  /**
   * Google OAuth login handler
   */
  const loginWithGoogle = useCallback(async (credential) => {
    const response = await authService.loginWithGoogle(credential);
    if (response.user) {
      setUser(response.user);
      setIsAuthenticated(true);
    }
    return response;
  }, []);

  /**
   * Apple OAuth login handler
   */
  const loginWithApple = useCallback(async (appleResponse) => {
    const response = await authService.loginWithApple(appleResponse);
    if (response.user) {
      setUser(response.user);
      setIsAuthenticated(true);
    }
    return response;
  }, []);

  /**
   * Refresh user data from API
   */
  const refreshUser = useCallback(async () => {
    try {
      const response = await authService.getCurrentUser();
      if (response.user) {
        setUser(response.user);
      }
      return response.user;
    } catch (error) {
      console.error("Failed to refresh user:", error);
      return null;
    }
  }, []);

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    loginWithGoogle,
    loginWithApple,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook to use auth context
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export default AuthContext;
