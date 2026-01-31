import React from "react";
import "./Hero.css"; // We'll add custom styles here

export default function Hero() {
  return (
    <section className="custom-hero">
      <div className="hero-banner">
        <img
          src="/home-banner.png"
          alt="Vedic Astrologer with Kundli Chart and Navagraha"
          className="hero-banner-image"
        />
      </div>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Let the universe speaks to you</h1>
        </div>
      </div>
    </section>
  );
}
