/**
 * Authentication Service
 * Handles login, register, logout, and session management
 */

import api from "./api";

const AUTH_TOKEN_KEY = "authToken";
const USER_KEY = "user";

/**
 * Register a new user
 * @param {Object} userData - { name, email, password }
 */
export async function register(userData) {
  try {
    const response = await api.post("/auth/register", userData);
    return response;
  } catch (error) {
    console.warn("Registration API not available:", error.message);
    // For development, simulate success
    return {
      user: { name: userData.name, email: userData.email },
      token: "demo-token",
    };
  }
}

/**
 * Login user and store credentials
 * @param {Object} credentials - { email, password }
 */
export async function login(credentials) {
  try {
    const response = await api.post("/auth/login", credentials);

    if (response.token) {
      localStorage.setItem(AUTH_TOKEN_KEY, response.token);
    }

    if (response.user) {
      localStorage.setItem(USER_KEY, JSON.stringify(response.user));
    }

    return response;
  } catch (error) {
    console.warn("Login API not available:", error.message);
    // For development, simulate success
    const mockUser = { name: "Demo User", email: credentials.email };
    const mockToken = "demo-token";

    localStorage.setItem(AUTH_TOKEN_KEY, mockToken);
    localStorage.setItem(USER_KEY, JSON.stringify(mockUser));

    return { user: mockUser, token: mockToken };
  }
}

/**
 * Logout user and clear credentials
 */
export async function logout() {
  try {
    await api.post("/auth/logout", {});
  } catch (error) {
    // Even if API call fails, clear local state
    console.warn("Logout API call failed:", error.message);
  } finally {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }
}

/**
 * Get current authenticated user from API
 */
export async function getCurrentUser() {
  try {
    const response = await api.get("/auth/me");

    if (response.user) {
      localStorage.setItem(USER_KEY, JSON.stringify(response.user));
    }

    return response;
  } catch (error) {
    console.warn("getCurrentUser API not available:", error.message);
    // Fall back to stored user data
    const storedUser = getStoredUser();
    return { user: storedUser };
  }
}

/**
 * Check if user is authenticated (local check)
 */
export function isAuthenticated() {
  return !!localStorage.getItem(AUTH_TOKEN_KEY);
}

/**
 * Get stored auth token
 */
export function getToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

/**
 * Get stored user data (local)
 */
export function getStoredUser() {
  const userStr = localStorage.getItem(USER_KEY);
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * Google OAuth login
 * @param {string} credential - Google JWT credential
 */
export async function loginWithGoogle(credential) {
  try {
    const response = await api.post("/auth/google", { credential });

    if (response.token) {
      localStorage.setItem(AUTH_TOKEN_KEY, response.token);
    }

    if (response.user) {
      localStorage.setItem(USER_KEY, JSON.stringify(response.user));
    }

    return response;
  } catch (error) {
    console.warn("Google OAuth API not available:", error.message);

    // For development, decode the Google token and create a mock user
    try {
      const payload = JSON.parse(atob(credential.split(".")[1]));
      const mockUser = {
        name: payload.name || "Google User",
        email: payload.email,
        picture: payload.picture,
        provider: "google",
      };
      const mockToken = "google-demo-token";

      localStorage.setItem(AUTH_TOKEN_KEY, mockToken);
      localStorage.setItem(USER_KEY, JSON.stringify(mockUser));

      return { user: mockUser, token: mockToken };
    } catch (decodeError) {
      throw new Error("Failed to process Google authentication");
    }
  }
}

/**
 * Apple OAuth login
 * @param {Object} appleResponse - Apple Sign In response
 */
export async function loginWithApple(appleResponse) {
  try {
    const response = await api.post("/auth/apple", appleResponse);

    if (response.token) {
      localStorage.setItem(AUTH_TOKEN_KEY, response.token);
    }

    if (response.user) {
      localStorage.setItem(USER_KEY, JSON.stringify(response.user));
    }

    return response;
  } catch (error) {
    console.warn("Apple OAuth API not available:", error.message);

    // For development, create a mock Apple user
    const mockUser = {
      name: appleResponse.authorization?.id_token ? "Apple User" : "Apple User",
      email:
        appleResponse.authorization?.email || "user@privaterelay.appleid.com",
      provider: "apple",
    };
    const mockToken = "apple-demo-token";

    localStorage.setItem(AUTH_TOKEN_KEY, mockToken);
    localStorage.setItem(USER_KEY, JSON.stringify(mockUser));

    return { user: mockUser, token: mockToken };
  }
}

/**
 * Clear all auth data
 */
export function clearAuthData() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export default {
  register,
  login,
  loginWithGoogle,
  loginWithApple,
  logout,
  getCurrentUser,
  isAuthenticated,
  getToken,
  getStoredUser,
  clearAuthData,
};
