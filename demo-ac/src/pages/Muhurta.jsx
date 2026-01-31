import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/muhurta-tokens.css";
import "./Muhurta.css";
export default function Muhurta() {
  return (
    <>
      <Navbar />

      <main className="muhurta-layout">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="muhurta-skip-link">
          Skip to main content
        </a>

        {/* Header */}
        <header className="muhurta-header">
          <div className="muhurta-container">
            <h1 className="muhurta-hero-title">Muhurta Shastra</h1>
            <p className="muhurta-hero-subtitle">
              The sacred science of auspicious timing — harmonizing your actions
              with cosmic rhythms for optimal outcomes
            </p>
          </div>
        </header>

        {/* Main Two-Column Layout */}
        <div className="muhurta-container muhurta-grid" id="main-content">
          {/* Main Content Column (70%) */}
          <article className="muhurta-main-content">
            {/* Hero Introduction Card */}
            <div className="muhurta-card">
              <div className="muhurta-card-header">
                <span className="muhurta-icon">🕉️</span>
                <h2>What Is Muhurta Shastra?</h2>
              </div>
              <hr className="muhurta-divider" />
              <div className="muhurta-card-content">
                <p>
                  Muhurta Shastra is the ancient Vedic science of selecting
                  auspicious times for important activities, ceremonies, and
                  life events. Derived from the Sanskrit word "muhūrta" meaning
                  "moment" or "auspicious time," this profound system recognizes
                  that time itself has qualities that can enhance or hinder the
                  success of our endeavors.
                </p>
                <p>
                  Unlike modern astrology's focus on personality analysis,
                  Muhurta is purely practical — it provides precise timing for
                  when to begin ventures, perform rituals, make investments, or
                  undertake significant life changes to maximize positive
                  outcomes and minimize obstacles.
                </p>
              </div>
            </div>

            {/* Why Timing Matters */}
            <div className="muhurta-card">
              <div className="muhurta-card-header">
                <span className="muhurta-icon">⏰</span>
                <h2>Why Timing Matters in Vedic Thought</h2>
              </div>
              <hr className="muhurta-divider" />
              <div className="muhurta-card-content">
                <p>
                  In Vedic philosophy, time (Kala) is considered a fundamental
                  force that governs all existence. The ancient seers observed
                  that cosmic energies fluctuate in predictable patterns,
                  creating windows of opportunity and periods of challenge.
                </p>
                <blockquote className="muhurta-quote">
                  "Kalo hi duratitkrama" — Time is indeed difficult to overcome
                  <cite>— Mahabharata</cite>
                </blockquote>
                <p>
                  Just as a farmer plants seeds according to seasons, Muhurta
                  teaches us to align our actions with cosmic seasons. When we
                  initiate activities during favorable time periods, we work
                  with natural forces rather than against them, creating a
                  harmonious flow that supports success.
                </p>
                <p>
                  This isn't about superstition — it's about understanding that
                  different time periods carry different energetic qualities
                  that can influence outcomes. Modern science acknowledges
                  similar concepts through circadian rhythms, seasonal affective
                  patterns, and electromagnetic field variations.
                </p>
              </div>
            </div>

            {/* Muhurta vs Fate */}
            <div className="muhurta-card">
              <div className="muhurta-card-header">
                <span className="muhurta-icon">⚖️</span>
                <h2>Muhurta vs Fate: The Karma Perspective</h2>
              </div>
              <hr className="muhurta-divider" />
              <div className="muhurta-card-content">
                <p>
                  A common misconception is that Muhurta can override destiny or
                  replace personal effort. In authentic Vedic understanding,
                  Muhurta works within the framework of karma — it enhances
                  outcomes but cannot eliminate the fundamental need for right
                  action, proper preparation, and ethical conduct.
                </p>
                <h3>The Three Factors of Success:</h3>
                <ol className="muhurta-list">
                  <li>
                    <strong>Karma (Past Actions):</strong> Your accumulated
                    merits and skills
                  </li>
                  <li>
                    <strong>Purushartha (Present Effort):</strong> Your current
                    dedication and hard work
                  </li>
                  <li>
                    <strong>Daiva (Divine Grace):</strong> Favorable cosmic
                    timing through Muhurta
                  </li>
                </ol>
                <p>
                  When all three align, success becomes more natural and
                  obstacles diminish. Muhurta is the tool that helps us access
                  the third factor — divine grace through optimal timing.
                </p>
              </div>
            </div>

            {/* Panchanga Components */}
            <div className="muhurta-card">
              <div className="muhurta-card-header">
                <span className="muhurta-icon">🔯</span>
                <h2>Core Elements of Muhurta: The Panchanga System</h2>
              </div>
              <hr className="muhurta-divider" />
              <div className="muhurta-card-content">
                <p>
                  Muhurta calculations are based on the Panchanga — the
                  five-limbed Vedic calendar system that tracks cosmic rhythms
                  through five essential components:
                </p>

                <div className="muhurta-component-grid">
                  <div className="muhurta-component">
                    <h4>1. Tithi (Lunar Day)</h4>
                    <p>
                      The moon's relationship with the sun, creating 30 distinct
                      energy phases in each lunar month. Each Tithi carries
                      specific qualities for different types of activities.
                    </p>
                  </div>

                  <div className="muhurta-component">
                    <h4>2. Vara (Weekday)</h4>
                    <p>
                      The seven planetary days, each ruled by a celestial body.
                      Sunday (Sun) favors authority and leadership; Monday
                      (Moon) supports emotional and creative work, and so forth.
                    </p>
                  </div>

                  <div className="muhurta-component">
                    <h4>3. Nakshatra (Lunar Mansion)</h4>
                    <p>
                      The moon's position among 27 star constellations, each
                      with unique characteristics. The most precise indicator
                      for determining activity-specific auspicious periods.
                    </p>
                  </div>

                  <div className="muhurta-component">
                    <h4>4. Yoga (Planetary Combination)</h4>
                    <p>
                      The combined positions of sun and moon creating 27 yogas.
                      These indicate overall cosmic harmony or discord for the
                      day's activities.
                    </p>
                  </div>

                  <div className="muhurta-component">
                    <h4>5. Karana (Half-Lunar Day)</h4>
                    <p>
                      Half-duration of a Tithi, creating 11 different karanas
                      that repeat in fixed sequences. These provide fine-tuning
                      for precise timing within each lunar day.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Planetary Influences */}
            <div className="muhurta-card">
              <div className="muhurta-card-header">
                <span className="muhurta-icon">🪐</span>
                <h2>Planetary Hours and Their Influences</h2>
              </div>
              <hr className="muhurta-divider" />
              <div className="muhurta-card-content">
                <p>
                  Beyond the Panchanga, Muhurta considers planetary hours
                  (Hora), where each hour of the day is ruled by a specific
                  planet, creating distinct energy signatures:
                </p>

                <div className="muhurta-planetary-hours">
                  <div className="muhurta-planet">
                    <strong>Sun Hours:</strong> Leadership, authority,
                    government work, medical treatments
                  </div>
                  <div className="muhurta-planet">
                    <strong>Moon Hours:</strong> Emotional matters, creativity,
                    water-related activities, maternal concerns
                  </div>
                  <div className="muhurta-planet">
                    <strong>Mars Hours:</strong> Competitive activities, sports,
                    military actions, aggressive negotiations
                  </div>
                  <div className="muhurta-planet">
                    <strong>Mercury Hours:</strong> Communication, writing,
                    trade, learning, travel arrangements
                  </div>
                  <div className="muhurta-planet">
                    <strong>Jupiter Hours:</strong> Spiritual activities,
                    teaching, ceremonies, major investments
                  </div>
                  <div className="muhurta-planet">
                    <strong>Venus Hours:</strong> Artistic endeavors,
                    relationships, luxury purchases, beauty treatments
                  </div>
                  <div className="muhurta-planet">
                    <strong>Saturn Hours:</strong> Long-term planning, property
                    matters, methodical work, discipline
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Applications */}
            <div className="muhurta-card">
              <div className="muhurta-card-header">
                <span className="muhurta-icon">🎯</span>
                <h2>Practical Applications of Muhurta</h2>
              </div>
              <hr className="muhurta-divider" />
              <div className="muhurta-card-content">
                <h3>Life Events & Ceremonies:</h3>
                <ul className="muhurta-list">
                  <li>Weddings and engagements</li>
                  <li>Naming ceremonies (Namkaran)</li>
                  <li>Housewarming (Griha Pravesh)</li>
                  <li>Sacred thread ceremonies</li>
                  <li>Educational beginnings</li>
                </ul>

                <h3>Business & Professional:</h3>
                <ul className="muhurta-list">
                  <li>Company incorporation and launches</li>
                  <li>Product releases</li>
                  <li>Important meetings and negotiations</li>
                  <li>Investment decisions</li>
                  <li>Partnership agreements</li>
                </ul>

                <h3>Personal Development:</h3>
                <ul className="muhurta-list">
                  <li>Beginning spiritual practices</li>
                  <li>Starting new learning</li>
                  <li>Health treatments</li>
                  <li>Travel for important purposes</li>
                  <li>Moving residences</li>
                </ul>
              </div>
            </div>

            {/* Classical Texts */}
            <div className="muhurta-card">
              <div className="muhurta-card-header">
                <span className="muhurta-icon">📿</span>
                <h2>Classical Texts and Authorities</h2>
              </div>
              <hr className="muhurta-divider" />
              <div className="muhurta-card-content">
                <p>
                  Muhurta Shastra draws from several authoritative Sanskrit
                  texts that have guided practitioners for millennia:
                </p>

                <div className="muhurta-texts">
                  <div className="muhurta-text">
                    <h4>Brihat Samhita by Varahamihira</h4>
                    <p>
                      The foundational text covering comprehensive Muhurta
                      principles, including specific timings for various
                      activities and the philosophical basis of auspicious
                      timing.
                    </p>
                  </div>

                  <div className="muhurta-text">
                    <h4>Muhurta Chintamani by Daivagya Ramesha</h4>
                    <p>
                      A practical manual providing detailed procedures for
                      calculating auspicious times for ceremonies, business
                      ventures, and personal activities.
                    </p>
                  </div>

                  <div className="muhurta-text">
                    <h4>Jyotisha Ratnamala</h4>
                    <p>
                      Focuses on the integration of Muhurta with natal
                      astrology, showing how personal charts interact with
                      universal timing.
                    </p>
                  </div>

                  <div className="muhurta-text">
                    <h4>Kalaprakasika</h4>
                    <p>
                      Specialized in complex calculations involving multiple
                      planetary factors and regional variations in Muhurta
                      application.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Context and Eligibility */}
            <div className="muhurta-card">
              <div className="muhurta-card-header">
                <span className="muhurta-icon">🎭</span>
                <h2>Context, Intention, and Eligibility</h2>
              </div>
              <hr className="muhurta-divider" />
              <div className="muhurta-card-content">
                <p>
                  Effective Muhurta selection requires understanding three
                  crucial factors that classical texts emphasize:
                </p>

                <h3>1. Context (Desha-Kala-Patra)</h3>
                <p>
                  The appropriateness of timing must consider the location
                  (Desha), time period (Kala), and the person involved (Patra).
                  What's auspicious in one context may not be suitable in
                  another.
                </p>

                <h3>2. Intention (Sankalpa)</h3>
                <p>
                  The clarity and purity of intention significantly influence
                  outcomes. Muhurta works best when aligned with dharmic
                  purposes — actions that benefit oneself and others without
                  causing harm.
                </p>

                <h3>3. Eligibility (Adhikara)</h3>
                <p>
                  The person's readiness, competence, and spiritual maturity
                  affect how well they can utilize favorable timing. Preparation
                  and qualification matter as much as timing itself.
                </p>

                <blockquote className="muhurta-quote">
                  "Adhikara vihinasya kriya sarva nishphalah" — Without proper
                  eligibility, all actions become fruitless
                  <cite>— Classical Principle</cite>
                </blockquote>
              </div>
            </div>

            {/* Modern Application */}
            <div className="muhurta-card">
              <div className="muhurta-card-header">
                <span className="muhurta-icon">🌐</span>
                <h2>Muhurta in the Modern World</h2>
              </div>
              <hr className="muhurta-divider" />
              <div className="muhurta-card-content">
                <p>
                  Contemporary application of Muhurta requires adapting ancient
                  wisdom to modern realities while maintaining the core
                  principles:
                </p>

                <h3>Global Time Zones</h3>
                <p>
                  Calculations must account for geographical location, time
                  zones, and daylight saving adjustments. The most accurate
                  Muhurta is always calculated for the specific location where
                  the activity will occur.
                </p>

                <h3>Cultural Adaptation</h3>
                <p>
                  While maintaining scriptural accuracy, practical application
                  may need cultural sensitivity. Business Muhurtas, for example,
                  should consider local customs and working schedules.
                </p>

                <h3>Technological Integration</h3>
                <p>
                  Modern software enables precise calculations that would have
                  required extensive manual computation. However, human
                  interpretation and wisdom remain essential for proper
                  application.
                </p>

                <h3>Balanced Approach</h3>
                <p>
                  Contemporary practitioners balance Muhurta guidance with
                  practical constraints. When perfect timing isn't possible,
                  approximate favorable periods can still provide benefits,
                  especially when combined with sincere intention and proper
                  preparation.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar (30%) */}
          <aside className="muhurta-sidebar">
            {/* Quick Reference */}
            <div className="muhurta-card muhurta-card-accent">
              <div className="muhurta-card-header">
                <span className="muhurta-icon">⚡</span>
                <h3>Quick Reference</h3>
              </div>
              <hr className="muhurta-divider" />
              <div className="muhurta-card-content">
                <div className="muhurta-quick-item">
                  <strong>Best General Days:</strong>
                  <span>Sunday, Wednesday, Thursday, Friday</span>
                </div>
                <div className="muhurta-quick-item">
                  <strong>Avoid:</strong>
                  <span>Rahu Kala, Yamaganda Kala, Gulika Kala</span>
                </div>
                <div className="muhurta-quick-item">
                  <strong>Auspicious Tithis:</strong>
                  <span>2nd, 3rd, 5th, 7th, 10th, 11th, 13th</span>
                </div>
                <div className="muhurta-quick-item">
                  <strong>Powerful Nakshatras:</strong>
                  <span>Rohini, Mrigashirsha, Pushya, Uttara Phalguni</span>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="muhurta-card muhurta-card-warning">
              <div className="muhurta-card-header">
                <span className="muhurta-icon">⚠️</span>
                <h3>Important Guidelines</h3>
              </div>
              <hr className="muhurta-divider" />
              <div className="muhurta-card-content">
                <ul className="muhurta-list-small">
                  <li>Personal birth chart compatibility matters</li>
                  <li>Emergency situations override Muhurta restrictions</li>
                  <li>
                    Spiritual activities have different rules than material ones
                  </li>
                  <li>Regional variations exist in calculation methods</li>
                  <li>Consult qualified practitioners for major decisions</li>
                </ul>
              </div>
            </div>

            {/* Related Topics */}
            <div className="muhurta-card">
              <div className="muhurta-card-header">
                <span className="muhurta-icon">🔗</span>
                <h3>Related Topics</h3>
              </div>
              <hr className="muhurta-divider" />
              <div className="muhurta-card-content">
                <ul className="muhurta-links">
                  <li>
                    <a href="/natal-chart">Natal Chart Analysis</a>
                  </li>
                  <li>
                    <a href="/transits">Planetary Transits</a>
                  </li>
                  <li>
                    <a href="/calendar">Panchanga Calendar</a>
                  </li>
                  <li>
                    <a href="/remedies">Vedic Remedies</a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
