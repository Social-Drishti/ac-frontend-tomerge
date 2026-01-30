import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./BirthChartAnalysis.css";

export default function BirthChartAnalysis() {
  const [activeSection, setActiveSection] = useState("what-is");

  // Navigation sections for the sticky sidebar
  const sections = [
    { id: "what-is", title: "What Is a Birth Chart", category: "foundational" },
    { id: "purpose", title: "Purpose & Scope", category: "foundational" },
    {
      id: "karma-framework",
      title: "Karma & Free Will",
      category: "foundational",
    },
    {
      id: "zodiac-signs",
      title: "Zodiac Signs (Rashis)",
      category: "structure",
    },
    { id: "houses", title: "Houses (Bhavas)", category: "structure" },
    { id: "planets", title: "Planets (Grahas)", category: "structure" },
    { id: "ascendant", title: "Ascendant (Lagna)", category: "structure" },
    { id: "chart-types", title: "Chart Types (D1, D9)", category: "structure" },
    {
      id: "benefics-malefics",
      title: "Benefics & Malefics",
      category: "planetary",
    },
    {
      id: "planetary-strength",
      title: "Planetary Strength",
      category: "planetary",
    },
    {
      id: "exaltation",
      title: "Exaltation & Debilitation",
      category: "planetary",
    },
    { id: "house-meanings", title: "12 Houses Meaning", category: "houses" },
    { id: "house-lords", title: "House Lords", category: "houses" },
    { id: "empty-houses", title: "Empty Houses", category: "houses" },
    { id: "aspects", title: "Planetary Aspects", category: "aspects" },
    { id: "yogas", title: "Major Yogas", category: "aspects" },
    {
      id: "cancellation",
      title: "Cancellation of Results",
      category: "aspects",
    },
    { id: "dashas", title: "Dashas Overview", category: "timing" },
    { id: "transits", title: "Transits (Gochar)", category: "timing" },
    {
      id: "timing-importance",
      title: "Why Timing Matters",
      category: "timing",
    },
    { id: "career", title: "Career & Dharma", category: "life-areas" },
    { id: "relationships", title: "Relationships", category: "life-areas" },
    { id: "health", title: "Health & Longevity", category: "life-areas" },
    {
      id: "wealth",
      title: "Wealth & Responsibilities",
      category: "life-areas",
    },
    { id: "limits", title: "Limits of Prediction", category: "ethics" },
    {
      id: "misinterpretations",
      title: "Common Misinterpretations",
      category: "ethics",
    },
    { id: "bias", title: "Psychological vs Astrological", category: "ethics" },
    { id: "faqs", title: "Birth Chart FAQs", category: "reference" },
  ];

  const categories = [
    { id: "foundational", title: "Foundational" },
    { id: "structure", title: "Chart Structure" },
    { id: "planetary", title: "Planetary Analysis" },
    { id: "houses", title: "House Interpretation" },
    { id: "aspects", title: "Aspects & Yogas" },
    { id: "timing", title: "Timing & Life Events" },
    { id: "life-areas", title: "Life Areas" },
    { id: "ethics", title: "Interpretation Ethics" },
    { id: "reference", title: "Reference" },
  ];

  // Auto-highlight navigation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections
        .map((section) => document.getElementById(section.id))
        .filter(Boolean);

      const currentSection = sectionElements.find((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />

      <main className="chart-layout">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="chart-skip-link">
          Skip to main content
        </a>

        {/* Header */}
        <header className="chart-header">
          <div className="chart-container">
            <h1 className="chart-hero-title">Birth Chart Analysis</h1>
            <p className="chart-hero-subtitle">
              A comprehensive guide to understanding your Janma Kundli — the
              celestial blueprint of your life's journey and spiritual path
            </p>
          </div>
        </header>

        {/* Main Two-Column Layout */}
        <div className="chart-container chart-grid" id="main-content">
          {/* Main Content Column (70%) */}
          <article className="chart-main-content">
            {/* FOUNDATIONAL SECTIONS */}
            <section id="what-is" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">🔮</span>
                  <h2>What Is a Birth Chart (Janma Kundli)</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <p>
                    A birth chart, or <strong>Janma Kundli</strong>, is a
                    precise celestial map that captures the exact positions of
                    planets, signs, and houses at the moment of your birth.
                    Unlike popular astrology, Vedic astrology treats this chart
                    as a sophisticated tool for understanding your karmic
                    blueprint and life's deeper patterns.
                  </p>
                  <p>
                    The chart is calculated based on your exact birth time,
                    date, and location. Even a difference of minutes can
                    significantly alter planetary positions and house
                    placements, emphasizing the precision required for authentic
                    interpretation.
                  </p>
                  <p>
                    Think of your birth chart as a cosmic DNA — it reveals your
                    inherent strengths, challenges, timing of important events,
                    and the spiritual lessons your soul chose to learn in this
                    lifetime.
                  </p>
                </div>
              </div>
            </section>

            <section id="purpose" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">🎯</span>
                  <h2>Purpose and Scope of Chart Analysis</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <p>
                    Birth chart analysis serves multiple purposes in Vedic
                    astrology:
                  </p>
                  <ul className="chart-list">
                    <li>
                      <strong>Self-Understanding:</strong> Discovering your core
                      nature, talents, and psychological patterns
                    </li>
                    <li>
                      <strong>Life Direction:</strong> Identifying your dharma
                      (life purpose) and optimal career paths
                    </li>
                    <li>
                      <strong>Relationship Compatibility:</strong> Understanding
                      interpersonal dynamics and marriage timing
                    </li>
                    <li>
                      <strong>Timing Events:</strong> Predicting favorable
                      periods for major decisions and life changes
                    </li>
                    <li>
                      <strong>Spiritual Growth:</strong> Recognizing karmic
                      lessons and paths to liberation
                    </li>
                  </ul>
                  <p>
                    However, the scope has limitations. Astrology reveals
                    tendencies and possibilities, not fixed destiny. Your
                    awareness, choices, and spiritual practices can modify and
                    transcend planetary influences.
                  </p>
                </div>
              </div>
            </section>

            <section id="karma-framework" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">⚖️</span>
                  <h2>Fate, Karma, and Free Will Framework</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <p>
                    Vedic astrology operates on the principle of karma — the law
                    of cause and effect extending across lifetimes. Your birth
                    chart reflects:
                  </p>
                  <div className="chart-concept-grid">
                    <div className="chart-concept">
                      <h3>Prarabdha Karma</h3>
                      <p>
                        Fixed karmic results that must be experienced in this
                        lifetime, shown by strong planetary positions and
                        unavoidable yogas.
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>Kriyamana Karma</h3>
                      <p>
                        Present-life actions and their immediate consequences,
                        influenced by planetary transits and your conscious
                        choices.
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>Sanchita Karma</h3>
                      <p>
                        Stored karmic impressions from past lives, partially
                        revealed through deeper chart analysis and spiritual
                        practices.
                      </p>
                    </div>
                  </div>
                  <p>
                    While certain life patterns are indicated by planetary
                    positions, your response to these patterns determines the
                    ultimate quality of your experience. Free will operates
                    within karmic constraints.
                  </p>
                </div>
              </div>
            </section>

            {/* CHART STRUCTURE SECTIONS */}
            <section id="zodiac-signs" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">♈</span>
                  <h2>Zodiac Signs (Rashis)</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <p>
                    The twelve zodiac signs represent different energy patterns
                    and psychological archetypes. In Vedic astrology, we use the
                    sidereal zodiac, which accounts for the precession of
                    equinoxes and provides more accurate celestial positions.
                  </p>
                  <div className="chart-rashi-grid">
                    <div className="chart-rashi-group">
                      <h3>Fire Signs (Agni Tatva)</h3>
                      <p>
                        <strong>Aries, Leo, Sagittarius:</strong> Initiative,
                        leadership, transformation
                      </p>
                    </div>
                    <div className="chart-rashi-group">
                      <h3>Earth Signs (Prithvi Tatva)</h3>
                      <p>
                        <strong>Taurus, Virgo, Capricorn:</strong> Stability,
                        practicality, manifestation
                      </p>
                    </div>
                    <div className="chart-rashi-group">
                      <h3>Air Signs (Vayu Tatva)</h3>
                      <p>
                        <strong>Gemini, Libra, Aquarius:</strong> Communication,
                        relationships, ideas
                      </p>
                    </div>
                    <div className="chart-rashi-group">
                      <h3>Water Signs (Jal Tatva)</h3>
                      <p>
                        <strong>Cancer, Scorpio, Pisces:</strong> Emotions,
                        intuition, transformation
                      </p>
                    </div>
                  </div>
                  <p>
                    Each sign carries specific qualities that modify planetary
                    expressions. A planet's sign placement reveals how its
                    energy manifests in your life.
                  </p>
                </div>
              </div>
            </section>

            <section id="houses" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">🏠</span>
                  <h2>Houses (Bhavas)</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <p>
                    The twelve houses represent different life areas and
                    experiences. House placement shows where planetary energies
                    will manifest in your life.
                  </p>
                  <div className="chart-house-overview">
                    <div className="chart-house-group">
                      <h3>Angular Houses (1, 4, 7, 10)</h3>
                      <p>
                        Most powerful houses representing self, home,
                        partnerships, and career
                      </p>
                    </div>
                    <div className="chart-house-group">
                      <h3>Succedent Houses (2, 5, 8, 11)</h3>
                      <p>
                        Houses of resources, creativity, transformation, and
                        gains
                      </p>
                    </div>
                    <div className="chart-house-group">
                      <h3>Cadent Houses (3, 6, 9, 12)</h3>
                      <p>
                        Houses of adaptation, service, higher learning, and
                        transcendence
                      </p>
                    </div>
                  </div>
                  <p>
                    Understanding house significance is crucial for accurate
                    interpretation. The same planet will express differently
                    depending on which house it occupies.
                  </p>
                </div>
              </div>
            </section>

            <section id="planets" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">🪐</span>
                  <h2>Planets (Grahas)</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <p>
                    In Vedic astrology, nine planets (Navagrahas) influence
                    human life. Each planet represents specific life forces and
                    psychological functions.
                  </p>
                  <div className="chart-planet-grid">
                    <div className="chart-planet">
                      <h3>Sun (Surya)</h3>
                      <p>Soul, ego, father, authority, health, government</p>
                    </div>
                    <div className="chart-planet">
                      <h3>Moon (Chandra)</h3>
                      <p>Mind, emotions, mother, public, water, travel</p>
                    </div>
                    <div className="chart-planet">
                      <h3>Mars (Mangal)</h3>
                      <p>
                        Energy, courage, brothers, property, conflict, surgery
                      </p>
                    </div>
                    <div className="chart-planet">
                      <h3>Mercury (Budh)</h3>
                      <p>
                        Intelligence, communication, business, learning,
                        analysis
                      </p>
                    </div>
                    <div className="chart-planet">
                      <h3>Jupiter (Guru)</h3>
                      <p>Wisdom, teaching, spirituality, children, fortune</p>
                    </div>
                    <div className="chart-planet">
                      <h3>Venus (Shukra)</h3>
                      <p>
                        Love, beauty, arts, luxury, marriage, female
                        relationships
                      </p>
                    </div>
                    <div className="chart-planet">
                      <h3>Saturn (Shani)</h3>
                      <p>
                        Discipline, delays, lessons, service, longevity,
                        hardship
                      </p>
                    </div>
                    <div className="chart-planet">
                      <h3>Rahu (North Node)</h3>
                      <p>
                        Desires, illusions, foreign influences, sudden events
                      </p>
                    </div>
                    <div className="chart-planet">
                      <h3>Ketu (South Node)</h3>
                      <p>
                        Spirituality, past life karma, detachment, mysticism
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="ascendant" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">🌅</span>
                  <h2>Ascendant (Lagna)</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <p>
                    The Ascendant or Lagna is the zodiac sign rising on the
                    eastern horizon at your birth moment. It represents your
                    physical appearance, personality, approach to life, and how
                    others perceive you.
                  </p>
                  <p>
                    The Ascendant lord (ruler of the ascending sign) becomes
                    crucial in chart interpretation. Its placement and condition
                    significantly influence your overall life pattern and
                    health.
                  </p>
                  <div className="chart-concept-grid">
                    <div className="chart-concept">
                      <h3>Physical Significance</h3>
                      <p>
                        Body structure, health constitution, vitality, and
                        general physical appearance are indicated by the
                        Ascendant.
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>Psychological Pattern</h3>
                      <p>
                        Your natural responses, instinctive reactions, and
                        fundamental personality traits stem from the Ascendant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="chart-types" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">📊</span>
                  <h2>Chart Types (D1, D9 - Conceptual Overview)</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <p>
                    Vedic astrology employs various divisional charts (Vargas)
                    to examine specific life areas in detail. Each chart
                    provides focused insights into particular domains of
                    experience.
                  </p>
                  <div className="chart-concept-grid">
                    <div className="chart-concept">
                      <h3>Rashi Chart (D1)</h3>
                      <p>
                        Main birth chart showing overall life pattern,
                        personality, and general life circumstances. Foundation
                        for all analysis.
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>Navamsa Chart (D9)</h3>
                      <p>
                        Marriage, spirituality, and inner strength. Shows soul's
                        deeper nature and spouse characteristics.
                      </p>
                    </div>
                  </div>
                  <p>
                    Advanced analysis involves comparing planetary positions
                    across multiple charts to gain comprehensive insights.
                    However, mastering the main birth chart (D1) is essential
                    before exploring divisional charts.
                  </p>
                </div>
              </div>
            </section>

            <section id="benefics-malefics" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">⚡</span>
                  <h2>Functional vs Natural Benefics & Malefics</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <p>
                    Understanding planetary nature is crucial for accurate
                    interpretation. Planets can be beneficial or challenging
                    based on both their inherent nature and their specific role
                    in your chart.
                  </p>
                  <div className="chart-concept-grid">
                    <div className="chart-concept">
                      <h3>Natural Benefics</h3>
                      <p>
                        <strong>Jupiter, Venus, Mercury, Moon:</strong>{" "}
                        Generally supportive planets bringing positive results
                        unless afflicted.
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>Natural Malefics</h3>
                      <p>
                        <strong>Saturn, Mars, Sun, Rahu, Ketu:</strong> Create
                        challenges but also provide strength and spiritual
                        growth.
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>Functional Benefics</h3>
                      <p>
                        Planets ruling beneficial houses (1, 4, 5, 7, 9, 10, 11)
                        for your specific Ascendant sign.
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>Functional Malefics</h3>
                      <p>
                        Planets ruling challenging houses (6, 8, 12) or specific
                        malefic combinations for your Ascendant.
                      </p>
                    </div>
                  </div>
                  <p>
                    A naturally malefic planet can give excellent results if
                    it's functionally beneficial, while a natural benefic may
                    cause problems if it's functionally malefic. Context is
                    everything in astrology.
                  </p>
                </div>
              </div>
            </section>

            <section id="planetary-strength" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">💪</span>
                  <h2>Planetary Strength and Weakness</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <p>
                    Planetary strength (Shadbala) determines how effectively a
                    planet can deliver its results. Strong planets protect and
                    enhance their significations, while weak planets struggle to
                    provide benefits.
                  </p>
                  <div className="chart-concept-grid">
                    <div className="chart-concept">
                      <h3>Positional Strength</h3>
                      <p>
                        Based on sign placement, house position, and degrees.
                        Planets are stronger in friendly signs and angular
                        houses.
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>Temporal Strength</h3>
                      <p>
                        Varies with time of birth, day/night, lunar phase, and
                        seasonal considerations affecting planetary power.
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>Directional Strength</h3>
                      <p>
                        Each planet has preferred directions (houses) where it
                        gains maximum directional strength (Dig Bala).
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>Aspect Strength</h3>
                      <p>
                        Beneficial aspects from strong planets increase
                        strength, while malefic aspects from weak planets
                        decrease it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="house-meanings" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">🏛️</span>
                  <h2>Meaning of the 12 Houses</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <p>
                    Each house governs specific life areas and experiences.
                    Understanding house meanings is fundamental to chart
                    interpretation.
                  </p>
                  <div className="chart-house-meanings">
                    <div className="chart-house-meaning">
                      <h3>1st House (Self)</h3>
                      <p>
                        Personality, health, appearance, general life approach,
                        vitality
                      </p>
                    </div>
                    <div className="chart-house-meaning">
                      <h3>2nd House (Resources)</h3>
                      <p>
                        Wealth, family, speech, food, values, accumulated assets
                      </p>
                    </div>
                    <div className="chart-house-meaning">
                      <h3>3rd House (Efforts)</h3>
                      <p>
                        Siblings, courage, short journeys, communication, skills
                      </p>
                    </div>
                    <div className="chart-house-meaning">
                      <h3>4th House (Home)</h3>
                      <p>
                        Mother, property, vehicles, education, emotional
                        security
                      </p>
                    </div>
                    <div className="chart-house-meaning">
                      <h3>5th House (Creativity)</h3>
                      <p>
                        Children, intelligence, creativity, past-life karma,
                        romance
                      </p>
                    </div>
                    <div className="chart-house-meaning">
                      <h3>6th House (Challenges)</h3>
                      <p>
                        Health problems, enemies, debts, service, daily routine
                      </p>
                    </div>
                    <div className="chart-house-meaning">
                      <h3>7th House (Partnerships)</h3>
                      <p>
                        Marriage, business partnerships, public relations,
                        travel
                      </p>
                    </div>
                    <div className="chart-house-meaning">
                      <h3>8th House (Transformation)</h3>
                      <p>
                        Longevity, occult knowledge, sudden events, research,
                        inheritance
                      </p>
                    </div>
                    <div className="chart-house-meaning">
                      <h3>9th House (Wisdom)</h3>
                      <p>
                        Father, guru, higher learning, spirituality, long
                        journeys
                      </p>
                    </div>
                    <div className="chart-house-meaning">
                      <h3>10th House (Career)</h3>
                      <p>
                        Profession, reputation, social status, government,
                        authority
                      </p>
                    </div>
                    <div className="chart-house-meaning">
                      <h3>11th House (Gains)</h3>
                      <p>
                        Income, friends, elder siblings, hopes, achievements
                      </p>
                    </div>
                    <div className="chart-house-meaning">
                      <h3>12th House (Liberation)</h3>
                      <p>
                        Spirituality, foreign lands, expenses, losses, final
                        moksha
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="career" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">🎯</span>
                  <h2>Career & Dharma</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <p>
                    Career analysis in Vedic astrology goes beyond mere
                    profession—it seeks to identify your dharma (life purpose)
                    and the work that aligns with your soul's evolution.
                  </p>
                  <p>
                    The 10th house, its lord, planets placed there, and aspects
                    to the 10th house reveal career patterns. Additionally, the
                    strongest planet in your chart often indicates the field
                    where you'll excel.
                  </p>
                  <div className="chart-concept-grid">
                    <div className="chart-concept">
                      <h3>Sun-Dominated Careers</h3>
                      <p>
                        Government, administration, medicine, leadership roles,
                        politics, and positions requiring authority.
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>Moon-Dominated Careers</h3>
                      <p>
                        Public relations, hospitality, nursing, psychology,
                        water-related businesses, and nurturing professions.
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>Mercury-Dominated Careers</h3>
                      <p>
                        Communication, writing, teaching, commerce, technology,
                        and analytical fields requiring quick thinking.
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>Jupiter-Dominated Careers</h3>
                      <p>
                        Teaching, law, counseling, spirituality, finance, and
                        advisory roles requiring wisdom and guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="limits" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">🎭</span>
                  <h2>Limits of Prediction</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <p>
                    Honest astrology acknowledges its limitations. While birth
                    charts reveal significant patterns and tendencies, they
                    cannot predict every detail of your life with absolute
                    certainty.
                  </p>
                  <div className="chart-concept-grid">
                    <div className="chart-concept">
                      <h3>What Astrology Can Do</h3>
                      <p>
                        Reveal character patterns, timing of general trends,
                        karmic themes, and periods favorable for specific
                        activities.
                      </p>
                    </div>
                    <div className="chart-concept">
                      <h3>What Astrology Cannot Do</h3>
                      <p>
                        Predict exact events, override free will, guarantee
                        specific outcomes, or replace personal responsibility.
                      </p>
                    </div>
                  </div>
                  <p>
                    The highest purpose of astrology is self-understanding and
                    spiritual growth, not fortune-telling or avoiding life's
                    challenges. Use insights to make conscious choices, not to
                    become fatalistic.
                  </p>
                </div>
              </div>
            </section>

            <section id="faqs" className="chart-section">
              <div className="chart-card">
                <div className="chart-card-header">
                  <span className="chart-icon">❓</span>
                  <h2>Birth Chart Analysis FAQs</h2>
                </div>
                <hr className="chart-divider" />
                <div className="chart-card-content">
                  <div className="chart-faq">
                    <h3>How accurate is birth chart analysis?</h3>
                    <p>
                      Accuracy depends on precise birth data and the
                      astrologer's expertise. With exact birth time, predictions
                      can be remarkably specific, though interpretation always
                      involves some subjective elements.
                    </p>
                  </div>
                  <div className="chart-faq">
                    <h3>Can birth charts predict death?</h3>
                    <p>
                      Traditional texts discuss longevity indicators, but
                      ethical astrologers avoid death predictions. Focus should
                      be on living purposefully rather than obsessing over death
                      timing.
                    </p>
                  </div>
                  <div className="chart-faq">
                    <h3>Do remedies really work?</h3>
                    <p>
                      Remedies work through psychological and spiritual
                      mechanisms. Gemstones, mantras, and rituals can shift your
                      energy and attitude, which influences outcomes. They're
                      tools for self-transformation.
                    </p>
                  </div>
                  <div className="chart-faq">
                    <h3>How often should I consult my chart?</h3>
                    <p>
                      Annual consultations during birthday periods are
                      sufficient for most people. Constant chart checking can
                      become compulsive and undermine your natural
                      decision-making abilities.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </article>

          {/* Sticky Sidebar Navigation (30%) */}
          <aside className="chart-sidebar">
            <nav className="chart-nav">
              <div className="chart-nav-header">
                <h3>Analysis Guide</h3>
              </div>

              {categories.map((category) => (
                <div key={category.id} className="chart-nav-category">
                  <h4 className="chart-nav-category-title">{category.title}</h4>
                  <ul className="chart-nav-links">
                    {sections
                      .filter((section) => section.category === category.id)
                      .map((section) => (
                        <li key={section.id}>
                          <button
                            className={`chart-nav-link ${
                              activeSection === section.id ? "active" : ""
                            }`}
                            onClick={() => scrollToSection(section.id)}
                          >
                            {section.title}
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
