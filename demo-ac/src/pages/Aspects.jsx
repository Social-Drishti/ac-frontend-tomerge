import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./ReadingPages.css";

export default function Aspects() {
  return (
    <>
      <Navbar />
      <div className="reading-page-container">
        <h1>Aspects</h1>
        <p>Understand the relationships between.</p>
      </div>
      <Footer />
    </>
  );
}
