import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Reading.css";

const readingServices = [
  {
    id: "natal-chart",
    title: "Natal Chart Reading",
    icon: "☉",
    description:
      "Discover your cosmic blueprint — the unique map of celestial bodies at the moment of your birth that shapes your personality, strengths, and life path.",
    highlights: [
      "Birth chart analysis",
      "Planetary positions",
      "House meanings",
      "Life purpose insights",
    ],
    link: "/natal-chart",
  },
  {
    id: "synastry",
    title: "Synastry",
    icon: "☯",
    description:
      "Explore the cosmic chemistry between two individuals. Understand how your planets interact with another person's chart for deeper relationship insights.",
    highlights: [
      "Relationship compatibility",
      "Planetary aspects",
      "Emotional connections",
      "Communication patterns",
    ],
    link: "/synastry",
  },
  {
    id: "progressions",
    title: "Progressions",
    icon: "⏳",
    description:
      "Track your personal evolution through time. Progressions reveal how your natal chart unfolds throughout your life journey.",
    highlights: [
      "Personal growth cycles",
      "Life transitions",
      "Inner development",
      "Timing of events",
    ],
    link: "/progressions",
  },
  {
    id: "compatibility",
    title: "Compatibility Analysis",
    icon: "💕",
    description:
      "Understand the energetic harmony between you and others — in love, friendship, or business partnerships.",
    highlights: [
      "Love compatibility",
      "Friendship dynamics",
      "Business partnerships",
      "Family relationships",
    ],
    link: "/compatibility",
  },
  {
    id: "lunar-nodes",
    title: "Lunar Nodes",
    icon: "☊",
    description:
      "Discover your karmic path through the North and South Nodes. Understand your soul's journey from past lives to your destined purpose.",
    highlights: [
      "Karmic lessons",
      "Soul purpose",
      "Past life patterns",
      "Destiny guidance",
    ],
    link: "/lunar-nodes",
  },
  {
    id: "retrogrades",
    title: "Retrogrades",
    icon: "℞",
    description:
      "Navigate planetary retrograde periods with wisdom. Learn how these cosmic pauses affect various areas of your life.",
    highlights: [
      "Mercury retrograde",
      "Venus retrograde",
      "Mars retrograde",
      "Personal impact",
    ],
    link: "/retrogrades",
  },
  {
    id: "aspects",
    title: "Aspects",
    icon: "△",
    description:
      "Understand the geometric relationships between planets in your chart. Aspects reveal how different parts of your personality interact.",
    highlights: [
      "Planetary relationships",
      "Conjunctions & oppositions",
      "Trines & squares",
      "Energy dynamics",
    ],
    link: "/aspects",
  },
  {
    id: "career-astrology",
    title: "Career Astrology",
    icon: "⚙",
    description:
      "Find your professional calling through celestial guidance. Discover careers aligned with your cosmic potential.",
    highlights: [
      "Career paths",
      "Professional strengths",
      "Timing for changes",
      "Success indicators",
    ],
    link: "/career-astrology",
  },
  {
    id: "transits",
    title: "Transits",
    icon: "🌍",
    description:
      "Track how current planetary movements affect your natal chart. Perfect for timing important decisions and understanding present influences.",
    highlights: [
      "Current influences",
      "Future forecasts",
      "Opportunity windows",
      "Challenge periods",
    ],
    link: "/transits",
  },
  {
    id: "palmistry",
    title: "Palmistry",
    icon: "✋",
    description:
      "The ancient art of reading hands — your life's journey revealed through the lines of your palms and the shape of your hands.",
    highlights: [
      "Life line reading",
      "Heart line analysis",
      "Head line interpretation",
      "Mount meanings",
    ],
    link: "/palmistry",
  },
];

export default function Reading() {
  return (
    <>
      <Navbar />

      <main className="reading-landing">
        {/* Hero Section */}
        <section className="reading-hero">
          <div className="reading-hero-content">
            <span className="reading-hero-label">
              Discover Your Cosmic Path
            </span>
            <h1 className="reading-hero-title">Astrology Readings</h1>
            <p className="reading-hero-subtitle">
              Explore our comprehensive range of astrological readings designed
              to illuminate your path, reveal hidden patterns, and guide you
              toward your highest potential.
            </p>
          </div>
          {/* <div className="reading-hero-decoration">
            <div className="celestial-circle"></div>
          </div> */}
        </section>

        {/* Introduction */}
        <section className="reading-intro">
          <div className="reading-intro-content">
            <h2>What is an Astrology Reading?</h2>
            <p>
              An astrology reading is a personalized interpretation of celestial
              influences based on the positions of planets, stars, and other
              cosmic bodies. Whether you're seeking clarity about relationships,
              career direction, or personal growth, our readings provide
              profound insights tailored to your unique cosmic blueprint.
            </p>
            <div className="reading-intro-features">
              <div className="intro-feature">
                <span className="intro-feature-icon">🌟</span>
                <h3>Personalized Insights</h3>
                <p>Every reading is based on your unique birth data</p>
              </div>
              <div className="intro-feature">
                <span className="intro-feature-icon">🔮</span>
                <h3>Expert Guidance</h3>
                <p>Interpretations by experienced astrologers</p>
              </div>
              <div className="intro-feature">
                <span className="intro-feature-icon">📜</span>
                <h3>Ancient Wisdom</h3>
                <p>Based on centuries of astrological tradition</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="reading-services">
          <div className="reading-services-header">
            <h2>Our Reading Services</h2>
            <p>Choose from our diverse range of astrological readings</p>
          </div>

          <div className="reading-services-grid">
            {readingServices.map((service) => (
              <article key={service.id} className="reading-service-card">
                <div className="service-card-icon">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">
                  {service.description}
                </p>
                <ul className="service-card-highlights">
                  {service.highlights.map((highlight, index) => (
                    <li key={index}>
                      <span className="highlight-dot">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="service-card-link">
                  Explore Reading
                  <span className="link-arrow">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="reading-process">
          <h2>How It Works</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Choose Your Reading</h3>
              <p>
                Select the type of reading that resonates with your current
                needs and questions.
              </p>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Provide Birth Details</h3>
              <p>
                Enter your date, time, and place of birth for accurate chart
                calculations.
              </p>
            </div>
            <div className="process-connector"></div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Receive Insights</h3>
              <p>
                Get detailed interpretations and actionable guidance based on
                your cosmic profile.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="reading-cta">
          <div className="reading-cta-content">
            <h2>Begin Your Cosmic Journey</h2>
            <p>
              Not sure which reading is right for you? Start with a Natal Chart
              reading — your essential cosmic blueprint that reveals your unique
              gifts and life path.
            </p>
            <Link to="/natal-chart" className="reading-cta-button">
              Start with Natal Chart
              <span className="cta-icon">☉</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
