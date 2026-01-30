import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/compatibility-tokens.css";
import "./Compatibility.css";

export default function Compatibility() {
  return (
    <>
      <Navbar />

      <main className="compat-layout">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="compat-skip-link">
          Skip to main content
        </a>

        {/* Header */}
        <header className="compat-header">
          <div className="compat-container">
            <h1 className="compat-hero-title">Compatibility Analysis</h1>
            <p className="compat-hero-subtitle">
              Understanding relationship dynamics, emotional patterns, and
              interpersonal harmony through the wisdom of Vedic astrology
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="compat-container" id="main-content">
          <article className="compat-main-content">
            {/* Introduction Section */}
            <section className="compat-section">
              <h2 className="compat-section-title">
                What Is Compatibility in Vedic Astrology
              </h2>

              <p className="compat-paragraph-large">
                Compatibility in Vedic astrology is not about predicting whether
                two people are "meant to be" together. Instead, it's an
                analytical framework for understanding the natural rhythms,
                communication patterns, and emotional dynamics that emerge when
                two individuals come together in relationship.
              </p>

              <div className="compat-content-card">
                <div className="compat-card-header">
                  <span className="compat-card-icon">🌙</span>
                  <h3 className="compat-card-title">
                    The Four Layers of Connection
                  </h3>
                </div>
                <hr className="compat-divider" />
                <div className="compat-card-content">
                  <p className="compat-paragraph">
                    Traditional Vedic analysis examines compatibility across
                    multiple dimensions of human experience:
                  </p>
                  <ul className="compat-list compat-list-spaced">
                    <li>
                      <span className="compat-emphasis">
                        Emotional Layer (Moon & Water Signs):
                      </span>{" "}
                      How you process feelings, seek comfort, and express
                      vulnerability together.
                    </li>
                    <li>
                      <span className="compat-emphasis">
                        Mental Layer (Mercury & Air Signs):
                      </span>{" "}
                      Communication styles, intellectual connection, and shared
                      curiosity.
                    </li>
                    <li>
                      <span className="compat-emphasis">
                        Physical Layer (Mars & Venus):
                      </span>{" "}
                      Attraction patterns, intimacy needs, and how you navigate
                      desire.
                    </li>
                    <li>
                      <span className="compat-emphasis">
                        Spiritual Layer (Jupiter & North Node):
                      </span>{" "}
                      Shared growth direction, values alignment, and life
                      purpose compatibility.
                    </li>
                  </ul>
                </div>
              </div>

              <p className="compat-paragraph">
                Understanding these layers helps couples recognize their natural
                strengths and areas where conscious effort supports harmony.{" "}
                <span className="compat-highlight">
                  Attraction and long-term compatibility often involve different
                  astrological factors
                </span>{" "}
                — what draws us together may not be what sustains us through
                decades of partnership.
              </p>
            </section>

            {/* Astrological Foundations Section */}
            <section className="compat-section">
              <h2 className="compat-section-title">
                Astrological Foundations of Relationship Analysis
              </h2>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  The Primacy of Moon Signs
                </h3>
                <p className="compat-paragraph">
                  While Western astrology often emphasizes Sun sign
                  compatibility, Vedic astrology places the Moon at the center
                  of relationship analysis. Your Moon sign represents your
                  emotional nature, instinctive responses, and what makes you
                  feel secure and nurtured.
                </p>

                <div className="compat-callout compat-callout-harmony">
                  <div className="compat-callout-title">
                    Why Moon Signs Matter More
                  </div>
                  <p className="compat-paragraph">
                    In long-term relationships, you're not relating to someone's
                    public persona (Sun) but to their private emotional world
                    (Moon). Moon sign compatibility indicates how easily you
                    understand each other's emotional language and provide
                    mutual comfort.
                  </p>
                </div>

                <p className="compat-paragraph">
                  Compatible Moon signs often share similar approaches to
                  security, family, and emotional expression. However,
                  complementary Moon signs can also work beautifully when
                  partners consciously appreciate their different emotional
                  styles.
                </p>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Venus and Mars: The Dance of Attraction
                </h3>
                <p className="compat-paragraph">
                  Venus governs how we love, what we find beautiful, and our
                  approach to partnership. Mars represents how we pursue what we
                  want, assert our needs, and express passion. The interplay
                  between these planets in two charts reveals much about
                  romantic and sexual compatibility.
                </p>

                <ul className="compat-list">
                  <li>
                    <strong>Venus-Mars Harmony:</strong> Natural attraction,
                    complementary love languages, balanced give-and-take
                  </li>
                  <li>
                    <strong>Venus-Venus Connections:</strong> Shared aesthetic
                    values, similar relationship ideals, easy affection
                  </li>
                  <li>
                    <strong>Mars-Mars Aspects:</strong> How you handle conflict,
                    competition, and shared ambitions
                  </li>
                </ul>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Ascendant and Seventh House Analysis
                </h3>
                <p className="compat-paragraph">
                  Your Ascendant (Lagna) represents how you approach life, while
                  your seventh house describes what you seek in partnership.
                  When someone's planets fall in your seventh house, or when
                  your Ascendants are compatible signs, there's often a natural
                  sense of "fit" and mutual support.
                </p>

                <p className="compat-paragraph">
                  The seventh house ruler's placement also indicates the types
                  of partnerships that support your growth versus those that
                  create stagnation or conflict.
                </p>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Navamsa (D9): The Marriage Chart
                </h3>
                <p className="compat-paragraph">
                  The Navamsa chart is considered the "marriage chart" in Vedic
                  astrology. It reveals how your partnership nature unfolds
                  after the initial attraction phase. A strong Navamsa Venus and
                  well-placed seventh house in the D9 chart support long-term
                  marital happiness.
                </p>

                <div className="compat-quote">
                  "The Navamsa shows not just whom you might marry, but who you
                  become through marriage — the deepened version of yourself
                  that emerges through committed partnership."
                </div>
              </div>
            </section>

            {/* Traditional Matching Systems Section */}
            <section className="compat-section">
              <h2 className="compat-section-title">
                Traditional Matching Systems
              </h2>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Ashta-Koota (Guna Milan) Overview
                </h3>
                <p className="compat-paragraph">
                  The Ashta-Koota system evaluates eight factors of
                  compatibility, traditionally used for arranged marriages.
                  While culturally important, it's essential to understand both
                  its insights and limitations.
                </p>

                <div className="compat-table-container">
                  <table className="compat-table">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Maximum Points</th>
                        <th>Evaluates</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Varna</td>
                        <td>1</td>
                        <td>Spiritual compatibility</td>
                      </tr>
                      <tr>
                        <td>Vashya</td>
                        <td>2</td>
                        <td>Mutual attraction and control</td>
                      </tr>
                      <tr>
                        <td>Tara</td>
                        <td>3</td>
                        <td>Health and longevity together</td>
                      </tr>
                      <tr>
                        <td>Yoni</td>
                        <td>4</td>
                        <td>Sexual compatibility</td>
                      </tr>
                      <tr>
                        <td>Graha Maitri</td>
                        <td>5</td>
                        <td>Mental compatibility</td>
                      </tr>
                      <tr>
                        <td>Gana</td>
                        <td>6</td>
                        <td>Temperament matching</td>
                      </tr>
                      <tr>
                        <td>Bhakoot</td>
                        <td>7</td>
                        <td>Love and emotional harmony</td>
                      </tr>
                      <tr>
                        <td>Nadi</td>
                        <td>8</td>
                        <td>Health and progeny</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Strengths and Limitations of Guna Scores
                </h3>

                <div className="compat-callout compat-callout-caution">
                  <div className="compat-callout-title">
                    Important Perspective
                  </div>
                  <p className="compat-paragraph">
                    A high Guna Milan score (24-36 points) suggests natural
                    harmony in traditional areas, but it cannot guarantee
                    happiness or predict relationship success. Many fulfilling
                    marriages have moderate scores, while some high-scoring
                    matches face significant challenges.
                  </p>
                </div>

                <p className="compat-paragraph">
                  The system works best when understood as a framework for
                  recognizing potential areas of harmony and difference, rather
                  than as a deterministic prediction. Modern couples can use
                  this information to develop greater awareness and
                  communication skills.
                </p>
              </div>
            </section>

            {/* Doshas and Modifiers Section */}
            <section className="compat-section">
              <h2 className="compat-section-title">
                Doshas and Compatibility Modifiers
              </h2>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Manglik Dosha: Context Over Fear
                </h3>
                <p className="compat-paragraph">
                  Manglik Dosha occurs when Mars is placed in certain houses
                  (1st, 2nd, 4th, 7th, 8th, or 12th) in the birth chart.
                  Traditionally considered challenging for marriage, modern
                  interpretation focuses on understanding Mars's expression
                  rather than avoiding it.
                </p>

                <div className="compat-content-card">
                  <div className="compat-card-header">
                    <span className="compat-card-icon">♂️</span>
                    <h3 className="compat-card-title">
                      Understanding Mars Energy in Relationships
                    </h3>
                  </div>
                  <hr className="compat-divider" />
                  <div className="compat-card-content">
                    <p className="compat-paragraph">
                      People with prominent Mars in relationship houses often
                      bring:
                    </p>
                    <ul className="compat-list">
                      <li>Strong passion and intensity</li>
                      <li>Direct communication style</li>
                      <li>Need for independence within partnership</li>
                      <li>High energy that needs constructive outlets</li>
                    </ul>
                    <p className="compat-paragraph">
                      Rather than avoiding such individuals, awareness helps
                      partners appreciate these qualities and create space for
                      healthy Mars expression.
                    </p>
                  </div>
                </div>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Nadi Dosha and Its Exceptions
                </h3>
                <p className="compat-paragraph">
                  Nadi Dosha occurs when both partners have the same Nadi (Adi,
                  Madhya, or Antya), traditionally associated with health
                  concerns for children. However, numerous exceptions and
                  remedial measures exist in classical texts.
                </p>

                <p className="compat-paragraph">
                  Modern interpretation recognizes that same-Nadi couples may
                  share similar constitutional types and energy patterns, which
                  can be harmonious with proper understanding and lifestyle
                  adjustments.
                </p>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Bhakoot and Gana Considerations
                </h3>
                <p className="compat-paragraph">
                  Bhakoot evaluates Moon sign relationships, while Gana assesses
                  temperament compatibility (Deva, Manushya, Rakshasa). These
                  factors indicate natural harmony levels but don't preclude
                  successful relationships with conscious effort and mutual
                  understanding.
                </p>
              </div>
            </section>

            {/* Deeper Compatibility Analysis Section */}
            <section className="compat-section">
              <h2 className="compat-section-title">
                Deeper Compatibility Patterns
              </h2>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Emotional Patterns and Communication Styles
                </h3>
                <p className="compat-paragraph">
                  Beyond traditional metrics, examine how each person processes
                  emotions, expresses needs, and seeks comfort. Mercury's
                  placement reveals communication preferences, while the Moon
                  shows emotional security needs.
                </p>

                <div className="compat-callout compat-callout-harmony">
                  <div className="compat-callout-title">
                    Key Questions for Emotional Compatibility
                  </div>
                  <ul className="compat-list">
                    <li>How does each person handle stress and uncertainty?</li>
                    <li>
                      What makes each person feel truly heard and understood?
                    </li>
                    <li>How do you each express and receive love?</li>
                    <li>What are your natural rhythms and energy cycles?</li>
                  </ul>
                </div>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Conflict Styles and Resolution Patterns
                </h3>
                <p className="compat-paragraph">
                  Mars and Saturn placements indicate how each person approaches
                  conflict, sets boundaries, and works through disagreements.
                  Compatible conflict styles support relationship longevity.
                </p>

                <p className="compat-paragraph">
                  Some couples thrive with direct, immediate resolution (Fire
                  signs), while others need processing time and gentle approach
                  (Water signs). Neither style is superior; awareness prevents
                  misunderstanding.
                </p>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Intimacy and Expectation Patterns
                </h3>
                <p className="compat-paragraph">
                  Venus and Mars interactions reveal intimacy styles, while
                  Jupiter shows what each person considers sacred in
                  relationship. Misaligned expectations often create more
                  problems than fundamental incompatibility.
                </p>
              </div>
            </section>

            {/* Timing and Phases Section */}
            <section className="compat-section">
              <h2 className="compat-section-title">
                Timing, Phases, and Relationship Cycles
              </h2>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Relationship Dashas and Natural Cycles
                </h3>
                <p className="compat-paragraph">
                  Vedic astrology recognizes that relationships unfold through
                  natural phases. Venus and Jupiter dashas often bring
                  relationship opportunities, while Saturn dashas may test
                  commitment or require deeper work.
                </p>

                <p className="compat-paragraph">
                  Understanding these cycles helps couples navigate challenging
                  periods with patience rather than panic, recognizing temporary
                  phases versus fundamental incompatibility.
                </p>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Marriage Timing versus Relationship Readiness
                </h3>
                <p className="compat-paragraph">
                  Classical texts describe favorable periods for marriage based
                  on planetary transits. However, external timing should align
                  with internal readiness — emotional maturity, clear
                  intentions, and realistic expectations.
                </p>

                <div className="compat-quote">
                  "The stars may indicate favorable timing, but conscious
                  partnership requires ongoing choice, communication, and mutual
                  growth."
                </div>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Transits Affecting Relationship Dynamics
                </h3>
                <p className="compat-paragraph">
                  Major transits (particularly Saturn, Jupiter, and Rahu-Ketu)
                  can significantly impact relationship dynamics. Understanding
                  these influences helps couples prepare for and navigate
                  periods of change or challenge.
                </p>
              </div>
            </section>

            {/* Practical Interpretation Section */}
            <section className="compat-section">
              <h2 className="compat-section-title">
                Practical Interpretation Guidelines
              </h2>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  When Compatibility Is Sufficient
                </h3>
                <p className="compat-paragraph">
                  Astrological compatibility supports natural harmony but cannot
                  substitute for shared values, emotional maturity, and
                  commitment to growth. Moderate astrological compatibility with
                  strong communication often surpasses high compatibility with
                  poor relationship skills.
                </p>

                <ul className="compat-list compat-list-spaced">
                  <li>
                    <strong>Emotional Safety:</strong> Both partners feel heard,
                    valued, and emotionally secure
                  </li>
                  <li>
                    <strong>Shared Growth Direction:</strong> Similar life
                    priorities and willingness to evolve together
                  </li>
                  <li>
                    <strong>Constructive Conflict:</strong> Ability to work
                    through disagreements respectfully
                  </li>
                  <li>
                    <strong>Mutual Support:</strong> Each person's goals and
                    dreams are honored and supported
                  </li>
                </ul>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  When Differences Are Workable
                </h3>
                <p className="compat-paragraph">
                  Many astrological differences become strengths through
                  conscious awareness and appreciation. Complementary qualities
                  can create balance, provided both partners approach
                  differences with curiosity rather than judgment.
                </p>

                <div className="compat-callout compat-callout-harmony">
                  <div className="compat-callout-title">
                    Signs of Workable Differences
                  </div>
                  <ul className="compat-list">
                    <li>Differences complement rather than compete</li>
                    <li>Both partners show flexibility and adaptation</li>
                    <li>Natural timing and rhythms can be negotiated</li>
                    <li>
                      Core values and life direction align despite different
                      styles
                    </li>
                  </ul>
                </div>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  When Astrology Signals Caution
                </h3>
                <p className="compat-paragraph">
                  While astrology shouldn't dictate relationship decisions,
                  certain patterns suggest areas requiring extra awareness,
                  communication, or professional support.
                </p>

                <div className="compat-callout compat-callout-caution">
                  <div className="compat-callout-title">
                    Areas Requiring Attention
                  </div>
                  <ul className="compat-list">
                    <li>
                      Significantly different life rhythms and energy patterns
                    </li>
                    <li>
                      Conflicting approaches to security, family, or financial
                      goals
                    </li>
                    <li>
                      Communication styles that consistently create
                      misunderstanding
                    </li>
                    <li>
                      One partner's growth direction undermining the other's
                      wellbeing
                    </li>
                  </ul>
                </div>

                <p className="compat-paragraph">
                  Even challenging combinations can work with exceptional
                  commitment, professional guidance, and conscious communication
                  practices.
                </p>
              </div>
            </section>

            {/* Limitations and Ethics Section */}
            <section className="compat-section">
              <h2 className="compat-section-title">
                Limitations and Ethical Considerations
              </h2>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  What Compatibility Analysis Cannot Decide
                </h3>
                <p className="compat-paragraph">
                  Compatibility analysis provides insight into natural
                  tendencies and potential dynamics, but it cannot make
                  relationship decisions for you. Astrology reveals patterns;
                  humans choose how to work with those patterns.
                </p>

                <ul className="compat-list compat-list-spaced">
                  <li>
                    Astrology cannot determine if someone is "the one" for you
                  </li>
                  <li>
                    Charts don't predict relationship longevity or guarantee
                    happiness
                  </li>
                  <li>
                    Compatibility scores cannot override red flags or
                    fundamental value conflicts
                  </li>
                  <li>
                    Astrological timing cannot force readiness or emotional
                    maturity
                  </li>
                </ul>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Avoiding Fear, Pressure, and Dependency
                </h3>
                <p className="compat-paragraph">
                  Healthy use of compatibility analysis supports self-awareness
                  and conscious relationship building. Unhealthy use creates
                  anxiety, dependency on external validation, or pressure to
                  avoid certain relationships based purely on astrological
                  factors.
                </p>

                <div className="compat-quote">
                  "Use astrology as a map for understanding, not as a cage that
                  limits your heart's authentic choices."
                </div>
              </div>

              <div className="compat-subsection">
                <h3 className="compat-subsection-title">
                  Free Will, Growth, and Mutual Responsibility
                </h3>
                <p className="compat-paragraph">
                  Ultimately, successful relationships depend on conscious
                  choice, ongoing communication, and mutual commitment to
                  growth. Astrological compatibility can ease this journey but
                  cannot replace the fundamental work of partnership.
                </p>

                <p className="compat-paragraph">
                  Both partners bear responsibility for creating emotional
                  safety, expressing needs clearly, and supporting each other's
                  evolution. No astrological combination excuses harmful
                  behavior or eliminates the need for personal accountability.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="compat-section">
              <h2 className="compat-section-title">
                Compatibility Analysis FAQ
              </h2>

              <div className="compat-content-card">
                <div className="compat-card-header">
                  <span className="compat-card-icon">❓</span>
                  <h3 className="compat-card-title">Common Questions</h3>
                </div>
                <hr className="compat-divider" />
                <div className="compat-card-content">
                  <div className="compat-subsection">
                    <h4 className="compat-subsection-title">
                      Q: Is a low Guna Milan score always problematic?
                    </h4>
                    <p className="compat-paragraph">
                      A: Not necessarily. Low scores indicate areas requiring
                      more conscious effort and communication. Many successful
                      marriages have moderate scores (18-24) when couples
                      cultivate awareness and mutual support.
                    </p>
                  </div>

                  <div className="compat-subsection">
                    <h4 className="compat-subsection-title">
                      Q: Can Manglik Dosha be "cancelled"?
                    </h4>
                    <p className="compat-paragraph">
                      A: Classical texts describe numerous exceptions and
                      remedial measures. More importantly, understanding Mars
                      energy allows conscious expression through healthy
                      channels like physical activity, creative projects, or
                      leadership roles.
                    </p>
                  </div>

                  <div className="compat-subsection">
                    <h4 className="compat-subsection-title">
                      Q: What if we're compatible but families disapprove?
                    </h4>
                    <p className="compat-paragraph">
                      A: Family harmony matters, but authentic compatibility
                      ultimately rests between the two individuals. Consider
                      whether family concerns reflect genuine wisdom or cultural
                      prejudices that may soften over time.
                    </p>
                  </div>

                  <div className="compat-subsection">
                    <h4 className="compat-subsection-title">
                      Q: Can same-sex couples use Vedic compatibility analysis?
                    </h4>
                    <p className="compat-paragraph">
                      A: Absolutely. The principles of emotional, mental,
                      physical, and spiritual compatibility apply regardless of
                      gender. Focus on Moon signs, Venus-Mars dynamics, and
                      overall chart harmony.
                    </p>
                  </div>

                  <div className="compat-subsection">
                    <h4 className="compat-subsection-title">
                      Q: When should we seek professional relationship guidance?
                    </h4>
                    <p className="compat-paragraph">
                      A: Consider professional support when communication
                      consistently breaks down, when fundamental needs aren't
                      being met, or when you need help navigating major life
                      transitions or astrological challenges.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="compat-section-divider" />

            {/* Footer Disclaimer Section */}
            <footer className="compat-footer-section">
              <div className="compat-container">
                <p className="compat-footer-disclaimer">
                  <strong>Disclaimer:</strong> Compatibility analysis provides
                  insight into potential dynamics and patterns but cannot
                  predict relationship outcomes or make decisions for you. Use
                  this guidance as one tool among many in your relationship
                  journey, always prioritizing direct communication, mutual
                  respect, and personal responsibility.
                </p>
                <p className="compat-footer-guidance">
                  Remember: The most important compatibility lies in your shared
                  commitment to growth, understanding, and love.
                </p>
              </div>
            </footer>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
