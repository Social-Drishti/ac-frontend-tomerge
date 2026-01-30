import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SocialLogins from "../components/auth/SocialLogins";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { register, isAuthenticated } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await register({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2 className="auth-title">Sign Up</h2>
          {error && <div className="auth-error">{error}</div>}

          {/* Social Login Options */}
          <SocialLogins />

          <div className="auth-field">
            <label className="auth-label">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="auth-input"
            />
          </div>
          <div className="auth-field">
            <label className="auth-label">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="auth-input"
            />
          </div>
          <div className="auth-field">
            <label className="auth-label">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="auth-input"
            />
          </div>
          <button type="submit" className="auth-submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
          <p className="auth-link-text">
            Already have an account?{" "}
            <a href="/login" className="auth-link">
              Login here
            </a>
          </p>
        </form>
        {showModal && (
          <div className="auth-modal-overlay">
            <div className="auth-modal">
              <div className="auth-modal-success">Signup successful!</div>
              <div className="auth-modal-message">Redirecting to login...</div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
