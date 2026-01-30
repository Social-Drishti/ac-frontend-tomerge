import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/numerology-tokens.css";
import "./Numerology.css";

// FAQ Data
const faqData = [
  {
    question: "What is the difference between Moolank and Bhagyank?",
    answer:
      "Moolank (Birth Number) is derived from your birth date and reflects your inherent nature and personality traits. Bhagyank (Destiny Number) is calculated from your complete birth date and reveals your life path and karmic purpose. While Moolank shows who you are, Bhagyank indicates what you are meant to become.",
  },
  {
    question: "Can changing my name really change my destiny?",
    answer:
      "Name changes can influence the vibrational energy associated with you, but they work within the framework of your existing karma. Vedic numerology views name correction as a supportive tool, not a replacement for self-effort. Results depend on multiple factors including the appropriateness of the change and the individual's own karmic patterns.",
  },
  {
    question: "How is Vedic numerology different from Western numerology?",
    answer:
      "Vedic numerology (Anka Shastra) integrates planetary associations based on Jyotish principles and considers numbers as manifestations of cosmic vibrations. Western numerology focuses more on psychological interpretations. Vedic numerology also incorporates concepts like karmic cycles and is often used alongside Vedic astrology for comprehensive analysis.",
  },
  {
    question: "Are certain numbers universally lucky or unlucky?",
    answer:
      "No. In Vedic numerology, no number is inherently good or bad. Each number carries specific energies that may be favorable or challenging depending on the individual's chart. What matters is the compatibility between your personal numbers and the numbers you encounter in daily life.",
  },
  {
    question: "Can numerology predict specific events?",
    answer:
      "Numerology identifies patterns, tendencies, and favorable periods rather than predicting specific events. It provides a framework for understanding cyclical influences and making informed decisions. Treating numerology as a deterministic prediction tool misunderstands its purpose and limitations.",
  },
  {
    question: "How often should I consult numerology for decisions?",
    answer:
      "Numerology is best used as a periodic reference for major life decisions, understanding personal cycles, and self-reflection—not as a daily dependency. Over-reliance on any predictive system can undermine personal agency. Use it as one of many inputs in your decision-making process.",
  },
];

// Navigation sections structure
const navigationSections = [
  {
    group: "Foundational",
    items: [
      { id: "introduction", label: "Introduction to Anka Shastra" },
      { id: "vedic-vs-western", label: "Vedic vs Western Numerology" },
      { id: "cosmic-vibrations", label: "Numbers as Cosmic Vibrations" },
    ],
  },
  {
    group: "Core Numbers",
    items: [
      { id: "moolank", label: "Moolank (Birth Number)" },
      { id: "bhagyank", label: "Bhagyank (Destiny Number)" },
      { id: "naamank", label: "Name Number (Naamank)" },
      { id: "psychic-destiny", label: "Psychic vs Destiny Numbers" },
      { id: "master-numbers", label: "Master Numbers" },
    ],
  },
  {
    group: "Planetary Linkage",
    items: [
      { id: "planetary-rulers", label: "Numbers & Planetary Rulers" },
      { id: "graha-mapping", label: "Sun to Ketu Mapping" },
      { id: "planetary-influence", label: "Planetary Influence" },
    ],
  },
  {
    group: "Life Application",
    items: [
      { id: "personality", label: "Personality Traits" },
      { id: "career", label: "Career Alignment" },
      { id: "relationships", label: "Relationships & Compatibility" },
      { id: "health", label: "Health Tendencies" },
    ],
  },
  {
    group: "Time & Decisions",
    items: [
      { id: "lucky-numbers", label: "Lucky Numbers & Dates" },
      { id: "auspicious-timing", label: "Auspicious Timings" },
      { id: "daily-decisions", label: "Daily Decision Science" },
    ],
  },
  {
    group: "Name Science",
    items: [
      { id: "name-correction", label: "Name Correction Logic" },
      { id: "spelling-changes", label: "Spelling Changes" },
      { id: "karma-debate", label: "Numbers vs Karma" },
    ],
  },
  {
    group: "Ethics & Limits",
    items: [
      { id: "limitations", label: "What Numerology Cannot Do" },
      { id: "misinterpretations", label: "Common Misinterpretations" },
      { id: "dependency-risks", label: "Overuse Risks" },
    ],
  },
  {
    group: "Reference",
    items: [{ id: "faq", label: "Numerology FAQs" }],
  },
];

// Number-Planet mapping data
const numberPlanetData = [
  {
    number: 1,
    planet: "Sun",
    sanskrit: "सूर्य (Surya)",
    qualities: "Leadership, authority, individuality, vitality",
  },
  {
    number: 2,
    planet: "Moon",
    sanskrit: "चन्द्र (Chandra)",
    qualities: "Emotion, intuition, receptivity, nurturing",
  },
  {
    number: 3,
    planet: "Jupiter",
    sanskrit: "गुरु (Guru)",
    qualities: "Wisdom, expansion, optimism, teaching",
  },
  {
    number: 4,
    planet: "Rahu",
    sanskrit: "राहु (Rahu)",
    qualities: "Unconventional thinking, ambition, transformation",
  },
  {
    number: 5,
    planet: "Mercury",
    sanskrit: "बुध (Budha)",
    qualities: "Communication, intellect, adaptability, commerce",
  },
  {
    number: 6,
    planet: "Venus",
    sanskrit: "शुक्र (Shukra)",
    qualities: "Love, beauty, harmony, artistic expression",
  },
  {
    number: 7,
    planet: "Ketu",
    sanskrit: "केतु (Ketu)",
    qualities: "Spirituality, mysticism, detachment, insight",
  },
  {
    number: 8,
    planet: "Saturn",
    sanskrit: "शनि (Shani)",
    qualities: "Discipline, karma, perseverance, structure",
  },
  {
    number: 9,
    planet: "Mars",
    sanskrit: "मंगल (Mangal)",
    qualities: "Energy, courage, action, determination",
  },
];

export default function Numerology() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".numerology-section");
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <main className="numerology-page">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="numerology-skip-link">
          Skip to main content
        </a>

        {/* Hero Section */}
        <header className="numerology-hero">
          <div className="numerology-hero-content">
            <span className="numerology-hero-label">
              Vedic Knowledge System • Page 6
            </span>
            <h1 className="numerology-hero-title">Numerology</h1>
            <p className="numerology-hero-sanskrit">
              अंक शास्त्र • Anka Shastra
            </p>
            <p className="numerology-hero-subtitle">
              The ancient Vedic science of numbers—understanding cosmic
              vibrations through numerical patterns, planetary associations, and
              their influence on human life and destiny.
            </p>
          </div>
        </header>

        {/* Main Content with Sidebar */}
        <div className="numerology-main-wrapper" id="main-content">
          {/* Main Content Area */}
          <article className="numerology-content">
            {/* ==================== FOUNDATIONAL ==================== */}

            {/* Section: Introduction */}
            <section id="introduction" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">Foundational</span>
                <h2 className="numerology-section-title">
                  Introduction to Vedic Numerology
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Anka Shastra, the Vedic science of numbers, is rooted in the
                understanding that the universe operates through precise
                numerical patterns. Numbers are not merely mathematical
                symbols—they are vibrations that connect the individual to
                cosmic rhythms.
              </p>

              <p>
                In Vedic tradition, numbers are considered manifestations of
                divine energy. Each digit from 1 to 9 carries a specific
                vibrational frequency associated with a planetary body (Graha)
                in the Jyotish system. This planetary connection distinguishes
                Vedic numerology from purely psychological or modern
                interpretations.
              </p>

              <p>
                The study of Anka Shastra serves multiple purposes:
                understanding one's inherent nature, identifying favorable
                periods for important decisions, assessing compatibility in
                relationships and partnerships, and gaining insight into karmic
                patterns that influence life experiences.
              </p>

              <div className="numerology-info-box numerology-info-box--vedic">
                <span className="numerology-info-icon">📜</span>
                <div className="numerology-info-content">
                  <h4 className="numerology-info-title">Historical Context</h4>
                  <p className="numerology-info-text">
                    References to numerical significance appear throughout Vedic
                    literature, from the Rigveda's hymns organized in numerical
                    patterns to the mathematical precision of Vedic astronomy.
                    The Sulba Sutras and Jyotish texts formalized the
                    relationship between numbers and cosmic principles.
                  </p>
                </div>
              </div>

              <h3>Purpose and Scope</h3>
              <p>
                Vedic numerology does not claim to predict specific events or
                override individual free will. Rather, it offers a framework for
                understanding tendencies, recognizing patterns, and making
                informed choices within the larger context of one's dharma (life
                purpose) and karma (accumulated actions).
              </p>

              <p>
                This knowledge system emphasizes self-awareness over
                determinism. The numbers in your life—birth date, name
                vibration, and significant dates—reveal potential, not fate. How
                you respond to these influences remains within your control.
              </p>
            </section>

            {/* Section: Vedic vs Western */}
            <section id="vedic-vs-western" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">Foundational</span>
                <h2 className="numerology-section-title">
                  Vedic vs Western Numerology
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                While both systems recognize the significance of numbers, Vedic
                and Western numerology differ fundamentally in their
                philosophical foundations, methodologies, and applications.
              </p>

              <div className="numerology-comparison">
                <div className="numerology-comparison-column">
                  <h4 className="numerology-comparison-title">
                    Vedic Numerology (Anka Shastra)
                  </h4>
                  <ul className="numerology-comparison-list">
                    <li className="numerology-comparison-item">
                      Integrated with Jyotish (Vedic astrology)
                    </li>
                    <li className="numerology-comparison-item">
                      Each number linked to a specific Graha (planet)
                    </li>
                    <li className="numerology-comparison-item">
                      Considers karmic implications and dharmic purpose
                    </li>
                    <li className="numerology-comparison-item">
                      Uses Chaldean-influenced letter values
                    </li>
                    <li className="numerology-comparison-item">
                      Emphasizes cyclical time and planetary periods
                    </li>
                    <li className="numerology-comparison-item">
                      Often used alongside birth chart analysis
                    </li>
                  </ul>
                </div>

                <div className="numerology-comparison-column">
                  <h4 className="numerology-comparison-title">
                    Western Numerology
                  </h4>
                  <ul className="numerology-comparison-list">
                    <li className="numerology-comparison-item">
                      Primarily psychological interpretation
                    </li>
                    <li className="numerology-comparison-item">
                      Numbers represent archetypal energies
                    </li>
                    <li className="numerology-comparison-item">
                      Focus on personality and life path
                    </li>
                    <li className="numerology-comparison-item">
                      Uses Pythagorean letter-number system
                    </li>
                    <li className="numerology-comparison-item">
                      Linear progression emphasis
                    </li>
                    <li className="numerology-comparison-item">
                      Often practiced as standalone system
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                The Vedic approach views numbers as part of a larger cosmic
                order, where mathematical principles mirror universal laws. This
                integration with planetary science provides additional layers of
                interpretation not found in Western systems.
              </p>
            </section>

            {/* Section: Cosmic Vibrations */}
            <section id="cosmic-vibrations" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">Foundational</span>
                <h2 className="numerology-section-title">
                  Numbers as Cosmic Vibrations
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                In Vedic cosmology, the universe manifests through sound and
                vibration. Numbers represent specific frequencies within this
                cosmic symphony—each digit a unique note in the universal score.
              </p>

              <p>
                The concept of{" "}
                <span className="numerology-sanskrit">Nada Brahma</span>
                (sound as the essence of creation) underlies this understanding.
                Just as Sanskrit mantras carry specific vibrational qualities,
                numbers possess inherent energetic signatures that influence
                those associated with them.
              </p>

              <div className="numerology-number-grid">
                {numberPlanetData.slice(0, 9).map((item) => (
                  <div key={item.number} className="numerology-number-card">
                    <span className="numerology-number-card-digit">
                      {item.number}
                    </span>
                    <span className="numerology-number-card-name">
                      {item.planet}
                    </span>
                    <span className="numerology-number-card-planet">
                      {item.sanskrit}
                    </span>
                  </div>
                ))}
              </div>

              <p>
                When you repeatedly encounter certain numbers—through your birth
                date, name, or significant life events—you are interacting with
                specific cosmic frequencies. Understanding these vibrations
                allows for conscious alignment with favorable energies.
              </p>

              <h3>The Principle of Reduction</h3>
              <p>
                Vedic numerology reduces all numbers to single digits (1-9)
                through addition. The number 28, for example, becomes 2+8=10,
                and 1+0=1. This reduction reveals the root vibration underlying
                any number, connecting it to its planetary ruler.
              </p>

              <div className="numerology-formula">
                <span className="numerology-formula-label">
                  Root Number Calculation
                </span>
                <div className="numerology-formula-example">
                  28 → 2 + 8 = 10 → 1 + 0 = 1 (Sun)
                </div>
              </div>
            </section>

            {/* ==================== CORE NUMBER SYSTEM ==================== */}

            {/* Section: Moolank */}
            <section id="moolank" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">Core Numbers</span>
                <h2 className="numerology-section-title">
                  Moolank — The Birth Number
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Your Moolank (मूलांक) or Birth Number is derived from the day of
                the month you were born. It represents your core personality,
                inherent tendencies, and the way you naturally approach life.
              </p>

              <p>
                The calculation is straightforward: if you were born on the 7th,
                your Moolank is 7. If born on the 25th, add the digits: 2+5=7.
                The Moolank reveals your psychic number—the inner self that
                influences your choices, preferences, and instinctive reactions.
              </p>

              <div className="numerology-formula">
                <span className="numerology-formula-label">
                  Moolank Calculation
                </span>
                <div className="numerology-formula-example">
                  Birth Date: 25th → 2 + 5 = 7 (Ketu)
                </div>
              </div>

              <div className="numerology-definitions">
                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">1</span>
                    Moolank 1 — The Leader
                  </div>
                  <p className="numerology-definition-desc">
                    Independent, ambitious, pioneering spirit. Natural authority
                    and creative drive. Ruled by Sun (Surya). Born on 1st, 10th,
                    19th, or 28th.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">2</span>
                    Moolank 2 — The Diplomat
                  </div>
                  <p className="numerology-definition-desc">
                    Sensitive, intuitive, cooperative nature. Emotional depth
                    and artistic sensibility. Ruled by Moon (Chandra). Born on
                    2nd, 11th, 20th, or 29th.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">3</span>
                    Moolank 3 — The Teacher
                  </div>
                  <p className="numerology-definition-desc">
                    Optimistic, expressive, wise counselor. Natural teaching
                    ability and philosophical mind. Ruled by Jupiter (Guru).
                    Born on 3rd, 12th, 21st, or 30th.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">4</span>
                    Moolank 4 — The Builder
                  </div>
                  <p className="numerology-definition-desc">
                    Unconventional, hardworking, systematic approach. Often
                    faces sudden changes. Ruled by Rahu. Born on 4th, 13th,
                    22nd, or 31st.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">5</span>
                    Moolank 5 — The Communicator
                  </div>
                  <p className="numerology-definition-desc">
                    Versatile, curious, adaptable nature. Strong commercial
                    sense and quick thinking. Ruled by Mercury (Budha). Born on
                    5th, 14th, or 23rd.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">6</span>
                    Moolank 6 — The Nurturer
                  </div>
                  <p className="numerology-definition-desc">
                    Loving, responsible, aesthetically inclined. Strong sense of
                    duty and beauty. Ruled by Venus (Shukra). Born on 6th, 15th,
                    or 24th.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">7</span>
                    Moolank 7 — The Seeker
                  </div>
                  <p className="numerology-definition-desc">
                    Introspective, spiritual, analytical mind. Drawn to mystery
                    and deeper truths. Ruled by Ketu. Born on 7th, 16th, or
                    25th.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">8</span>
                    Moolank 8 — The Achiever
                  </div>
                  <p className="numerology-definition-desc">
                    Determined, ambitious, karmic challenges. Material success
                    through perseverance. Ruled by Saturn (Shani). Born on 8th,
                    17th, or 26th.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">9</span>
                    Moolank 9 — The Warrior
                  </div>
                  <p className="numerology-definition-desc">
                    Courageous, energetic, humanitarian spirit. Natural fighter
                    and protector. Ruled by Mars (Mangal). Born on 9th, 18th, or
                    27th.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Bhagyank */}
            <section id="bhagyank" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">Core Numbers</span>
                <h2 className="numerology-section-title">
                  Bhagyank — The Destiny Number
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Your Bhagyank (भाग्यांक) or Destiny Number is calculated from
                your complete birth date—day, month, and year combined. It
                represents your life path, karmic purpose, and the direction
                your life tends to unfold.
              </p>

              <p>
                While Moolank shows who you are at your core, Bhagyank reveals
                what you are meant to become. It indicates the opportunities,
                challenges, and experiences that will shape your journey. The
                Bhagyank becomes increasingly influential as you mature.
              </p>

              <div className="numerology-formula">
                <span className="numerology-formula-label">
                  Bhagyank Calculation Example
                </span>
                <div className="numerology-formula-example">
                  Birth Date: 15/08/1990
                  <br />
                  1+5+0+8+1+9+9+0 = 33 → 3+3 = 6 (Venus)
                </div>
              </div>

              <h3>Relationship Between Moolank and Bhagyank</h3>
              <p>
                When your Moolank and Bhagyank are in harmony (compatible
                planetary rulers), life tends to flow more smoothly. When they
                conflict, you may experience tension between your natural
                tendencies and your life direction—a situation that, while
                challenging, often produces growth.
              </p>

              <div className="numerology-info-box">
                <span className="numerology-info-icon">💡</span>
                <div className="numerology-info-content">
                  <h4 className="numerology-info-title">
                    Compatible Number Pairs
                  </h4>
                  <p className="numerology-info-text">
                    1-3-9 (Sun-Jupiter-Mars): Fire and expansive energies
                    <br />
                    2-7 (Moon-Ketu): Intuitive and spiritual connection
                    <br />
                    5-6 (Mercury-Venus): Communication and harmony
                    <br />
                    4-8 (Rahu-Saturn): Karmic and transformative path
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Naamank */}
            <section id="naamank" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">Core Numbers</span>
                <h2 className="numerology-section-title">
                  Naamank — The Name Number
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Your Naamank (नामांक) is derived from the numerical values of
                the letters in your name. It represents your outer personality—
                how others perceive you and the vibration you project into the
                world.
              </p>

              <p>
                Unlike Moolank and Bhagyank which are fixed at birth, Naamank
                can change through name modifications. This makes it the one
                numerological factor that individuals can consciously alter,
                though such changes should be considered carefully.
              </p>

              <h3>Letter-Number Correspondence</h3>
              <p>
                Vedic numerology uses a system where each letter carries a
                numerical value. The most commonly used system assigns values
                based on sound vibration rather than alphabetical position:
              </p>

              <table className="numerology-planet-table">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Letters</th>
                    <th>Planet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="number-cell">1</td>
                    <td>A, I, J, Q, Y</td>
                    <td>Sun</td>
                  </tr>
                  <tr>
                    <td className="number-cell">2</td>
                    <td>B, K, R</td>
                    <td>Moon</td>
                  </tr>
                  <tr>
                    <td className="number-cell">3</td>
                    <td>C, G, L, S</td>
                    <td>Jupiter</td>
                  </tr>
                  <tr>
                    <td className="number-cell">4</td>
                    <td>D, M, T</td>
                    <td>Rahu</td>
                  </tr>
                  <tr>
                    <td className="number-cell">5</td>
                    <td>E, H, N, X</td>
                    <td>Mercury</td>
                  </tr>
                  <tr>
                    <td className="number-cell">6</td>
                    <td>U, V, W</td>
                    <td>Venus</td>
                  </tr>
                  <tr>
                    <td className="number-cell">7</td>
                    <td>O, Z</td>
                    <td>Ketu</td>
                  </tr>
                  <tr>
                    <td className="number-cell">8</td>
                    <td>F, P</td>
                    <td>Saturn</td>
                  </tr>
                </tbody>
              </table>

              <p>
                Note: The number 9 (Mars) is not assigned to any letter in
                traditional Chaldean-based systems, as 9 is considered a sacred
                number that absorbs all other vibrations.
              </p>
            </section>

            {/* Section: Psychic vs Destiny */}
            <section id="psychic-destiny" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">Core Numbers</span>
                <h2 className="numerology-section-title">
                  Psychic vs Destiny Numbers
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                The distinction between Psychic Number (Moolank) and Destiny
                Number (Bhagyank) forms the foundation of practical numerology.
                Understanding their interplay reveals the dynamic tension
                between inner nature and outer expression.
              </p>

              <div className="numerology-subsection">
                <h4 className="numerology-subsection-title">
                  Psychic Number (Moolank)
                </h4>
                <p>
                  Dominant from birth until approximately age 35-40. Governs
                  self-image, personal choices, and instinctive reactions. This
                  is the "you" that you feel yourself to be. It influences early
                  career choices, relationship patterns, and lifestyle
                  preferences.
                </p>
              </div>

              <div className="numerology-subsection">
                <h4 className="numerology-subsection-title">
                  Destiny Number (Bhagyank)
                </h4>
                <p>
                  Becomes increasingly influential after age 35-40. Shapes life
                  circumstances, opportunities, and the perception others have
                  of you. This is what life "makes" of you through experience.
                  It often reveals itself through career evolution and life
                  direction.
                </p>
              </div>

              <p>
                A person with Moolank 5 (Mercury—adaptable, communicative) and
                Bhagyank 8 (Saturn—structured, disciplined) may feel an early
                pull toward variety and change, but find life circumstances
                pushing them toward more serious, structured pursuits as they
                mature.
              </p>
            </section>

            {/* Section: Master Numbers */}
            <section id="master-numbers" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">Core Numbers</span>
                <h2 className="numerology-section-title">
                  Master Numbers — A Traditional View
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                The concept of "Master Numbers" (11, 22, 33) is primarily a
                Western numerology construct. Traditional Vedic numerology does
                not emphasize these numbers in the same way, though double-digit
                repetitions carry their own significance.
              </p>

              <p>
                In strict Vedic practice, all numbers reduce to single digits
                (1-9) for analysis. The number 11 becomes 2 (Moon), 22 becomes 4
                (Rahu), and 33 becomes 6 (Venus). The planetary ruler remains
                the primary determinant of influence.
              </p>

              <div className="numerology-info-box numerology-info-box--warning">
                <span className="numerology-info-icon">⚠️</span>
                <div className="numerology-info-content">
                  <h4 className="numerology-info-title">A Note on Synthesis</h4>
                  <p className="numerology-info-text">
                    Some contemporary practitioners blend Western and Vedic
                    systems, retaining master numbers while using Vedic
                    planetary associations. This synthesis should be approached
                    with awareness of its hybrid nature. Traditional Anka
                    Shastra does not separate master numbers from their reduced
                    forms.
                  </p>
                </div>
              </div>

              <p>
                That said, double-digit numbers before reduction do carry
                qualitative meaning. The number 29 and 11 both reduce to 2, but
                29 (2+9) carries Mars influence alongside Moon, while 11 (1+1)
                carries doubled Sun influence. These secondary considerations
                add nuance to interpretation.
              </p>
            </section>

            {/* ==================== PLANETARY LINKAGE ==================== */}

            {/* Section: Planetary Rulers */}
            <section id="planetary-rulers" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">
                  Planetary Linkage
                </span>
                <h2 className="numerology-section-title">
                  Numbers and Planetary Rulers
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                The fundamental distinction of Vedic numerology lies in its
                integration with Jyotish planetary science. Each number 1-9 is
                governed by a specific Graha (planet), inheriting that planet's
                characteristics, strengths, and challenges.
              </p>

              <p>
                This planetary association is not arbitrary—it reflects the
                Vedic understanding of cosmic order where mathematical
                principles and astronomical bodies share underlying patterns.
                Understanding these associations allows for deeper
                interpretation beyond simple number meanings.
              </p>

              <table className="numerology-planet-table">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Planet</th>
                    <th>Sanskrit Name</th>
                    <th>Key Qualities</th>
                  </tr>
                </thead>
                <tbody>
                  {numberPlanetData.map((item) => (
                    <tr key={item.number}>
                      <td className="number-cell">{item.number}</td>
                      <td className="planet-cell">{item.planet}</td>
                      <td className="sanskrit-cell">{item.sanskrit}</td>
                      <td>{item.qualities}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Section: Graha Mapping */}
            <section id="graha-mapping" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">
                  Planetary Linkage
                </span>
                <h2 className="numerology-section-title">
                  Sun to Ketu: Number–Graha Mapping
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Each planet in the Jyotish system governs specific aspects of
                life. When a number carries that planet's vibration, it
                influences corresponding areas—from career and relationships to
                health and spiritual development.
              </p>

              <h3>
                <span className="numerology-number-inline">1</span> Sun (Surya)
              </h3>
              <p>
                The Sun represents the soul (Atma), authority, and vital force.
                Number 1 individuals possess natural leadership, strong will,
                and a desire for recognition. They may struggle with ego and
                need to learn humility. Favorable for government positions,
                entrepreneurship, and independent work.
              </p>

              <h3>
                <span className="numerology-number-inline">2</span> Moon
                (Chandra)
              </h3>
              <p>
                The Moon governs mind (Manas), emotions, and nurturing. Number 2
                individuals are sensitive, intuitive, and relationship-oriented.
                They may experience mood fluctuations and need emotional
                security. Favorable for counseling, caregiving, and creative
                arts.
              </p>

              <h3>
                <span className="numerology-number-inline">3</span> Jupiter
                (Guru)
              </h3>
              <p>
                Jupiter represents wisdom, expansion, and divine grace. Number 3
                individuals are optimistic teachers with philosophical
                inclinations. They may overextend themselves or become preachy.
                Favorable for education, law, spiritual work, and advisory
                roles.
              </p>

              <h3>
                <span className="numerology-number-inline">4</span> Rahu
              </h3>
              <p>
                Rahu is the north lunar node, representing unconventional paths
                and material desires. Number 4 individuals experience sudden
                changes and think outside conventional boundaries. They may face
                instability or become obsessive. Favorable for technology,
                research, and pioneering fields.
              </p>

              <h3>
                <span className="numerology-number-inline">5</span> Mercury
                (Budha)
              </h3>
              <p>
                Mercury governs intellect, communication, and commerce. Number 5
                individuals are versatile, quick-witted, and adaptable. They may
                become scattered or superficial. Favorable for business,
                writing, teaching, and any field requiring communication skills.
              </p>

              <h3>
                <span className="numerology-number-inline">6</span> Venus
                (Shukra)
              </h3>
              <p>
                Venus represents love, beauty, and material comfort. Number 6
                individuals value harmony, aesthetics, and relationships. They
                may become overly indulgent or dependent on others' approval.
                Favorable for arts, hospitality, luxury goods, and design.
              </p>

              <h3>
                <span className="numerology-number-inline">7</span> Ketu
              </h3>
              <p>
                Ketu is the south lunar node, representing spirituality and
                detachment. Number 7 individuals are introspective seekers drawn
                to hidden knowledge. They may become isolated or impractical.
                Favorable for research, spirituality, psychology, and healing.
              </p>

              <h3>
                <span className="numerology-number-inline">8</span> Saturn
                (Shani)
              </h3>
              <p>
                Saturn represents karma, discipline, and time. Number 8
                individuals face significant challenges but can achieve great
                material success through perseverance. They may become harsh or
                pessimistic. Favorable for administration, real estate, and
                long-term investments.
              </p>

              <h3>
                <span className="numerology-number-inline">9</span> Mars
                (Mangal)
              </h3>
              <p>
                Mars governs energy, courage, and action. Number 9 individuals
                are dynamic warriors with humanitarian instincts. They may
                become aggressive or impulsive. Favorable for military, sports,
                surgery, engineering, and competitive fields.
              </p>
            </section>

            {/* Section: Planetary Influence */}
            <section id="planetary-influence" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">
                  Planetary Linkage
                </span>
                <h2 className="numerology-section-title">
                  How Planets Influence Numbers
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                The planetary ruler of a number doesn't just assign meaning—it
                creates a living connection to celestial cycles. Your numbers
                respond to planetary transits, dasha periods, and astronomical
                events.
              </p>

              <p>
                When the ruling planet of your Moolank is strong in transit
                (well-placed, not retrograde, not combust), you may experience
                enhanced energy and favorable outcomes. When it's challenged,
                the number's difficult qualities may emerge more prominently.
              </p>

              <h3>Practical Implications</h3>
              <p>
                Understanding planetary rulership allows for integration with
                Vedic astrology. A person can examine their Jyotish birth chart
                to see how their numerological planets are placed, gaining
                deeper insight into whether a number's influence will manifest
                more positively or present more challenges.
              </p>

              <div className="numerology-info-box">
                <span className="numerology-info-icon">🔗</span>
                <div className="numerology-info-content">
                  <h4 className="numerology-info-title">
                    Numerology-Astrology Integration
                  </h4>
                  <p className="numerology-info-text">
                    If your Moolank is 8 (Saturn) and Saturn is well-placed in
                    your birth chart (own sign, exalted, or strong house),
                    Saturn's challenging nature may manifest as discipline and
                    achievement rather than obstacles. Conversely, a poorly
                    placed Saturn suggests the need for extra care in
                    8-influenced matters.
                  </p>
                </div>
              </div>
            </section>

            {/* ==================== LIFE APPLICATION ==================== */}

            {/* Section: Personality */}
            <section id="personality" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">
                  Life Application
                </span>
                <h2 className="numerology-section-title">
                  Numerology and Personality Traits
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Your core numbers provide a framework for understanding
                personality—not as fixed categories, but as tendencies and
                potentials. The interplay between Moolank, Bhagyank, and Naamank
                creates a unique personality profile.
              </p>

              <p>
                Consider numerology as describing your "default settings"—the
                natural inclinations you were born with. Life experiences,
                choices, and conscious development can modify how these
                tendencies manifest, but understanding the baseline helps in
                self-awareness and personal growth.
              </p>

              <h3>Reading Your Personality Profile</h3>
              <p>
                Begin with your Moolank for core nature, then consider how your
                Bhagyank modifies or supports it. Finally, examine whether your
                Naamank harmonizes with or creates tension against your birth
                numbers. Conflicts between these numbers often explain inner
                struggles.
              </p>

              <p>
                A person with Moolank 2 (sensitive, cooperative) but Naamank 1
                (assertive, independent) may feel internal conflict between
                their desire for harmony and the image they project to the
                world. This awareness can guide conscious development of both
                qualities.
              </p>
            </section>

            {/* Section: Career */}
            <section id="career" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">
                  Life Application
                </span>
                <h2 className="numerology-section-title">
                  Career and Professional Alignment
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Numerology suggests career directions based on planetary
                affinities. While not prescriptive, these indications help
                identify fields where natural strengths align with professional
                demands.
              </p>

              <div className="numerology-definitions">
                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    Numbers 1 & 9 — Leadership Fields
                  </div>
                  <p className="numerology-definition-desc">
                    Executive positions, entrepreneurship, government, military,
                    sports, competitive industries. Sun and Mars energy thrives
                    where initiative and courage are valued.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    Numbers 2 & 7 — Intuitive Fields
                  </div>
                  <p className="numerology-definition-desc">
                    Psychology, counseling, research, spiritual work, healing
                    arts, creative writing. Moon and Ketu energy supports
                    insight-based professions.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    Numbers 3 & 6 — Creative/Service Fields
                  </div>
                  <p className="numerology-definition-desc">
                    Education, arts, hospitality, law, design, entertainment.
                    Jupiter and Venus energy excels in fields involving beauty,
                    wisdom, and human connection.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    Numbers 5 — Communication Fields
                  </div>
                  <p className="numerology-definition-desc">
                    Media, marketing, trading, travel, technology, writing,
                    sales. Mercury energy adapts well to fast-paced, varied
                    environments.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    Numbers 4 & 8 — Structural Fields
                  </div>
                  <p className="numerology-definition-desc">
                    Engineering, real estate, manufacturing, administration,
                    technology, finance. Rahu and Saturn energy builds lasting
                    systems and structures.
                  </p>
                </div>
              </div>

              <p>
                Remember that these are orientations, not limitations. A person
                with number 2 can succeed in leadership (number 1 field) by
                leading through collaboration rather than command. The key is
                finding how your natural energy can serve the role.
              </p>
            </section>

            {/* Section: Relationships */}
            <section id="relationships" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">
                  Life Application
                </span>
                <h2 className="numerology-section-title">
                  Relationships and Compatibility
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Numerological compatibility examines how different numbers
                interact based on their planetary relationships. Friendly
                planets suggest natural harmony; enemy planets indicate
                potential friction requiring conscious effort.
              </p>

              <h3>Planetary Friendships in Jyotish</h3>
              <p>
                In Vedic astrology, planets have natural friendships and
                enmities. These relationships transfer to their corresponding
                numbers:
              </p>

              <div className="numerology-info-box">
                <span className="numerology-info-icon">🤝</span>
                <div className="numerology-info-content">
                  <h4 className="numerology-info-title">
                    Natural Compatibilities
                  </h4>
                  <p className="numerology-info-text">
                    1-2-3: Sun, Moon, Jupiter are friendly — mutual support
                    <br />
                    1-5-9: Sun, Mercury, Mars work well together
                    <br />
                    2-4-7: Moon, Rahu, Ketu share intuitive connection
                    <br />
                    3-5-6: Jupiter, Mercury, Venus harmonize
                  </p>
                </div>
              </div>

              <div className="numerology-info-box numerology-info-box--warning">
                <span className="numerology-info-icon">⚡</span>
                <div className="numerology-info-content">
                  <h4 className="numerology-info-title">
                    Challenging Combinations
                  </h4>
                  <p className="numerology-info-text">
                    1-8: Sun and Saturn — authority conflicts
                    <br />
                    2-8: Moon and Saturn — emotional restriction
                    <br />
                    4-9: Rahu and Mars — explosive energy
                    <br />
                    6-8: Venus and Saturn — desire vs discipline
                  </p>
                </div>
              </div>

              <p>
                Challenging combinations don't doom relationships—they indicate
                areas requiring awareness and effort. Many successful
                partnerships involve numerologically challenging combinations
                where differences create growth opportunities.
              </p>
            </section>

            {/* Section: Health */}
            <section id="health" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">
                  Life Application
                </span>
                <h2 className="numerology-section-title">
                  Health and Mental Tendencies
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Each number carries associations with specific body systems and
                psychological tendencies. These are not diagnoses but areas of
                potential vulnerability worth monitoring.
              </p>

              <p>
                The planetary ruler of your Moolank governs certain bodily
                functions in Ayurvedic and Jyotish medical astrology. Awareness
                of these associations supports preventive health measures.
              </p>

              <div className="numerology-definitions">
                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">1</span>
                    Sun — Heart, eyes, spine, vitality
                  </div>
                  <p className="numerology-definition-desc">
                    Watch for cardiac issues, eye strain, blood pressure.
                    Maintain strong vital energy through regular activity.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">2</span>
                    Moon — Mind, digestion, fluids, breasts
                  </div>
                  <p className="numerology-definition-desc">
                    Watch for anxiety, digestive issues, water retention.
                    Emotional balance directly affects physical health.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">3</span>
                    Jupiter — Liver, thighs, fat metabolism
                  </div>
                  <p className="numerology-definition-desc">
                    Watch for weight gain, liver issues, diabetes tendency.
                    Moderation in indulgence is key.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">4</span>
                    Rahu — Nervous system, unusual conditions
                  </div>
                  <p className="numerology-definition-desc">
                    Watch for anxiety, mysterious symptoms, addictive
                    tendencies. Grounding practices beneficial.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">5</span>
                    Mercury — Nervous system, lungs, skin
                  </div>
                  <p className="numerology-definition-desc">
                    Watch for stress-related conditions, respiratory issues,
                    skin problems. Mental rest essential.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">6</span>
                    Venus — Kidneys, reproductive system, throat
                  </div>
                  <p className="numerology-definition-desc">
                    Watch for kidney issues, hormonal imbalances, throat
                    problems. Balance sensory indulgence.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">7</span>
                    Ketu — Immunity, spiritual/psychic sensitivity
                  </div>
                  <p className="numerology-definition-desc">
                    Watch for immune disorders, unexplained conditions, psychic
                    overwhelm. Spiritual practice supports health.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">8</span>
                    Saturn — Bones, joints, teeth, chronic conditions
                  </div>
                  <p className="numerology-definition-desc">
                    Watch for arthritis, dental issues, depression. Consistent
                    care prevents chronic development.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    <span className="numerology-number-inline">9</span>
                    Mars — Blood, muscles, inflammation
                  </div>
                  <p className="numerology-definition-desc">
                    Watch for blood disorders, accidents, inflammatory
                    conditions. Channel energy through physical activity.
                  </p>
                </div>
              </div>
            </section>

            {/* ==================== TIME & DECISION SCIENCE ==================== */}

            {/* Section: Lucky Numbers */}
            <section id="lucky-numbers" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">
                  Time & Decisions
                </span>
                <h2 className="numerology-section-title">
                  Lucky Numbers and Dates
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                "Lucky" in Vedic numerology means harmonious—numbers that
                resonate with your personal vibration. These aren't magical but
                represent alignment between your energy and numerical
                frequencies.
              </p>

              <p>
                Your favorable numbers are typically those ruled by planets
                friendly to your Moolank ruler, your Bhagyank itself, and
                numbers that complete harmonious combinations with your existing
                numbers.
              </p>

              <h3>Determining Personal Lucky Numbers</h3>
              <p>
                Start with your Moolank and identify its planetary friends.
                Numbers ruled by those friendly planets become your supportive
                numbers. For example, if your Moolank is 3 (Jupiter), favorable
                numbers include 1, 2, and 9 (planets friendly to Jupiter).
              </p>

              <h3>Favorable Dates</h3>
              <p>
                Dates that reduce to your favorable numbers are considered
                auspicious for important activities. If 1, 3, and 9 are your
                lucky numbers, dates like 1st, 3rd, 9th, 10th, 12th, 18th, 19th,
                21st, 27th, 28th, 30th offer supportive energy.
              </p>

              <div className="numerology-info-box numerology-info-box--warning">
                <span className="numerology-info-icon">⚠️</span>
                <div className="numerology-info-content">
                  <h4 className="numerology-info-title">Important Caveat</h4>
                  <p className="numerology-info-text">
                    No date is universally lucky or unlucky. What matters is the
                    alignment between the date and the individual. Also,
                    numerology is one factor—planetary transits, personal
                    readiness, and practical circumstances also matter.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Auspicious Timing */}
            <section id="auspicious-timing" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">
                  Time & Decisions
                </span>
                <h2 className="numerology-section-title">Auspicious Timings</h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Vedic culture emphasizes Muhurta—selecting favorable times for
                important actions. Numerology contributes to this timing science
                by identifying numerically harmonious moments.
              </p>

              <p>
                When planning significant events—business launches, contracts,
                weddings, travel—consider dates that align with favorable
                numbers. This doesn't guarantee success but places action in
                resonance with supportive vibrations.
              </p>

              <h3>Considerations for Timing</h3>
              <p>
                The total date reduction matters (day + month + year), the day
                of month matters (for daily energy), and the weekday carries
                planetary association (Sunday=Sun, Monday=Moon, etc.). Multiple
                layers of numerical harmony create stronger auspiciousness.
              </p>

              <p>
                Traditional practice combines numerology with Panchang (Vedic
                calendar) considerations including tithi, nakshatra, and
                planetary hora for comprehensive Muhurta selection.
              </p>
            </section>

            {/* Section: Daily Decisions */}
            <section id="daily-decisions" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">
                  Time & Decisions
                </span>
                <h2 className="numerology-section-title">
                  Numerology in Daily Decisions
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                While major decisions benefit from careful numerological
                consideration, daily life shouldn't become
                calculation-dependent. Numerology serves as a supporting
                framework, not a constant consultant.
              </p>

              <p>
                Practical application includes being aware of your favorable
                numbers, noticing when significant numerical patterns appear
                (repeated sightings of certain numbers), and using favorable
                dates for important meetings or submissions when flexibility
                exists.
              </p>

              <h3>Balanced Approach</h3>
              <p>
                Check numerology for major decisions: signing contracts,
                starting businesses, important purchases. Don't obsess over
                every daily action. Treat unfavorable dates as requiring extra
                care, not avoidance. Remember that individual karma and effort
                remain primary factors.
              </p>
            </section>

            {/* ==================== NAME & CORRECTION SCIENCE ==================== */}

            {/* Section: Name Correction */}
            <section id="name-correction" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">Name Science</span>
                <h2 className="numerology-section-title">
                  Name Correction Logic
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Name correction is perhaps the most controversial application of
                numerology. The theory holds that aligning your name's numerical
                value with your birth numbers creates greater harmony and
                supports favorable outcomes.
              </p>

              <p>
                The practice involves calculating your current name's Naamank
                and comparing it with your Moolank and Bhagyank. If significant
                disharmony exists, spelling modifications can shift the name's
                numerical value toward greater compatibility.
              </p>

              <h3>When Correction May Help</h3>
              <p>
                Name correction is typically considered when persistent
                obstacles seem to resist other solutions, when there's strong
                dissonance between Naamank and birth numbers, when starting a
                new phase (business, marriage, career change), or when
                traditional remedies have been exhausted.
              </p>

              <h3>When to Avoid</h3>
              <p>
                Don't change names impulsively or based on single consultations.
                Avoid changes if your current name carries significant family or
                cultural meaning you value. Don't expect miraculous
                transformations—name changes work slowly if at all. Be wary of
                practitioners who guarantee specific outcomes.
              </p>
            </section>

            {/* Section: Spelling Changes */}
            <section id="spelling-changes" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">Name Science</span>
                <h2 className="numerology-section-title">
                  Spelling Changes: When and When Not
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                If name modification is chosen, the standard approach involves
                minor spelling adjustments rather than complete name changes.
                Adding or removing a letter, doubling a consonant, or using an
                alternate transliteration can shift numerical value.
              </p>

              <p>
                Common modifications include adding a letter: "Raj" to "Raaj" or
                "Rajj", removing a letter: "Shree" to "Shri", alternate
                spelling: "Amit" to "Amith" or "Ameeth". The goal is minimal
                visual change with meaningful numerical shift.
              </p>

              <div className="numerology-info-box numerology-info-box--warning">
                <span className="numerology-info-icon">⚠️</span>
                <div className="numerology-info-content">
                  <h4 className="numerology-info-title">Risks to Consider</h4>
                  <p className="numerology-info-text">
                    Legal complications with official documents. Confusion in
                    professional and personal networks. Psychological impact of
                    identity change. No guarantee of desired results. Potential
                    loss of name's original meaning or heritage significance.
                  </p>
                </div>
              </div>

              <h3>Implementation</h3>
              <p>
                If proceeding with name modification, implement gradually. Begin
                using the new spelling in informal contexts before legal
                changes. Allow time to assess whether the change feels right.
                Maintain the original spelling for historical records and family
                documents if desired.
              </p>
            </section>

            {/* Section: Karma Debate */}
            <section id="karma-debate" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">Name Science</span>
                <h2 className="numerology-section-title">
                  Numbers vs Karma Debate
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                A fundamental question in Vedic numerology: can changing numbers
                (through name modification) override karma? Traditional
                philosophy suggests the answer is nuanced.
              </p>

              <p>
                Karma operates on multiple levels—Sanchita (accumulated),
                Prarabdha (destined for this life), and Kriyamana (being created
                now). Name changes may influence Kriyamana karma by altering
                current vibrations, but cannot directly modify Prarabdha karma
                already set in motion.
              </p>

              <h3>A Balanced View</h3>
              <p>
                Consider numerological remedies (including name changes) as
                supportive measures, not primary interventions. They work
                alongside, not instead of, personal effort, ethical living,
                spiritual practice, and acceptance of karmic patterns. The
                vibration of a name is one thread in a vast karmic tapestry.
              </p>

              <p>
                Those who achieve results from name changes likely do so because
                the change coincides with other favorable factors—matured karma,
                changed attitude, renewed effort—rather than the spelling alone.
              </p>
            </section>

            {/* ==================== LIMITATIONS & ETHICS ==================== */}

            {/* Section: Limitations */}
            <section id="limitations" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">
                  Ethics & Limits
                </span>
                <h2 className="numerology-section-title">
                  What Numerology Cannot Do
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Responsible practice requires clear acknowledgment of
                numerology's limitations. Understanding what the system cannot
                do is as important as knowing its applications.
              </p>

              <div className="numerology-definitions">
                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    Cannot Predict Specific Events
                  </div>
                  <p className="numerology-definition-desc">
                    Numerology identifies tendencies and cycles, not specific
                    occurrences. It cannot tell you when you'll get married,
                    receive a promotion, or encounter specific situations.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    Cannot Override Free Will
                  </div>
                  <p className="numerology-definition-desc">
                    Your choices remain primary. Numbers influence tendencies,
                    but you decide how to respond. No numerical pattern forces
                    any particular action or outcome.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    Cannot Guarantee Success
                  </div>
                  <p className="numerology-definition-desc">
                    Favorable numbers and dates support but don't ensure
                    positive results. Success requires preparation, skill,
                    effort, and timing—numbers are one supportive factor.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    Cannot Replace Professional Advice
                  </div>
                  <p className="numerology-definition-desc">
                    Medical, legal, financial, and psychological matters require
                    qualified professionals. Numerology is not a substitute for
                    expert consultation in specialized fields.
                  </p>
                </div>

                <div className="numerology-definition-item">
                  <div className="numerology-definition-term">
                    Cannot Eliminate Karma
                  </div>
                  <p className="numerology-definition-desc">
                    Karmic patterns exist independent of numerical analysis.
                    Numerology may help understand patterns but cannot bypass
                    the need to experience and learn from life's challenges.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Misinterpretations */}
            <section id="misinterpretations" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">
                  Ethics & Limits
                </span>
                <h2 className="numerology-section-title">
                  Common Misinterpretations
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Popular understanding of numerology often includes
                misconceptions that misrepresent the system's actual framework
                and purpose.
              </p>

              <h3>"Bad" Numbers Don't Exist</h3>
              <p>
                No number is inherently unfortunate. Each carries specific
                qualities that may be challenging in certain contexts but
                valuable in others. The number 8 (Saturn) is feared by some but
                represents achievement through perseverance—hardly negative for
                those willing to work.
              </p>

              <h3>Numbers Don't Work in Isolation</h3>
              <p>
                A single number never tells the complete story. The interplay
                between Moolank, Bhagyank, Naamank, and current cycles creates
                nuanced influences. Judging by one number alone oversimplifies.
              </p>

              <h3>Compatibility Isn't Binary</h3>
              <p>
                Numerological compatibility suggests tendencies, not fate.
                "Incompatible" numbers don't doom relationships—they indicate
                areas requiring awareness. Many successful partnerships involve
                challenging numerical combinations.
              </p>

              <h3>Name Changes Aren't Magic</h3>
              <p>
                Changing a name's spelling doesn't automatically transform life
                circumstances. Any benefits come gradually and work alongside
                other factors. Instant results from name changes should be
                viewed skeptically.
              </p>
            </section>

            {/* Section: Dependency Risks */}
            <section id="dependency-risks" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">
                  Ethics & Limits
                </span>
                <h2 className="numerology-section-title">
                  Dependency and Overuse Risks
                </h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Like any knowledge system, numerology becomes problematic when
                it replaces personal judgment or creates anxiety-driven
                dependence. Responsible use requires balance.
              </p>

              <h3>Signs of Unhealthy Dependence</h3>
              <p>
                Inability to make decisions without numerical consultation.
                Anxiety about "bad number" days preventing normal activity.
                Excessive spending on consultations and remedies. Blaming
                numbers for personal choices and their consequences. Isolation
                from people with "incompatible" numbers.
              </p>

              <h3>Maintaining Healthy Practice</h3>
              <p>
                Use numerology as one input among many for decisions. Don't let
                numerical analysis override common sense. Treat unfavorable
                periods as times for extra care, not paralysis. Remember that
                your choices shape outcomes more than numbers do. Seek qualified
                guidance rather than algorithmic predictions.
              </p>

              <div className="numerology-info-box">
                <span className="numerology-info-icon">🎯</span>
                <div className="numerology-info-content">
                  <h4 className="numerology-info-title">
                    The Purpose of Self-Knowledge
                  </h4>
                  <p className="numerology-info-text">
                    Numerology serves self-awareness and wise decision-making.
                    If it increases anxiety, restricts freedom, or replaces
                    personal responsibility, it has moved away from its
                    authentic purpose. The goal is empowerment, not dependence.
                  </p>
                </div>
              </div>
            </section>

            {/* ==================== REFERENCE ==================== */}

            {/* Section: FAQ */}
            <section id="faq" className="numerology-section">
              <header className="numerology-section-header">
                <span className="numerology-section-label">Reference</span>
                <h2 className="numerology-section-title">Numerology FAQs</h2>
                <hr className="numerology-section-divider" />
              </header>

              <p className="lead">
                Common questions about Vedic numerology, answered with clarity
                and appropriate acknowledgment of the system's scope and limits.
              </p>

              <div className="numerology-faq-list">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className={`numerology-faq-item ${
                      expandedFaq === index ? "expanded" : ""
                    }`}
                  >
                    <button
                      className="numerology-faq-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={expandedFaq === index}
                    >
                      {faq.question}
                      <span className="numerology-faq-icon">▼</span>
                    </button>
                    {expandedFaq === index && (
                      <div className="numerology-faq-answer">{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* Right Sidebar Navigation */}
          <aside className="numerology-sidebar">
            <nav className="numerology-toc" aria-label="Table of contents">
              <h3 className="numerology-toc-title">Contents</h3>
              {navigationSections.map((group) => (
                <div key={group.group} className="numerology-toc-group">
                  <span className="numerology-toc-group-title">
                    {group.group}
                  </span>
                  <ul className="numerology-toc-list">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`numerology-toc-link ${
                            activeSection === item.id ? "active" : ""
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.id);
                          }}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>
        </div>

        {/* Page Footer */}
        <footer className="numerology-footer">
          <div className="numerology-footer-content">
            <div className="numerology-footer-brand">
              <img
                src="/Astrochitra-color-logo.svg"
                alt="Astro Chitra"
                className="numerology-footer-logo"
              />
              <p className="numerology-footer-tagline">
                Authentic Vedic knowledge for modern seekers. Explore astrology,
                numerology, and traditional wisdom with clarity and integrity.
              </p>
            </div>

            <div>
              <h4 className="numerology-footer-column-title">Explore</h4>
              <ul className="numerology-footer-links">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/astrology">Astrology</a>
                </li>
                <li>
                  <a href="/vastu">Vastu Shastra</a>
                </li>
                <li>
                  <a href="/palmistry">Palmistry</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="numerology-footer-column-title">Readings</h4>
              <ul className="numerology-footer-links">
                <li>
                  <a href="/birth-chart-analysis">Birth Chart Analysis</a>
                </li>
                <li>
                  <a href="/compatibility">Compatibility</a>
                </li>
                <li>
                  <a href="/career-astrology">Career Guidance</a>
                </li>
                <li>
                  <a href="/transits">Transit Analysis</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="numerology-footer-column-title">Resources</h4>
              <ul className="numerology-footer-links">
                <li>
                  <a href="/calculator">Calculator</a>
                </li>
                <li>
                  <a href="/calendar">Panchang Calendar</a>
                </li>
                <li>
                  <a href="/blogs">Articles</a>
                </li>
                <li>
                  <a href="/insights">Insights</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="numerology-footer-bottom">
            <p className="numerology-footer-disclaimer">
              The information provided is for educational purposes only and
              should not replace professional advice. Numerology is a
              traditional knowledge system and results may vary. Individual
              discretion advised.
            </p>
            <p className="numerology-footer-copyright">
              © 2026 Astro Chitra. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
