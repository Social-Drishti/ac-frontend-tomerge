import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Guruji.css";

const journeyNavItems = [
  { path: "/guruji/journey", label: "Journey" },
  { path: "/guruji/education", label: "Education" },
  { path: "/guruji/insights", label: "Insights" },
  { path: "/guruji/events", label: "Events" },
  { path: "/guruji/certifications", label: "Certifications" },
  { path: "/guruji/consultation", label: "Consultation", isCta: true },
];

function JourneyNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="journey-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle journey navigation"
        aria-expanded={isOpen}
      >
        <span className="toggle-line"></span>
        <span className="toggle-line"></span>
        <span className="toggle-line"></span>
      </button>

      {/* Floating Navigation Panel */}
      <nav
        className={`journey-nav ${isOpen ? "journey-nav--open" : ""}`}
        role="navigation"
        aria-label="Journey chapters navigation"
      >
        <h3 className="journey-nav__title">Journey</h3>
        <div className="journey-nav__guideline"></div>
        <ul className="journey-nav__list">
          {journeyNavItems.map((item) => (
            <li
              key={item.path}
              className={`journey-nav__item ${
                item.isCta ? "journey-nav__item--cta" : ""
              } ${isActive(item.path) ? "journey-nav__item--active" : ""}`}
            >
              <a
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                aria-label={`Navigate to ${item.label} page`}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default function Guruji() {
  return (
    <div className="guruji-page">
      <Navbar />
      <JourneyNav />
      <section className="guruji-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Where Ancient Wisdom Meets Modern Destiny
          </h1>
          <p className="hero-subtitle">
            In a world seeking answers, Acharya Dharmraj Guruji illuminates the
            path not as a fortune teller, but as a guide who has walked through
            the sacred corridors of Vedic wisdom.
          </p>
          <button className="hero-cta">Begin Your Journey</button>
        </div>
      </section>

      <section className="guruji-chapter chapter-calling">
        <div className="chapter-container">
          <span className="chapter-number">Chapter I</span>
          <h2 className="chapter-title">The Calling</h2>

          <div className="story-content">
            <p className="story-text">
              It began not with thunder, but with whispers—the kind that only
              restless souls hear in the quiet hours before dawn. As a young
              scholar, Dharmraj found himself drawn to the ancient texts not for
              tradition's sake, but for truth.
            </p>

            <p className="story-text">
              While others saw astrology as ritual, he saw geometry. While
              others recited mantras, he decoded cosmic mathematics. His journey
              was not of blind faith, but of disciplined inquiry—years spent
              under the tutelage of masters who demanded precision, not
              performance.
            </p>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>Early Years</h4>
                  <p>
                    Immersed in Sanskrit texts and Vedic astronomy, studying the
                    language of the cosmos
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>The Apprenticeship</h4>
                  <p>
                    Seven years with traditional Jyotish masters, learning not
                    formulas but philosophy
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>The Recognition</h4>
                  <p>
                    Awarded the title "Acharya" for mastery in both knowledge
                    and its compassionate application
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="guruji-chapter chapter-lineage">
        <div className="chapter-container">
          <span className="chapter-number">Chapter II</span>
          <h2 className="chapter-title">The Lineage & Knowledge</h2>

          <div className="story-content lineage-content">
            <div className="lineage-text">
              <p className="story-text serif-text">
                The title "Acharya" is not given lightly. It signifies one who
                has not only studied the scriptures but embodies their essence a
                teacher whose understanding flows from the unbroken stream of{" "}
                <em>Guru-Shishya Parampara</em>.
              </p>

              <p className="story-text serif-text">
                Dharmraj Guruji's knowledge rests on the foundations of{" "}
                <strong>Brihat Parashara Hora Shastra</strong>,
                <strong>Jaimini Sutras</strong>, and{" "}
                <strong>Phaladeepika</strong>—texts that have guided seekers for
                millennia. But wisdom is not memorization. It is the ability to
                see the eternal within the temporal, the pattern within chaos.
              </p>

              <blockquote className="wisdom-quote">
                "The stars do not command. They whisper possibilities. The wise
                listen, then choose their path."
              </blockquote>
            </div>

            <div className="lineage-visual">
              <div className="knowledge-pillars">
                <div className="pillar">
                  <span className="pillar-icon">📿</span>
                  <h4>Vedic Astrology</h4>
                  <p>Rooted in Jyotish Shastra and celestial mathematics</p>
                </div>
                <div className="pillar">
                  <span className="pillar-icon">🕉️</span>
                  <h4>Dharmic Philosophy</h4>
                  <p>Karma, free will, and cosmic rhythm in harmony</p>
                </div>
                <div className="pillar">
                  <span className="pillar-icon">🪔</span>
                  <h4>Remedial Science</h4>
                  <p>Yantras, mantras, and gemstones as spiritual tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Guru Today */}
      <section className="guruji-chapter chapter-today">
        <div className="chapter-container">
          <span className="chapter-number">Chapter III</span>
          <h2 className="chapter-title">The Guru Today</h2>

          <div className="story-content">
            <p className="story-text">
              Today, Acharya Dharmraj Guruji serves not as a mystic promising
              miracles, but as a counselor offering clarity. In boardrooms and
              meditation halls alike, seekers arrive burdened with questions:{" "}
              <em>
                Should I take this path? Why does this struggle persist? What is
                my purpose?
              </em>
            </p>

            <p className="story-text">
              He does not claim to control fate. Instead, he illuminates the
              karmic patterns woven into one's chart—showing not what{" "}
              <strong>must</strong> happen, but what <strong>could</strong>{" "}
              unfold when awareness meets action.
            </p>

            <div className="today-principles">
              <div className="principle-card">
                <h4>Clarity, Not Certainty</h4>
                <p>
                  Charts reveal tendencies, not destinies. Awareness empowers
                  choice.
                </p>
              </div>
              <div className="principle-card">
                <h4>Direction, Not Dictation</h4>
                <p>
                  Guidance is offered with respect for your free will and
                  judgment.
                </p>
              </div>
              <div className="principle-card">
                <h4>Peace, Not Promises</h4>
                <p>
                  Understanding cosmic timing brings calm, even in uncertainty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Philosophy & Approach */}
      <section
        className="guruji-chapter chapter-philosophy"
        id="certifications"
      >
        <div className="chapter-container">
          <span className="chapter-number">Chapter IV</span>
          <h2 className="chapter-title">Philosophy & Approach</h2>

          <div className="philosophy-grid">
            {/* <div className="philosophy-item">
              <h3>Cosmic Patterns + Human Will</h3>
              <p>
                The planets suggest rhythms, not chains. Your choices create the
                melody within the cosmic scale.
              </p>
            </div> */}

            <div className="philosophy-item">
              <h3>Astrology as Mirror</h3>
              <p>
                The chart reflects your karmic blueprint—not to trap you, but to
                show you where light already exists within.
              </p>
            </div>

            <div className="philosophy-item">
              <h3>Questions Over Answers</h3>
              <p>
                A true consultation leaves you not with predictions, but with
                better questions to ask yourself.
              </p>
            </div>

            <div className="philosophy-item">
              <h3>Remedies as Rituals</h3>
              <p>
                Mantras and gemstones are not magic—they are meditative tools to
                align intention with cosmic energy.
              </p>
            </div>
          </div>

          <div className="aphorisms">
            <p className="aphorism">
              "The universe does not punish. It teaches."
            </p>
            <p className="aphorism">
              "Destiny is the script. Free will is the performance."
            </p>
            <p className="aphorism">
              "To know your chart is to know your starting point, not your
              endpoint."
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="guruji-services">
        <div className="services-container">
          <h2 className="services-title">Paths of Guidance</h2>
          <p className="services-intro">
            Each consultation is a conversation—sacred, confidential, and rooted
            in your unique journey.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <h3>Kundli Reading</h3>
              <p>
                A comprehensive analysis of your birth chart, revealing karmic
                patterns and planetary influences shaping your life.
              </p>
            </div>

            <div className="service-card">
              <h3>Career & Life Guidance</h3>
              <p>
                Understand your natural talents and optimal timing for
                professional transitions or new ventures.
              </p>
            </div>

            <div className="service-card">
              <h3>Marriage & Relationship Insights</h3>
              <p>
                Compatibility analysis and guidance for harmonious partnerships,
                grounded in mutual growth.
              </p>
            </div>

            <div className="service-card">
              <h3>Spiritual Consultation</h3>
              <p>
                For those seeking deeper purpose, alignment with dharma, and
                understanding of their soul's path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="guruji-testimonials">
        <div className="testimonials-container">
          <h2 className="testimonials-title">Voices of the Seekers</h2>

          <div className="testimonials-grid">
            <div className="testimonial">
              <p className="testimonial-text">
                "I came seeking predictions. I left with perspective. Acharyaji
                didn't tell me what would happen—he showed me what I already
                knew but couldn't see."
              </p>
              <p className="testimonial-author">
                — A software engineer, Bangalore
              </p>
            </div>

            <div className="testimonial">
              <p className="testimonial-text">
                "After years of anxiety about career decisions, his reading gave
                me not answers, but the courage to trust my timing. That shift
                changed everything."
              </p>
              <p className="testimonial-author">— An entrepreneur, Mumbai</p>
            </div>

            <div className="testimonial">
              <p className="testimonial-text">
                "He speaks with the authority of scripture and the gentleness of
                a friend. His guidance feels less like fortune-telling and more
                like philosophy."
              </p>
              <p className="testimonial-author">— A seeker, Delhi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="guruji-closing">
        <div className="closing-content">
          <p className="closing-wisdom">
            When the seeker is ready, the guide appears.
          </p>
          <p className="closing-text">
            If you find yourself at a crossroads—seeking clarity, purpose, or
            simply understanding— perhaps this moment itself is part of your
            journey.
          </p>
          <div
            className="mt-8 p-6 rounded-lg"
            style={{
              backgroundImage: 'url("/cta-background.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="closing-cta bg-[#5f6b3a] hover:bg-[#4a5530] transform hover:scale-105 transition-all">
                Free Consultation
              </button>
              <button className="closing-cta bg-[#8B4513] hover:bg-[#723810] transform hover:scale-105 transition-all">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
