/**
 * Base API configuration and utilities
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

/**
 * Generic fetch wrapper with error handling and auth token support
 */
async function request(endpoint, options = {}) {
  const token = localStorage.getItem("authToken");

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

  // Handle 401 Unauthorized - clear token and redirect
  if (response.status === 401) {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    window.location.href = "/login";
    throw new Error("Session expired. Please login again.");
  }

  // Check if response has content before trying to parse JSON
  let data = {};

  const contentType = response.headers.get("content-type");
  const hasContent = response.headers.get("content-length") !== "0";

  if (contentType && contentType.includes("application/json") && hasContent) {
    try {
      data = await response.json();
    } catch (jsonError) {
      console.error("Failed to parse JSON response:", jsonError);
      data = {};
    }
  } else if (hasContent) {
    // Handle non-JSON responses
    data = { message: await response.text() };
  }

  if (!response.ok) {
    throw new Error(
      data.message || `HTTP ${response.status}: ${response.statusText}`,
    );
  }

  return data;
}

/**
 * HTTP method helpers
 */
export const api = {
  get: (endpoint) => request(endpoint, { method: "GET" }),

  post: (endpoint, body) =>
    request(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    }),

  put: (endpoint, body) =>
    request(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    }),

  delete: (endpoint) => request(endpoint, { method: "DELETE" }),
};

export default api;
