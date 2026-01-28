import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./ReadingPages.css";

export default function Compatibility() {
  return (
    <>
      <Navbar />
      <div className="reading-page-container">
        <h1>Compatibility</h1>
        <p>Explore relationship dynamics through the stars.</p>
      </div>
      <Footer />
    </>
  );
}
