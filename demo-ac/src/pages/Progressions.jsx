import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./ReadingPages.css";

export default function Progressions() {
  return (
    <>
      <Navbar />
      <div className="reading-page-container">
        <h1>Progressions</h1>
        <p>Learn cosmic wisdom and celestial insights.</p>
      </div>
      <Footer />
    </>
  );
}
