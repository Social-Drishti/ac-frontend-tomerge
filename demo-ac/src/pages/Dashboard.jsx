import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useAuth } from "../context/AuthContext";
import dashboardService from "../services/dashboardService";
import "./Dashboard.css";

export default function Dashboard() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();

  // Dashboard data states
  const [profile, setProfile] = useState(null);
  const [kundli, setKundli] = useState(null);
  const [familyMembers, setFamilyMembers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Kundli form states
  const [kundliForm, setKundliForm] = useState({
    name: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
  });
  const [kundliSubmitting, setKundliSubmitting] = useState(false);

  // Family member form states
  const [familyForm, setFamilyForm] = useState({
    name: "",
    relationship: "",
    birthDate: "",
  });
  const [editingFamilyId, setEditingFamilyId] = useState(null);
  const [familySubmitting, setFamilySubmitting] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [authLoading, isAuthenticated, navigate]);

  // Load dashboard data
  useEffect(() => {
    if (isAuthenticated) {
      loadDashboardData();
    }
  }, [isAuthenticated]);

  async function loadDashboardData() {
    setLoading(true);
    setError("");

    try {
      const [profileRes, kundliRes, familyRes, activityRes] = await Promise.all(
        [
          dashboardService.getUserProfile().catch(() => ({ user: null })),
          dashboardService.getKundli().catch(() => ({ kundli: null })),
          dashboardService.getFamilyMembers().catch(() => ({ members: [] })),
          dashboardService
            .getActivityHistory()
            .catch(() => ({ activities: [] })),
        ],
      );

      setProfile(profileRes.user || profileRes);
      setKundli(kundliRes.kundli || kundliRes);
      setFamilyMembers(familyRes.members || familyRes || []);
      setActivities(activityRes.activities || activityRes || []);
    } catch (err) {
      setError("Failed to load dashboard data. Please try again.");
      console.error("Dashboard load error:", err);
    } finally {
      setLoading(false);
    }
  }

  // Kundli handlers
  function handleKundliChange(e) {
    setKundliForm({ ...kundliForm, [e.target.name]: e.target.value });
  }

  async function handleKundliSubmit(e) {
    e.preventDefault();
    setKundliSubmitting(true);

    try {
      const response = await dashboardService.createKundli(kundliForm);
      setKundli(response.kundli || response);
      setKundliForm({ name: "", birthDate: "", birthTime: "", birthPlace: "" });
    } catch (err) {
      setError(err.message || "Failed to save Kundli");
    } finally {
      setKundliSubmitting(false);
    }
  }

  // Family member handlers
  function handleFamilyChange(e) {
    setFamilyForm({ ...familyForm, [e.target.name]: e.target.value });
  }

  async function handleFamilySubmit(e) {
    e.preventDefault();
    setFamilySubmitting(true);

    try {
      if (editingFamilyId) {
        const response = await dashboardService.updateFamilyMember(
          editingFamilyId,
          familyForm,
        );
        setFamilyMembers((prev) =>
          prev.map((m) =>
            m.id === editingFamilyId ? response.member || response : m,
          ),
        );
        setEditingFamilyId(null);
      } else {
        const response = await dashboardService.addFamilyMember(familyForm);
        setFamilyMembers((prev) => [...prev, response.member || response]);
      }
      setFamilyForm({ name: "", relationship: "", birthDate: "" });
    } catch (err) {
      setError(err.message || "Failed to save family member");
    } finally {
      setFamilySubmitting(false);
    }
  }

  function handleEditFamily(member) {
    setEditingFamilyId(member.id);
    setFamilyForm({
      name: member.name,
      relationship: member.relationship,
      birthDate: member.birthDate,
    });
  }

  async function handleDeleteFamily(id) {
    if (
      !window.confirm("Are you sure you want to delete this family member?")
    ) {
      return;
    }

    try {
      await dashboardService.deleteFamilyMember(id);
      setFamilyMembers((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      setError(err.message || "Failed to delete family member");
    }
  }

  function cancelFamilyEdit() {
    setEditingFamilyId(null);
    setFamilyForm({ name: "", relationship: "", birthDate: "" });
  }

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div>
        <Navbar />
        <div className="dashboard-container">
          <div className="dashboard-loading">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  // Don't render if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Welcome to Your Dashboard</h1>

        {error && <div className="dashboard-error">{error}</div>}

        {loading ? (
          <div className="dashboard-loading">Loading your data...</div>
        ) : (
          <div className="dashboard-grid">
            {/* User Profile Section */}
            <section className="dashboard-section dashboard-profile">
              <h2 className="dashboard-section-title">Your Profile</h2>
              <div className="dashboard-profile-content">
                <div className="dashboard-profile-item">
                  <span className="dashboard-label">Name:</span>
                  <span className="dashboard-value">
                    {profile?.name || user?.name || "—"}
                  </span>
                </div>
                <div className="dashboard-profile-item">
                  <span className="dashboard-label">Email:</span>
                  <span className="dashboard-value">
                    {profile?.email || user?.email || "—"}
                  </span>
                </div>
                <div className="dashboard-profile-item">
                  <span className="dashboard-label">Member Since:</span>
                  <span className="dashboard-value">
                    {profile?.createdAt
                      ? new Date(profile.createdAt).toLocaleDateString()
                      : user?.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : "—"}
                  </span>
                </div>
              </div>
            </section>

            {/* Kundli Section */}
            <section className="dashboard-section dashboard-kundli">
              <h2 className="dashboard-section-title">Your Kundli</h2>
              {kundli ? (
                <div className="dashboard-kundli-content">
                  <div className="dashboard-kundli-item">
                    <span className="dashboard-label">Name:</span>
                    <span className="dashboard-value">{kundli.name}</span>
                  </div>
                  <div className="dashboard-kundli-item">
                    <span className="dashboard-label">Birth Date:</span>
                    <span className="dashboard-value">{kundli.birthDate}</span>
                  </div>
                  <div className="dashboard-kundli-item">
                    <span className="dashboard-label">Birth Time:</span>
                    <span className="dashboard-value">{kundli.birthTime}</span>
                  </div>
                  <div className="dashboard-kundli-item">
                    <span className="dashboard-label">Birth Place:</span>
                    <span className="dashboard-value">{kundli.birthPlace}</span>
                  </div>
                </div>
              ) : (
                <form className="dashboard-form" onSubmit={handleKundliSubmit}>
                  <p className="dashboard-form-desc">
                    Create your Kundli by providing your birth details:
                  </p>
                  <div className="dashboard-form-field">
                    <label className="dashboard-form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={kundliForm.name}
                      onChange={handleKundliChange}
                      required
                      className="dashboard-form-input"
                    />
                  </div>
                  <div className="dashboard-form-field">
                    <label className="dashboard-form-label">Birth Date</label>
                    <input
                      type="date"
                      name="birthDate"
                      value={kundliForm.birthDate}
                      onChange={handleKundliChange}
                      required
                      className="dashboard-form-input"
                    />
                  </div>
                  <div className="dashboard-form-field">
                    <label className="dashboard-form-label">Birth Time</label>
                    <input
                      type="time"
                      name="birthTime"
                      value={kundliForm.birthTime}
                      onChange={handleKundliChange}
                      required
                      className="dashboard-form-input"
                    />
                  </div>
                  <div className="dashboard-form-field">
                    <label className="dashboard-form-label">Birth Place</label>
                    <input
                      type="text"
                      name="birthPlace"
                      value={kundliForm.birthPlace}
                      onChange={handleKundliChange}
                      required
                      className="dashboard-form-input"
                      placeholder="City, Country"
                    />
                  </div>
                  <button
                    type="submit"
                    className="dashboard-form-submit"
                    disabled={kundliSubmitting}
                  >
                    {kundliSubmitting ? "Saving..." : "Create Kundli"}
                  </button>
                </form>
              )}
            </section>

            {/* Family Members Section */}
            <section className="dashboard-section dashboard-family">
              <h2 className="dashboard-section-title">Family Members</h2>
              <div className="dashboard-family-list">
                {familyMembers.length > 0 ? (
                  familyMembers.map((member) => (
                    <div key={member.id} className="dashboard-family-item">
                      <div className="dashboard-family-info">
                        <span className="dashboard-family-name">
                          {member.name}
                        </span>
                        <span className="dashboard-family-relation">
                          {member.relationship}
                        </span>
                        <span className="dashboard-family-dob">
                          {member.birthDate}
                        </span>
                      </div>
                      <div className="dashboard-family-actions">
                        <button
                          className="dashboard-btn-edit"
                          onClick={() => handleEditFamily(member)}
                        >
                          Edit
                        </button>
                        <button
                          className="dashboard-btn-delete"
                          onClick={() => handleDeleteFamily(member.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="dashboard-empty">
                    No family members added yet.
                  </p>
                )}
              </div>

              <form
                className="dashboard-form dashboard-family-form"
                onSubmit={handleFamilySubmit}
              >
                <h3 className="dashboard-form-title">
                  {editingFamilyId ? "Edit Family Member" : "Add Family Member"}
                </h3>
                <div className="dashboard-form-field">
                  <label className="dashboard-form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={familyForm.name}
                    onChange={handleFamilyChange}
                    required
                    className="dashboard-form-input"
                  />
                </div>
                <div className="dashboard-form-field">
                  <label className="dashboard-form-label">Relationship</label>
                  <select
                    name="relationship"
                    value={familyForm.relationship}
                    onChange={handleFamilyChange}
                    required
                    className="dashboard-form-input"
                  >
                    <option value="">Select...</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Child">Child</option>
                    <option value="Parent">Parent</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="dashboard-form-field">
                  <label className="dashboard-form-label">Birth Date</label>
                  <input
                    type="date"
                    name="birthDate"
                    value={familyForm.birthDate}
                    onChange={handleFamilyChange}
                    required
                    className="dashboard-form-input"
                  />
                </div>
                <div className="dashboard-form-buttons">
                  <button
                    type="submit"
                    className="dashboard-form-submit"
                    disabled={familySubmitting}
                  >
                    {familySubmitting
                      ? "Saving..."
                      : editingFamilyId
                        ? "Update Member"
                        : "Add Member"}
                  </button>
                  {editingFamilyId && (
                    <button
                      type="button"
                      className="dashboard-form-cancel"
                      onClick={cancelFamilyEdit}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </section>

            {/* Activity History Section */}
            <section className="dashboard-section dashboard-activity">
              <h2 className="dashboard-section-title">Activity History</h2>
              <div className="dashboard-activity-list">
                {activities.length > 0 ? (
                  activities.map((activity, index) => (
                    <div
                      key={activity.id || index}
                      className="dashboard-activity-item"
                    >
                      <span className="dashboard-activity-type">
                        {activity.type}
                      </span>
                      <span className="dashboard-activity-desc">
                        {activity.description}
                      </span>
                      <span className="dashboard-activity-date">
                        {activity.createdAt
                          ? new Date(activity.createdAt).toLocaleString()
                          : "—"}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="dashboard-empty">No activity recorded yet.</p>
                )}
              </div>
            </section>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
