import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./SelfAwareness.css";

export default function SelfAwareness() {
  return (
    <>
      <Navbar />
      <main className="self-awareness-page">
        <div className="self-awareness-container">
          {/* Hero Section */}
          <section className="self-awareness-hero">
            <div className="hero-content">
              <h1 className="main-title">
                Self-Awareness Through Vedic Astrology
              </h1>
              <p className="hero-subtitle">
                Discover the patterns within yourself using astrology as a
                mirror for conscious observation, not prediction. True awareness
                begins with understanding your inner landscape.
              </p>
            </div>
          </section>

          {/* Introduction */}
          <section className="content-section">
            <h2 className="section-title">
              What Self-Awareness Means in Vedic Thought
            </h2>
            <div className="content-block">
              <p>
                In Vedic philosophy, self-awareness (Sva-Gyana) is the
                foundation of conscious living. It's not merely knowing your
                preferences or personality traits, but developing a clear,
                non-judgmental observation of your patterns, reactions, and
                underlying motivations.
              </p>
              <p>
                Astrology, in this context, serves as a sophisticated language
                for understanding the energetic patterns that shape your
                experience. Your birth chart is not a fate map—it's a starting
                point for conscious observation and choice.
              </p>
            </div>

            <h3 className="subsection-title">
              Astrology as a Reflective Language
            </h3>
            <div className="content-block">
              <p>
                Think of your birth chart as a mirror that reflects your inner
                tendencies. The planets, signs, and houses don't determine who
                you are—they describe the energetic currents you're working with
                in this lifetime.
              </p>
              <p>
                This distinction is crucial. Astrology becomes a tool for
                awareness when you approach it as a way to understand your
                patterns, not predict your future. The real power lies in
                recognition, not resignation.
              </p>
            </div>

            <h3 className="subsection-title">Awareness vs Identity</h3>
            <div className="content-block">
              <p>
                Self-awareness means observing your patterns without becoming
                them. You might notice strong Mars energy making you quick to
                anger, but you are not "an angry person." You're someone who can
                observe their anger, understand its triggers, and choose how to
                respond.
              </p>
              <p>
                This awareness creates space between impulse and action—the
                sacred pause where conscious choice becomes possible.
              </p>
            </div>
          </section>

          {/* Foundational Lenses */}
          <section className="content-section">
            <h2 className="section-title">
              Foundational Lenses for Self-Observation
            </h2>

            <div className="lens-block">
              <h3 className="subsection-title">Lagna & Self-Perception</h3>
              <div className="content-block">
                <p>
                  Your Ascendant (Lagna) represents how you naturally approach
                  life and how others first perceive you. More importantly, it
                  reveals your unconscious self-presentation patterns.
                </p>
                <p>
                  <strong>For Self-Awareness:</strong> Notice how you
                  automatically respond to new situations. Do you lead with
                  caution (earth signs), enthusiasm (fire signs), analysis (air
                  signs), or feeling (water signs)? This isn't right or
                  wrong—it's simply your natural first response.
                </p>
              </div>
            </div>

            <div className="lens-block">
              <h3 className="subsection-title">Moon & Emotional Patterns</h3>
              <div className="content-block">
                <p>
                  Your Moon sign reveals your emotional nature and subconscious
                  patterns. It shows how you process feelings, what makes you
                  feel secure, and your instinctive reactions to stress or
                  comfort.
                </p>
                <p>
                  <strong>For Self-Awareness:</strong> Observe your emotional
                  rhythms. When do you feel most centered? What throws you off
                  balance? How do you instinctively seek comfort or security?
                  Understanding these patterns helps you respond rather than
                  react.
                </p>
              </div>
            </div>

            <div className="lens-block">
              <h3 className="subsection-title">Sun & Sense of Purpose</h3>
              <div className="content-block">
                <p>
                  Your Sun sign represents your core creative essence—not your
                  personality, but the fundamental life force seeking expression
                  through you. It's the part of you that wants to shine and
                  contribute meaningfully.
                </p>
                <p>
                  <strong>For Self-Awareness:</strong> Notice when you feel most
                  alive and authentic. What activities, environments, or
                  expressions make you feel like yourself? This isn't about
                  career—it's about the quality of energy you bring to whatever
                  you do.
                </p>
              </div>
            </div>
          </section>

          {/* Inner Patterns */}
          <section className="content-section">
            <h2 className="section-title">Recognizing Inner Patterns</h2>

            <div className="pattern-block">
              <h3 className="subsection-title">Habit Loops & Repetition</h3>
              <div className="content-block">
                <p>
                  Planetary aspects in your chart often reveal recurring
                  patterns in your life. These aren't punishments or
                  rewards—they're themes your soul is working with for growth
                  and integration.
                </p>
                <p>
                  Strong Saturn aspects might show up as patterns around
                  authority, responsibility, or self-discipline. Venus aspects
                  might reveal themes in relationships, values, or creative
                  expression. The key is recognition without judgment.
                </p>
              </div>
            </div>

            <div className="pattern-block">
              <h3 className="subsection-title">
                Strengths, Blind Spots & Shadows
              </h3>
              <div className="content-block">
                <p>
                  Every planetary placement has both gifts and potential
                  challenges. Mars gives courage and drive but can also manifest
                  as impatience or aggression. Mercury brings intelligence and
                  communication skills but might create overthinking or
                  criticism.
                </p>
                <p>
                  Self-awareness means embracing the full spectrum. Your
                  strengths aren't better than your challenges—they're different
                  faces of the same energetic pattern. Integration, not
                  elimination, is the goal.
                </p>
              </div>
            </div>

            <div className="pattern-block">
              <h3 className="subsection-title">
                Emotional Triggers & Responses
              </h3>
              <div className="content-block">
                <p>
                  Difficult aspects or planetary placements often point to
                  emotional sensitivity areas. These aren't flaws—they're where
                  your growth edge lies, places where unconscious reactions can
                  become conscious responses.
                </p>
                <p>
                  Notice what consistently triggers strong reactions in you. Is
                  it criticism (Sun aspects)? Feeling unsupported (Moon
                  aspects)? Being controlled (Mars aspects)? Recognition is the
                  first step toward choice.
                </p>
              </div>
            </div>
          </section>

          {/* Karmic Themes */}
          <section className="content-section">
            <h2 className="section-title">Understanding Karmic Themes</h2>

            <div className="karma-block">
              <h3 className="subsection-title">Past Tendencies & Samskaras</h3>
              <div className="content-block">
                <p>
                  In Vedic thought, samskaras are mental impressions from past
                  experiences that influence current patterns. Your birth chart
                  reflects these deep-seated tendencies—not as fixed fate, but
                  as starting conditions for this lifetime.
                </p>
                <p>
                  Strong planetary placements often indicate well-established
                  patterns from previous experiences. A prominent Jupiter might
                  show developed wisdom and generosity. A challenged Mars might
                  indicate work needed around anger or assertion.
                </p>
              </div>
            </div>

            <div className="karma-block">
              <h3 className="subsection-title">
                Rahu–Ketu Axis & Growth Zones
              </h3>
              <div className="content-block">
                <p>
                  The lunar nodes (Rahu-Ketu) represent your soul's growth
                  direction. Ketu shows qualities you've mastered and might
                  over-rely on. Rahu points to new territories for
                  development—often uncomfortable but essential for growth.
                </p>
                <p>
                  Self-awareness means recognizing when you're stuck in Ketu
                  patterns (comfortable but limiting) and gently moving toward
                  Rahu qualities (challenging but expansive). This movement
                  creates conscious evolution.
                </p>
              </div>
            </div>

            <div className="karma-block">
              <h3 className="subsection-title">Choice Within Karma</h3>
              <div className="content-block">
                <p>
                  Karma isn't fate—it's the field of cause and effect within
                  which you make choices. Your chart shows your karmic raw
                  materials, not your inevitable destination.
                </p>
                <p>
                  Every moment offers choice: How will you work with your Mars
                  energy? How will you express your Venus nature? How will you
                  channel your Mercury intelligence? Awareness transforms karma
                  from unconscious repetition to conscious creation.
                </p>
              </div>
            </div>
          </section>

          {/* Conscious Alignment */}
          <section className="content-section">
            <h2 className="section-title">Living with Conscious Alignment</h2>

            <div className="alignment-block">
              <h3 className="subsection-title">Awareness in Decision-Making</h3>
              <div className="content-block">
                <p>
                  When facing decisions, your chart can offer insight into your
                  natural inclinations. A strong Saturn placement might make you
                  naturally cautious, while prominent Jupiter might incline you
                  toward optimistic expansion.
                </p>
                <p>
                  Self-awareness means recognizing these tendencies without
                  being enslaved by them. You can honor your Saturn's need for
                  security while not letting fear paralyze you. You can embrace
                  Jupiter's optimism while still doing practical planning.
                </p>
              </div>
            </div>

            <div className="alignment-block">
              <h3 className="subsection-title">Responding vs Reacting</h3>
              <div className="content-block">
                <p>
                  Reactions come from unconscious patterns. Responses come from
                  conscious choice. Your chart illuminates your reactive
                  tendencies—Mars might flare into anger, Mercury might spiral
                  into worry, Venus might people-please to avoid conflict.
                </p>
                <p>
                  The goal isn't to eliminate these energies but to work with
                  them consciously. Feel the Mars energy but pause before
                  acting. Notice the Mercury analysis but don't get lost in it.
                  Appreciate Venus's harmony-seeking but maintain healthy
                  boundaries.
                </p>
              </div>
            </div>

            <div className="alignment-block">
              <h3 className="subsection-title">
                Timing Awareness (Dashas as Phases)
              </h3>
              <div className="content-block">
                <p>
                  Vedic astrology's dasha system reveals natural life phases,
                  each highlighting different planetary energies. This isn't
                  prediction—it's recognition of organic timing patterns for
                  growth and focus.
                </p>
                <p>
                  During a Saturn dasha, life often emphasizes discipline,
                  responsibility, and long-term building. A Jupiter period might
                  bring expansion, learning, and philosophical growth. Awareness
                  of these rhythms helps you work with natural timing rather
                  than against it.
                </p>
              </div>
            </div>
          </section>

          {/* Practical Reflection */}
          <section className="content-section">
            <h2 className="section-title">Practical Reflection Methods</h2>

            <div className="practice-block">
              <h3 className="subsection-title">
                Journaling with Chart Insights
              </h3>
              <div className="content-block">
                <p>
                  Use your chart as a framework for self-reflection. Weekly, ask
                  yourself: How did my Mars energy show up this week? Was I
                  assertive or aggressive? How did my Venus nature express
                  itself in relationships? Did I maintain healthy boundaries?
                </p>
                <p>
                  This isn't about judgment but observation. Notice patterns
                  without trying to immediately change them. Awareness itself
                  creates the possibility for natural transformation.
                </p>
              </div>
            </div>

            <div className="practice-block">
              <h3 className="subsection-title">
                Observational Practices (Non-ritual)
              </h3>
              <div className="content-block">
                <p>
                  Simple daily practices can deepen chart-based self-awareness:
                  Notice when your Moon sign feels comfortable or stressed.
                  Observe how your Sun sign wants to express itself. Watch how
                  your Ascendant approaches new situations.
                </p>
                <p>
                  These observations don't require special rituals or complex
                  practices—just mindful attention to your inner landscape as
                  you move through daily life.
                </p>
              </div>
            </div>

            <div className="practice-block">
              <h3 className="subsection-title">Daily Awareness Questions</h3>
              <div className="content-block">
                <div className="question-list">
                  <p>
                    <strong>Morning:</strong> "Which planetary energy do I want
                    to work with consciously today?"
                  </p>
                  <p>
                    <strong>Midday:</strong> "How am I expressing my core
                    energies right now?"
                  </p>
                  <p>
                    <strong>Evening:</strong> "What patterns did I notice in
                    myself today?"
                  </p>
                  <p>
                    <strong>Weekly:</strong> "How are my chart's themes playing
                    out in my life?"
                  </p>
                  <p>
                    <strong>Monthly:</strong> "What growth is happening in my
                    Rahu areas?"
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Limitations & Ethics */}
          <section className="content-section">
            <h2 className="section-title">Limitations & Ethical Boundaries</h2>

            <div className="ethics-block">
              <h3 className="subsection-title">Astrology Is Not Identity</h3>
              <div className="content-block">
                <p>
                  Your chart describes energetic tendencies, not fixed identity.
                  You are not "a Scorpio" or "a Mars person"—you are a conscious
                  being working with certain energetic patterns. This
                  distinction preserves your freedom and responsibility.
                </p>
                <p>
                  Avoid using astrology to excuse behavior ("I'm a Sagittarius,
                  so I can't commit") or limit possibilities ("I have Saturn in
                  the 7th house, so relationships are doomed"). Your chart shows
                  themes to work with, not verdicts to accept.
                </p>
              </div>
            </div>

            <div className="ethics-block">
              <h3 className="subsection-title">Avoiding Dependency</h3>
              <div className="content-block">
                <p>
                  Healthy astrological self-awareness increases your inner
                  authority, not dependence on external guidance. Use your chart
                  as a tool for self-reflection, not a substitute for personal
                  discernment.
                </p>
                <p>
                  If you find yourself unable to make decisions without
                  consulting your chart or astrologers, it's time to step back
                  and reconnect with your own inner knowing. Astrology should
                  enhance, not replace, your relationship with yourself.
                </p>
              </div>
            </div>

            <div className="ethics-block">
              <h3 className="subsection-title">
                When Self-Reflection Needs Other Support
              </h3>
              <div className="content-block">
                <p>
                  While astrology can offer valuable insights for
                  self-awareness, it has limits. Deep trauma, mental health
                  challenges, or complex relationship patterns often require
                  therapeutic or professional support beyond astrological
                  reflection.
                </p>
                <p>
                  Use astrology as one tool among many for understanding
                  yourself. Therapy, meditation, spiritual practices, physical
                  health care, and community support all play important roles in
                  holistic self-awareness and growth.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="content-section">
            <h2 className="section-title">
              Self-Awareness Through Astrology: Frequently Asked Questions
            </h2>

            <div className="faq-item">
              <h4 className="faq-question">
                How is astrological self-awareness different from personality
                typing?
              </h4>
              <div className="faq-answer">
                <p>
                  Personality typing often categorizes people into fixed types.
                  Astrological self-awareness recognizes dynamic energies that
                  you can work with consciously. Your chart doesn't type you—it
                  maps the energetic currents you're learning to navigate and
                  integrate.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h4 className="faq-question">
                Can astrology really help with personal growth?
              </h4>
              <div className="faq-answer">
                <p>
                  Astrology becomes a tool for growth when approached as a
                  language for understanding your patterns rather than
                  predicting your future. It can highlight blind spots, reveal
                  recurring themes, and suggest areas for conscious
                  development—but the growth work is always yours to do.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h4 className="faq-question">
                What if I don't like what my chart says about me?
              </h4>
              <div className="faq-answer">
                <p>
                  Your chart doesn't define your worth or limit your
                  possibilities. Challenging placements often indicate areas
                  where your greatest growth and strength can develop. Remember:
                  you're not your chart—you're the consciousness working with
                  the energies described in your chart.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h4 className="faq-question">
                How often should I reflect on my chart for self-awareness?
              </h4>
              <div className="faq-answer">
                <p>
                  Regular but not obsessive reflection works best. Weekly or
                  monthly chart-based self-reflection can be valuable, but daily
                  checking can become counterproductive. The goal is to develop
                  ongoing awareness, not constant analysis.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h4 className="faq-question">
                Can I do this work without an astrologer?
              </h4>
              <div className="faq-answer">
                <p>
                  Yes, especially for basic self-awareness work. Learning your
                  chart's major themes—Sun, Moon, Ascendant, and dominant
                  planets—provides plenty of material for self-reflection.
                  Professional guidance can offer deeper insights, but
                  self-awareness ultimately comes from within.
                </p>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="content-section closing-section">
            <div className="closing-content">
              <h3 className="subsection-title">The Path Forward</h3>
              <div className="content-block">
                <p>
                  Self-awareness through astrology is not about becoming a
                  perfect person or transcending your humanity. It's about
                  developing a compassionate, conscious relationship with all
                  parts of yourself—the light and shadow, the easy and
                  difficult, the familiar and growing edges.
                </p>
                <p>
                  Your birth chart is an invitation to know yourself more
                  deeply, not a instruction manual for your life. The real magic
                  happens in the space between recognition and choice—where
                  awareness meets free will, and unconscious patterns transform
                  into conscious creation.
                </p>
                <p>
                  Trust your own inner authority. Use astrology as a mirror, not
                  a master. And remember: the goal is not perfection but
                  consciousness, not transcendence but integration, not
                  prediction but presence.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
