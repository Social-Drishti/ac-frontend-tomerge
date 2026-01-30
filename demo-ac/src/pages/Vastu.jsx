import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/vastu-tokens.css";
import "./Vastu.css";

// FAQ Data
const faqData = [
  {
    question: "Can Vastu be applied to rented homes?",
    answer:
      "Yes, Vastu principles can be applied to rented spaces through adjustable remedies like placement of furniture, colors, mirrors, and plants. Structural changes aren't necessary—many effective corrections are non-invasive and reversible.",
  },
  {
    question: "Is Vastu Shastra scientifically valid?",
    answer:
      "Vastu Shastra is based on observations about solar energy, magnetic fields, and natural elements that influence living spaces. While it predates modern science, many principles align with concepts of ventilation, natural lighting, and spatial psychology studied today.",
  },
  {
    question: "What is the difference between Vastu and Feng Shui?",
    answer:
      "Both are ancient systems of spatial harmony, but Vastu originates from India and is based on the five elements and cardinal directions, while Feng Shui is Chinese and emphasizes chi (energy flow) with different elemental associations. Vastu is more direction-centric, while Feng Shui focuses on energy pathways.",
  },
  {
    question: "Can Vastu help with health issues?",
    answer:
      "Vastu creates environments that support well-being by optimizing light, air, and spatial energy. While not a substitute for medical treatment, proper Vastu can reduce stress, improve sleep quality, and create conditions conducive to healing and mental clarity.",
  },
  {
    question: "What if my house faces an inauspicious direction?",
    answer:
      "No direction is inherently bad—each has specific qualities and suitable remedies. Through proper placement of rooms, colors, and Vastu corrections, any directional challenge can be balanced. Consultation with a Vastu expert can provide personalized solutions.",
  },
  {
    question: "How long does it take to see results from Vastu corrections?",
    answer:
      "Many people report feeling positive changes within a few weeks of implementing Vastu corrections. However, significant shifts in circumstances may take 3-6 months as the energy of the space realigns. Consistency in maintaining the corrections is key.",
  },
];

// Dosha Data
const doshaData = [
  {
    name: "Main Entrance in South-West",
    description:
      "A south-west entrance is considered inauspicious as it may lead to financial losses and instability. This position disrupts the flow of positive energy entering the home.",
    correction:
      "Use a bright light near the entrance, place a Vastu pyramid, or install a metal strip at the threshold. Adding green plants on either side can also help balance the energy.",
  },
  {
    name: "Kitchen in North-East",
    description:
      "The north-east is the zone of water element, while kitchen represents fire. This placement creates elemental conflict leading to health issues and family discord.",
    correction:
      "If relocation isn't possible, place a bowl of sea salt in the kitchen, use blue or green colors, and ensure the cooking platform faces east. Keep the area extremely clean.",
  },
  {
    name: "Toilet in North-East",
    description:
      "North-east is the most sacred direction (Ishan corner). Having a toilet here severely impacts spiritual growth, mental peace, and overall prosperity of inhabitants.",
    correction:
      "Keep the toilet door always closed, paint it green, place a Vastu salt bowl inside, and hang a wind chime outside. Consider converting to storage if major renovation is possible.",
  },
  {
    name: "Bedroom in South-East",
    description:
      "South-east is governed by Agni (fire element). Sleeping here can cause irritability, arguments between couples, and restless sleep patterns.",
    correction:
      "Use cooling colors like light blue or green, place indoor plants, avoid red/orange decor, and sleep with head towards south. A small water feature in the room can also help.",
  },
  {
    name: "Staircase in Center",
    description:
      "The center of the house (Brahmasthan) should remain open and light. A staircase here blocks cosmic energy flow, causing health problems and stagnation in life progress.",
    correction:
      "If structural change isn't possible, ensure excellent lighting, use light colors, place crystals, and avoid storing anything under the stairs. Keep this area clutter-free.",
  },
];

export default function Vastu() {
  const [expandedDosha, setExpandedDosha] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <>
      <Navbar />

      <main className="vastu-page">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="vastu-skip-link">
          Skip to main content
        </a>

        {/* Hero Section */}
        <header className="vastu-hero">
          <div className="vastu-hero-content">
            <h1 className="vastu-hero-title">Vastu Shastra</h1>
            <p className="vastu-hero-subtitle">
              "The science of architecture that harmonizes human dwellings with
              cosmic energy, balancing the five elements to create spaces of
              prosperity, health, and spiritual growth."
            </p>
          </div>
        </header>

        {/* Main Content with Sidebar */}
        <div className="vastu-main-wrapper" id="main-content">
          {/* Main Content Area */}
          <article className="vastu-content">
            {/* Section 1: Introduction */}
            <section id="introduction" className="vastu-section">
              <header className="vastu-section-header">
                <span className="vastu-section-number">Section 01</span>
                <h2 className="vastu-section-title">
                  Introduction to Vastu Shastra
                </h2>
                <hr className="vastu-section-divider" />
              </header>

              <p className="vastu-lead">
                Vastu Shastra is the ancient Indian science of architecture and
                spatial arrangement. Rooted in Vedic knowledge, it provides
                guidelines for designing and constructing buildings in harmony
                with natural forces and cosmic energy.
              </p>

              <p>
                The term "Vastu" derives from the Sanskrit word meaning
                "dwelling" or "site," while "Shastra" means "science" or
                "doctrine." Together, Vastu Shastra translates to the "science
                of dwelling"—a systematic approach to creating spaces that
                promote well-being, prosperity, and spiritual growth.
              </p>

              <p>
                Unlike modern architecture which primarily focuses on aesthetics
                and functionality, Vastu Shastra considers the subtle energies
                that flow through spaces. It recognizes that buildings are not
                just physical structures but living entities that interact with
                their inhabitants and the surrounding environment.
              </p>

              <div className="vastu-info-box">
                <span className="vastu-info-icon">📜</span>
                <div className="vastu-info-content">
                  <h4 className="vastu-info-title">Historical Origins</h4>
                  <p className="vastu-info-text">
                    Vastu Shastra finds its earliest references in the Rigveda
                    and Atharvaveda, dating back over 5,000 years. The Mayamata
                    and Manasara are two principal texts that codified these
                    principles for architectural application.
                  </p>
                </div>
              </div>

              <h3>Core Philosophy</h3>
              <p>
                At its heart, Vastu Shastra operates on the principle that every
                piece of land and every structure possesses energy. This energy
                can either support or hinder the activities and well-being of
                its occupants. By aligning architectural elements with natural
                forces— such as solar energy, magnetic fields, and the five
                elements—Vastu creates environments that nurture life.
              </p>

              <p>
                The practice acknowledges that humans are microcosms of the
                universe, and our dwellings should reflect this cosmic
                connection. When a building is designed according to Vastu
                principles, it becomes a conduit for positive energy, supporting
                the physical, mental, and spiritual health of its inhabitants.
              </p>
            </section>

            {/* Section 2: Pancha Mahabhuta */}
            <section id="pancha-mahabhuta" className="vastu-section">
              <header className="vastu-section-header">
                <span className="vastu-section-number">Section 02</span>
                <h2 className="vastu-section-title">
                  Pancha Mahabhuta: The Five Elements
                </h2>
                <hr className="vastu-section-divider" />
              </header>

              <p className="vastu-lead">
                The foundation of Vastu Shastra rests upon the Pancha Mahabhuta—
                the five great elements that constitute all matter in the
                universe. Balancing these elements within a structure is
                essential for creating harmony and well-being.
              </p>

              <div className="vastu-element-grid">
                <div className="vastu-element-card vastu-element-card--earth">
                  <h4 className="vastu-element-name">Earth (Prithvi)</h4>
                  <p className="vastu-element-sanskrit">पृथ्वी • South-West</p>
                  <p className="vastu-element-desc">
                    Provides stability, support, and grounding energy.
                    Associated with the physical body, security, and material
                    prosperity. The south-west zone should be heavy and stable.
                  </p>
                </div>

                <div className="vastu-element-card vastu-element-card--water">
                  <h4 className="vastu-element-name">Water (Jala)</h4>
                  <p className="vastu-element-sanskrit">जल • North-East</p>
                  <p className="vastu-element-desc">
                    Represents purification, flow, and life force. Governs
                    emotions, intuition, and spiritual clarity. Water features
                    and storage are ideal in the north-east direction.
                  </p>
                </div>

                <div className="vastu-element-card vastu-element-card--fire">
                  <h4 className="vastu-element-name">Fire (Agni)</h4>
                  <p className="vastu-element-sanskrit">अग्नि • South-East</p>
                  <p className="vastu-element-desc">
                    Embodies transformation, energy, and passion. Governs
                    metabolism, enthusiasm, and fame. Kitchen and electrical
                    equipment belong in the south-east zone.
                  </p>
                </div>

                <div className="vastu-element-card vastu-element-card--air">
                  <h4 className="vastu-element-name">Air (Vayu)</h4>
                  <p className="vastu-element-sanskrit">वायु • North-West</p>
                  <p className="vastu-element-desc">
                    Symbolizes movement, freshness, and social connections.
                    Influences relationships, travel, and communication. Guest
                    rooms and storage suit the north-west area.
                  </p>
                </div>

                <div className="vastu-element-card vastu-element-card--space">
                  <h4 className="vastu-element-name">Space (Akasha)</h4>
                  <p className="vastu-element-sanskrit">आकाश • Center</p>
                  <p className="vastu-element-desc">
                    The most subtle element, representing expansion and
                    consciousness. The center of the home (Brahmasthan) should
                    remain open and clutter-free to allow cosmic energy to flow.
                  </p>
                </div>
              </div>

              <div className="vastu-info-box vastu-info-box--warning">
                <span className="vastu-info-icon">⚠️</span>
                <div className="vastu-info-content">
                  <h4 className="vastu-info-title">Elemental Balance</h4>
                  <p className="vastu-info-text">
                    When elements are misplaced—such as fire in the water zone
                    or water in the fire zone—they create conflict that
                    manifests as health issues, financial problems, or
                    relationship discord. Proper placement ensures harmony.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Directional Energy */}
            <section id="directional-energy" className="vastu-section">
              <header className="vastu-section-header">
                <span className="vastu-section-number">Section 03</span>
                <h2 className="vastu-section-title">
                  Directional Energy (Disha)
                </h2>
                <hr className="vastu-section-divider" />
              </header>

              <p className="vastu-lead">
                Vastu Shastra assigns specific qualities and energies to each of
                the eight cardinal and ordinal directions. Understanding these
                directional influences is crucial for proper room placement and
                spatial design.
              </p>

              <div className="vastu-direction-grid">
                <div className="vastu-direction-card">
                  <span className="vastu-direction-symbol">↖️</span>
                  <span className="vastu-direction-name">NW</span>
                </div>
                <div className="vastu-direction-card">
                  <span className="vastu-direction-symbol">⬆️</span>
                  <span className="vastu-direction-name">North</span>
                </div>
                <div className="vastu-direction-card">
                  <span className="vastu-direction-symbol">↗️</span>
                  <span className="vastu-direction-name">NE</span>
                </div>
                <div className="vastu-direction-card">
                  <span className="vastu-direction-symbol">⬅️</span>
                  <span className="vastu-direction-name">West</span>
                </div>
                <div className="vastu-direction-card vastu-direction-card--center">
                  <span className="vastu-direction-symbol">🔆</span>
                  <span className="vastu-direction-name">Center</span>
                </div>
                <div className="vastu-direction-card">
                  <span className="vastu-direction-symbol">➡️</span>
                  <span className="vastu-direction-name">East</span>
                </div>
                <div className="vastu-direction-card">
                  <span className="vastu-direction-symbol">↙️</span>
                  <span className="vastu-direction-name">SW</span>
                </div>
                <div className="vastu-direction-card">
                  <span className="vastu-direction-symbol">⬇️</span>
                  <span className="vastu-direction-name">South</span>
                </div>
                <div className="vastu-direction-card">
                  <span className="vastu-direction-symbol">↘️</span>
                  <span className="vastu-direction-name">SE</span>
                </div>
              </div>

              <h3>The Eight Directions & Their Guardians</h3>

              <p>
                <strong>North (Uttara)</strong> — Ruled by Kubera, the god of
                wealth. This direction attracts prosperity and career
                opportunities. Keep this zone open, well-lit, and clutter-free.
                Ideal for living rooms, halls, and home offices.
              </p>

              <p>
                <strong>East (Purva)</strong> — Governed by Indra, lord of the
                heavens. The source of solar energy and new beginnings. Main
                entrances facing east bring positive energy. Suitable for
                meditation rooms and study areas.
              </p>

              <p>
                <strong>South (Dakshina)</strong> — Presided by Yama, god of
                dharma and death. Represents fame, recognition, and strength.
                Should be heavier with fewer openings. Master bedrooms are well
                placed here.
              </p>

              <p>
                <strong>West (Paschima)</strong> — Ruled by Varuna, lord of
                water and oceans. Associated with stability and gains from
                efforts. Dining rooms and children's bedrooms suit this
                direction.
              </p>

              <p>
                <strong>North-East (Ishanya)</strong> — The most sacred corner,
                representing water element and spiritual energy. Keep extremely
                clean and open. Ideal for prayer rooms, meditation spaces, and
                water storage.
              </p>

              <p>
                <strong>South-East (Agneya)</strong> — Domain of Agni, the fire
                god. Perfect for kitchens, electrical panels, and transformers.
                Fire-related activities in this zone enhance positive energy.
              </p>

              <p>
                <strong>South-West (Nairitya)</strong> — Earth element zone
                providing stability. Should be the heaviest part of the house.
                Master bedroom placement here ensures stability and sound sleep.
              </p>

              <p>
                <strong>North-West (Vayavya)</strong> — Air element zone
                governed by Vayu. Supports movement and change. Suitable for
                guest rooms, garages, and storage of non-essential items.
              </p>
            </section>

            {/* Section 4: Vastu Purusha Mandala */}
            <section id="vastu-purusha" className="vastu-section">
              <header className="vastu-section-header">
                <span className="vastu-section-number">Section 04</span>
                <h2 className="vastu-section-title">Vastu Purusha Mandala</h2>
                <hr className="vastu-section-divider" />
              </header>

              <p className="vastu-lead">
                The Vastu Purusha Mandala is a metaphysical plan that depicts a
                cosmic being (Purusha) lying face down within a square grid.
                This diagram forms the foundation for all Vastu architectural
                planning.
              </p>

              <div className="vastu-mandala-container">
                <div
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    margin: "0 auto",
                    aspectRatio: "1",
                    background:
                      "linear-gradient(135deg, #f9f5eb 0%, #f0e8dc 100%)",
                    border: "2px solid var(--vastu-border)",
                    borderRadius: "var(--vastu-radius-lg)",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(3, 1fr)",
                    gap: "2px",
                    padding: "4px",
                  }}
                >
                  {[
                    { label: "NW", sub: "Vayu", color: "#805ad5" },
                    { label: "N", sub: "Kubera", color: "#3182ce" },
                    { label: "NE", sub: "Ishana", color: "#3182ce" },
                    { label: "W", sub: "Varuna", color: "#805ad5" },
                    { label: "Center", sub: "Brahma", color: "#d69e2e" },
                    { label: "E", sub: "Indra", color: "#e53e3e" },
                    { label: "SW", sub: "Nairitya", color: "#38a169" },
                    { label: "S", sub: "Yama", color: "#38a169" },
                    { label: "SE", sub: "Agni", color: "#e53e3e" },
                  ].map((cell, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#faf7f2",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "4px",
                        padding: "8px",
                        borderLeft: `3px solid ${cell.color}`,
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "14px",
                          color: "#2d3436",
                        }}
                      >
                        {cell.label}
                      </span>
                      <span style={{ fontSize: "11px", color: "#718096" }}>
                        {cell.sub}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="vastu-mandala-caption">
                  The Vastu Purusha Mandala — Each direction governed by a deity
                  representing specific cosmic energies
                </p>
              </div>

              <h3>The Legend of Vastu Purusha</h3>
              <p>
                According to ancient texts, Vastu Purusha was a formless being
                born from the sweat of Lord Shiva during a cosmic battle. He
                grew to enormous proportions, threatening to consume everything.
                The gods (Devas) subdued him by pressing him face-down into the
                earth, with each deity holding a specific part of his body.
              </p>

              <p>
                In gratitude for being held in place (rather than destroyed),
                Vastu Purusha was granted the boon of being worshipped whenever
                construction begins. Builders who honor him through proper
                orientation and design receive his blessings of prosperity and
                protection.
              </p>

              <div className="vastu-info-box vastu-info-box--success">
                <span className="vastu-info-icon">✨</span>
                <div className="vastu-info-content">
                  <h4 className="vastu-info-title">Practical Application</h4>
                  <p className="vastu-info-text">
                    When overlaying the Vastu Purusha Mandala on your floor
                    plan, avoid placing heavy objects or pillars on the
                    sensitive areas (head, heart, stomach). The Brahmasthan
                    (center) should always remain open and unobstructed.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Room-wise Vastu */}
            <section id="room-wise" className="vastu-section">
              <header className="vastu-section-header">
                <span className="vastu-section-number">Section 05</span>
                <h2 className="vastu-section-title">
                  Room-wise Vastu Guidelines
                </h2>
                <hr className="vastu-section-divider" />
              </header>

              <p className="vastu-lead">
                Each room in a dwelling serves a specific purpose and should be
                positioned according to its function and the energy requirements
                of its activities.
              </p>

              <div className="vastu-room-grid">
                <div className="vastu-room-card">
                  <div className="vastu-room-header">
                    <span className="vastu-room-icon">🚪</span>
                    <h4 className="vastu-room-name">Main Entrance</h4>
                    <span className="vastu-room-direction">N / E / NE</span>
                  </div>
                  <ul className="vastu-room-tips">
                    <li>North or east-facing entrances are most auspicious</li>
                    <li>Door should open inward, clockwise</li>
                    <li>Avoid placing shoes at the entrance</li>
                    <li>Keep well-lit and decorated with auspicious symbols</li>
                    <li>Avoid obstruction directly in front of door</li>
                  </ul>
                </div>

                <div className="vastu-room-card">
                  <div className="vastu-room-header">
                    <span className="vastu-room-icon">🛋️</span>
                    <h4 className="vastu-room-name">Living Room</h4>
                    <span className="vastu-room-direction">N / E / NE</span>
                  </div>
                  <ul className="vastu-room-tips">
                    <li>Place heavy furniture in south or west</li>
                    <li>Electronic devices belong in the south-east</li>
                    <li>Keep north and east walls lighter</li>
                    <li>Seating should face north or east</li>
                    <li>Avoid clutter in the center of the room</li>
                  </ul>
                </div>

                <div className="vastu-room-card">
                  <div className="vastu-room-header">
                    <span className="vastu-room-icon">🛏️</span>
                    <h4 className="vastu-room-name">Master Bedroom</h4>
                    <span className="vastu-room-direction">SW</span>
                  </div>
                  <ul className="vastu-room-tips">
                    <li>Sleep with head towards south or east</li>
                    <li>Avoid mirrors facing the bed</li>
                    <li>Place wardrobe in south or west wall</li>
                    <li>Use soothing, earthy colors</li>
                    <li>Avoid placing bed under a beam</li>
                  </ul>
                </div>

                <div className="vastu-room-card">
                  <div className="vastu-room-header">
                    <span className="vastu-room-icon">🍳</span>
                    <h4 className="vastu-room-name">Kitchen</h4>
                    <span className="vastu-room-direction">SE</span>
                  </div>
                  <ul className="vastu-room-tips">
                    <li>Cook facing east for positive energy</li>
                    <li>Place stove in south-east corner</li>
                    <li>Sink and water storage in north-east</li>
                    <li>Avoid black color in kitchen</li>
                    <li>Keep exhaust and ventilation proper</li>
                  </ul>
                </div>

                <div className="vastu-room-card">
                  <div className="vastu-room-header">
                    <span className="vastu-room-icon">🚿</span>
                    <h4 className="vastu-room-name">Bathroom</h4>
                    <span className="vastu-room-direction">NW / W</span>
                  </div>
                  <ul className="vastu-room-tips">
                    <li>Best placed in north-west or west</li>
                    <li>Toilet seat should face north or south</li>
                    <li>Avoid bathroom in north-east corner</li>
                    <li>Keep doors always closed</li>
                    <li>Ensure proper drainage and ventilation</li>
                  </ul>
                </div>

                <div className="vastu-room-card">
                  <div className="vastu-room-header">
                    <span className="vastu-room-icon">🙏</span>
                    <h4 className="vastu-room-name">Pooja Room</h4>
                    <span className="vastu-room-direction">NE</span>
                  </div>
                  <ul className="vastu-room-tips">
                    <li>North-east is the ideal location</li>
                    <li>Face east or north while praying</li>
                    <li>Keep idols facing west</li>
                    <li>Maintain cleanliness and purity</li>
                    <li>Avoid placing under staircase or toilet above</li>
                  </ul>
                </div>

                <div className="vastu-room-card">
                  <div className="vastu-room-header">
                    <span className="vastu-room-icon">📚</span>
                    <h4 className="vastu-room-name">Study / Office</h4>
                    <span className="vastu-room-direction">N / E / NE</span>
                  </div>
                  <ul className="vastu-room-tips">
                    <li>Face north or east while working</li>
                    <li>Place desk in south-west of room</li>
                    <li>Books and files in south or west</li>
                    <li>Ensure good natural lighting</li>
                    <li>Avoid sitting with back to door</li>
                  </ul>
                </div>

                <div className="vastu-room-card">
                  <div className="vastu-room-header">
                    <span className="vastu-room-icon">🍽️</span>
                    <h4 className="vastu-room-name">Dining Room</h4>
                    <span className="vastu-room-direction">W / E</span>
                  </div>
                  <ul className="vastu-room-tips">
                    <li>West or east side of home is ideal</li>
                    <li>Face east while eating</li>
                    <li>Dining table should be square or rectangular</li>
                    <li>Avoid dining under a beam</li>
                    <li>Keep a mirror on east wall to multiply abundance</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Common Doshas */}
            <section id="common-doshas" className="vastu-section">
              <header className="vastu-section-header">
                <span className="vastu-section-number">Section 06</span>
                <h2 className="vastu-section-title">Common Vastu Doshas</h2>
                <hr className="vastu-section-divider" />
              </header>

              <p className="vastu-lead">
                A Vastu Dosha is an architectural flaw or misalignment that
                disrupts the natural flow of energy in a space. Understanding
                common doshas helps identify and address issues affecting your
                home's harmony.
              </p>

              <div className="vastu-dosha-list">
                {doshaData.map((dosha, index) => (
                  <div key={index} className="vastu-dosha-item">
                    <button
                      className="vastu-dosha-header"
                      onClick={() =>
                        setExpandedDosha(expandedDosha === index ? null : index)
                      }
                      aria-expanded={expandedDosha === index}
                    >
                      <h4 className="vastu-dosha-name">{dosha.name}</h4>
                      <span
                        className={`vastu-dosha-toggle ${
                          expandedDosha === index ? "expanded" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {expandedDosha === index && (
                      <div className="vastu-dosha-content">
                        <p className="vastu-dosha-desc">{dosha.description}</p>
                        <div className="vastu-correction">
                          <p className="vastu-correction-label">
                            Recommended Correction
                          </p>
                          <p className="vastu-correction-text">
                            {dosha.correction}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Practical Corrections */}
            <section id="corrections" className="vastu-section">
              <header className="vastu-section-header">
                <span className="vastu-section-number">Section 07</span>
                <h2 className="vastu-section-title">
                  Practical Vastu Corrections
                </h2>
                <hr className="vastu-section-divider" />
              </header>

              <p className="vastu-lead">
                Not every Vastu defect requires structural changes. Many
                effective remedies use simple, non-invasive methods to balance
                energy and neutralize negative influences.
              </p>

              <h3>Color Therapy</h3>
              <p>
                Colors carry specific vibrations that can enhance or balance
                directional energies. Use light green or blue in the north-east,
                red or orange in the south-east, yellow or beige in the
                south-west, and white or cream in the north-west. The center
                benefits from light, neutral tones.
              </p>

              <h3>Mirror Placement</h3>
              <p>
                Mirrors can effectively redirect and enhance energy flow. Place
                mirrors on the north or east walls to amplify prosperity. Never
                place mirrors reflecting the main door, bed, or kitchen stove.
                Broken or dusty mirrors should be removed immediately.
              </p>

              <h3>Plant Therapy</h3>
              <p>
                Living plants absorb negative energy and release positive
                vibrations. Tulsi (holy basil) in the north-east brings
                spiritual energy. Money plants in the south-east attract wealth.
                Avoid thorny plants inside the home except for rose plants kept
                outside.
              </p>

              <h3>Crystal & Pyramid Placement</h3>
              <p>
                Clear quartz crystals placed in the north-east enhance clarity
                and spiritual growth. Vastu pyramids can be used to correct
                structural defects. Copper pyramids are particularly effective
                for neutralizing negative energies from toilets in wrong zones.
              </p>

              <h3>Salt Remedies</h3>
              <p>
                Sea salt or rock salt absorbs negative energy effectively. Place
                bowls of salt in corners with Vastu defects, replacing weekly.
                Mopping floors with salt water once a week cleanses the space
                energetically.
              </p>

              <div className="vastu-info-box">
                <span className="vastu-info-icon">💡</span>
                <div className="vastu-info-content">
                  <h4 className="vastu-info-title">
                    Professional Consultation
                  </h4>
                  <p className="vastu-info-text">
                    While these general remedies help most situations, complex
                    or severe Vastu defects benefit from personalized analysis
                    by an experienced Vastu consultant who can assess your
                    specific floor plan and circumstances.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Do's & Don'ts */}
            <section id="dos-donts" className="vastu-section">
              <header className="vastu-section-header">
                <span className="vastu-section-number">Section 08</span>
                <h2 className="vastu-section-title">Vastu Do's & Don'ts</h2>
                <hr className="vastu-section-divider" />
              </header>

              <p className="vastu-lead">
                Quick reference guidelines for maintaining positive Vastu energy
                in your home. These practices, when followed consistently,
                create a supportive environment for prosperity and well-being.
              </p>

              <div className="vastu-dos-donts">
                <div className="vastu-dos">
                  <h4 className="vastu-list-title">
                    <span>✓</span> Do's
                  </h4>
                  <ul className="vastu-checklist">
                    <li>Keep the main entrance clean and well-lit</li>
                    <li>Maintain the north-east corner clutter-free</li>
                    <li>Sleep with head towards south or east</li>
                    <li>Cook facing east direction</li>
                    <li>Place water elements in north-east</li>
                    <li>Keep the center of home open and light</li>
                    <li>Use fresh flowers and plants regularly</li>
                    <li>Ensure proper ventilation throughout</li>
                    <li>Fix leaking taps and broken items promptly</li>
                    <li>Display positive imagery and symbols</li>
                  </ul>
                </div>

                <div className="vastu-donts">
                  <h4 className="vastu-list-title">
                    <span>✗</span> Don'ts
                  </h4>
                  <ul className="vastu-checklist">
                    <li>Don't place mirror facing the bed</li>
                    <li>Avoid toilet in north-east corner</li>
                    <li>Don't keep broken clocks or watches</li>
                    <li>Avoid clutter under the bed</li>
                    <li>Don't place stove and sink adjacent</li>
                    <li>Avoid dark colors in north-east</li>
                    <li>Don't hang pictures of war or violence</li>
                    <li>Avoid overhead beams above bed or desk</li>
                    <li>Don't block natural light sources</li>
                    <li>Avoid cactus or thorny plants inside</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section id="faqs" className="vastu-section">
              <header className="vastu-section-header">
                <span className="vastu-section-number">Section 09</span>
                <h2 className="vastu-section-title">
                  Frequently Asked Questions
                </h2>
                <hr className="vastu-section-divider" />
              </header>

              <p className="vastu-lead">
                Common questions about Vastu Shastra answered with clarity and
                practical guidance for modern living.
              </p>

              <div className="vastu-faq-list">
                {faqData.map((faq, index) => (
                  <div key={index} className="vastu-faq-item">
                    <button
                      className="vastu-faq-question"
                      onClick={() =>
                        setExpandedFaq(expandedFaq === index ? null : index)
                      }
                      aria-expanded={expandedFaq === index}
                    >
                      <span className="vastu-faq-question-text">
                        {faq.question}
                      </span>
                      <span
                        className={`vastu-faq-toggle ${
                          expandedFaq === index ? "expanded" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {expandedFaq === index && (
                      <div className="vastu-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <div className="vastu-cta">
              <h3 className="vastu-cta-title">
                Get a Personalized Vastu Consultation
              </h3>
              <p className="vastu-cta-text">
                Every space is unique. Let our experienced Vastu experts analyze
                your home or office and provide customized recommendations for
                harmony and prosperity.
              </p>
              <a href="/astrology" className="vastu-cta-button">
                Book a Consultation
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
