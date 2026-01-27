import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Retrogrades() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen p-8"
        style={{
          background: `linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 0.95) 100%), 
          url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23D4AF8F" width="200" height="200"/><line x1="30" y1="20" x2="30" y2="120" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><line x1="70" y1="30" x2="70" y2="130" stroke="%23A0826D" stroke-width="2.5" opacity="0.5"/><line x1="100" y1="15" x2="100" y2="140" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><line x1="130" y1="25" x2="130" y2="135" stroke="%23A0826D" stroke-width="2.5" opacity="0.5"/><line x1="160" y1="20" x2="160" y2="125" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><circle cx="40" cy="80" r="3" fill="%23C19A6B" opacity="0.7"/><circle cx="90" cy="70" r="2.5" fill="%23C19A6B" opacity="0.6"/><circle cx="140" cy="90" r="3" fill="%23C19A6B" opacity="0.7"/><circle cx="170" cy="60" r="2.5" fill="%23C19A6B" opacity="0.6"/></svg>')`,
          backgroundAttachment: "fixed",
        }}
      >
        <h1>Retrogrades</h1>
        <p>Explore the impact of planetary retrogrades.</p>
      </div>
      <Footer />
    </>
  );
}
