import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/gemmology-tokens.css";
import "./Gemmology.css";

const navaratnaData = [
  {
    name: "Ruby",
    sanskrit: "Manikya (माणिक्य)",
    planet: "Sun (Surya)",
    colorClass: "ruby",
    description:
      "The king of gems, Ruby represents the Sun's vital energy. It enhances leadership, confidence, and vitality while strengthening the heart and circulation.",
  },
  {
    name: "Pearl",
    sanskrit: "Moti (मोती)",
    planet: "Moon (Chandra)",
    colorClass: "pearl",
    description:
      "Pearl embodies the Moon's calming influence. It stabilizes emotions, enhances mental peace, and is especially beneficial for those with weak Moon placements.",
  },
  {
    name: "Red Coral",
    sanskrit: "Moonga (मूंगा)",
    planet: "Mars (Mangal)",
    colorClass: "coral",
    description:
      "Coral channels Mars' dynamic energy. It boosts courage, physical strength, and is traditionally prescribed for Mangal Dosha remediation.",
  },
  {
    name: "Emerald",
    sanskrit: "Panna (पन्ना)",
    planet: "Mercury (Budha)",
    colorClass: "emerald",
    description:
      "Emerald amplifies Mercury's intellectual qualities. It enhances communication, business acumen, and is favored by scholars and traders.",
  },
  {
    name: "Yellow Sapphire",
    sanskrit: "Pukhraj (पुखराज)",
    planet: "Jupiter (Guru)",
    colorClass: "yellow-sapphire",
    description:
      "The gem of wisdom and fortune, Yellow Sapphire connects to Jupiter's benevolent energy. It attracts prosperity, spiritual growth, and marital harmony.",
  },
  {
    name: "Diamond",
    sanskrit: "Heera (हीरा)",
    planet: "Venus (Shukra)",
    colorClass: "diamond",
    description:
      "Diamond represents Venus' refinement and luxury. It enhances artistic abilities, romantic relationships, and material comforts.",
  },
  {
    name: "Blue Sapphire",
    sanskrit: "Neelam (नीलम)",
    planet: "Saturn (Shani)",
    colorClass: "blue-sapphire",
    description:
      "The most powerful gem, Blue Sapphire channels Saturn's transformative energy. It requires careful trial before wearing due to its intense effects.",
  },
  {
    name: "Hessonite",
    sanskrit: "Gomed (गोमेद)",
    planet: "Rahu",
    colorClass: "hessonite",
    description:
      "Hessonite (Garnet) pacifies Rahu's shadowy influence. It helps overcome confusion, addictions, and sudden obstacles in life.",
  },
  {
    name: "Cat's Eye",
    sanskrit: "Lehsunia (लहसुनिया)",
    planet: "Ketu",
    colorClass: "cats-eye",
    description:
      "Cat's Eye (Chrysoberyl) connects to Ketu's spiritual energy. It enhances intuition, protects from hidden enemies, and supports spiritual liberation.",
  },
];

// FAQ Data
const faqData = [
  {
    question: "How do I know which gemstone is right for me?",
    answer:
      "Gemstone selection should be based on your birth chart (Kundli) analysis by a qualified astrologer. The most beneficial gem typically corresponds to your Lagna lord, Moon sign lord, or a strongly placed benefic planet. Never choose gems based solely on Sun sign or general recommendations.",
  },
  {
    question: "Can I wear multiple gemstones together?",
    answer:
      "Yes, but with caution. Gems of friendly planets can be worn together (e.g., Ruby with Yellow Sapphire), while enemy planets' gems should be avoided together (e.g., Ruby with Blue Sapphire). Always consult an expert before combining gems.",
  },
  {
    question: "How long does it take for a gemstone to show effects?",
    answer:
      "Initial effects may be felt within 30-45 days of wearing. Full benefits typically manifest over 3-6 months as the gem synchronizes with your energy field. Blue Sapphire is an exception—its effects, positive or negative, often appear within days.",
  },
  {
    question: "Should I remove my gemstone while sleeping?",
    answer:
      "Traditional practice recommends keeping gemstones on continuously, including during sleep. However, some practitioners suggest removing them during intimate activities or impure situations. The key is maintaining the gem's sanctity.",
  },
  {
    question: "Do synthetic or lab-created gems work?",
    answer:
      "In Ratna Shastra, only natural gemstones possess the cosmic energy needed for astrological effects. Lab-created stones, while chemically identical, lack the millions of years of earth energy that natural gems absorb. They may be beautiful but won't provide astrological benefits.",
  },
  {
    question: "What happens if I wear the wrong gemstone?",
    answer:
      "Wearing an unsuitable gem can amplify negative planetary influences, leading to health issues, financial losses, relationship problems, or general misfortune. This is why proper astrological consultation before wearing any gem is essential.",
  },
  {
    question: "Can gemstones be worn as pendants instead of rings?",
    answer:
      "Yes, gems can be worn as pendants touching the chest area. However, traditional texts emphasize finger rings because specific fingers correspond to specific planets, creating a direct energy channel. Pendants are acceptable alternatives when rings aren't practical.",
  },
  {
    question: "How do I verify if a gemstone is genuine?",
    answer:
      "Always purchase from reputable dealers with proper certification from recognized gemological laboratories (GIA, IGI, Gubelin). Request origin certificates for valuable stones. Be wary of deals that seem too good—natural gems of quality have market-standard prices.",
  },
];

export default function Gemmology() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <>
      <Navbar />

      <main className="gem-page">
        {/* Hero Section */}
        <header className="gem-hero">
          <div className="gem-hero-content">
            <h1 className="gem-hero-title">Gemmology (Ratna Shastra)</h1>
            <p className="gem-hero-subtitle">
              The ancient science of gemstones that reveals the cosmic
              connection between celestial bodies and earthly minerals, offering
              pathways to balance karma and enhance life through the power of
              precious stones.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="gem-container">
          {/* Introduction */}
          <section className="gem-section">
            <h2 className="gem-section-title">Introduction to Gemmology</h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              Ratna Shastra, the ancient Indian science of gemstones, is a
              profound discipline that bridges the cosmic and terrestrial
              realms. It teaches that gemstones are not mere ornaments but
              powerful conduits of planetary energy capable of influencing human
              destiny.
            </p>

            <p>
              The word "Ratna" in Sanskrit means "gem" or "jewel," while
              "Shastra" denotes "science" or "treatise." Together, Ratna Shastra
              represents a systematic study of how gemstones interact with
              planetary vibrations and human consciousness to affect health,
              prosperity, relationships, and spiritual evolution.
            </p>

            <div className="gem-info-box">
              <span className="gem-info-icon">💎</span>
              <div className="gem-info-content">
                <h4 className="gem-info-title">The Science of Gemstones</h4>
                <p className="gem-info-text">
                  According to Ratna Shastra, gemstones are formed over millions
                  of years through geological processes that imbue them with
                  concentrated earth energy. This stored energy resonates at
                  specific frequencies that correspond to planetary vibrations,
                  making each gem a natural antenna for cosmic forces.
                </p>
              </div>
            </div>
          </section>

          {/* Vedic Origins */}
          <section className="gem-section">
            <h2 className="gem-section-title">Origins in Vedic Tradition</h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              The roots of Ratna Shastra extend deep into Vedic literature, with
              references found in some of humanity's oldest texts. This ancient
              wisdom has been preserved and refined over millennia by sages,
              astrologers, and practitioners.
            </p>

            <p>
              The earliest mentions of gemstones appear in the{" "}
              <strong>Atharvaveda</strong>, where certain stones are recommended
              for protection and healing. The <strong>Garuda Purana</strong>{" "}
              contains extensive chapters on gemstones, their origins, testing
              methods, and effects—forming the foundational text of Ratna
              Shastra.
            </p>

            <div className="gem-info-box">
              <span className="gem-info-icon">📜</span>
              <div className="gem-info-content">
                <h4 className="gem-info-title">
                  The Legend of Navaratna Origin
                </h4>
                <p className="gem-info-text">
                  According to Puranic literature, the Navaratna (nine gems)
                  originated from the body of the demon Bala during the cosmic
                  churning of the ocean (Samudra Manthan). Each gem emerged
                  carrying the essence of a planet, establishing the eternal
                  link between celestial bodies and earthly stones.
                </p>
              </div>
            </div>
          </section>

          {/* Cosmic Energy */}
          <section className="gem-section">
            <h2 className="gem-section-title">Gemstones & Cosmic Energy</h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              The fundamental principle of Ratna Shastra rests on the
              understanding that gemstones act as receivers and transmitters of
              specific planetary vibrations. Each gem resonates with a
              particular frequency that corresponds to a celestial body.
            </p>

            <p>
              <strong>Red stones</strong> (Ruby, Red Coral) stimulate vital
              energy and circulation.
              <br />
              <strong>Blue stones</strong> (Blue Sapphire, Lapis) calm the mind
              and enhance discipline.
              <br />
              <strong>Green stones</strong> (Emerald) balance and heal, aiding
              communication.
              <br />
              <strong>Yellow stones</strong> (Yellow Sapphire, Topaz) promote
              wisdom and prosperity.
              <br />
              <strong>White stones</strong> (Pearl, Diamond) purify and enhance
              receptivity.
            </p>

            <div className="gem-info-box gem-info-box--warning">
              <span className="gem-info-icon">⚠️</span>
              <div className="gem-info-content">
                <h4 className="gem-info-title">Energy Amplification</h4>
                <p className="gem-info-text">
                  Remember that gemstones amplify existing planetary energy—
                  both positive and negative. Wearing the gem of a malefic
                  planet in your chart can intensify problems rather than solve
                  them. This is why proper astrological analysis before gem
                  selection is absolutely essential.
                </p>
              </div>
            </div>
          </section>

          {/* Navaratna System */}
          <section className="gem-section">
            <h2 className="gem-section-title">The Navaratna System</h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              The Navaratna—literally "nine gems"—forms the cornerstone of Vedic
              gemmology. This sacred arrangement of nine precious stones
              represents the complete planetary cabinet, with each gem
              corresponding to one of the nine celestial bodies recognized in
              Jyotish.
            </p>

            <div className="gem-navaratna-grid">
              <div className="gem-navaratna-cell">
                <span className="gem-navaratna-symbol">🔶</span>
                <span className="gem-navaratna-name">Hessonite</span>
              </div>
              <div className="gem-navaratna-cell">
                <span className="gem-navaratna-symbol">🔴</span>
                <span className="gem-navaratna-name">Ruby</span>
              </div>
              <div className="gem-navaratna-cell">
                <span className="gem-navaratna-symbol">🟡</span>
                <span className="gem-navaratna-name">Yellow Sapphire</span>
              </div>
              <div className="gem-navaratna-cell">
                <span className="gem-navaratna-symbol">🟢</span>
                <span className="gem-navaratna-name">Emerald</span>
              </div>
              <div className="gem-navaratna-cell gem-navaratna-cell--center">
                <span className="gem-navaratna-symbol">💎</span>
                <span className="gem-navaratna-name">Diamond</span>
              </div>
              <div className="gem-navaratna-cell">
                <span className="gem-navaratna-symbol">🔵</span>
                <span className="gem-navaratna-name">Blue Sapphire</span>
              </div>
              <div className="gem-navaratna-cell">
                <span className="gem-navaratna-symbol">🟤</span>
                <span className="gem-navaratna-name">Cat's Eye</span>
              </div>
              <div className="gem-navaratna-cell">
                <span className="gem-navaratna-symbol">🌸</span>
                <span className="gem-navaratna-name">Coral</span>
              </div>
              <div className="gem-navaratna-cell">
                <span className="gem-navaratna-symbol">⚪</span>
                <span className="gem-navaratna-name">Pearl</span>
              </div>
            </div>

            <h3>The Nine Gems & Their Planets</h3>

            <div className="gem-stone-grid">
              {navaratnaData.map((gem) => (
                <div
                  key={gem.name}
                  className={`gem-stone-card gem-stone-card--${gem.colorClass}`}
                >
                  <h4 className="gem-stone-name">{gem.name}</h4>
                  <p className="gem-stone-sanskrit">{gem.sanskrit}</p>
                  <span className="gem-stone-planet">{gem.planet}</span>
                  <p className="gem-stone-desc">{gem.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Planet-Gem Relationships */}
          <section className="gem-section">
            <h2 className="gem-section-title">Planet–Gem Relationships</h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              The correspondence between planets and gemstones is not arbitrary
              but based on the gem's color, crystalline structure, and observed
              effects over centuries of use.
            </p>

            <div className="gem-table-wrapper">
              <table className="gem-table">
                <thead>
                  <tr>
                    <th>Planet</th>
                    <th>Primary Gem</th>
                    <th>Substitute Gems</th>
                    <th>Finger</th>
                    <th>Metal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sun (Surya)</td>
                    <td>Ruby</td>
                    <td>Red Garnet, Red Spinel</td>
                    <td>Ring Finger</td>
                    <td>Gold</td>
                  </tr>
                  <tr>
                    <td>Moon (Chandra)</td>
                    <td>Pearl</td>
                    <td>Moonstone, White Coral</td>
                    <td>Little Finger</td>
                    <td>Silver</td>
                  </tr>
                  <tr>
                    <td>Mars (Mangal)</td>
                    <td>Red Coral</td>
                    <td>Carnelian, Red Jasper</td>
                    <td>Ring Finger</td>
                    <td>Gold/Copper</td>
                  </tr>
                  <tr>
                    <td>Mercury (Budha)</td>
                    <td>Emerald</td>
                    <td>Green Tourmaline, Peridot</td>
                    <td>Little Finger</td>
                    <td>Gold</td>
                  </tr>
                  <tr>
                    <td>Jupiter (Guru)</td>
                    <td>Yellow Sapphire</td>
                    <td>Yellow Topaz, Citrine</td>
                    <td>Index Finger</td>
                    <td>Gold</td>
                  </tr>
                  <tr>
                    <td>Venus (Shukra)</td>
                    <td>Diamond</td>
                    <td>White Sapphire, White Zircon</td>
                    <td>Little/Ring Finger</td>
                    <td>Silver/Platinum</td>
                  </tr>
                  <tr>
                    <td>Saturn (Shani)</td>
                    <td>Blue Sapphire</td>
                    <td>Amethyst, Blue Spinel</td>
                    <td>Middle Finger</td>
                    <td>Silver/Iron</td>
                  </tr>
                  <tr>
                    <td>Rahu</td>
                    <td>Hessonite</td>
                    <td>Orange Zircon</td>
                    <td>Middle Finger</td>
                    <td>Silver</td>
                  </tr>
                  <tr>
                    <td>Ketu</td>
                    <td>Cat's Eye</td>
                    <td>Tiger's Eye</td>
                    <td>Little Finger</td>
                    <td>Silver</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Precious vs Semi-Precious */}
          <section className="gem-section">
            <h2 className="gem-section-title">
              Precious vs Semi-Precious Gems
            </h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              Traditional Western gemology distinguishes between "precious" and
              "semi-precious" stones, but Ratna Shastra evaluates gems
              differently—based on their planetary potency rather than rarity or
              market value.
            </p>

            <div className="gem-comparison-grid">
              <div className="gem-comparison-card">
                <h4 className="gem-comparison-title">
                  Precious Gems (Maharatna)
                </h4>
                <ul className="gem-comparison-list">
                  <li>
                    <strong>Ruby</strong> — Hardness 9, exceptional durability
                  </li>
                  <li>
                    <strong>Emerald</strong> — Hardness 7.5-8, requires careful
                    handling
                  </li>
                  <li>
                    <strong>Blue Sapphire</strong> — Hardness 9, extremely
                    durable
                  </li>
                  <li>
                    <strong>Diamond</strong> — Hardness 10, the hardest natural
                    substance
                  </li>
                  <li>
                    <strong>Yellow Sapphire</strong> — Hardness 9, excellent
                    durability
                  </li>
                </ul>
              </div>

              <div className="gem-comparison-card">
                <h4 className="gem-comparison-title">
                  Semi-Precious Gems (Upratna)
                </h4>
                <ul className="gem-comparison-list">
                  <li>
                    <strong>Pearl</strong> — Organic origin, softer (2.5-4.5)
                  </li>
                  <li>
                    <strong>Red Coral</strong> — Organic origin, moderate
                    hardness (3-4)
                  </li>
                  <li>
                    <strong>Hessonite</strong> — Hardness 6.5-7.5
                  </li>
                  <li>
                    <strong>Cat's Eye</strong> — Hardness 8.5, good durability
                  </li>
                  <li>
                    <strong>Various substitutes</strong> — Ranging from 6-8
                    hardness
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Natural, Treated & Synthetic */}
          <section className="gem-section">
            <h2 className="gem-section-title">
              Natural, Treated & Synthetic Stones
            </h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              The distinction between natural, treated, and synthetic gemstones
              is crucial in Ratna Shastra. Only untreated natural stones are
              considered effective for astrological purposes.
            </p>

            <h3>Treated Gemstones</h3>
            <p>
              Many gems available today undergo treatments to enhance color or
              clarity. Common treatments include:
            </p>
            <ul className="gem-list">
              <li>
                <strong>Heat treatment</strong> — Applied to Sapphires and
                Rubies to improve color
              </li>
              <li>
                <strong>Oiling/Resin filling</strong> — Used in Emeralds to hide
                fractures
              </li>
              <li>
                <strong>Irradiation</strong> — Applied to create or enhance
                colors
              </li>
              <li>
                <strong>Diffusion</strong> — Introducing color through surface
                treatment
              </li>
              <li>
                <strong>Coating</strong> — Applying thin layers to alter
                appearance
              </li>
            </ul>

            <div className="gem-info-box gem-info-box--error">
              <span className="gem-info-icon">🚫</span>
              <div className="gem-info-content">
                <h4 className="gem-info-title">Treated Gems in Astrology</h4>
                <p className="gem-info-text">
                  Treated gemstones are NOT recommended for astrological use.
                  The treatment process alters the stone's natural energy
                  matrix, disrupting its ability to channel planetary vibrations
                  effectively. Always request certification confirming the stone
                  is untreated.
                </p>
              </div>
            </div>
          </section>

          {/* How Gems Influence Karma */}
          <section className="gem-section">
            <h2 className="gem-section-title">How Gems Influence Karma</h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              A common misconception is that gemstones can override destiny or
              cancel karma. In reality, gems work within the framework of karma,
              acting as supportive tools that help navigate life's challenges
              more effectively.
            </p>

            <h3>The Role of Gemstones</h3>
            <ul className="gem-list">
              <li>
                <strong>Energy Enhancement</strong> — They strengthen weak
                planetary influences
              </li>
              <li>
                <strong>Timing Optimization</strong> — They help maximize
                favorable periods
              </li>
              <li>
                <strong>Psychological Support</strong> — They boost confidence
                and mental strength
              </li>
              <li>
                <strong>Karmic Acceleration</strong> — They may speed up the
                exhaustion of negative karma
              </li>
            </ul>

            <div className="gem-info-box">
              <span className="gem-info-icon">🔮</span>
              <div className="gem-info-content">
                <h4 className="gem-info-title">Gems & Spiritual Practice</h4>
                <p className="gem-info-text">
                  Traditional texts recommend combining gem therapy with
                  mantras, meditation, and charitable acts (Dana) for maximum
                  effectiveness. Gems support but cannot replace sincere
                  spiritual effort and ethical living.
                </p>
              </div>
            </div>
          </section>

          {/* Gem Selection by Horoscope */}
          <section className="gem-section">
            <h2 className="gem-section-title">Gem Selection by Horoscope</h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              Proper gem selection requires thorough analysis of the birth chart
              (Kundli) by a qualified astrologer. Generic recommendations based
              on Sun sign or Moon sign alone are insufficient and potentially
              harmful.
            </p>

            <h3>Key Factors in Gem Selection</h3>
            <ul className="gem-list">
              <li>
                <strong>Ascendant Lord (Lagnesh)</strong> — The planet ruling
                your rising sign
              </li>
              <li>
                <strong>Moon Sign Lord</strong> — Important for emotional
                well-being
              </li>
              <li>
                <strong>Yogakaraka Planet</strong> — The planet that produces
                beneficial yogas
              </li>
              <li>
                <strong>Dasha Period</strong> — The currently running planetary
                period
              </li>
              <li>
                <strong>Specific Life Concerns</strong> — Career, health,
                marriage considerations
              </li>
            </ul>

            <div className="gem-info-box gem-info-box--warning">
              <span className="gem-info-icon">⚠️</span>
              <div className="gem-info-content">
                <h4 className="gem-info-title">Blue Sapphire Caution</h4>
                <p className="gem-info-text">
                  Blue Sapphire (Neelam) requires special attention. Due to
                  Saturn's intense energy, this gem can produce dramatic
                  effects—positive or negative—within days. A trial period of
                  3-7 days is strongly recommended before permanent wearing.
                </p>
              </div>
            </div>
          </section>

          {/* Weight, Metal & Finger Rules */}
          <section className="gem-section">
            <h2 className="gem-section-title">Weight, Metal & Finger Rules</h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              The effectiveness of a gemstone depends not only on its quality
              but also on its weight, the metal in which it's set, and the
              finger on which it's worn.
            </p>

            <div className="gem-table-wrapper">
              <table className="gem-table">
                <thead>
                  <tr>
                    <th>Gemstone</th>
                    <th>Minimum Weight</th>
                    <th>Ideal Weight</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ruby</td>
                    <td>3 Ratti (2.7 ct)</td>
                    <td>5-7 Ratti</td>
                    <td>Heavier for leadership roles</td>
                  </tr>
                  <tr>
                    <td>Pearl</td>
                    <td>4 Ratti (3.6 ct)</td>
                    <td>6-8 Ratti</td>
                    <td>Should be lustrous and round</td>
                  </tr>
                  <tr>
                    <td>Emerald</td>
                    <td>3.5 Ratti (3.15 ct)</td>
                    <td>5-7 Ratti</td>
                    <td>Minor inclusions acceptable</td>
                  </tr>
                  <tr>
                    <td>Yellow Sapphire</td>
                    <td>3 Ratti (2.7 ct)</td>
                    <td>5-6 Ratti</td>
                    <td>Ceylon origin preferred</td>
                  </tr>
                  <tr>
                    <td>Diamond</td>
                    <td>0.5 Ratti (0.45 ct)</td>
                    <td>1+ Ratti</td>
                    <td>Quality matters more than size</td>
                  </tr>
                  <tr>
                    <td>Blue Sapphire</td>
                    <td>2 Ratti (1.8 ct)</td>
                    <td>4-5 Ratti</td>
                    <td>Start small, increase if suitable</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Finger Correspondences</h3>
            <ul className="gem-list">
              <li>
                <strong>Index Finger (Tarjani)</strong> — Jupiter gems (Yellow
                Sapphire)
              </li>
              <li>
                <strong>Middle Finger (Madhyama)</strong> — Saturn, Rahu gems
                (Blue Sapphire, Hessonite)
              </li>
              <li>
                <strong>Ring Finger (Anamika)</strong> — Sun, Mars gems (Ruby,
                Coral)
              </li>
              <li>
                <strong>Little Finger (Kanishthika)</strong> — Mercury, Moon,
                Venus, Ketu gems
              </li>
            </ul>
          </section>

          {/* Purification & Energization */}
          <section className="gem-section">
            <h2 className="gem-section-title">Purification & Energization</h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              Before wearing, gemstones must undergo purification
              (Shuddhi-karan) to cleanse accumulated negative energies and
              energization (Pran-Pratishtha) to activate their planetary
              connection.
            </p>

            <h3>Purification Process</h3>
            <ul className="gem-list">
              <li>Immerse the gem in raw cow's milk for 24-48 hours</li>
              <li>Wash with Gangajal (Ganges water) or pure water</li>
              <li>
                Optionally, immerse in Panchamrit (milk, curd, honey, ghee,
                sugar)
              </li>
              <li>Dry with a clean, unused cloth</li>
            </ul>

            <h3>Energization (Pran-Pratishtha)</h3>
            <ul className="gem-list">
              <li>Place the ring on a clean altar facing East</li>
              <li>Light incense (dhoop) and a lamp (diya)</li>
              <li>Chant the specific planetary mantra 108 times</li>
              <li>Offer flowers and apply sandalwood paste/kumkum</li>
              <li>Wear on the specified finger at the auspicious time</li>
            </ul>
          </section>

          {/* Do's & Don'ts */}
          <section className="gem-section">
            <h2 className="gem-section-title">Do's & Don'ts of Wearing Gems</h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              Proper care and wearing practices ensure your gemstone remains
              effective and doesn't accumulate negative energies.
            </p>

            <div className="gem-dos-donts">
              <div className="gem-dos">
                <h4 className="gem-dos-title">✓ Do's</h4>
                <ul className="gem-list gem-list--check">
                  <li>Ensure the gem touches your skin (open-back setting)</li>
                  <li>Clean your gem regularly with mild soap and water</li>
                  <li>Re-energize periodically with mantra chanting</li>
                  <li>
                    Keep your gem in a clean, sacred place when not wearing
                  </li>
                  <li>Replace cracked or broken gems immediately</li>
                  <li>Wear with faith and positive intention</li>
                </ul>
              </div>

              <div className="gem-donts">
                <h4 className="gem-donts-title">✕ Don'ts</h4>
                <ul className="gem-list gem-list--cross">
                  <li>Don't wear gems of enemy planets together</li>
                  <li>Don't lend your gem to others or wear others' gems</li>
                  <li>Don't wear gems to funerals or cremation grounds</li>
                  <li>Don't wear cracked, chipped, or fractured gems</li>
                  <li>Don't buy gems without proper certification</li>
                  <li>Don't expect gems to work without personal effort</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ethical Sourcing */}
          <section className="gem-section">
            <h2 className="gem-section-title">
              Ethical Sourcing & Certification
            </h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              In today's market, verifying authenticity and ethical sourcing is
              essential. Reputable certification and responsible sourcing
              protect both buyer and the communities involved in gem extraction.
            </p>

            <h3>Recognized Gemological Laboratories</h3>
            <ul className="gem-list">
              <li>
                <strong>GIA</strong> (Gemological Institute of America) — Global
                gold standard
              </li>
              <li>
                <strong>IGI</strong> (International Gemological Institute) —
                Widely recognized
              </li>
              <li>
                <strong>Gübelin</strong> — Swiss laboratory, expertise in origin
                determination
              </li>
              <li>
                <strong>SSEF</strong> (Swiss Gemmological Institute) — High
                credibility
              </li>
              <li>
                <strong>Gem Testing Laboratory, Jaipur</strong> — Reputed Indian
                lab
              </li>
            </ul>

            <div className="gem-info-box gem-info-box--success">
              <span className="gem-info-icon">🌱</span>
              <div className="gem-info-content">
                <h4 className="gem-info-title">Spiritual Alignment</h4>
                <p className="gem-info-text">
                  Traditional texts emphasize that a gem obtained through
                  unethical means carries negative karma that can negate its
                  beneficial effects. Ethical sourcing aligns with the spiritual
                  purpose of wearing gemstones.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="gem-section">
            <h2 className="gem-section-title">Frequently Asked Questions</h2>
            <hr className="gem-section-divider" />

            <p className="gem-lead">
              Answers to common questions about gemstones in Vedic astrology.
              For personalized guidance, always consult a qualified astrologer.
            </p>

            <div className="gem-faq-list">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`gem-faq-item ${expandedFaq === index ? "expanded" : ""}`}
                >
                  <button
                    className="gem-faq-question"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    aria-expanded={expandedFaq === index}
                  >
                    {faq.question}
                    <span className="gem-faq-icon">+</span>
                  </button>
                  {expandedFaq === index && (
                    <div className="gem-faq-answer">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
