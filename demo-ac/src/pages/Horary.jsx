import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Horary.css";

export default function Horary() {
  return (
    <>
      <Navbar />

      <main className="horary-layout">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="horary-skip-link">
          Skip to main content
        </a>

        {/* Header */}
        <header className="horary-header">
          <div className="horary-container">
            <h1 className="horary-hero-title">Horary Astrology</h1>
            <p className="horary-hero-subtitle">
              Prashna Shastra — Ancient wisdom for time-sensitive questions
              using the moment of inquiry
            </p>
          </div>
        </header>

        {/* Main Content - Single Column Layout */}
        <div className="horary-container" id="main-content">
          <article className="horary-main-content">
            {/* Introduction Section */}
            <section className="horary-section">
              <div className="horary-card">
                <div className="horary-card-header">
                  <h2>What Is Horary (Prashna) Astrology</h2>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Horary astrology, known in Vedic tradition as Prashna
                    Shastra, is the practice of answering specific questions by
                    casting a chart for the exact moment the question is
                    understood by the astrologer. Unlike natal astrology, which
                    interprets the birth chart, Horary focuses on the cosmic
                    moment when a sincere question arises.
                  </p>
                  <p>
                    This ancient system operates on the principle that the
                    positions of planets at the moment of inquiry contain the
                    answer to the question posed. The chart becomes a cosmic
                    snapshot of the energy surrounding the question itself.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Difference Between Natal & Horary Systems</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    <strong>Natal Astrology</strong> interprets a person's
                    entire life path, personality, and potential based on their
                    birth time and location. It provides broad insights into
                    character, relationships, and general life themes.
                  </p>
                  <p>
                    <strong>Horary Astrology</strong> addresses specific,
                    immediate concerns. It answers focused questions about
                    particular situations, decisions, or outcomes. The chart is
                    cast for the question's moment, not the questioner's birth.
                  </p>
                  <p>
                    While natal charts reveal destiny, horary charts reveal
                    decisions. Where natal astrology shows what you are, horary
                    shows what will happen in a specific situation.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>When Prashna Is Appropriate</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Horary is most effective for urgent, specific questions
                    where you need clarity on immediate outcomes. Ideal
                    questions involve:
                  </p>
                  <ul>
                    <li>Time-sensitive decisions with clear alternatives</li>
                    <li>Missing objects or people</li>
                    <li>
                      Relationship uncertainties requiring immediate clarity
                    </li>
                    <li>Career opportunities with deadlines</li>
                    <li>Legal or financial matters with pending outcomes</li>
                  </ul>
                  <p>
                    The question must arise from genuine uncertainty, not idle
                    curiosity or repetitive anxiety. The more sincere and
                    focused the question, the clearer the cosmic response.
                  </p>
                </div>
              </div>
            </section>

            {/* Foundational Principles Section */}
            <section className="horary-section">
              <div className="horary-section-header">
                <h2>Foundational Principles</h2>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Importance of Question Timing</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    In Prashna, timing is everything. The exact moment when the
                    astrologer understands the question becomes the birth time
                    of the horary chart. This moment must be:
                  </p>
                  <ul>
                    <li>
                      <strong>Spontaneous:</strong> The question should arise
                      naturally, not be forced
                    </li>
                    <li>
                      <strong>Clear:</strong> The inquiry must be specific and
                      well-defined
                    </li>
                    <li>
                      <strong>Sincere:</strong> Asked with genuine need for
                      guidance, not entertainment
                    </li>
                    <li>
                      <strong>First-time:</strong> The same question should not
                      be repeatedly asked
                    </li>
                  </ul>
                  <p>
                    The planetary positions at this precise moment reflect the
                    energy surrounding the question and contain the cosmic
                    answer within their geometric relationships.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Role of the Astrologer's Judgment</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    The Horary astrologer serves as interpreter between cosmic
                    language and human understanding. This requires:
                  </p>
                  <ul>
                    <li>Deep knowledge of planetary dignities and aspects</li>
                    <li>Intuitive connection to the question's essence</li>
                    <li>
                      Ability to translate celestial symbolism into practical
                      guidance
                    </li>
                    <li>
                      Ethical responsibility in delivering potentially
                      life-changing answers
                    </li>
                  </ul>
                  <p>
                    The astrologer must remain emotionally neutral while being
                    deeply engaged with the cosmic message. Personal bias or
                    emotional investment can distort the reading.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Planetary Strength at the Moment of Query</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Each horary chart contains specific planetary dignities that
                    determine the strength and clarity of the answer:
                  </p>
                  <ul>
                    <li>
                      <strong>Exaltation:</strong> Planets in their strongest
                      signs provide clear, favorable answers
                    </li>
                    <li>
                      <strong>Own Sign:</strong> Comfortable planetary positions
                      suggest reliable outcomes
                    </li>
                    <li>
                      <strong>Debilitation:</strong> Weakened planets may
                      indicate obstacles or unclear results
                    </li>
                    <li>
                      <strong>Combustion:</strong> Planets too close to the Sun
                      can suggest hidden factors
                    </li>
                  </ul>
                  <p>
                    The overall planetary strength in the horary chart
                    determines not only the answer but also the confidence level
                    and timing of the predicted outcome.
                  </p>
                </div>
              </div>
            </section>

            {/* Question Framing Section */}
            <section className="horary-section">
              <div className="horary-section-header">
                <h2>Question Framing</h2>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>How a Question Should Be Asked</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Effective horary questions follow specific principles that
                    align with cosmic law:
                  </p>
                  <ul>
                    <li>
                      <strong>Be Specific:</strong> "Will I get the job at ABC
                      Company?" rather than "Will I be successful?"
                    </li>
                    <li>
                      <strong>Include Timeframe:</strong> "Will my relationship
                      improve within six months?"
                    </li>
                    <li>
                      <strong>Avoid Multiple Questions:</strong> One chart, one
                      focused inquiry
                    </li>
                    <li>
                      <strong>State Clear Context:</strong> Provide enough
                      background for accurate interpretation
                    </li>
                  </ul>
                  <p>
                    The universe responds to clarity. Vague questions produce
                    vague answers. The more precisely you frame your inquiry,
                    the more precisely the cosmos can respond.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Sincere vs Casual Questions</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    <strong>Sincere Questions</strong> arise from genuine need
                    and uncertainty. They involve real consequences and require
                    thoughtful action. The questioner truly needs guidance and
                    is prepared to act on the answer.
                  </p>
                  <p>
                    <strong>Casual Questions</strong> come from curiosity,
                    entertainment, or testing the astrologer. They lack
                    emotional investment and genuine need. Such questions often
                    produce unclear or misleading charts.
                  </p>
                  <p>
                    The cosmic intelligence responds proportionally to the
                    sincerity of the inquiry. Treat horary as you would any
                    sacred consultation — with respect, preparation, and genuine
                    need for guidance.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>One Question, One Chart Principle</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Each horary chart addresses one specific question.
                    Attempting to extract multiple answers from a single chart
                    dilutes the cosmic message and reduces accuracy.
                  </p>
                  <p>
                    If you have related questions, they should be asked in
                    separate sessions, allowing time between inquiries for the
                    cosmic energy to reset. This respects the sacred nature of
                    the practice and maintains the integrity of each reading.
                  </p>
                  <p>
                    The "one question, one chart" principle ensures that the
                    planetary positions align specifically with your inquiry,
                    rather than attempting to force multiple meanings from a
                    single cosmic moment.
                  </p>
                </div>
              </div>
            </section>

            {/* Chart Interpretation Section */}
            <section className="horary-section">
              <div className="horary-section-header">
                <h2>Chart Interpretation</h2>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Lagna in Prashna Charts</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    The Ascendant (Lagna) in a horary chart represents the
                    questioner and their current state of mind regarding the
                    question. The condition of the Lagna and its lord indicates:
                  </p>
                  <ul>
                    <li>
                      The questioner's emotional investment in the outcome
                    </li>
                    <li>Their ability to influence the situation</li>
                    <li>The overall feasibility of their desired outcome</li>
                    <li>Hidden motivations or subconscious factors</li>
                  </ul>
                  <p>
                    A strong Lagna suggests the questioner has power over the
                    situation. A weak or afflicted Lagna may indicate external
                    forces or internal obstacles affecting the outcome.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Planetary Dignity & Aspect Weight</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    In horary interpretation, planetary dignity carries more
                    weight than in natal astrology. The strength and placement
                    of significators directly impact the answer:
                  </p>
                  <ul>
                    <li>
                      <strong>Strong Dignified Planets:</strong> Clear "yes"
                      answers with positive outcomes
                    </li>
                    <li>
                      <strong>Weak or Debilitated Planets:</strong> Obstacles,
                      delays, or negative results
                    </li>
                    <li>
                      <strong>Applying Aspects:</strong> Developing situations,
                      future connections
                    </li>
                    <li>
                      <strong>Separating Aspects:</strong> Past influences,
                      declining connections
                    </li>
                  </ul>
                  <p>
                    The aspects between significators tell the story of how
                    events will unfold. Benefic aspects suggest smooth progress,
                    while malefic aspects indicate challenges or conflicts.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Moon as Flow Indicator</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    The Moon in horary charts serves as the primary indicator of
                    flow and development. Its movement and aspects reveal the
                    timing and progression of events:
                  </p>
                  <ul>
                    <li>
                      <strong>Moon's Last Aspect:</strong> Recent influences
                      affecting the situation
                    </li>
                    <li>
                      <strong>Moon's Next Aspect:</strong> The immediate future
                      development
                    </li>
                    <li>
                      <strong>Moon Void of Course:</strong> Nothing will come of
                      the matter
                    </li>
                    <li>
                      <strong>Moon's Sign Position:</strong> The emotional tone
                      of the outcome
                    </li>
                  </ul>
                  <p>
                    The Moon's condition and movement pattern often provide the
                    most reliable timing information in horary charts,
                    indicating when events will reach completion or resolution.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Yes/No Judgment Logic</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Horary provides clear yes/no answers through systematic
                    evaluation of chart factors:
                  </p>
                  <ul>
                    <li>
                      <strong>Positive Indicators:</strong> Benefic aspects
                      between significators, strong planetary dignity,
                      supportive Moon aspects
                    </li>
                    <li>
                      <strong>Negative Indicators:</strong> Malefic aspects,
                      planetary debilitation, void Moon, combust significators
                    </li>
                    <li>
                      <strong>Mixed Indicators:</strong> Conflicting testimony
                      requiring careful synthesis
                    </li>
                    <li>
                      <strong>Unclear Charts:</strong> When planetary testimony
                      is too weak or contradictory for reliable judgment
                    </li>
                  </ul>
                  <p>
                    The astrologer weighs all testimonies, with stronger
                    planetary positions carrying more influence in the final
                    judgment. Sometimes the answer is "wait" or "ask again
                    later."
                  </p>
                </div>
              </div>
            </section>

            {/* Application Areas Section */}
            <section className="horary-section">
              <div className="horary-section-header">
                <h2>Application Areas</h2>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Career Decisions</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Horary excels at career-related questions involving specific
                    opportunities, job offers, business ventures, or
                    professional transitions. Effective career questions
                    include:
                  </p>
                  <ul>
                    <li>
                      "Should I accept the position at [specific company]?"
                    </li>
                    <li>
                      "Will my business proposal be accepted by [specific
                      date]?"
                    </li>
                    <li>
                      "Is now the right time to change my career direction?"
                    </li>
                    <li>
                      "Will the partnership with [specific person] be
                      successful?"
                    </li>
                  </ul>
                  <p>
                    The 10th house and its lord represent career matters, while
                    the 2nd house indicates financial outcomes. Jupiter and
                    Mercury often serve as career significators depending on the
                    nature of the work.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Relationship Uncertainty</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Relationship questions require careful ethical consideration
                    but can provide valuable insights into romantic
                    partnerships, marriage prospects, and interpersonal
                    dynamics:
                  </p>
                  <ul>
                    <li>
                      "Does [specific person] have romantic interest in me?"
                    </li>
                    <li>"Will my current relationship lead to marriage?"</li>
                    <li>
                      "Should I end my relationship with [specific person]?"
                    </li>
                    <li>"Will we reconcile after our separation?"</li>
                  </ul>
                  <p>
                    Venus governs romantic relationships, while the 7th house
                    represents partnerships and marriage. The Moon often
                    represents the questioner's emotional state regarding the
                    relationship.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Lost Objects</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    One of horary's most reliable applications involves finding
                    lost or stolen items. The chart can indicate location,
                    timing of recovery, and whether the object will be found:
                  </p>
                  <ul>
                    <li>The 2nd house represents the lost object</li>
                    <li>Its ruler's position indicates the likely location</li>
                    <li>Aspects to the ruler suggest timing of recovery</li>
                    <li>
                      The Moon's movement confirms or denies recovery prospects
                    </li>
                  </ul>
                  <p>
                    This type of question often produces remarkably specific and
                    accurate results, as the cosmic intelligence seems
                    particularly responsive to genuine need and urgency.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Legal or Financial Concerns</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Horary can provide valuable insights into legal proceedings,
                    financial investments, and business transactions with
                    specific outcomes and timeframes:
                  </p>
                  <ul>
                    <li>
                      "Will I win my court case against [specific party]?"
                    </li>
                    <li>"Should I invest in [specific opportunity] now?"</li>
                    <li>"Will I receive the payment owed to me?"</li>
                    <li>"Is this contract favorable for my interests?"</li>
                  </ul>
                  <p>
                    The 9th house governs legal matters, while the 2nd and 8th
                    houses indicate personal and shared finances. Saturn often
                    represents legal restrictions or delays.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Travel & Immediate Outcomes</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Questions about travel, immediate events, and short-term
                    outcomes often receive clear and timely answers through
                    horary consultation:
                  </p>
                  <ul>
                    <li>"Will my flight be delayed or cancelled?"</li>
                    <li>"Is it safe to travel to [specific location] now?"</li>
                    <li>"Will the meeting tomorrow be successful?"</li>
                    <li>"Should I attend the event this weekend?"</li>
                  </ul>
                  <p>
                    The 3rd house represents short journeys, while the 9th house
                    governs long-distance travel. Mercury often signifies travel
                    and communication matters.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitations & Misuse Section */}
            <section className="horary-section">
              <div className="horary-section-header">
                <h2>Limitations & Misuse</h2>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Repeated Questions</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    One of the most common misuses of horary is asking the same
                    question repeatedly, hoping for a different answer. This
                    practice:
                  </p>
                  <ul>
                    <li>Violates the sacred principle of divine timing</li>
                    <li>Creates confusion in the cosmic message</li>
                    <li>Often produces contradictory or unclear charts</li>
                    <li>Indicates lack of trust in the original answer</li>
                  </ul>
                  <p>
                    Once a horary question receives a clear answer, that
                    judgment should be trusted and acted upon. The same question
                    should not be re-asked unless circumstances change
                    significantly or substantial time has passed.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Emotional Dependency Risks</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Some individuals develop unhealthy dependency on horary
                    consultation, seeking cosmic validation for every minor
                    decision. This dependency:
                  </p>
                  <ul>
                    <li>Undermines personal decision-making ability</li>
                    <li>
                      Creates anxiety when astrological guidance is unavailable
                    </li>
                    <li>May lead to decision paralysis without consultation</li>
                    <li>Can become a form of spiritual escapism</li>
                  </ul>
                  <p>
                    Healthy use of horary involves consulting for significant
                    decisions while maintaining personal responsibility and
                    intuitive judgment for everyday choices.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Situations Where Prashna Fails</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Horary astrology has specific limitations and may not
                    provide reliable guidance in certain situations:
                  </p>
                  <ul>
                    <li>
                      <strong>Hypothetical Questions:</strong> "What if..."
                      scenarios without real commitment
                    </li>
                    <li>
                      <strong>Moral Decisions:</strong> Questions requiring
                      ethical judgment rather than prediction
                    </li>
                    <li>
                      <strong>Long-term Life Planning:</strong> Broad questions
                      better suited to natal astrology
                    </li>
                    <li>
                      <strong>Testing Questions:</strong> Inquiries designed to
                      test the astrologer or system
                    </li>
                    <li>
                      <strong>Questions About Others' Private Thoughts:</strong>{" "}
                      Invasive inquiries violating free will
                    </li>
                  </ul>
                  <p>
                    Recognizing these limitations helps maintain the integrity
                    and appropriate use of this powerful astrological tool.
                  </p>
                </div>
              </div>
            </section>

            {/* Ethical Practice Section */}
            <section className="horary-section">
              <div className="horary-section-header">
                <h2>Ethical Practice</h2>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Responsibility of the Astrologer</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Horary astrologers carry significant ethical responsibility
                    due to the precise and often life-changing nature of their
                    answers. This responsibility includes:
                  </p>
                  <ul>
                    <li>Maintaining objectivity and emotional neutrality</li>
                    <li>
                      Providing honest interpretation even when the answer is
                      difficult
                    </li>
                    <li>
                      Refusing to answer inappropriate or invasive questions
                    </li>
                    <li>Recognizing the limits of astrological judgment</li>
                    <li>
                      Supporting client autonomy and decision-making ability
                    </li>
                  </ul>
                  <p>
                    The astrologer serves as a bridge between cosmic wisdom and
                    human understanding, not as a fortune-teller or
                    decision-maker for the client.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Avoiding Fear-Based Answers</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Ethical horary practice requires delivering difficult news
                    with compassion and constructive guidance. Fear-based
                    interpretations can cause psychological harm:
                  </p>
                  <ul>
                    <li>
                      Frame challenges as opportunities for growth or course
                      correction
                    </li>
                    <li>
                      Provide timing information to help clients prepare
                      appropriately
                    </li>
                    <li>
                      Suggest practical actions the client can take to influence
                      outcomes
                    </li>
                    <li>
                      Emphasize free will and personal agency within cosmic
                      patterns
                    </li>
                  </ul>
                  <p>
                    The goal is empowerment through knowledge, not paralysis
                    through fear. Even difficult horary answers should leave the
                    client with a sense of agency and hope.
                  </p>
                </div>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Mental Health Boundaries</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <p>
                    Responsible horary practice requires recognizing when
                    clients need professional mental health support rather than
                    astrological guidance:
                  </p>
                  <ul>
                    <li>Identify signs of clinical anxiety or depression</li>
                    <li>
                      Refer clients to appropriate mental health professionals
                      when needed
                    </li>
                    <li>
                      Avoid creating dependency on astrological consultation
                    </li>
                    <li>
                      Maintain clear boundaries about the astrologer's role and
                      capabilities
                    </li>
                  </ul>
                  <p>
                    Horary astrology is a tool for guidance and decision-making,
                    not a substitute for psychological or medical treatment.
                    Ethical practitioners recognize these boundaries and
                    prioritize client wellbeing.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Reference Section */}
            <section className="horary-section">
              <div className="horary-section-header">
                <h2>Horary Astrology FAQs</h2>
              </div>

              <div className="horary-card">
                <div className="horary-card-header">
                  <h3>Common Questions About Prashna Practice</h3>
                </div>
                <hr className="horary-divider" />
                <div className="horary-card-content">
                  <div className="horary-faq-item">
                    <h4>How often can I ask horary questions?</h4>
                    <p>
                      Quality over frequency. Allow time between consultations
                      for cosmic energy to reset. Major questions should be
                      spaced weeks or months apart, unless circumstances change
                      significantly.
                    </p>
                  </div>

                  <div className="horary-faq-item">
                    <h4>What if I don't like the answer I receive?</h4>
                    <p>
                      Horary answers reflect cosmic law, not personal
                      preference. The chart shows what is, not what we wish. Use
                      difficult answers as guidance for appropriate preparation
                      or action.
                    </p>
                  </div>

                  <div className="horary-faq-item">
                    <h4>Can horary charts be wrong?</h4>
                    <p>
                      Charts reflect cosmic truth, but human interpretation can
                      err. Poor timing, insincere questions, or astrologer
                      inexperience can reduce accuracy. The system itself is
                      reliable when properly applied.
                    </p>
                  </div>

                  <div className="horary-faq-item">
                    <h4>Should I act immediately on horary answers?</h4>
                    <p>
                      Consider the timing indicated in the chart. Some answers
                      require immediate action, others suggest waiting. The
                      Moon's condition and aspects often provide timing
                      guidance.
                    </p>
                  </div>

                  <div className="horary-faq-item">
                    <h4>Can I ask questions about other people?</h4>
                    <p>
                      Only with their consent or when your question involves
                      your relationship with them. Avoid invasive questions
                      about others' private thoughts, feelings, or actions
                      without permission.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
