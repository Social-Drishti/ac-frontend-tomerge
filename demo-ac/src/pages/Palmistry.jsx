import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/palmistry-tokens.css";
import "./Palmistry.css";

export default function Palmistry() {
  const [expandedSection, setExpandedSection] = useState("what-is");

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <>
      <Navbar />

      <main className="palm-layout">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="palm-skip-link">
          Skip to main content
        </a>

        {/* Header */}
        <header className="palm-header">
          <div className="palm-container">
            <h1 className="palm-hero-title">Palmistry</h1>
            <p className="palm-hero-subtitle">
              The ancient art of reading hands — your life's journey revealed
              through the lines of your palms
            </p>
          </div>
        </header>

        {/* Main Two-Column Layout */}
        <div className="palm-container palm-grid" id="main-content">
          {/* Main Content Column (70%) */}
          <article className="palm-main-content">
            {/* Hero Introduction Card */}
            <div className="palm-card">
              <div className="palm-card-header">
                <span className="palm-icon">✋</span>
                <h2>What Is Palmistry?</h2>
              </div>
              <hr className="palm-divider" />
              <div className="palm-card-content">
                <p>
                  Since ancient times, people have been curious about knowing
                  their fate and understanding their destiny. It is this spirit
                  of inquiry which gave birth to the world of predictive
                  sciences—the various branches of astrology.
                </p>
                <p>
                  Palmistry, also known as <strong>Chiromancy</strong>, is an
                  inherent part of predictive science. Each line on your palms
                  speaks of certain traits and events that will occur in your
                  life, have occurred in the past, or reflect your present state
                  of mind.
                </p>
                <p>
                  Just like no two persons have the same fingerprint, palm lines
                  are equally intricate and unique. The study requires deep
                  expertise—any interpretation must consider the holistic
                  picture of your hands.
                </p>
              </div>
            </div>

            {/* Collapsible Sections */}
            <section className="palm-collapsible-section">
              <button
                className="palm-section-header"
                onClick={() => toggleSection("hand-types")}
                aria-expanded={expandedSection === "hand-types"}
                aria-controls="hand-types-content"
              >
                <span className="palm-section-icon">
                  {expandedSection === "hand-types" ? "▼" : "▶"}
                </span>
                <h2>Types of Hands</h2>
                <span className="palm-section-line"></span>
              </button>

              {expandedSection === "hand-types" && (
                <div id="hand-types-content" className="palm-section-content">
                  <p className="palm-section-intro">
                    Every individual has an active hand (dominant) and a passive
                    hand (non-dominant). The active hand shows major life
                    changes, while the passive hand reveals intrinsic
                    characteristics.
                  </p>

                  <div className="palm-hand-type">
                    <h3>Square Hands</h3>
                    <p>
                      Square hands have short, square fingers and fingertips
                      with a large, somewhat long palm. People with such hands
                      are downright practical, influential, and dominating.
                    </p>
                  </div>

                  <div className="palm-hand-type">
                    <h3>Conic Hands</h3>
                    <p>
                      Wide at the base and narrow at the fingers, conic hands
                      are long, smooth, and pointed at the tips. The palm is
                      proportionate and fleshy, and overall the hands look
                      graceful. People with conic hands are artistic and
                      creative.
                    </p>
                  </div>

                  <div className="palm-hand-type">
                    <h3>Spatulate Hands</h3>
                    <p>
                      Square-shaped with a broad base and small thumb, these
                      hands tend to be wider than long with a thick palm and
                      deep lines. People with spatulate hands are confident,
                      social, and lovable.
                    </p>
                  </div>

                  <div className="palm-hand-type">
                    <h3>Philosophic Hands</h3>
                    <p>
                      Very firm and long with long fingers and fleshy
                      fingertips. People with philosophic hands tend to become
                      great philosophers—diplomatic and reclusive.
                    </p>
                  </div>

                  <div className="palm-hand-type">
                    <h3>Psychic Hands</h3>
                    <p>
                      Slender and long with a narrow, thin palm. People with
                      psychic hands are considered idealistic, patient, and
                      imaginative.
                    </p>
                  </div>
                </div>
              )}
            </section>

            <section className="palm-collapsible-section">
              <button
                className="palm-section-header"
                onClick={() => toggleSection("major-lines")}
                aria-expanded={expandedSection === "major-lines"}
                aria-controls="major-lines-content"
              >
                <span className="palm-section-icon">
                  {expandedSection === "major-lines" ? "▼" : "▶"}
                </span>
                <h2>Major Palm Lines</h2>
                <span className="palm-section-line"></span>
              </button>

              {expandedSection === "major-lines" && (
                <div id="major-lines-content" className="palm-section-content">
                  <div className="palm-line-info">
                    <h3>Life Line</h3>
                    <p>
                      Indicates vitality, physical health, and general
                      well-being. A deep, unbroken life line suggests robust
                      health and energy.
                    </p>
                  </div>

                  <div className="palm-line-info">
                    <h3>Head Line</h3>
                    <p>
                      Represents intellect, mental clarity, and psychological
                      state. A clear head line indicates strong focus and
                      cognitive abilities.
                    </p>
                  </div>

                  <div className="palm-line-info">
                    <h3>Heart Line</h3>
                    <p>
                      Reveals emotional capacity, relationships, and romantic
                      inclinations. This line speaks to how you love and connect
                      with others.
                    </p>
                  </div>

                  <div className="palm-line-info">
                    <h3>Fate Line</h3>
                    <p>
                      Shows career path, life direction, and external
                      circumstances. Not everyone has a prominent fate line—its
                      presence indicates a strong sense of purpose.
                    </p>
                  </div>
                </div>
              )}
            </section>

            <section className="palm-collapsible-section">
              <button
                className="palm-section-header"
                onClick={() => toggleSection("readings")}
                aria-expanded={expandedSection === "readings"}
                aria-controls="readings-content"
              >
                <span className="palm-section-icon">
                  {expandedSection === "readings" ? "▼" : "▶"}
                </span>
                <h2>Types of Palmistry Readings</h2>
                <span className="palm-section-line"></span>
              </button>

              {expandedSection === "readings" && (
                <div id="readings-content" className="palm-section-content">
                  <div className="palm-reading-grid">
                    <div className="palm-reading-card">
                      <h3>Life Path Palmistry</h3>
                      <p>Discover your life's journey and purpose</p>
                    </div>
                    <div className="palm-reading-card">
                      <h3>Relationship Palmistry</h3>
                      <p>Understand your emotional connections</p>
                    </div>
                    <div className="palm-reading-card">
                      <h3>Health Palmistry</h3>
                      <p>Insights into your vitality and wellness</p>
                    </div>
                    <div className="palm-reading-card">
                      <h3>Finance Palmistry</h3>
                      <p>Explore your financial potential</p>
                    </div>
                    <div className="palm-reading-card">
                      <h3>Career Palmistry</h3>
                      <p>Find your professional calling</p>
                    </div>
                    <div className="palm-reading-card">
                      <h3>Marriage Line Reading</h3>
                      <p>Understand your partnerships</p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Action Bar */}
            <div className="palm-action-bar palm-no-print">
              <button className="palm-btn-primary">Book a Reading</button>
              <button className="palm-btn-secondary">Learn More</button>
            </div>
          </article>

          {/* Sidebar Column (30%) */}
          <aside
            className="palm-sidebar"
            aria-label="Supplementary information"
          >
            <div className="palm-sidebar-card">
              <h3>Quick Reference</h3>
              <hr className="palm-divider palm-divider-subtle" />
              <ul className="palm-reference-list">
                <li>Life Line</li>
                <li>Head Line</li>
                <li>Heart Line</li>
                <li>Fate Line</li>
                <li>Sun Line</li>
                <li>Mercury Line</li>
              </ul>
            </div>

            <div className="palm-sidebar-card">
              <h3>Reading Process</h3>
              <hr className="palm-divider palm-divider-subtle" />
              <ol className="palm-process-list">
                <li>Hand shape analysis</li>
                <li>Major line reading</li>
                <li>Minor line interpretation</li>
                <li>Mount examination</li>
                <li>Holistic synthesis</li>
              </ol>
            </div>

            <div className="palm-sidebar-card palm-info-card">
              <div className="palm-info-icon">ℹ️</div>
              <p className="palm-info-text">
                Palm lines change as you grow. Your fate is not fixed—it evolves
                with your choices and experiences.
              </p>
            </div>

            <div className="palm-sidebar-card">
              <h3>Related Services</h3>
              <hr className="palm-divider palm-divider-subtle" />
              <ul className="palm-link-list">
                <li>
                  <a href="/birth-chart-analysis">Birth Chart Analysis</a>
                </li>
                <li>
                  <a href="/numerology">Numerology</a>
                </li>
                <li>
                  <a href="/vastu">Vastu</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
