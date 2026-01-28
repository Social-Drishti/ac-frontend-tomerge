import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./ReadingPages.css";

export default function Synastry() {
  return (
    <>
      <Navbar />
      <div className="reading-page-container">
        <h1>Synastry</h1>
        <p>See how the stars align between two souls.</p>
      </div>
      <Footer />
    </>
  );
}
