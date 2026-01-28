import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./ReadingPages.css";

export default function CareerAstrology() {
  return (
    <>
      <Navbar />
      <div className="reading-page-container">
        <h1>Career Astrology</h1>
        <p>Find your professional path written in the heavens.</p>
      </div>
      <Footer />
    </>
  );
}
