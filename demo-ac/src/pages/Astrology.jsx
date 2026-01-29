import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Astrology.css";

// Planets Data
const planetsData = [
  {
    name: "Sun",
    sanskrit: "Surya (सूर्य)",
    symbol: "☉",
    description:
      "Soul, ego, vitality, father, authority, government, and leadership qualities.",
    colorClass: "sun",
  },
  {
    name: "Moon",
    sanskrit: "Chandra (चन्द्र)",
    symbol: "☽",
    description:
      "Mind, emotions, mother, nurturing, intuition, and public perception.",
    colorClass: "moon",
  },
  {
    name: "Mars",
    sanskrit: "Mangala (मंगल)",
    symbol: "♂",
    description:
      "Energy, courage, siblings, property, passion, and competitive drive.",
    colorClass: "mars",
  },
  {
    name: "Mercury",
    sanskrit: "Budha (बुध)",
    symbol: "☿",
    description:
      "Intellect, communication, commerce, learning, and analytical thinking.",
    colorClass: "mercury",
  },
  {
    name: "Jupiter",
    sanskrit: "Guru (गुरु)",
    symbol: "♃",
    description:
      "Wisdom, expansion, fortune, spirituality, teachers, and higher learning.",
    colorClass: "jupiter",
  },
  {
    name: "Venus",
    sanskrit: "Shukra (शुक्र)",
    symbol: "♀",
    description:
      "Love, beauty, arts, luxury, relationships, and material comforts.",
    colorClass: "venus",
  },
  {
    name: "Saturn",
    sanskrit: "Shani (शनि)",
    symbol: "♄",
    description:
      "Discipline, karma, longevity, hardship, structure, and life lessons.",
    colorClass: "saturn",
  },
  {
    name: "Rahu",
    sanskrit: "राहु",
    symbol: "☊",
    description:
      "Obsession, worldly desires, illusion, foreign elements, and unconventional paths.",
    colorClass: "rahu",
  },
  {
    name: "Ketu",
    sanskrit: "केतु",
    symbol: "☋",
    description:
      "Spirituality, detachment, past life karma, moksha, and mystical experiences.",
    colorClass: "ketu",
  },
];

// Zodiac Signs Data
const zodiacData = [
  { name: "Aries", sanskrit: "Mesha", symbol: "♈", element: "Fire" },
  { name: "Taurus", sanskrit: "Vrishabha", symbol: "♉", element: "Earth" },
  { name: "Gemini", sanskrit: "Mithuna", symbol: "♊", element: "Air" },
  { name: "Cancer", sanskrit: "Karka", symbol: "♋", element: "Water" },
  { name: "Leo", sanskrit: "Simha", symbol: "♌", element: "Fire" },
  { name: "Virgo", sanskrit: "Kanya", symbol: "♍", element: "Earth" },
  { name: "Libra", sanskrit: "Tula", symbol: "♎", element: "Air" },
  { name: "Scorpio", sanskrit: "Vrishchika", symbol: "♏", element: "Water" },
  { name: "Sagittarius", sanskrit: "Dhanu", symbol: "♐", element: "Fire" },
  { name: "Capricorn", sanskrit: "Makara", symbol: "♑", element: "Earth" },
  { name: "Aquarius", sanskrit: "Kumbha", symbol: "♒", element: "Air" },
  { name: "Pisces", sanskrit: "Meena", symbol: "♓", element: "Water" },
];

// Houses Data
const housesData = [
  {
    number: 1,
    name: "Ascendant / Self",
    sanskrit: "Tanu Bhava",
    description:
      "Physical body, personality, appearance, health, and overall life direction.",
  },
  {
    number: 2,
    name: "Wealth & Family",
    sanskrit: "Dhana Bhava",
    description:
      "Accumulated wealth, speech, family values, food habits, and early education.",
  },
  {
    number: 3,
    name: "Courage & Siblings",
    sanskrit: "Sahaja Bhava",
    description:
      "Siblings, courage, short journeys, communication skills, and efforts.",
  },
  {
    number: 4,
    name: "Home & Mother",
    sanskrit: "Sukha Bhava",
    description:
      "Mother, home, vehicles, emotional peace, property, and domestic happiness.",
  },
  {
    number: 5,
    name: "Children & Creativity",
    sanskrit: "Putra Bhava",
    description:
      "Children, intelligence, creativity, romance, speculation, and past life merit.",
  },
  {
    number: 6,
    name: "Health & Enemies",
    sanskrit: "Ripu Bhava",
    description:
      "Diseases, debts, enemies, service, daily work routine, and obstacles.",
  },
  {
    number: 7,
    name: "Partnership & Marriage",
    sanskrit: "Kalatra Bhava",
    description:
      "Spouse, marriage, business partnerships, contracts, and public dealings.",
  },
  {
    number: 8,
    name: "Transformation & Longevity",
    sanskrit: "Randhra Bhava",
    description:
      "Death, transformation, inheritance, occult, research, and sudden events.",
  },
  {
    number: 9,
    name: "Fortune & Dharma",
    sanskrit: "Dharma Bhava",
    description:
      "Father, luck, higher education, religion, long journeys, and philosophy.",
  },
  {
    number: 10,
    name: "Career & Status",
    sanskrit: "Karma Bhava",
    description:
      "Career, profession, reputation, authority, achievements, and public image.",
  },
  {
    number: 11,
    name: "Gains & Aspirations",
    sanskrit: "Labha Bhava",
    description:
      "Income, gains, elder siblings, friends, hopes, wishes, and social networks.",
  },
  {
    number: 12,
    name: "Liberation & Loss",
    sanskrit: "Vyaya Bhava",
    description:
      "Expenses, losses, foreign lands, isolation, spirituality, and final liberation.",
  },
];

// Nakshatras Data
const nakshatrasData = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashira",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishta",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati",
];

// FAQ Data
const faqData = [
  {
    question: "What is the difference between Vedic and Western astrology?",
    answer:
      "Vedic astrology (Jyotish) uses the sidereal zodiac based on fixed star positions, while Western astrology uses the tropical zodiac aligned with seasons. Vedic astrology also employs the Nakshatra system and different calculation methods for planetary periods (Dashas).",
  },
  {
    question: "Can astrology predict exact events?",
    answer:
      "Astrology indicates tendencies, patterns, and timing of potential events rather than exact outcomes. It shows the cosmic weather—what energies are active—but how we respond and the specific manifestation depends on many factors including free will and karma.",
  },
  {
    question: "What is a birth chart (Kundli)?",
    answer:
      "A birth chart is a map of the sky at the exact moment and place of your birth. It shows the positions of all planets in the twelve zodiac signs and houses, forming the foundation for all astrological analysis and predictions.",
  },
  {
    question: "Why do twins have different lives despite same charts?",
    answer:
      "Even minutes apart in birth time can change the rising sign or planetary degrees. Additionally, free will, upbringing, environment, and individual karma play significant roles. Astrology shows potential—realization varies by individual choices.",
  },
  {
    question: "What are planetary periods (Dashas)?",
    answer:
      "Dashas are planetary ruling periods unique to Vedic astrology. The most common is Vimshottari Dasha, a 120-year cycle where each planet rules for a specific duration. These periods activate the themes of that planet in your chart.",
  },
  {
    question: "Is astrology a science or superstition?",
    answer:
      "Astrology is an empirical system developed through thousands of years of observation. While not a science in the modern sense, it operates on consistent principles and correlations between celestial patterns and earthly events—a symbolic language of cosmic rhythms.",
  },
];

export default function Astrology() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <>
      <Navbar />

      <main className="astro-page">
        {/* Skip Link */}
        <a href="#main-content" className="astro-skip-link">
          Skip to main content
        </a>

        {/* Hero Section */}
        <header className="astro-hero">
          <div className="astro-hero-content">
            <span className="astro-hero-label">Vedic Wisdom</span>
            <h1 className="astro-hero-title">Jyotish Shastra</h1>
            <p className="astro-hero-subtitle">
              "The science of light that illuminates the path of
              life—understanding cosmic patterns to navigate earthly existence
              with wisdom and clarity."
            </p>
            {/* <div className="astro-hero-meta">
              <span className="astro-hero-meta-item">
                <span>🌟</span> Complete Reference
              </span>
              <span className="astro-hero-meta-item">
                <span>⏱️</span> 30 min read
              </span>
              <span className="astro-hero-meta-item">
                <span>📚</span> Classical Foundation
              </span>
            </div> */}
          </div>
        </header>

        {/* Main Content */}
        <div className="astro-main-wrapper" id="main-content">
          <article className="astro-content">
            {/* Section 1: Introduction */}
            <section id="introduction" className="astro-section">
              <header className="astro-section-header">
                <span className="astro-section-number">Section 01</span>
                <h2 className="astro-section-title">
                  Introduction to Astrology
                </h2>
                <hr className="astro-section-divider" />
              </header>

              <p className="astro-lead">
                Jyotish, the Vedic science of astrology, is one of the six
                Vedangas (limbs of the Vedas) and has been practiced in India
                for over 5,000 years. Its name derives from "Jyoti" (light) and
                "Isha" (lord), meaning "the science of light" or "the lord of
                light."
              </p>

              <p>
                Unlike fatalistic interpretations, classical Jyotish serves as a
                tool for self-understanding and conscious living. It maps the
                cosmic energies present at the moment of birth, revealing
                inherent tendencies, strengths, challenges, and the timing of
                life events.
              </p>

              <p>
                The foundational texts—
                <strong>Brihat Parashara Hora Shastra</strong>,
                <strong> Jataka Parijata</strong>, and{" "}
                <strong>Phaladeepika</strong>— establish systematic methods for
                chart interpretation. These ancient treatises remain the bedrock
                of authentic Jyotish practice.
              </p>

              <div className="astro-quote">
                <p className="astro-quote-text">
                  "As above, so below; as within, so without. The cosmos mirrors
                  the soul, and the soul reflects the cosmos."
                </p>
                <span className="astro-quote-source">— Hermetic Principle</span>
              </div>

              <h3>The Three Branches of Jyotish</h3>
              <p>
                <strong>Siddhanta (Astronomy):</strong> Mathematical
                calculations of planetary positions, eclipses, and celestial
                mechanics forming the scientific foundation.
              </p>
              <p>
                <strong>Samhita (Mundane Astrology):</strong> Study of
                collective events—weather, natural disasters, political changes,
                and national destinies.
              </p>
              <p>
                <strong>Hora (Predictive Astrology):</strong> Individual birth
                chart analysis, timing of events, compatibility, and personal
                guidance—the most commonly practiced branch.
              </p>

              <div className="astro-info-box">
                <span className="astro-info-icon">📜</span>
                <div className="astro-info-content">
                  <h4 className="astro-info-title">Astronomical Precision</h4>
                  <p className="astro-info-text">
                    Ancient Indian astronomers calculated the Earth's rotation,
                    planetary periods, and precession of equinoxes with
                    remarkable accuracy—often matching modern calculations.
                    Jyotish is built on this mathematical foundation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Planets */}
            <section id="planets" className="astro-section">
              <header className="astro-section-header">
                <span className="astro-section-number">Section 02</span>
                <h2 className="astro-section-title">
                  Role of Planets (Grahas)
                </h2>
                <hr className="astro-section-divider" />
              </header>

              <p className="astro-lead">
                In Jyotish, the nine Grahas are cosmic ministers that govern
                different aspects of life. The word "Graha" means "that which
                grasps or seizes"—reflecting how planetary energies influence
                our consciousness and life circumstances.
              </p>

              <p>
                Each planet carries specific significations (Karakatvas) and
                rules certain houses based on its placement in your birth chart.
                Understanding planetary nature is fundamental to chart
                interpretation.
              </p>

              <div className="astro-planet-grid">
                {planetsData.map((planet) => (
                  <div
                    key={planet.name}
                    className={`astro-planet-card astro-planet-card--${planet.colorClass}`}
                  >
                    <span className="astro-planet-symbol">{planet.symbol}</span>
                    <h4 className="astro-planet-name">{planet.name}</h4>
                    <p className="astro-planet-sanskrit">{planet.sanskrit}</p>
                    <p className="astro-planet-desc">{planet.description}</p>
                  </div>
                ))}
              </div>

              <h3>Natural Benefics & Malefics</h3>
              <p>
                <strong>Natural Benefics:</strong> Jupiter, Venus,
                well-associated Mercury, and waxing Moon are inherently
                supportive, bringing growth, harmony, and positive outcomes in
                their significations.
              </p>
              <p>
                <strong>Natural Malefics:</strong> Saturn, Mars, Rahu, Ketu,
                Sun, and waning Moon can bring challenges but also discipline,
                courage, transformation, and spiritual growth.
              </p>

              <div className="astro-info-box astro-info-box--warning">
                <span className="astro-info-icon">⚠️</span>
                <div className="astro-info-content">
                  <h4 className="astro-info-title">Functional Nature</h4>
                  <p className="astro-info-text">
                    A planet's effect in your chart depends on which houses it
                    rules (functional nature), not just its natural nature. A
                    natural malefic ruling good houses becomes beneficial, and
                    vice versa.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Zodiac Signs */}
            <section id="zodiac" className="astro-section">
              <header className="astro-section-header">
                <span className="astro-section-number">Section 03</span>
                <h2 className="astro-section-title">Zodiac Signs (Rashis)</h2>
                <hr className="astro-section-divider" />
              </header>

              <p className="astro-lead">
                The twelve Rashis divide the celestial sphere into equal
                30-degree segments. Each sign has unique characteristics,
                elemental nature, modality, and planetary rulership that color
                the expression of any planet placed within it.
              </p>

              <div className="astro-zodiac-grid">
                {zodiacData.map((sign) => (
                  <div key={sign.name} className="astro-zodiac-card">
                    <span className="astro-zodiac-symbol">{sign.symbol}</span>
                    <h4 className="astro-zodiac-name">{sign.name}</h4>
                    <p className="astro-zodiac-sanskrit">{sign.sanskrit}</p>
                    <span className="astro-zodiac-element">{sign.element}</span>
                  </div>
                ))}
              </div>

              <h3>The Four Elements</h3>
              <p>
                <strong>Fire Signs (Aries, Leo, Sagittarius):</strong> Dynamic,
                passionate, action-oriented. Associated with initiative,
                courage, and spiritual fire.
              </p>
              <p>
                <strong>Earth Signs (Taurus, Virgo, Capricorn):</strong>{" "}
                Practical, grounded, material-focused. Associated with
                stability, resources, and physical manifestation.
              </p>
              <p>
                <strong>Air Signs (Gemini, Libra, Aquarius):</strong>{" "}
                Intellectual, social, communicative. Associated with ideas,
                relationships, and mental activity.
              </p>
              <p>
                <strong>Water Signs (Cancer, Scorpio, Pisces):</strong>{" "}
                Emotional, intuitive, receptive. Associated with feelings,
                transformation, and psychic sensitivity.
              </p>

              <h3>The Three Modalities</h3>
              <p>
                <strong>Movable (Chara):</strong> Aries, Cancer, Libra,
                Capricorn— initiating energy, starting new ventures, dynamic
                change.
              </p>
              <p>
                <strong>Fixed (Sthira):</strong> Taurus, Leo, Scorpio, Aquarius—
                sustaining energy, determination, resistance to change.
              </p>
              <p>
                <strong>Dual (Dvisvabhava):</strong> Gemini, Virgo, Sagittarius,
                Pisces—adaptable energy, versatility, transitional nature.
              </p>
            </section>

            {/* Section 4: Houses */}
            <section id="houses" className="astro-section">
              <header className="astro-section-header">
                <span className="astro-section-number">Section 04</span>
                <h2 className="astro-section-title">Houses (Bhavas)</h2>
                <hr className="astro-section-divider" />
              </header>

              <p className="astro-lead">
                The twelve Bhavas represent different domains of life
                experience. While signs color how energies express, houses
                determine where in life those energies manifest—career,
                relationships, health, spirituality, and more.
              </p>

              <p>
                The Ascendant (Lagna) marks the first house cusp, and houses
                proceed counter-clockwise from there. Each house has specific
                significations that activate when planets occupy or aspect them.
              </p>

              <div className="astro-houses-grid">
                {housesData.map((house) => (
                  <div key={house.number} className="astro-house-card">
                    <div className="astro-house-header">
                      <span className="astro-house-number">{house.number}</span>
                      <div className="astro-house-info">
                        <h4 className="astro-house-name">{house.name}</h4>
                        <span className="astro-house-sanskrit">
                          {house.sanskrit}
                        </span>
                      </div>
                    </div>
                    <p className="astro-house-desc">{house.description}</p>
                  </div>
                ))}
              </div>

              <h3>House Classifications</h3>
              <p>
                <strong>Kendras (Angles):</strong> Houses 1, 4, 7, 10—the
                pillars of the chart representing self, home, partnership, and
                career. Planets here gain strength and prominence.
              </p>
              <p>
                <strong>Trikonas (Trines):</strong> Houses 1, 5, 9—the most
                auspicious houses representing dharma, creativity, and fortune.
                Natural benefics here bring excellent results.
              </p>
              <p>
                <strong>Dusthanas (Difficult Houses):</strong> Houses 6, 8, 12—
                challenging areas representing obstacles, transformation, and
                losses. However, they also offer growth through adversity.
              </p>
            </section>

            {/* Section 5: Nakshatras */}
            <section id="nakshatras" className="astro-section">
              <header className="astro-section-header">
                <span className="astro-section-number">Section 05</span>
                <h2 className="astro-section-title">Nakshatras Overview</h2>
                <hr className="astro-section-divider" />
              </header>

              <p className="astro-lead">
                The 27 Nakshatras (lunar mansions) are unique to Vedic astrology
                and provide deeper psychological and predictive insights than
                signs alone. Each Nakshatra spans 13°20' of the zodiac and
                carries distinct mythology, deity, and characteristics.
              </p>

              <p>
                The Moon's Nakshatra at birth (Janma Nakshatra) is particularly
                significant—it determines the starting point of your Dasha cycle
                and reveals core psychological patterns and life themes.
              </p>

              <div className="astro-nakshatra-list">
                {nakshatrasData.map((nakshatra, index) => (
                  <div key={nakshatra} className="astro-nakshatra-item">
                    <span className="astro-nakshatra-number">{index + 1}</span>
                    <span className="astro-nakshatra-name">{nakshatra}</span>
                  </div>
                ))}
              </div>

              <h3>Nakshatra Groupings</h3>
              <p>
                Nakshatras are grouped by various schemas—by deity (Deva,
                Manushya, Rakshasa), by gender, by element, and by Guna (Sattva,
                Rajas, Tamas). These classifications add layers of meaning to
                planetary placements.
              </p>

              <div className="astro-info-box astro-info-box--success">
                <span className="astro-info-icon">✨</span>
                <div className="astro-info-content">
                  <h4 className="astro-info-title">Nakshatra Applications</h4>
                  <p className="astro-info-text">
                    Beyond birth charts, Nakshatras guide Muhurta (electional
                    astrology) for choosing auspicious times for marriages,
                    business launches, ceremonies, and important undertakings.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Karma */}
            <section id="karma" className="astro-section">
              <header className="astro-section-header">
                <span className="astro-section-number">Section 06</span>
                <h2 className="astro-section-title">Karma & Life Themes</h2>
                <hr className="astro-section-divider" />
              </header>

              <p className="astro-lead">
                The birth chart is essentially a map of karma—the accumulated
                impressions (Samskaras) from past actions that shape current
                life circumstances, tendencies, and opportunities. Jyotish helps
                illuminate these patterns for conscious navigation.
              </p>

              <h3>Types of Karma in Jyotish</h3>
              <p>
                <strong>Sanchita Karma:</strong> The total accumulated karma
                from all lifetimes—stored potentials not yet activated.
                Represented by the entire chart in its complexity.
              </p>
              <p>
                <strong>Prarabdha Karma:</strong> The portion of Sanchita
                selected for this lifetime—the specific script that must be
                lived through. This is what the birth chart primarily shows.
              </p>
              <p>
                <strong>Kriyamana Karma:</strong> Actions being created now that
                will bear future fruit. This is where free will operates—we can
                respond to planetary periods consciously or unconsciously.
              </p>
              <p>
                <strong>Agama Karma:</strong> Future karmas being planned
                through current intentions and desires. Meditation and spiritual
                practice can purify these seeds before they manifest.
              </p>

              <div className="astro-quote">
                <p className="astro-quote-text">
                  "The stars impel, they do not compel. The wise person rules
                  their stars; the fool obeys them."
                </p>
                <span className="astro-quote-source">
                  — Ancient Astrological Axiom
                </span>
              </div>

              <h3>Remedial Measures (Upayas)</h3>
              <p>
                Jyotish offers various remedial measures to harmonize with
                cosmic energies: Mantra recitation, gemstone therapy, charitable
                acts (Dana), fasting, pilgrimage, and Yagya (fire ceremonies).
                These work by strengthening positive karmas and mitigating
                challenging ones.
              </p>
            </section>

            {/* Section 7: Free Will */}
            <section id="free-will" className="astro-section">
              <header className="astro-section-header">
                <span className="astro-section-number">Section 07</span>
                <h2 className="astro-section-title">Astrology vs Free Will</h2>
                <hr className="astro-section-divider" />
              </header>

              <p className="astro-lead">
                One of the most profound questions in astrology: If our charts
                show our destiny, do we have free will? The Vedic perspective
                offers a nuanced understanding that honors both cosmic order
                (Rita) and individual agency (Purushartha).
              </p>

              <p>
                The birth chart shows the hand we've been dealt—our starting
                conditions, inherent tendencies, and the timing of life themes.
                But how we play that hand involves choice, awareness, and
                effort.
              </p>

              <h3>The River Metaphor</h3>
              <p>
                Imagine life as a river. The chart shows the river's course—its
                direction, rapids, and calm stretches. You cannot change the
                river's path (Prarabdha), but you can choose how to navigate:
                fight against the current exhaustingly, drift passively, or
                skillfully work with the flow.
              </p>

              <h3>Levels of Chart Expression</h3>
              <p>
                Every planetary placement can manifest across a spectrum—from
                lowest to highest expression. Saturn can manifest as depression
                or as disciplined mastery. Mars can be destructive anger or
                courageous action. Consciousness level determines the
                manifestation.
              </p>

              <div className="astro-info-box">
                <span className="astro-info-icon">🧘</span>
                <div className="astro-info-content">
                  <h4 className="astro-info-title">Spiritual Evolution</h4>
                  <p className="astro-info-text">
                    As spiritual awareness grows, the grip of the chart loosens.
                    Advanced souls may show challenging charts yet live
                    transcendent lives—they've gained mastery over karmic
                    patterns through inner work and grace.
                  </p>
                </div>
              </div>

              <p>
                Jyotish, properly used, enhances free will by providing
                awareness. When you know a Saturn transit is coming, you can
                prepare mentally, take precautions, and embrace its lessons
                rather than being blindsided. Forewarned is forearmed.
              </p>
            </section>

            {/* Section 8: FAQs */}
            <section id="faqs" className="astro-section">
              <header className="astro-section-header">
                <span className="astro-section-number">Section 08</span>
                <h2 className="astro-section-title">
                  Frequently Asked Questions
                </h2>
                <hr className="astro-section-divider" />
              </header>

              <p className="astro-lead">
                Common questions about Jyotish answered with clarity and
                traditional understanding.
              </p>

              <div className="astro-faq-list">
                {faqData.map((faq, index) => (
                  <div key={index} className="astro-faq-item">
                    <button
                      className="astro-faq-question"
                      onClick={() =>
                        setExpandedFaq(expandedFaq === index ? null : index)
                      }
                      aria-expanded={expandedFaq === index}
                    >
                      <span className="astro-faq-question-text">
                        {faq.question}
                      </span>
                      <span
                        className={`astro-faq-toggle ${
                          expandedFaq === index ? "expanded" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {expandedFaq === index && (
                      <div className="astro-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <div className="astro-cta">
              <h3 className="astro-cta-title">
                Discover Your Cosmic Blueprint
              </h3>
              <p className="astro-cta-text">
                Ready to explore your birth chart? Our experienced Jyotish
                practitioners offer personalized consultations grounded in
                classical wisdom and compassionate guidance.
              </p>
              <a href="/reading" className="astro-cta-button">
                Book a Reading
                <span>→</span>
              </a>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
