import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isReadingOpen, setIsReadingOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="navbar-category-row">
        <div className="navbar-category-left">
          <a href="/about">About Us</a>
          <a href="#blog">Insights</a>
        </div>

        <div className="navbar-logo">
          <a href="/">
            <img src="/Astrochitra-color-logo.png" alt="Astro Chitra Logo" />
          </a>
        </div>

        <div className="navbar-category-right">
          <div className="accordion">
            <div
              className="accordion-header"
              onClick={() => setIsReadingOpen(!isReadingOpen)}
            >
              Reading
            </div>
            {isReadingOpen && (
              <div className="accordion-content">
                <a href="/natal-chart">Natal Chart</a>
                <a href="/synastry">Synastry</a>
                <a href="/progressions">Progressions</a>
                <a href="/compatibility">Compatibility</a>
                <a href="/lunar-nodes">Lunar Nodes</a>
                <a href="/retrogrades">Retrogrades</a>
                <a href="/aspects">Aspects</a>
                <a href="/career-astrology">Career Astrology</a>
                <a href="/transits">Transits</a>
              </div>
            )}
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
            <a href="/login" className="navbar-auth-link">
              Login
            </a>
            <a href="/signup" className="navbar-auth-link navbar-auth-signup">
              Register
            </a>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className="navbar-main-row">
        <div className="nav-group">
          <a href="#vastu">Vastu</a>
          <a href="#astrology">Astrology</a>
          <a href="#palmistry">Palmistry</a>
          <a href="#gemmology">Gemmology</a>
          <a href="/guruji">Acharya Dharmraj Guruji</a>
          <a href="#face-reading">Face Reading</a>
          <a href="#thumb-reading">Thumb Reading</a>
          <a href="#numerology">Numerology</a>
          <a href="#remedies">Remedies</a>
        </div>
      </div>
    </nav>
  );
}
