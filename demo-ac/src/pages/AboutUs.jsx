import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="aboutus-container">
        {/* 1. Who We Are */}
        <section className="aboutus-section">
          <div className="aboutus-content">
            <h1 className="aboutus-main-title">Who We Are</h1>
            <p className="aboutus-text">
              Founded on the belief that astrology serves as a mirror to the
              soul, we've created a space where ancient cosmic knowledge meets
              contemporary psychological insight.
            </p>
            <p className="aboutus-text">
              Our team of dedicated astrologers combines decades of expertise
              with rigorous study of planetary movements, natal charts, and
              transits. We're passionate about making astrology accessible,
              practical, and transformative for everyone.
            </p>
            <p className="aboutus-text">
              Every reading is personalized. Every insight is grounded in
              precision. Every journey is unique.
            </p>
          </div>
        </section>
        <section className="aboutus-section aboutus-why-section">
          <div className="aboutus-content">
            <h2 className="aboutus-section-title">Why Do We Exist?</h2>
            <p className="aboutus-text">
              In a world filled with uncertainty and rapid change, people are
              searching for deeper meaning, clarity, and connection to something
              greater than themselves. We exist to bridge the gap between
              ancient wisdom and modern life, offering authentic astrological
              guidance that empowers individuals to understand their unique
              cosmic blueprint.
            </p>
            <p className="aboutus-text">
              Our purpose is to illuminate the path of self-discovery, helping
              you navigate life's challenges with awareness, confidence, and
              alignment with your true purpose.
            </p>
          </div>
        </section>

        {/* 3. Mission/Vision/Faith boxes */}
        <section className="aboutus-section">
          <div className="aboutus-content">
            <h2 className="aboutus-section-title">Our Foundation</h2>
            <div className="aboutus-boxes-grid">
              <div className="aboutus-box">
                <h3 className="aboutus-box-title">Mission</h3>
                <p className="aboutus-box-text">
                  To empower individuals with self-awareness and clarity by
                  providing authentic, personalized astrological guidance that
                  honors both the ancient wisdom of the cosmos and the modern
                  complexities of human life.
                </p>
              </div>

              <div className="aboutus-box">
                <h3 className="aboutus-box-title">Vision</h3>
                <p className="aboutus-box-text">
                  A world where astrology is recognized as an ethical, practical
                  tool for personal development—helping people make conscious
                  choices, understand their relationships, and align with their
                  cosmic purpose.
                </p>
              </div>

              <div className="aboutus-box">
                <h3 className="aboutus-box-title">Faith</h3>
                <p className="aboutus-box-text">
                  We believe in the profound connection between celestial
                  movements and human experience. We have faith in the
                  transformative power of self-knowledge and the timeless wisdom
                  encoded in the stars.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Astrologer + Quote */}
        <section className="aboutus-section aboutus-astrologer-section">
          <div className="aboutus-content">
            <h2 className="aboutus-section-title">Our Astrologer</h2>
            <div className="aboutus-astrologer-container">
              <div className="aboutus-astrologer-image">
                <div className="aboutus-image-placeholder">
                  {/* Placeholder for astrologer photo */}
                  <span>📸</span>
                </div>
              </div>
              <div className="aboutus-astrologer-info">
                <h3 className="aboutus-astrologer-name">Pandit Rajesh Kumar</h3>
                <p className="aboutus-astrologer-credentials">
                  Master Astrologer | 25+ Years Experience | Vedic Scholar
                </p>
                <p className="aboutus-text">
                  With over two decades of dedicated practice in Vedic
                  astrology, Pandit Rajesh Kumar brings profound insights and
                  compassionate guidance to every consultation. Trained in
                  traditional Jyotish and modern psychological approaches, he
                  specializes in natal chart interpretation, relationship
                  compatibility, and career guidance.
                </p>
                <div className="aboutus-quote">
                  <blockquote>
                    "The stars do not compel, they reveal. Astrology is not
                    about fate—it's about understanding the cosmic energies at
                    play and making conscious choices aligned with your highest
                    potential."
                  </blockquote>
                  <cite>— Pandit Rajesh Kumar</cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Here's What You Get */}
        <section className="aboutus-section">
          <div className="aboutus-content">
            <h2 className="aboutus-section-title">Here's What You Get</h2>
            <div className="aboutus-benefits-grid">
              <div className="aboutus-benefit-box">
                <div className="aboutus-benefit-icon">🎯</div>
                <h4 className="aboutus-benefit-title">Personalized Insights</h4>
                <p className="aboutus-benefit-text">
                  Every reading is tailored specifically to your unique birth
                  chart and life circumstances.
                </p>
              </div>

              <div className="aboutus-benefit-box">
                <div className="aboutus-benefit-icon">🌟</div>
                <h4 className="aboutus-benefit-title">Expert Guidance</h4>
                <p className="aboutus-benefit-text">
                  Decades of experience combined with deep knowledge of Vedic
                  and Western astrology traditions.
                </p>
              </div>

              <div className="aboutus-benefit-box">
                <div className="aboutus-benefit-icon">💫</div>
                <h4 className="aboutus-benefit-title">Practical Wisdom</h4>
                <p className="aboutus-benefit-text">
                  Actionable insights that you can apply immediately to improve
                  relationships, career, and personal growth.
                </p>
              </div>

              <div className="aboutus-benefit-box">
                <div className="aboutus-benefit-icon">🔮</div>
                <h4 className="aboutus-benefit-title">Ongoing Support</h4>
                <p className="aboutus-benefit-text">
                  Follow-up consultations and resources to help you navigate
                  life's transitions with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Get in Touch With Us Here */}
        <section className="aboutus-section aboutus-contact-section">
          <div className="aboutus-content">
            <h2 className="aboutus-section-title">Get in Touch With Us Here</h2>
            {/* <p className="aboutus-text aboutus-contact-intro">
              Ready to begin your journey of cosmic self-discovery? We'd love to
              hear from you. Whether you have questions about our services or
              are ready to book your first reading, reach out today.
            </p> */}
            <div className="aboutus-contact-info">
              <div className="aboutus-contact-item">
                <span className="aboutus-contact-icon">📧</span>
                <div>
                  <h4 className="aboutus-contact-label">Email</h4>
                  <p className="aboutus-contact-value">
                    contact@astrochitra.com
                  </p>
                </div>
              </div>

              <div className="aboutus-contact-item">
                <span className="aboutus-contact-icon">📞</span>
                <div>
                  <h4 className="aboutus-contact-label">Phone</h4>
                  <p className="aboutus-contact-value">+91 98765 43210</p>
                </div>
              </div>

              <div className="aboutus-contact-item">
                <span className="aboutus-contact-icon">📍</span>
                <div>
                  <h4 className="aboutus-contact-label">Location</h4>
                  <p className="aboutus-contact-value">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
            <div className="aboutus-contact-cta">
              <button className="aboutus-cta-button">
                Book a Consultation
              </button>
              <button className="aboutus-cta-button-secondary">
                View Our Services
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
