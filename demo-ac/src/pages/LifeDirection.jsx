import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./LifeDirection.css";

export default function LifeDirection() {
  return (
    <>
      <Navbar />
      <main className="life-direction-main">
        <article className="life-direction-container">
          {/* Hero Introduction */}
          <header className="life-direction-header">
            <h1 className="life-direction-title">Life Direction</h1>
            <p className="life-direction-subtitle">
              Understanding purpose, dharma, and orientation through Vedic
              wisdom
            </p>
          </header>

          {/* Introduction Section */}
          <section className="life-direction-section">
            <h2>What Is Life Direction in Vedic Thought</h2>
            <p>
              Life direction is not about certainty or rigid paths, but about
              alignment—finding harmony between your inner nature, your
              circumstances, and your conscious choices. In Vedic tradition,
              direction emerges from understanding your dharma, your unique role
              in the larger tapestry of existence.
            </p>
            <p>
              Unlike modern goal-setting approaches, Vedic astrology recognizes
              that life unfolds in stages, each with its own lessons and
              orientations. Direction is less about reaching a fixed destination
              and more about walking with awareness and responsiveness to the
              deeper currents of your being.
            </p>
          </section>

          <div className="life-direction-divider"></div>

          {/* Dharma Framework */}
          <section className="life-direction-section">
            <h2>The Four-Fold Framework: Dharma, Artha, Kama, Moksha</h2>
            <p>
              Vedic philosophy organizes life's purposes into four
              interconnected domains:
            </p>

            <div className="dharma-grid">
              <div className="dharma-item">
                <h3>Dharma</h3>
                <p>
                  Righteous living, duty, and alignment with universal
                  principles. This is your foundational orientation—how you
                  contribute to the wellbeing of the whole.
                </p>
              </div>

              <div className="dharma-item">
                <h3>Artha</h3>
                <p>
                  Material security and resources needed to fulfill your dharma.
                  Not mere accumulation, but acquiring what serves your deeper
                  purpose and responsibilities.
                </p>
              </div>

              <div className="dharma-item">
                <h3>Kama</h3>
                <p>
                  Desires, pleasures, and emotional fulfillment. The human need
                  for connection, beauty, and joy—balanced within dharmic
                  boundaries.
                </p>
              </div>

              <div className="dharma-item">
                <h3>Moksha</h3>
                <p>
                  Liberation, transcendence, and spiritual freedom. The ultimate
                  orientation toward truth and the dissolution of limiting
                  identifications.
                </p>
              </div>
            </div>

            <p>
              Life direction emerges from understanding how these four aspects
              interweave in your unique circumstances. Imbalance—pursuing only
              wealth, or only pleasure, or only duty—creates the confusion and
              exhaustion we experience as "lost direction."
            </p>
          </section>

          <div className="life-direction-divider"></div>

          {/* Why Direction Feels Lost */}
          <section className="life-direction-section">
            <h2>Why Direction Feels Lost at Transitions</h2>
            <p>
              Most people experience directional confusion during major life
              transitions—career changes, relationships ending or beginning,
              health challenges, or simply the natural passages of age. This is
              not pathology; it's wisdom.
            </p>
            <p>
              In Vedic understanding, confusion often signals that an old
              identity or direction has served its purpose and a new orientation
              is trying to emerge. The discomfort of "not knowing" creates space
              for deeper awareness to unfold.
            </p>
            <p>
              Astrology can offer perspective during these liminal times—not by
              providing definitive answers, but by revealing the underlying
              energetic patterns and suggesting when to wait, when to act, and
              when to let go.
            </p>
          </section>

          <div className="life-direction-divider"></div>

          {/* Astrological Foundations */}
          <section className="life-direction-section">
            <h2>Astrological Foundations for Life Direction</h2>

            <h3>Lagna & Core Orientation</h3>
            <p>
              Your rising sign (Lagna) represents your fundamental approach to
              life—the lens through which you naturally engage with the world.
              Understanding your Lagna provides insight into your authentic
              style of being and acting.
            </p>
            <p>
              This is not about personality traits but about energetic
              orientation. A Scorpio rising naturally engages with depth and
              transformation, while a Gemini rising thrives through variety and
              communication. Working against your Lagna creates unnecessary
              friction.
            </p>

            <h3>The 9th House: Dharma and Higher Purpose</h3>
            <p>
              The 9th house reveals your relationship with higher meaning,
              philosophy, and dharmic orientation. Planets placed here, aspects
              to this house, and the condition of its ruler indicate how you
              connect with purpose larger than immediate personal concerns.
            </p>
            <p>
              A well-aspected 9th house suggests natural alignment with dharmic
              principles, while challenges here may indicate the need to
              consciously cultivate philosophical grounding and ethical clarity.
            </p>

            <h3>The 10th House: Action and Contribution</h3>
            <p>
              While the 9th house relates to purpose, the 10th house governs how
              that purpose manifests in practical action and social
              contribution. This house reveals your capacity for sustained
              effort and public engagement with your dharma.
            </p>
            <p>
              The 10th house also shows your relationship with authority,
              responsibility, and recognition. Understanding its condition helps
              clarify whether your current direction allows for authentic
              expression of your capabilities.
            </p>

            <h3>Rahu and Ketu: The Growth Axis</h3>
            <p>
              The lunar nodes (Rahu and Ketu) represent your karmic axis—the
              evolutionary tension between past patterns (Ketu) and emerging
              growth (Rahu). This axis often reveals the deeper directional pull
              in your life.
            </p>
            <p>
              Ketu shows what comes naturally but may no longer serve your
              evolution, while Rahu indicates the qualities and experiences your
              soul is moving toward. Life direction often involves consciously
              engaging with your Rahu qualities while honoring the wisdom of
              your Ketu nature.
            </p>
          </section>

          <div className="life-direction-divider"></div>

          {/* Inner Drivers */}
          <section className="life-direction-section">
            <h2>Inner Drivers of Direction</h2>

            <h3>Sun: Sense of Purpose and Vital Expression</h3>
            <p>
              Your Sun placement reveals your core vitality and the themes
              through which you most naturally express your essential nature. A
              strong, well-placed Sun suggests clear connection to personal
              purpose, while a challenged Sun may indicate the need to
              consciously cultivate self-worth and clarity of intention.
            </p>
            <p>
              The house position of your Sun shows the life domain where you
              most need to shine and contribute. Aligning your activities with
              this placement often restores a sense of meaningful direction.
            </p>

            <h3>Moon: Emotional Fulfillment and Inner Security</h3>
            <p>
              The Moon represents your emotional nature and what provides inner
              nourishment. Sustainable life direction must account for lunar
              needs—ignoring emotional fulfillment in favor of external
              achievement creates inner depletion and eventual burnout.
            </p>
            <p>
              Your Moon sign and placement reveal what kinds of environments,
              relationships, and activities restore your emotional equilibrium.
              Integrating these needs into your life choices supports long-term
              sustainability and satisfaction.
            </p>

            <h3>Saturn: Long-term Responsibility and Maturity</h3>
            <p>
              Saturn represents your capacity for discipline, long-term
              commitment, and mature responsibility. A well-integrated Saturn
              provides the structural foundation necessary to sustain meaningful
              direction over time.
            </p>
            <p>
              Saturn's placement often indicates areas where you're called to
              develop greater responsibility and mastery. Rather than avoiding
              these challenging domains, embracing them often provides the
              backbone for authentic life direction.
            </p>
          </section>

          <div className="life-direction-divider"></div>

          {/* Phases of Life */}
          <section className="life-direction-section">
            <h2>
              Phases of Life: Learning, Building, Consolidating, Letting Go
            </h2>
            <p>
              Vedic tradition recognizes four natural life stages (ashramas),
              each with its own appropriate focus and orientation:
            </p>

            <div className="phases-grid">
              <div className="phase-item">
                <h3>Brahmacharya (Learning)</h3>
                <p>
                  Focus on education, skill development, and establishing
                  foundational values. Direction here centers on preparation and
                  self-discovery.
                </p>
              </div>

              <div className="phase-item">
                <h3>Grihastha (Building)</h3>
                <p>
                  Active engagement with career, relationships, and family
                  responsibilities. Direction involves balancing personal
                  fulfillment with social contribution.
                </p>
              </div>

              <div className="phase-item">
                <h3>Vanaprastha (Consolidating)</h3>
                <p>
                  Gradual transition from active building to mentoring and
                  wisdom-sharing. Direction shifts from acquisition to
                  refinement and teaching.
                </p>
              </div>

              <div className="phase-item">
                <h3>Sannyasa (Letting Go)</h3>
                <p>
                  Release of external identities and focus on spiritual
                  liberation. Direction becomes increasingly internal and
                  transcendent.
                </p>
              </div>
            </div>

            <p>
              Understanding which life phase you're in—regardless of
              chronological age—helps clarify appropriate priorities and
              prevents the confusion of trying to live according to an
              incompatible life stage.
            </p>

            <h3>Dashas and Life Reorientation</h3>
            <p>
              The Vimshottari dasha system reveals the planetary periods that
              influence different phases of your life. Major dasha changes often
              coincide with significant directional shifts—career changes,
              relocations, relationship transitions, or spiritual awakenings.
            </p>
            <p>
              Understanding your current dasha period can provide context for
              why certain directions feel more supported or challenging at
              different times. Working with the natural flow of these cycles,
              rather than against them, often reduces struggle and increases
              effectiveness.
            </p>

            <h3>Timing vs Readiness</h3>
            <p>
              Astrology reveals timing—when planetary energies support certain
              kinds of action or change. But readiness is a function of
              consciousness, preparation, and inner development. The two must
              align for meaningful direction to emerge.
            </p>
            <p>
              Sometimes the cosmos supports change before you feel ready;
              sometimes you're ready for change but the timing isn't optimal.
              Learning to discern these different situations helps you respond
              appropriately—sometimes pushing forward despite fear, sometimes
              waiting with patience.
            </p>
          </section>

          <div className="life-direction-divider"></div>

          {/* Decision Support */}
          <section className="life-direction-section">
            <h2>Decision Support: Choosing Direction Without Anxiety</h2>
            <p>
              One of the most practical applications of astrological insight is
              decision-making support. When facing major life choices—career
              changes, relocations, relationship commitments—astrology can
              provide perspective without removing your fundamental
              responsibility for choice.
            </p>

            <h3>When to Persist vs When to Pivot</h3>
            <p>
              Persistence is valuable when you're encountering natural
              resistance in service of meaningful growth. Pivoting is
              appropriate when you're forcing something that fundamentally
              conflicts with your nature or circumstances.
            </p>
            <p>
              Astrological indicators for persistence include: transits that
              challenge but ultimately strengthen your core placements, Saturn
              periods that reward discipline, and dasha periods of planets
              well-placed in your chart.
            </p>
            <p>
              Indicators for pivoting include: repeated external obstacles
              despite sincere effort, health problems arising from stress, and
              dasha periods of planets poorly placed or in houses that don't
              support your current direction.
            </p>

            <h3>Astrology vs Skills, Values & Reality</h3>
            <p>
              Astrology provides insight into your energetic nature and timing,
              but it cannot substitute for practical skills, clear values, or
              honest assessment of external circumstances. The most effective
              life direction integrates astrological awareness with competence
              and realism.
            </p>
            <p>
              Before making major directional changes, honestly assess: Do you
              have or can you develop the necessary skills? Does this direction
              align with your core values? Are the practical circumstances
              supportive enough to make this viable?
            </p>
          </section>

          <div className="life-direction-divider"></div>

          {/* Misalignment & Correction */}
          <section className="life-direction-section">
            <h2>Misalignment and Correction</h2>

            <h3>Signs of Directional Conflict</h3>
            <p>
              Chronic dissatisfaction, despite external success, often indicates
              directional misalignment. Other signs include persistent
              procrastination, frequent illness during peak performance periods,
              and a sense of living someone else's life.
            </p>
            <p>
              Astrological indicators of misalignment might include: working in
              opposition to your rising sign nature, ignoring the needs of your
              Moon sign, or pursuing goals that conflict with your nodal axis.
            </p>

            <h3>Burnout, Confusion & Resistance</h3>
            <p>
              Burnout often results from pursuing direction without adequate
              attention to sustainability—ignoring Moon needs, overriding
              Saturn's call for pacing, or neglecting the natural cycles
              revealed by transits.
            </p>
            <p>
              Confusion may indicate transition periods where old structures are
              dissolving and new clarity hasn't yet emerged. Resistance can
              signal either appropriate boundary-setting or unconscious fear of
              necessary growth.
            </p>

            <h3>Re-alignment Through Awareness</h3>
            <p>
              Correction rarely requires dramatic external changes. Often,
              subtle shifts in approach, timing, or emphasis can restore
              alignment. The key is developing sensitivity to your inner
              responses and learning to adjust course before minor misalignments
              become major crises.
            </p>
            <p>
              Regular check-ins with your astrological chart—noting current
              transits and dasha periods—can help you stay aware of shifting
              energetic conditions and adjust your approach accordingly.
            </p>
          </section>

          <div className="life-direction-divider"></div>

          {/* Limitations & Ethics */}
          <section className="life-direction-section">
            <h2>Limitations and Ethics</h2>

            <h3>What Astrology Cannot Decide About Life</h3>
            <p>
              Astrology reveals patterns, potentials, and timing, but it cannot
              make decisions for you. It doesn't eliminate the need for courage,
              effort, or the willingness to take responsibility for outcomes.
            </p>
            <p>
              Your chart shows your nature, but not your choices. Two people
              with identical charts will live different lives based on their
              consciousness, values, and the specific choices they make within
              their karmic parameters.
            </p>

            <h3>Avoiding Over-Dependence</h3>
            <p>
              Healthy use of astrology for life direction maintains the balance
              between cosmic awareness and personal agency. Over-dependence
              creates passivity and victimhood—waiting for favorable transits
              rather than developing inner resources and taking appropriate
              action.
            </p>
            <p>
              Use astrology as you would use weather forecasting—helpful
              information for planning, but not a substitute for appropriate
              clothing, shelter, and adaptive capacity.
            </p>

            <h3>Mental Health and Existential Boundaries</h3>
            <p>
              Astrology is not a substitute for mental health support when
              dealing with depression, anxiety, trauma, or other clinical
              conditions. Existential questions about meaning and direction
              often benefit from multiple perspectives— therapeutic,
              philosophical, spiritual, and practical.
            </p>
            <p>
              If directional confusion is accompanied by persistent mood
              disturbances, relationship conflicts, or substance use issues,
              professional mental health support should be sought alongside any
              astrological guidance.
            </p>
          </section>

          <div className="life-direction-divider"></div>

          {/* FAQ Section */}
          <section className="life-direction-section life-direction-faq">
            <h2>Life Direction FAQs</h2>

            <div className="faq-item">
              <h3>Can astrology predict my life purpose?</h3>
              <p>
                Astrology can reveal your natural inclinations, strengths, and
                evolutionary themes, but purpose is something you create through
                conscious choice and action. Your chart shows the materials
                you're working with; you decide what to build.
              </p>
            </div>

            <div className="faq-item">
              <h3>What if my chart suggests a direction I don't want?</h3>
              <p>
                Your chart shows potential, not fate. If certain placements
                suggest themes you find unappealing, you can work with the
                underlying energy in ways that align with your values. A
                challenging Mars, for example, might be expressed through
                disciplined service rather than aggression.
              </p>
            </div>

            <div className="faq-item">
              <h3>How often should I consult astrology for direction?</h3>
              <p>
                Major life decisions benefit from astrological perspective, but
                daily choices should come from your own inner guidance. Consider
                consulting astrology during significant transitions, annually
                for planning, or when facing persistent confusion about
                direction.
              </p>
            </div>

            <div className="faq-item">
              <h3>What if my family/society expects a different direction?</h3>
              <p>
                Balance honoring your authentic nature with appropriate
                consideration for relationships and social responsibilities.
                Sometimes authentic direction requires disappointing others'
                expectations; sometimes it requires finding creative ways to
                honor both your nature and your obligations.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I change my life direction at any age?</h3>
              <p>
                Yes, but the form of change evolves with life stages. Radical
                external changes may be more appropriate in youth, while later
                stages might involve more subtle shifts in approach, priorities,
                or inner orientation while maintaining external stability.
              </p>
            </div>
          </section>

          {/* Closing Reflection */}
          <section className="life-direction-section life-direction-closing">
            <h2>Direction as a Living Process</h2>
            <p>
              Life direction is not a problem to be solved but a living process
              to be engaged with awareness and responsiveness. Like a river
              finding its way to the sea, your direction emerges through the
              interplay of your inner nature, your circumstances, and your
              conscious choices.
            </p>
            <p>
              Astrology offers a map of the terrain, but you must walk the path.
              Trust your steps, stay attentive to the signs along the way, and
              remember that the journey itself is the destination.
            </p>
          </section>

          {/* Related Topics */}
          <section className="life-direction-section life-direction-related">
            <h2>Explore Further</h2>
            <div className="related-links">
              <Link to="/career-astrology" className="related-link">
                Career Astrology
              </Link>
              <Link to="/self-awareness" className="related-link">
                Self-Awareness
              </Link>
              <Link to="/relationships" className="related-link">
                Relationships
              </Link>
              <Link to="/remedies" className="related-link">
                Remedies & Practices
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
