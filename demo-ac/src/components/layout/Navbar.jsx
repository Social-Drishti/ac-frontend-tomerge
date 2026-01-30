import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <nav className="main-navbar">
      <div className="navbar-row">
        <div className="navbar-left">
          <a href="/about">About Us</a>
          <a href="/insights">Insights</a>
        </div>

        <div className="navbar-logo">
          <a href="/">
            <img src="/Astrochitra-color-logo.svg" alt="Astro Chitra Logo" />
          </a>
        </div>

        <div className="navbar-right">
          <div>
            <a href="/Blogs">Blogs</a>
          </div>
          <div className="accordion">
            <div
              className="accordion-header"
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            >
              Resources
            </div>
            {isResourcesOpen && (
              <div className="accordion-content">
                <a href="/calculator">Calculator</a>
                <a href="/calendar">Calendar</a>
              </div>
            )}
          </div>
          <div className="navbar-auth-container">
            {!isLoading && (
              <>
                {isAuthenticated ? (
                  <>
                    <a href="/dashboard" className="navbar-auth-link">
                      Dashboard
                    </a>
                    <a
                      href="/logout"
                      className="navbar-auth-link navbar-auth-signup"
                    >
                      Logout
                    </a>
                  </>
                ) : (
                  <a
                    href="/login"
                    className="navbar-auth-link navbar-auth-login"
                  >
                    Login
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
