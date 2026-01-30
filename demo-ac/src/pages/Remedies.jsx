import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/remedies-tokens.css";
import "./Remedies.css";

export default function Remedies() {
  return (
    <>
      <Navbar />

      <div className="remedy-page">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="remedy-skip-link">
          Skip to main content
        </a>

        {/* Page Header */}
        <header className="remedy-header">
          <div className="remedy-container">
            <span className="remedy-header__overline">Upaya Shastra</span>
            <h1 className="remedy-header__title">Vedic Remedies</h1>
            <p className="remedy-header__subtitle">
              Understanding the ancient science of remedial measures — their
              purpose, principles, and ethical application in alignment with
              karma and conscious living.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="remedy-main" id="main-content">
          <div className="remedy-container">
            {/* ======================================
                SECTION 1: INTRODUCTION
            ====================================== */}
            <section
              className="remedy-section"
              aria-labelledby="section-introduction"
            >
              <header className="remedy-section__header">
                <span className="remedy-section__number">Part One</span>
                <h2 className="remedy-section__title" id="section-introduction">
                  What Are Vedic Remedies
                </h2>
              </header>

              <div className="remedy-prose">
                <p className="remedy-section__intro">
                  Vedic remedies, known as <strong>Upaya Shastra</strong>, form
                  a branch of Jyotish (Vedic Astrology) concerned with
                  mitigating planetary afflictions and harmonizing one's
                  relationship with cosmic energies. They are not magical
                  solutions but disciplined practices rooted in awareness,
                  intention, and ethical conduct.
                </p>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Purpose and Scope
                  </h3>
                  <p>
                    The primary purpose of remedies is to create alignment —
                    between the individual and the cosmic forces that influence
                    their life circumstances. This alignment is achieved through
                    specific practices, rituals, and behavioral modifications
                    prescribed based on one's natal chart.
                  </p>
                  <p>
                    Remedies address planetary weaknesses, doshas (afflictions),
                    and challenging transits. However, their scope is limited to
                    supportive measures. They cannot override karma, eliminate
                    consequences of actions, or replace personal responsibility
                    and effort.
                  </p>
                </div>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    What Remedies Cannot Do
                  </h3>
                  <ul className="remedy-list remedy-list--styled">
                    <li>Guarantee specific outcomes or remove all obstacles</li>
                    <li>
                      Replace medical treatment, therapy, or professional advice
                    </li>
                    <li>
                      Eliminate the consequences of past or present actions
                    </li>
                    <li>
                      Work without sincere intention and consistent practice
                    </li>
                    <li>Supersede free will and conscious decision-making</li>
                  </ul>
                </div>

                <div className="remedy-callout remedy-callout--ethical">
                  <p className="remedy-callout__title">Ethical Foundation</p>
                  <p className="remedy-callout__content">
                    Remedies are meant to support your journey, not to create
                    dependency or bypass responsibility. They work in
                    conjunction with your efforts, not as replacements for them.
                    A remedy performed without understanding or sincerity holds
                    little value.
                  </p>
                </div>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Remedies as Alignment, Not Punishment
                  </h3>
                  <p>
                    A common misconception frames remedies as ways to "appease
                    angry planets" or escape karmic punishment. This view is
                    both inaccurate and counterproductive. Planets do not punish
                    — they reflect. What appears in your chart is a map of
                    tendencies and circumstances, not a sentence.
                  </p>
                  <p>
                    Remedies help you work with these energies more skillfully.
                    They are tools for self-awareness and spiritual growth, not
                    transactions to purchase favorable outcomes.
                  </p>
                </div>
              </div>
            </section>

            <hr className="remedy-divider--decorative" />

            {/* ======================================
                SECTION 2: CORE PRINCIPLES
            ====================================== */}
            <section
              className="remedy-section"
              aria-labelledby="section-principles"
            >
              <header className="remedy-section__header">
                <span className="remedy-section__number">Part Two</span>
                <h2 className="remedy-section__title" id="section-principles">
                  Core Principles
                </h2>
              </header>

              <div className="remedy-prose">
                <p className="remedy-section__intro">
                  Before engaging with any remedy system, understanding the
                  philosophical foundations is essential. These principles
                  determine how remedies should be approached and what realistic
                  expectations to hold.
                </p>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Karma, Free Will, and Remedies
                  </h3>
                  <p>
                    Karma is often misunderstood as fate — a fixed, unchangeable
                    destiny. In Vedic philosophy, karma is better understood as
                    accumulated tendencies and the momentum of past actions.
                    While certain karmic patterns are strong and difficult to
                    change, free will always operates within this framework.
                  </p>
                  <p>
                    Remedies occupy the space between karma and free will. They
                    cannot erase karma but can modify how it manifests and how
                    we experience it. Think of karma as the weather — you cannot
                    stop the rain, but you can carry an umbrella.
                  </p>

                  <div className="remedy-quote">
                    <p className="remedy-quote__text">
                      "The wise understand that while we cannot control all
                      circumstances, we can always choose our response to them."
                    </p>
                    <p className="remedy-quote__attribution">
                      — Traditional Vedic Teaching
                    </p>
                  </div>
                </div>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Why Remedies Are Prescribed
                  </h3>
                  <p>
                    Remedies are prescribed based on careful analysis of the
                    birth chart, current planetary transits, and the specific
                    challenges a person faces. They are never one-size-fits-all
                    solutions. A remedy suitable for one person may be entirely
                    inappropriate for another, even with similar chart
                    placements.
                  </p>
                  <ul className="remedy-list remedy-list--styled">
                    <li>To strengthen weak but beneficial planets</li>
                    <li>To reduce the intensity of malefic influences</li>
                    <li>To balance conflicting planetary energies</li>
                    <li>To support during challenging transit periods</li>
                    <li>To cultivate specific positive qualities</li>
                  </ul>
                </div>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Remedy vs Acceptance vs Conscious Action
                  </h3>
                  <p>
                    Not every challenge requires a remedy. Sometimes the wisest
                    approach is acceptance — allowing a difficult period to
                    teach its lessons. Other times, practical action in the
                    material world is more appropriate than any spiritual
                    practice.
                  </p>
                  <p>
                    The skilled astrologer discerns when to recommend remedies,
                    when to counsel patience and acceptance, and when to
                    encourage direct worldly action. These three approaches are
                    complementary, not mutually exclusive.
                  </p>
                </div>

                <div className="remedy-callout remedy-callout--note">
                  <p className="remedy-callout__title">Important Note</p>
                  <p className="remedy-callout__content">
                    If an astrologer prescribes remedies for every minor concern
                    without considering acceptance or practical solutions, this
                    may indicate a commercial rather than ethical approach.
                    Genuine guidance considers the full picture.
                  </p>
                </div>
              </div>
            </section>

            <hr className="remedy-divider--decorative" />

            {/* ======================================
                SECTION 3: TYPES OF REMEDIES
            ====================================== */}
            <section className="remedy-section" aria-labelledby="section-types">
              <header className="remedy-section__header">
                <span className="remedy-section__number">Part Three</span>
                <h2 className="remedy-section__title" id="section-types">
                  Types of Remedies
                </h2>
              </header>

              <div className="remedy-prose">
                <p className="remedy-section__intro">
                  Vedic tradition offers multiple categories of remedies, each
                  working through different mechanisms. Understanding these
                  categories helps in selecting appropriate practices and
                  maintaining realistic expectations.
                </p>

                <div className="remedy-types-grid">
                  <article className="remedy-type-card">
                    <span className="remedy-type-card__icon">🕉️</span>
                    <h3 className="remedy-type-card__title">
                      Mantra-Based Remedies
                    </h3>
                    <p className="remedy-type-card__description">
                      Sacred sounds and verses recited with specific intention,
                      rhythm, and count. Mantras work through sound vibration
                      and focused consciousness, requiring proper initiation and
                      consistent practice.
                    </p>
                  </article>

                  <article className="remedy-type-card">
                    <span className="remedy-type-card__icon">◇</span>
                    <h3 className="remedy-type-card__title">
                      Yantra-Based Remedies
                    </h3>
                    <p className="remedy-type-card__description">
                      Geometric diagrams representing planetary and divine
                      energies. Yantras serve as focal points for meditation and
                      are traditionally consecrated through specific rituals
                      before use.
                    </p>
                  </article>

                  <article className="remedy-type-card">
                    <span className="remedy-type-card__icon">◈</span>
                    <h3 className="remedy-type-card__title">
                      Gemstone Remedies
                    </h3>
                    <p className="remedy-type-card__description">
                      Specific gemstones worn to strengthen planetary energies.
                      This is a nuanced area requiring careful analysis —
                      wearing the wrong gem can amplify problems rather than
                      resolve them.
                    </p>
                  </article>

                  <article className="remedy-type-card">
                    <span className="remedy-type-card__icon">☸</span>
                    <h3 className="remedy-type-card__title">
                      Rituals & Observances
                    </h3>
                    <p className="remedy-type-card__description">
                      Pujas, havans, fasts, and observances connected to
                      specific planetary energies. These practices create rhythm
                      and intentionality in one's spiritual life.
                    </p>
                  </article>

                  <article className="remedy-type-card">
                    <span className="remedy-type-card__icon">🙏</span>
                    <h3 className="remedy-type-card__title">
                      Charity, Seva & Dana
                    </h3>
                    <p className="remedy-type-card__description">
                      Acts of giving and service that redirect planetary
                      energies outward. Different forms of charity correspond to
                      different planets and types of karmic patterns.
                    </p>
                  </article>

                  <article className="remedy-type-card">
                    <span className="remedy-type-card__icon">⚖️</span>
                    <h3 className="remedy-type-card__title">
                      Behavioral & Lifestyle Remedies
                    </h3>
                    <p className="remedy-type-card__description">
                      Changes in daily habits, relationships, career choices,
                      and lifestyle patterns. Often the most practical and
                      sustainable remedies involve adjusting how we live.
                    </p>
                  </article>
                </div>

                <div className="remedy-subsection">
                  <h4 className="remedy-subsection__subtitle">
                    A Note on Gemstone Remedies
                  </h4>
                  <p>
                    Gemstone recommendations require particular caution. The
                    commercial gemstone industry has created significant
                    misinformation around this practice. Not everyone needs
                    gemstones, and wearing gems for malefic planets can be
                    counterproductive.
                  </p>
                  <p>
                    If considering gemstone remedies, ensure the recommendation
                    comes from a qualified astrologer analyzing your complete
                    chart, not from a gem seller with commercial interests.
                  </p>
                </div>
              </div>
            </section>

            <hr className="remedy-divider--decorative" />

            {/* ======================================
                SECTION 4: APPLICATION FRAMEWORK
            ====================================== */}
            <section
              className="remedy-section"
              aria-labelledby="section-application"
            >
              <header className="remedy-section__header">
                <span className="remedy-section__number">Part Four</span>
                <h2 className="remedy-section__title" id="section-application">
                  Application Framework
                </h2>
              </header>

              <div className="remedy-prose">
                <p className="remedy-section__intro">
                  Understanding how remedies are determined and applied ensures
                  they are used appropriately and effectively. This framework
                  guides both practitioners and those seeking remedial guidance.
                </p>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Horoscope-Based Remedy Logic
                  </h3>
                  <p>
                    Remedies are derived from careful analysis of the birth
                    chart, considering multiple factors simultaneously:
                  </p>
                  <ul className="remedy-list remedy-list--styled">
                    <li>
                      The functional nature of planets for the specific
                      ascendant
                    </li>
                    <li>Planetary strength, dignity, and house placement</li>
                    <li>
                      Afflictions from malefic planets and challenging aspects
                    </li>
                    <li>Current dashas (planetary periods) and transits</li>
                    <li>The specific area of life experiencing difficulty</li>
                  </ul>
                  <p>
                    A planet that is malefic for one ascendant may be benefic
                    for another. Generic remedy prescriptions that ignore these
                    nuances are likely to be ineffective or counterproductive.
                  </p>
                </div>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Planetary Weakness vs Dosha Correction
                  </h3>
                  <p>
                    There is an important distinction between strengthening weak
                    planets and correcting doshas (afflictions). A weak benefic
                    planet may benefit from strengthening remedies. However,
                    strengthening a malefic planet or one that is functionally
                    harmful can worsen problems.
                  </p>
                  <p>
                    Doshas such as Manglik, Kaal Sarp, or Pitru Dosha require
                    different approaches than simple planetary weakness. Each
                    dosha has specific traditional remedies, though the actual
                    impact of these doshas varies significantly based on the
                    overall chart context.
                  </p>
                </div>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Temporary vs Long-Term Practices
                  </h3>
                  <p>
                    Some remedies are prescribed for specific transit periods or
                    challenging dashas — they have a defined timeframe. Others
                    become ongoing spiritual practices that support overall
                    well-being throughout life.
                  </p>
                  <p>
                    Understanding which category a remedy falls into prevents
                    both premature discontinuation and unnecessary indefinite
                    continuation.
                  </p>
                </div>

                <div className="remedy-callout remedy-callout--note">
                  <p className="remedy-callout__title">Chart Analysis First</p>
                  <p className="remedy-callout__content">
                    Before undertaking any specific planetary remedy, ensure it
                    is based on proper chart analysis. Remedies chosen based on
                    sun sign, birth date alone, or general recommendations may
                    not suit your unique planetary configuration.
                  </p>
                </div>
              </div>
            </section>

            <hr className="remedy-divider--decorative" />

            {/* ======================================
                SECTION 5: DISCIPLINE & PRACTICE
            ====================================== */}
            <section
              className="remedy-section"
              aria-labelledby="section-practice"
            >
              <header className="remedy-section__header">
                <span className="remedy-section__number">Part Five</span>
                <h2 className="remedy-section__title" id="section-practice">
                  Discipline & Practice
                </h2>
              </header>

              <div className="remedy-prose">
                <p className="remedy-section__intro">
                  The effectiveness of any remedy depends not just on choosing
                  the right practice but on how it is performed. Consistency,
                  intention, and proper understanding are essential components.
                </p>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Importance of Consistency and Intent
                  </h3>
                  <p>
                    Remedies performed sporadically or mechanically without
                    inner engagement rarely produce meaningful results. The
                    traditional texts emphasize that the intention (sankalpa)
                    behind a practice is as important as the practice itself.
                  </p>
                  <p>
                    A mantra recited with full presence for five minutes may be
                    more effective than an hour of distracted repetition.
                    Quality of attention matters more than quantity of
                    performance.
                  </p>
                </div>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Timeframes and Realistic Expectations
                  </h3>
                  <p>
                    Remedies typically require sustained practice over weeks or
                    months before effects become noticeable. Expecting immediate
                    results leads to disappointment and premature abandonment of
                    practices.
                  </p>
                  <ul className="remedy-list remedy-list--styled">
                    <li>
                      Most mantra practices require a minimum of 40 days
                      continuous practice
                    </li>
                    <li>
                      Some remedies show effects within the current planetary
                      period
                    </li>
                    <li>
                      Behavioral changes may take longer but produce lasting
                      transformation
                    </li>
                    <li>
                      Charitable practices often show quicker but subtler
                      effects
                    </li>
                  </ul>
                </div>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Common Mistakes to Avoid
                  </h3>
                  <p>
                    Understanding common errors helps practitioners avoid
                    pitfalls that reduce remedy effectiveness:
                  </p>
                  <ul className="remedy-list remedy-list--styled">
                    <li>
                      <strong>Incorrect pronunciation:</strong> Especially with
                      mantras, proper pronunciation matters. Learning from a
                      qualified teacher is preferable to self-study alone.
                    </li>
                    <li>
                      <strong>Inconsistent practice:</strong> Breaking the
                      continuity of prescribed practices (such as a 40-day
                      mantra cycle) may require starting over.
                    </li>
                    <li>
                      <strong>Wrong timing:</strong> Some practices are meant
                      for specific days, times, or planetary hours. Ignoring
                      these guidelines reduces effectiveness.
                    </li>
                    <li>
                      <strong>Mechanical performance:</strong> Performing
                      remedies without understanding or inner engagement treats
                      them as superstition rather than spiritual practice.
                    </li>
                    <li>
                      <strong>Combining conflicting remedies:</strong>{" "}
                      Performing remedies for opposing planetary energies
                      simultaneously can create confusion rather than balance.
                    </li>
                  </ul>
                </div>

                <div className="remedy-quote">
                  <p className="remedy-quote__text">
                    "Better is one's own dharma, though imperfectly performed,
                    than the dharma of another well performed."
                  </p>
                  <p className="remedy-quote__attribution">
                    — Bhagavad Gita 3.35
                  </p>
                </div>
              </div>
            </section>

            <hr className="remedy-divider--decorative" />

            {/* ======================================
                SECTION 6: RISKS & MISUSE
            ====================================== */}
            <section className="remedy-section" aria-labelledby="section-risks">
              <header className="remedy-section__header">
                <span className="remedy-section__number">Part Six</span>
                <h2 className="remedy-section__title" id="section-risks">
                  Risks & Misuse
                </h2>
              </header>

              <div className="remedy-prose">
                <p className="remedy-section__intro">
                  While remedies can be genuinely helpful when properly applied,
                  they can also be misused — both by practitioners who prescribe
                  them and by individuals who perform them. Understanding these
                  risks protects against harm.
                </p>

                <div className="remedy-callout remedy-callout--caution">
                  <p className="remedy-callout__title">Caution</p>
                  <p className="remedy-callout__content">
                    Be wary of practitioners who prescribe expensive remedies,
                    create fear about planetary influences, or suggest that
                    problems cannot be solved without their specific paid
                    services. Ethical astrology empowers rather than creates
                    dependency.
                  </p>
                </div>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Overdependence on Remedies
                  </h3>
                  <p>
                    Some individuals develop a pattern of seeking remedies for
                    every difficulty, large or small. This creates psychological
                    dependency and shifts responsibility from self to external
                    practices. Life contains inherent challenges; not all
                    require spiritual intervention.
                  </p>
                  <p>
                    A healthy relationship with remedies treats them as
                    occasional support during genuinely difficult periods, not
                    as first-line responses to every problem.
                  </p>
                </div>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Wrong, Excessive, or Conflicting Remedies
                  </h3>
                  <p>
                    Remedies prescribed without proper chart analysis may
                    strengthen the wrong planetary energies or create
                    imbalances. Excessive remedies can overwhelm rather than
                    help. Performing remedies for opposing planets
                    simultaneously can create internal conflict.
                  </p>
                  <p>
                    Quality guidance emphasizes focused, appropriate remedies
                    rather than an overwhelming list of practices.
                  </p>
                </div>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Commercial Misuse and Fear-Based Prescribing
                  </h3>
                  <p>
                    The astrology industry unfortunately includes practitioners
                    who use fear to sell remedies. Claims like "without this
                    remedy, terrible things will happen" or prescriptions for
                    expensive gemstones, elaborate pujas, or repeated paid
                    consultations may indicate commercial rather than genuine
                    motivation.
                  </p>
                  <p>Red flags include:</p>
                  <ul className="remedy-list remedy-list--styled">
                    <li>Creating fear or urgency around planetary positions</li>
                    <li>Expensive remedies as the only solution offered</li>
                    <li>
                      Vague diagnoses paired with specific expensive
                      prescriptions
                    </li>
                    <li>
                      Claims of special powers or exclusive ability to help
                    </li>
                    <li>
                      Discouraging second opinions or independent research
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="remedy-divider--decorative" />

            {/* ======================================
                SECTION 7: MODERN CONTEXT
            ====================================== */}
            <section
              className="remedy-section"
              aria-labelledby="section-modern"
            >
              <header className="remedy-section__header">
                <span className="remedy-section__number">Part Seven</span>
                <h2 className="remedy-section__title" id="section-modern">
                  Modern Context
                </h2>
              </header>

              <div className="remedy-prose">
                <p className="remedy-section__intro">
                  Traditional remedies developed in different cultural and
                  historical contexts. Applying them thoughtfully in
                  contemporary life requires understanding their essence while
                  adapting outer forms appropriately.
                </p>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Remedies in Contemporary Life
                  </h3>
                  <p>
                    Modern practitioners and seekers face unique challenges:
                    busy schedules, nuclear families, urban living, and limited
                    access to traditional resources. Effective remedies can be
                    adapted to these circumstances without losing their
                    essential nature.
                  </p>
                  <p>
                    A shorter but consistent daily practice may be more valuable
                    than elaborate occasional rituals. Simple acts of charity
                    and lifestyle modifications are accessible to everyone
                    regardless of circumstance.
                  </p>
                </div>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Mental Health and Ethical Boundaries
                  </h3>
                  <p>
                    Vedic remedies are spiritual practices, not substitutes for
                    mental health care. Depression, anxiety, trauma, and other
                    psychological conditions require appropriate professional
                    treatment.
                  </p>
                  <p>
                    An ethical practitioner recognizes these boundaries and
                    refers clients to mental health professionals when
                    appropriate. Spiritual practices can complement but never
                    replace proper psychological care.
                  </p>
                </div>

                <div className="remedy-callout remedy-callout--ethical">
                  <p className="remedy-callout__title">
                    When Remedies Should Not Be Advised
                  </p>
                  <p className="remedy-callout__content">
                    Remedies are inappropriate when they would delay necessary
                    medical treatment, substitute for professional mental health
                    care, avoid practical action that is clearly needed, or
                    create financial hardship. Ethical guidance prioritizes the
                    person's genuine well-being over traditional prescriptions.
                  </p>
                </div>

                <div className="remedy-subsection">
                  <h3 className="remedy-subsection__title">
                    Balancing Tradition and Practicality
                  </h3>
                  <p>
                    The wisdom embedded in traditional remedies remains
                    relevant, even when outer forms must adapt. The principles
                    of intention, consistency, charity, and self-awareness
                    transcend cultural specifics.
                  </p>
                  <p>
                    A person unable to perform elaborate rituals can still
                    practice the essence: mindfulness, generosity,
                    self-reflection, and alignment with higher values. These
                    simpler practices often prove more sustainable and
                    transformative than complex external forms.
                  </p>
                </div>
              </div>
            </section>

            <hr className="remedy-divider--decorative" />

            {/* ======================================
                SECTION 8: FREQUENTLY ASKED QUESTIONS
            ====================================== */}
            <section className="remedy-section" aria-labelledby="section-faq">
              <header className="remedy-section__header">
                <span className="remedy-section__number">Reference</span>
                <h2 className="remedy-section__title" id="section-faq">
                  Frequently Asked Questions
                </h2>
              </header>

              <div className="remedy-prose">
                <p className="remedy-section__intro">
                  Common questions about Vedic remedies, answered with clarity
                  and honesty. Understanding these fundamentals helps approach
                  remedial practices with appropriate expectations.
                </p>

                <div className="remedy-faq">
                  <div className="remedy-faq__item">
                    <h3 className="remedy-faq__question">
                      Do remedies actually work?
                    </h3>
                    <p className="remedy-faq__answer">
                      Remedies can be effective when properly prescribed and
                      sincerely practiced, but they are not magic. Their
                      effectiveness depends on appropriate selection, consistent
                      practice, genuine intention, and realistic expectations.
                      They work best as part of a broader approach that includes
                      practical action and self-awareness.
                    </p>
                  </div>

                  <div className="remedy-faq__item">
                    <h3 className="remedy-faq__question">
                      Can I perform remedies without an astrologer's guidance?
                    </h3>
                    <p className="remedy-faq__answer">
                      General spiritual practices like meditation, charity, and
                      ethical living benefit everyone. However, specific
                      planetary remedies require chart analysis to ensure they
                      are appropriate for your unique configuration. Wrong
                      remedies can be counterproductive.
                    </p>
                  </div>

                  <div className="remedy-faq__item">
                    <h3 className="remedy-faq__question">
                      How long do remedies take to show results?
                    </h3>
                    <p className="remedy-faq__answer">
                      Most remedies require consistent practice over 40 days to
                      several months before effects become noticeable. Some may
                      align with planetary transit timings. Expecting immediate
                      results typically leads to disappointment. Patience and
                      consistency are essential.
                    </p>
                  </div>

                  <div className="remedy-faq__item">
                    <h3 className="remedy-faq__question">
                      Are expensive remedies more effective?
                    </h3>
                    <p className="remedy-faq__answer">
                      No. Cost has no relationship to remedy effectiveness.
                      Simple practices performed with sincerity often produce
                      better results than elaborate expensive rituals performed
                      mechanically. Be cautious of practitioners who emphasize
                      expensive solutions.
                    </p>
                  </div>

                  <div className="remedy-faq__item">
                    <h3 className="remedy-faq__question">
                      Should I wear gemstones for malefic planets?
                    </h3>
                    <p className="remedy-faq__answer">
                      Generally, gemstones strengthen the planet they represent.
                      Strengthening a malefic planet can increase problems
                      rather than resolve them. Gemstone recommendations require
                      careful analysis by a qualified astrologer, not general
                      prescriptions.
                    </p>
                  </div>

                  <div className="remedy-faq__item">
                    <h3 className="remedy-faq__question">
                      Can remedies change my destiny?
                    </h3>
                    <p className="remedy-faq__answer">
                      Remedies can modify how karmic patterns manifest and how
                      we experience them, but they cannot override fundamental
                      karma or guarantee specific outcomes. They are tools for
                      working more skillfully with life circumstances, not
                      methods for controlling fate.
                    </p>
                  </div>

                  <div className="remedy-faq__item">
                    <h3 className="remedy-faq__question">
                      What if I miss a day during a remedy practice?
                    </h3>
                    <p className="remedy-faq__answer">
                      This depends on the specific practice. Some traditional
                      prescriptions require starting over if continuity is
                      broken. Others are more flexible. Consult with your guide
                      about the specific requirements. Generally, resuming with
                      renewed commitment is better than abandoning the practice
                      entirely.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Page-Level Disclaimer */}
            <aside className="remedy-page-footer">
              <div className="remedy-container">
                <p className="remedy-page-footer__disclaimer">
                  <strong>Guidance Note:</strong> The information provided on
                  this page is educational and does not constitute professional
                  astrological consultation. Remedies should be undertaken based
                  on individual chart analysis by a qualified practitioner.
                  Nothing here should replace medical treatment, mental health
                  care, or professional advice. Your choices, actions, and
                  personal responsibility remain the primary determinants of
                  your life outcomes.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
