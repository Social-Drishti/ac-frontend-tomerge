import React from "react";
import { useLocation } from "react-router-dom";
import "./SubNavbar.css";

export default function SubNavbar() {
  const location = useLocation();

  const navItems = [
    { path: "/vastu", label: "Vastu" },
    { path: "/astrology", label: "Astrology" },
    { path: "/palmistry", label: "Palmistry" },
    { path: "/gemmology", label: "Gemmology" },
    { path: "/guruji", label: "Acharya Dharmraj Guruji" },
    { path: "/face-reading", label: "Face Reading" },
    { path: "/thumb-reading", label: "Thumb Reading" },
    { path: "/numerology", label: "Numerology" },
    { path: "/remedies", label: "Remedies" },
  ];

  return (
    <nav className="sub-navbar">
      <div className="sub-navbar-container">
        <div className="sub-navbar-scroll">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`sub-navbar-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
