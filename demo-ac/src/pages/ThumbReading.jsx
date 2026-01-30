import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/thumb-reading-tokens.css";
import "./ThumbReading.css";

export default function ThumbReading() {
  return (
    <>
      <Navbar />

      <div className="thumb-page">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="thumb-skip-link">
          Skip to main content
        </a>

        {/* Page Header */}
        <header className="thumb-header">
          <div className="thumb-container">
            <span className="thumb-header__overline">
              Hasta Samudrika — Angushtha Adhyayana
            </span>
            <h1 className="thumb-header__title">Thumb Reading</h1>
            <p className="thumb-header__subtitle">
              A classical discipline of self-observation through the thumb —
              understanding will, logic, and karmic tendencies as a path to
              awareness, not prediction.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="thumb-main" id="main-content">
          <div className="thumb-container">
            {/* ======================================
                SECTION 1: INTRODUCTION
            ====================================== */}
            <section
              className="thumb-section"
              aria-labelledby="section-introduction"
            >
              <header className="thumb-section__header">
                <span className="thumb-section__number">Part One</span>
                <h2 className="thumb-section__title" id="section-introduction">
                  What Is Thumb Reading
                </h2>
              </header>

              <div className="thumb-prose">
                <p className="thumb-section__intro">
                  Thumb reading is a classical limb of{" "}
                  <strong>Samudrika Shastra</strong>, studying the thumb's
                  shape, phalanges, mounts, nail, and dermatoglyphic patterns to
                  understand <strong>will (Ichchha Shakti)</strong>,{" "}
                  <strong>logic (Viveka)</strong>, and{" "}
                  <strong>karmic momentum</strong>.
                </p>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Purpose, Scope & Limitations
                  </h3>
                  <p>
                    The primary purpose of thumb reading is to offer a framework
                    for self-knowledge and pattern recognition. Through careful
                    observation, one may identify strengths, challenges, and
                    decision-making tendencies that influence how life unfolds.
                  </p>
                  <p>
                    However, this discipline has clear boundaries. It does not
                    predict fixed outcomes, guarantee specific events, or
                    replace the agency of conscious choice. The thumb reflects
                    tendencies — how those tendencies manifest depends entirely
                    on awareness and action.
                  </p>
                  <ul className="thumb-list thumb-list--styled">
                    <li>Offers self-knowledge and pattern recognition</li>
                    <li>
                      Indicates strengths, challenges, and decision styles
                    </li>
                    <li>Does not predict fixed outcomes</li>
                    <li>
                      Does not replace conscious choice and responsibility
                    </li>
                  </ul>
                </div>

                <div className="thumb-callout thumb-callout--ethical">
                  <p className="thumb-callout__title">Ethical Foundation</p>
                  <p className="thumb-callout__content">
                    Karmic indicators in the thumb reflect accumulated
                    tendencies, not punishments or rewards. Remedies aim at
                    alignment and clarity — they are tools for awareness, not
                    transactions to escape consequences or purchase outcomes.
                  </p>
                </div>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Karma as Impression, Not Punishment
                  </h3>
                  <p>
                    A common misunderstanding frames karmic indicators as
                    sentences to be served or debts to be paid. This view is
                    both inaccurate and counterproductive. What appears in the
                    thumb is a map of accumulated tendencies — the momentum of
                    habits, inclinations, and past patterns of choice.
                  </p>
                  <p>
                    Remedies, when appropriate, help refine this momentum. They
                    do not erase or override karma but support working with it
                    more skillfully. The goal is alignment, not appeasement.
                  </p>
                </div>
              </div>
            </section>

            <hr className="thumb-divider--decorative" />

            {/* ======================================
                SECTION 2: CORE PRINCIPLES
            ====================================== */}
            <section
              className="thumb-section"
              aria-labelledby="section-principles"
            >
              <header className="thumb-section__header">
                <span className="thumb-section__number">Part Two</span>
                <h2 className="thumb-section__title" id="section-principles">
                  Core Principles
                </h2>
              </header>

              <div className="thumb-prose">
                <p className="thumb-section__intro">
                  Understanding the philosophical foundations of thumb reading
                  is essential before engaging with observation or remedies.
                  These principles shape how findings should be interpreted and
                  what realistic expectations to hold.
                </p>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Will, Intellect & Action
                  </h3>
                  <p>
                    The thumb is traditionally understood as representing the
                    balance between will and reason — the two forces that guide
                    effective action in the world.
                  </p>
                  <ul className="thumb-list thumb-list--styled">
                    <li>
                      <strong>Upper phalanx:</strong> Will and aspiration — the
                      drive to act, create, and manifest intention
                    </li>
                    <li>
                      <strong>Lower phalanx:</strong> Reasoning and execution —
                      the capacity to plan, evaluate, and implement
                    </li>
                  </ul>
                  <p>
                    Balance between these two determines how effectively
                    intention translates into result. Excess will without logic
                    leads to impulsive action; excess logic without will leads
                    to paralysis by analysis.
                  </p>
                </div>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Free Will Within Karmic Context
                  </h3>
                  <p>
                    Thumb reading recognizes choice within structure. While
                    certain tendencies may be strong, they are not fixed. Habits
                    can be refined through awareness. Patterns can be shifted
                    through sustained, intentional effort.
                  </p>
                  <p>
                    Think of karmic tendencies as wind direction — you cannot
                    stop the wind, but you can adjust your sails. The thumb
                    shows the prevailing currents; how you navigate them remains
                    your responsibility.
                  </p>
                </div>

                <div className="thumb-quote">
                  <p className="thumb-quote__text">
                    "The wise understand that while we cannot control all
                    circumstances, we can always choose our response to them."
                  </p>
                  <p className="thumb-quote__attribution">
                    — Traditional Vedic Teaching
                  </p>
                </div>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Insight vs Remedy vs Acceptance
                  </h3>
                  <p>
                    Not every observation requires a remedy. The appropriate
                    response depends on the nature of the pattern and the
                    individual's circumstances.
                  </p>
                  <ul className="thumb-list thumb-list--styled">
                    <li>
                      <strong>Insight:</strong> Understand the pattern — what
                      tendency is present, how it manifests, what triggers it
                    </li>
                    <li>
                      <strong>Remedy:</strong> Support balance where strain
                      appears — targeted practices to address specific
                      imbalances
                    </li>
                    <li>
                      <strong>Acceptance:</strong> Recognize what must be worked
                      with patiently — some patterns require time and
                      persistence rather than intervention
                    </li>
                  </ul>
                </div>

                <div className="thumb-callout thumb-callout--note">
                  <p className="thumb-callout__title">Important Note</p>
                  <p className="thumb-callout__content">
                    A skilled practitioner discerns when insight alone is
                    sufficient, when remedy is appropriate, and when acceptance
                    is the wiser path. These three approaches complement each
                    other — they are not mutually exclusive.
                  </p>
                </div>
              </div>
            </section>

            <hr className="thumb-divider--decorative" />

            {/* ======================================
                SECTION 3: WHAT IS OBSERVED
            ====================================== */}
            <section
              className="thumb-section"
              aria-labelledby="section-observation"
            >
              <header className="thumb-section__header">
                <span className="thumb-section__number">Part Three</span>
                <h2 className="thumb-section__title" id="section-observation">
                  What Is Observed in Thumb Reading
                </h2>
              </header>

              <div className="thumb-prose">
                <p className="thumb-section__intro">
                  Thumb reading involves careful observation of multiple
                  physical characteristics. Each element contributes to a
                  holistic understanding — no single feature should be
                  interpreted in isolation.
                </p>

                <div className="thumb-indicator-grid">
                  <article className="thumb-indicator-card">
                    <h3 className="thumb-indicator-card__title">
                      Structural Indicators
                    </h3>
                    <p className="thumb-indicator-card__description">
                      Thumb length relative to the hand, flexibility and
                      resistance, set and angle from the palm, and proportions
                      between phalanges. These indicate the foundation of will
                      and reasoning capacity.
                    </p>
                  </article>

                  <article className="thumb-indicator-card">
                    <h3 className="thumb-indicator-card__title">
                      Dermatoglyphics & Lines
                    </h3>
                    <p className="thumb-indicator-card__description">
                      Whorls, loops, and arches on the thumb pad; fine lines and
                      creases indicating stress patterns or flow. These reflect
                      inherited tendencies and acquired experiences.
                    </p>
                  </article>

                  <article className="thumb-indicator-card">
                    <h3 className="thumb-indicator-card__title">
                      Nail & Texture
                    </h3>
                    <p className="thumb-indicator-card__description">
                      Nail shape, color, ridges, and overall condition; skin
                      texture and firmness of the thumb. These may indicate
                      constitutional factors and current states.
                    </p>
                  </article>

                  <article className="thumb-indicator-card">
                    <h3 className="thumb-indicator-card__title">
                      Mount of Venus
                    </h3>
                    <p className="thumb-indicator-card__description">
                      The fleshy area at the base of the thumb, traditionally
                      associated with vitality, passion, and life force.
                      Development and texture offer additional context.
                    </p>
                  </article>
                </div>

                <div className="thumb-callout thumb-callout--insight">
                  <p className="thumb-callout__title">Observation Principle</p>
                  <p className="thumb-callout__content">
                    Observation is descriptive, not evaluative. A practitioner
                    notes what is present without attaching moral judgment.
                    Features are neither "good" nor "bad" — they simply indicate
                    tendencies that can be worked with consciously.
                  </p>
                </div>
              </div>
            </section>

            <hr className="thumb-divider--decorative" />

            {/* ======================================
                SECTION 4: INTERPRETIVE FRAMEWORK
            ====================================== */}
            <section
              className="thumb-section"
              aria-labelledby="section-interpretation"
            >
              <header className="thumb-section__header">
                <span className="thumb-section__number">Part Four</span>
                <h2
                  className="thumb-section__title"
                  id="section-interpretation"
                >
                  Interpretive Framework
                </h2>
              </header>

              <div className="thumb-prose">
                <p className="thumb-section__intro">
                  Interpretation transforms observation into understanding. This
                  process requires careful attention to context, correlation,
                  and the avoidance of reductive labeling.
                </p>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Tendencies, Not Labels
                  </h3>
                  <p>
                    Interpretations describe behavioral leanings — decisiveness,
                    adaptability, persistence, caution — never moral judgments.
                    A tendency toward caution is not weakness; a tendency toward
                    boldness is not recklessness. Context determines how any
                    tendency serves or challenges the individual.
                  </p>
                  <p>
                    The goal of interpretation is understanding, not
                    categorization. People are not their tendencies — they are
                    beings with the capacity to work consciously with whatever
                    patterns they carry.
                  </p>
                </div>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Correlation With Other Disciplines
                  </h3>
                  <p>
                    Thumb reading may be contextually correlated with other
                    observational and predictive disciplines — astrology,
                    numerology, face reading — to build a more comprehensive
                    picture. However, thumb reading also stands independently as
                    an observational science.
                  </p>
                  <p>
                    Correlation can enrich understanding but should not create
                    dependency. A skilled practitioner knows when additional
                    perspectives help and when they complicate unnecessarily.
                  </p>
                </div>

                <div className="thumb-quote">
                  <p className="thumb-quote__text">
                    "The map is not the territory. What we observe points toward
                    reality but does not capture it completely. Interpretation
                    should always remain humble."
                  </p>
                  <p className="thumb-quote__attribution">
                    — Principle of Samudrika Shastra
                  </p>
                </div>
              </div>
            </section>

            <hr className="thumb-divider--decorative" />

            {/* ======================================
                SECTION 5: TYPES OF REMEDIES
            ====================================== */}
            <section
              className="thumb-section"
              aria-labelledby="section-remedies"
            >
              <header className="thumb-section__header">
                <span className="thumb-section__number">Part Five</span>
                <h2 className="thumb-section__title" id="section-remedies">
                  Types of Supportive Remedies
                </h2>
              </header>

              <div className="thumb-prose">
                <p className="thumb-section__intro">
                  When remedies are appropriate, they serve as supportive
                  disciplines — tools for alignment rather than guarantees of
                  outcome. The following categories represent traditional
                  approaches adapted for contemporary practice.
                </p>

                <div className="thumb-remedy-grid">
                  <article className="thumb-remedy-card">
                    <span className="thumb-remedy-card__icon">🕉️</span>
                    <h3 className="thumb-remedy-card__title">
                      Mantra-Based Alignment
                    </h3>
                    <p className="thumb-remedy-card__description">
                      Selected for mental steadiness and clarity, not wish
                      fulfillment. Mantras work through focused consciousness
                      and consistent practice.
                    </p>
                  </article>

                  <article className="thumb-remedy-card">
                    <span className="thumb-remedy-card__icon">🌿</span>
                    <h3 className="thumb-remedy-card__title">
                      Behavioral & Lifestyle
                    </h3>
                    <p className="thumb-remedy-card__description">
                      Habit formation, decision pacing, and reflective pauses.
                      Practical adjustments that support the balance of will and
                      reason.
                    </p>
                  </article>

                  <article className="thumb-remedy-card">
                    <span className="thumb-remedy-card__icon">🙏</span>
                    <h3 className="thumb-remedy-card__title">
                      Seva, Dana & Ethical Action
                    </h3>
                    <p className="thumb-remedy-card__description">
                      Conscious giving aligned with personal capacity. Service
                      and generosity as practices of alignment, not
                      transactions.
                    </p>
                  </article>

                  <article className="thumb-remedy-card">
                    <span className="thumb-remedy-card__icon">☸</span>
                    <h3 className="thumb-remedy-card__title">
                      Rituals & Observances
                    </h3>
                    <p className="thumb-remedy-card__description">
                      Simple, time-bound, meaning-driven practices. Optional and
                      personal — never imposed or commercialized.
                    </p>
                  </article>
                </div>

                <div className="thumb-callout thumb-callout--ethical">
                  <p className="thumb-callout__title">Commercial Boundaries</p>
                  <p className="thumb-callout__content">
                    No commercial pressure should accompany remedy suggestions.
                    Gemstones are optional and non-promissory — they may support
                    but never guarantee. Any claim of guaranteed outcomes
                    through purchase is unethical and should be avoided.
                  </p>
                </div>
              </div>
            </section>

            <hr className="thumb-divider--decorative" />

            {/* ======================================
                SECTION 6: APPLICATION FRAMEWORK
            ====================================== */}
            <section
              className="thumb-section"
              aria-labelledby="section-application"
            >
              <header className="thumb-section__header">
                <span className="thumb-section__number">Part Six</span>
                <h2 className="thumb-section__title" id="section-application">
                  Application Framework
                </h2>
              </header>

              <div className="thumb-prose">
                <p className="thumb-section__intro">
                  Understanding when and how to apply insights from thumb
                  reading determines whether the practice serves growth or
                  creates dependency.
                </p>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    When Remedies Are Suggested
                  </h3>
                  <p>
                    Remedies may be appropriate when specific patterns of
                    difficulty persist despite effort:
                  </p>
                  <ul className="thumb-list thumb-list--styled">
                    <li>
                      Repeated decision conflicts where intention and outcome
                      consistently diverge
                    </li>
                    <li>
                      Chronic inconsistency between what one intends and what
                      one actually does
                    </li>
                    <li>
                      Persistent patterns of self-sabotage that resist ordinary
                      correction
                    </li>
                  </ul>
                  <p>
                    Remedies are not prescribed for every minor concern.
                    Sometimes awareness alone is sufficient; sometimes practical
                    action in the material world is more appropriate than
                    spiritual practice.
                  </p>
                </div>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Temporary vs Long-Term Practices
                  </h3>
                  <p>The duration of a remedy depends on its purpose:</p>
                  <ul className="thumb-list thumb-list--styled">
                    <li>
                      <strong>Temporary practices:</strong> Stabilizing measures
                      during phases of acute stress or transition. Time-limited,
                      specific to the challenge at hand.
                    </li>
                    <li>
                      <strong>Long-term practices:</strong> Cultivating
                      sustainable balance of will and reason. Integrated into
                      daily life as ongoing disciplines.
                    </li>
                  </ul>
                </div>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Integration With Daily Life
                  </h3>
                  <p>
                    Remedies should fit life, not dominate it. An effective
                    practice is one that can be sustained without disrupting
                    responsibilities, relationships, or wellbeing. If a remedy
                    creates more stress than it alleviates, it is not the right
                    remedy — or not the right time.
                  </p>
                </div>

                <div className="thumb-callout thumb-callout--note">
                  <p className="thumb-callout__title">Practical Wisdom</p>
                  <p className="thumb-callout__content">
                    The best remedy is often the simplest one — consistent,
                    sustainable, and aligned with your actual capacity.
                    Elaborate practices rarely succeed if they cannot be
                    maintained.
                  </p>
                </div>
              </div>
            </section>

            <hr className="thumb-divider--decorative" />

            {/* ======================================
                SECTION 7: DISCIPLINE & PRACTICE
            ====================================== */}
            <section
              className="thumb-section"
              aria-labelledby="section-discipline"
            >
              <header className="thumb-section__header">
                <span className="thumb-section__number">Part Seven</span>
                <h2 className="thumb-section__title" id="section-discipline">
                  Discipline & Practice
                </h2>
              </header>

              <div className="thumb-prose">
                <p className="thumb-section__intro">
                  Effective engagement with thumb reading — whether for
                  self-study or guided practice — requires patience,
                  consistency, and realistic expectations.
                </p>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Consistency Over Intensity
                  </h3>
                  <p>
                    Small, regular practices outperform dramatic efforts. A
                    modest daily commitment sustained over months yields more
                    than intense bursts followed by abandonment. This applies to
                    any remedy — mantra, behavioral adjustment, or observance.
                  </p>
                  <p>
                    The goal is gradual refinement, not sudden transformation.
                    Patterns that developed over years do not dissolve in days.
                  </p>
                </div>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Realistic Timeframes
                  </h3>
                  <p>
                    Behavioral alignment unfolds over weeks and months, not
                    days. Initial effects may be subtle — a slight shift in
                    perspective, a moment of pause before habitual reaction.
                    Over time, these subtle shifts compound.
                  </p>
                  <p>
                    Expect the process to be gradual. Impatience often leads to
                    abandoning practices prematurely or seeking more extreme
                    interventions unnecessarily.
                  </p>
                </div>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">Common Mistakes</h3>
                  <ul className="thumb-list thumb-list--styled">
                    <li>
                      <strong>Over-interpreting minor features:</strong> Small
                      variations are normal. Not every line or marking carries
                      profound significance.
                    </li>
                    <li>
                      <strong>Seeking certainty instead of guidance:</strong>{" "}
                      The thumb offers tendencies, not guarantees. Demanding
                      certainty misunderstands the nature of the practice.
                    </li>
                    <li>
                      <strong>Neglecting context:</strong> A single feature
                      means little without considering the whole hand, the
                      person's circumstances, and their capacity for change.
                    </li>
                    <li>
                      <strong>Remedy shopping:</strong> Moving from remedy to
                      remedy without giving any sufficient time to work.
                      Patience is essential.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="thumb-divider--decorative" />

            {/* ======================================
                SECTION 8: RISKS & MISUSE
            ====================================== */}
            <section className="thumb-section" aria-labelledby="section-risks">
              <header className="thumb-section__header">
                <span className="thumb-section__number">Part Eight</span>
                <h2 className="thumb-section__title" id="section-risks">
                  Risks & Misuse
                </h2>
              </header>

              <div className="thumb-prose">
                <p className="thumb-section__intro">
                  Like any tool, thumb reading can be misused. Understanding
                  these risks helps maintain a healthy relationship with the
                  practice.
                </p>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Overdependence on Readings
                  </h3>
                  <p>
                    Thumb reading is a mirror, not a crutch. It offers
                    reflection for self-understanding, not a substitute for
                    thinking, deciding, or acting. If you find yourself unable
                    to make decisions without consulting your thumb (or a
                    practitioner), the practice has become unhealthy.
                  </p>
                </div>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Excessive or Conflicting Remedies
                  </h3>
                  <p>
                    More is not better. Multiple remedies from different sources
                    often conflict or overwhelm. Coherence matters more than
                    quantity. A single well-chosen practice, consistently
                    applied, serves better than a collection of disconnected
                    interventions.
                  </p>
                </div>

                <div className="thumb-callout thumb-callout--caution">
                  <p className="thumb-callout__title">Warning Signs</p>
                  <p className="thumb-callout__content">
                    Any promise of guaranteed outcomes is unethical. Any
                    pressure to purchase expensive remedies, gemstones, or
                    services as the "only solution" should be met with
                    skepticism. Fear-based guidance that creates anxiety rather
                    than clarity serves the practitioner's interests, not yours.
                  </p>
                </div>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Fear-Based or Commercial Misuse
                  </h3>
                  <p>
                    Ethical practice never exploits fear. If a reading leaves
                    you anxious, desperate, or pressured to spend money, the
                    practice has been corrupted. Legitimate guidance aims for
                    empowerment and clarity, not dependency and fear.
                  </p>
                </div>
              </div>
            </section>

            <hr className="thumb-divider--decorative" />

            {/* ======================================
                SECTION 9: MODERN CONTEXT & ETHICS
            ====================================== */}
            <section className="thumb-section" aria-labelledby="section-modern">
              <header className="thumb-section__header">
                <span className="thumb-section__number">Part Nine</span>
                <h2 className="thumb-section__title" id="section-modern">
                  Modern Context & Ethics
                </h2>
              </header>

              <div className="thumb-prose">
                <p className="thumb-section__intro">
                  Traditional practices require thoughtful adaptation for
                  contemporary life. Ethical boundaries must be clear and
                  respected.
                </p>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Contemporary Life Application
                  </h3>
                  <p>
                    In modern contexts, thumb reading can support
                    self-management, leadership clarity, and mindful
                    decision-making. It offers a framework for understanding how
                    one typically approaches challenges — useful self-knowledge
                    for personal and professional life.
                  </p>
                  <p>
                    This does not mean treating ancient texts as literal
                    prescriptions. Thoughtful practitioners adapt principles to
                    current circumstances while honoring the spirit of the
                    tradition.
                  </p>
                </div>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    Mental Health Boundaries
                  </h3>
                  <p>
                    Thumb reading is not a diagnostic or therapeutic substitute.
                    It cannot identify mental health conditions, replace
                    professional therapy, or substitute for medical advice.
                  </p>
                  <ul className="thumb-list thumb-list--styled">
                    <li>
                      Always refer to qualified professionals for mental health
                      concerns
                    </li>
                    <li>
                      Do not use readings to diagnose, treat, or advise on
                      medical matters
                    </li>
                    <li>
                      Recognize the limits of what observation can and cannot
                      reveal
                    </li>
                  </ul>
                </div>

                <div className="thumb-subsection">
                  <h3 className="thumb-subsection__title">
                    When Thumb Reading Should NOT Be Used
                  </h3>
                  <p>
                    There are contexts where thumb reading is inappropriate:
                  </p>
                  <ul className="thumb-list thumb-list--styled">
                    <li>
                      <strong>Acute mental distress:</strong> When someone is in
                      crisis, they need professional support, not readings
                    </li>
                    <li>
                      <strong>Medical decision-making:</strong> Health decisions
                      belong to qualified medical professionals
                    </li>
                    <li>
                      <strong>Financial or legal decisions:</strong> These
                      require appropriate professional advisors, not
                      observational practices
                    </li>
                  </ul>
                </div>

                <div className="thumb-callout thumb-callout--ethical">
                  <p className="thumb-callout__title">Ethical Commitment</p>
                  <p className="thumb-callout__content">
                    Responsible practice means knowing what lies outside one's
                    competence. A thumb reading practitioner is not a therapist,
                    doctor, lawyer, or financial advisor — and should never
                    pretend otherwise.
                  </p>
                </div>
              </div>
            </section>

            <hr className="thumb-divider--decorative" />

            {/* ======================================
                SECTION 10: REFERENCE & FAQs
            ====================================== */}
            <section className="thumb-section" aria-labelledby="section-faq">
              <header className="thumb-section__header">
                <span className="thumb-section__number">Part Ten</span>
                <h2 className="thumb-section__title" id="section-faq">
                  Reference & FAQs
                </h2>
              </header>

              <div className="thumb-prose">
                <p className="thumb-section__intro">
                  Common questions about thumb reading, answered with clarity
                  and honesty.
                </p>

                <div className="thumb-faq-list">
                  <div className="thumb-faq-item">
                    <h3 className="thumb-faq-item__question">
                      Is Thumb Reading Predictive?
                    </h3>
                    <p className="thumb-faq-item__answer">
                      No. Thumb reading indicates tendencies and patterns — how
                      someone typically approaches decisions, what strengths and
                      challenges they carry. It does not predict specific events
                      or guarantee particular outcomes. The future remains
                      shaped by choice and circumstance, not fixed by features
                      of the hand.
                    </p>
                  </div>

                  <div className="thumb-faq-item">
                    <h3 className="thumb-faq-item__question">
                      Can Thumb Features Change Over Time?
                    </h3>
                    <p className="thumb-faq-item__answer">
                      Yes. While bone structure remains largely fixed, lines,
                      texture, and other features can change. More importantly,
                      how tendencies manifest can shift significantly through
                      awareness and practice. The physical features are less
                      important than the patterns they reflect — and patterns
                      can be refined.
                    </p>
                  </div>

                  <div className="thumb-faq-item">
                    <h3 className="thumb-faq-item__question">
                      Is a Remedy Mandatory?
                    </h3>
                    <p className="thumb-faq-item__answer">
                      No. Awareness itself is often sufficient. Many patterns
                      shift simply through recognition and conscious attention.
                      Remedies are tools for specific situations — not
                      requirements for everyone who receives a reading. A
                      practitioner who suggests remedies for every concern may
                      be prioritizing commerce over genuine guidance.
                    </p>
                  </div>

                  <div className="thumb-faq-item">
                    <h3 className="thumb-faq-item__question">
                      Should I Read My Own Thumb?
                    </h3>
                    <p className="thumb-faq-item__answer">
                      Self-observation can be valuable for ongoing
                      self-awareness, but initial interpretation benefits from
                      experienced guidance. It's easy to misread one's own
                      features through bias or wishful thinking. A qualified
                      practitioner provides perspective that self-study cannot
                      easily achieve.
                    </p>
                  </div>

                  <div className="thumb-faq-item">
                    <h3 className="thumb-faq-item__question">
                      How Often Should I Get a Reading?
                    </h3>
                    <p className="thumb-faq-item__answer">
                      Rarely. Thumb reading is not meant for frequent
                      consultation. Once fundamental patterns are understood,
                      the work is integration and practice — not repeated
                      readings. Seeking readings too often may indicate
                      developing dependency rather than genuine need.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer Section with Disclaimer */}
        <section className="thumb-footer-section">
          <div className="thumb-container">
            <div className="thumb-footer-section__content">
              <h2 className="thumb-footer-section__title">
                Personal Agency & Responsibility
              </h2>
              <p className="thumb-footer-section__text">
                Thumb reading offers one perspective among many. It is not a
                replacement for personal judgment, professional advice, or the
                ongoing work of conscious living. Your path remains yours to
                walk.
              </p>
              <p className="thumb-disclaimer">
                The information on this page is educational and reflective in
                nature. It does not constitute medical, psychological, legal, or
                financial advice. Consult qualified professionals for matters
                requiring professional expertise. Astro Chitra presents this
                content as a resource for self-understanding, not as
                authoritative guidance for life decisions.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
