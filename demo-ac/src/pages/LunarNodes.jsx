import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./ReadingPages.css";

export default function LunarNodes() {
  return (
    <>
      <Navbar />
      <div className="reading-page-container">
        <h1>Lunar Nodes</h1>
        <p>Discover your astroidentity.</p>
      </div>
      <Footer />
    </>
  );
}
