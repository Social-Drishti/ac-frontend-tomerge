import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./ReadingPages.css";

export default function Retrogrades() {
  return (
    <>
      <Navbar />
      <div className="reading-page-container">
        <h1>Retrogrades</h1>
        <p>Explore the impact of planetary retrogrades.</p>
      </div>
      <Footer />
    </>
  );
}
