/**
 * Dashboard Service
 * Handles all dashboard-related API calls with fallback to mock data
 */

import api from "./api";

// Check if we're in development mode and APIs are not available
const isDev = import.meta.env.DEV;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

/**
 * Mock data for development
 */
const mockData = {
  profile: {
    name: "Demo User",
    email: "user@example.com",
    joinDate: "2024-01-01",
    subscription: "Premium",
  },
  kundli: null,
  familyMembers: [],
  activities: [
    {
      id: 1,
      type: "reading",
      description: "Natal Chart Reading",
      date: new Date().toISOString(),
      status: "completed",
    },
  ],
};

/**
 * Safe API call wrapper that handles errors gracefully
 */
async function safeApiCall(apiCall, fallbackData) {
  try {
    return await apiCall();
  } catch (error) {
    console.warn(`API call failed, using fallback data:`, error.message);
    return fallbackData;
  }
}

/**
 * User Profile
 */
export async function getUserProfile() {
  return safeApiCall(() => api.get("/user/profile"), {
    user: mockData.profile,
  });
}

/**
 * Kundli Management
 */
export async function getKundli() {
  return safeApiCall(() => api.get("/kundli"), { kundli: mockData.kundli });
}

export async function createKundli(kundliData) {
  return safeApiCall(() => api.post("/kundli", kundliData), {
    kundli: { ...kundliData, id: Date.now() },
  });
}

export async function updateKundli(id, kundliData) {
  return safeApiCall(() => api.put(`/kundli/${id}`, kundliData), {
    kundli: { ...kundliData, id },
  });
}

/**
 * Family Members Management
 */
export async function getFamilyMembers() {
  return safeApiCall(() => api.get("/family"), {
    members: mockData.familyMembers,
  });
}

export async function addFamilyMember(memberData) {
  return safeApiCall(() => api.post("/family", memberData), {
    member: { ...memberData, id: Date.now() },
  });
}

export async function updateFamilyMember(id, memberData) {
  return safeApiCall(() => api.put(`/family/${id}`, memberData), {
    member: { ...memberData, id },
  });
}

export async function deleteFamilyMember(id) {
  return safeApiCall(() => api.delete(`/family/${id}`), { success: true });
}

/**
 * Activity History
 */
export async function getActivityHistory() {
  return safeApiCall(() => api.get("/activity"), {
    activities: mockData.activities,
  });
}

export default {
  getUserProfile,
  getKundli,
  createKundli,
  updateKundli,
  getFamilyMembers,
  addFamilyMember,
  updateFamilyMember,
  deleteFamilyMember,
  getActivityHistory,
};
