import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/career-tokens.css";
import "./CareerAstrology.css";

export default function CareerAstrology() {
  return (
    <>
      <Navbar />

      <main className="career-layout">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="career-skip-link">
          Skip to main content
        </a>

        {/* Header Section */}
        <header className="career-header">
          <div className="career-container">
            <h1 className="career-hero-title">Career & Life Direction</h1>
            <p className="career-hero-subtitle">
              Understanding your professional path and life purpose through the wisdom of Vedic Astrology — 
              where Dharma meets livelihood in the cosmic order
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="career-container career-main-content" id="main-content">
          <article>
            
            {/* Introduction Section */}
            <section className="career-section career-section-intro">
              <p className="career-intro-text">
                In the ancient Vedic tradition, career is not merely about earning wealth—it represents the expression of one's 
                <span className="career-emphasis"> Dharma</span> (righteous purpose) in the material world. The birth chart serves as a cosmic blueprint, 
                revealing not just what work you might do, but how you can align your professional life with your soul's deeper calling.
              </p>
              
              <p className="career-paragraph">
                Career confusion and professional dissatisfaction are natural cycles in human experience. They often arise during 
                planetary transitions, when the soul seeks greater alignment with its true purpose. Understanding these patterns 
                through astrology provides clarity, not guarantees—orientation, not instant solutions.
              </p>

              <div className="career-insight-card">
                <p className="career-paragraph">
                  <strong>The Dharma-Artha Balance:</strong> Vedic astrology views career through the lens of <em>Dharma</em> (righteous duty), 
                  <em>Artha</em> (material security), and <em>Karma</em> (action and its consequences). True career satisfaction emerges 
                  when these three forces align in your professional choices.
                </p>
              </div>
            </section>

            <hr className="career-section-break" />

            {/* Astrological Foundations */}
            <section className="career-section">
              <h2 className="career-section-title">Astrological Foundations of Career</h2>
              
              <h3 className="career-subsection-title">The Primary Career Houses</h3>
              
              <h4 className="career-topic-title">Lagna & Personal Identity</h4>
              <p className="career-paragraph">
                The <strong>Ascendant (Lagna)</strong> represents your core personality and how you approach life's challenges. 
                It reveals your natural working style, leadership tendencies, and the energy you bring to professional environments. 
                The strength and placement of the Lagna lord indicates your capacity for self-directed action in career matters.
              </p>

              <h4 className="career-topic-title">10th House: The House of Karma</h4>
              <p className="career-paragraph">
                The <strong>10th House</strong> is the primary indicator of career, social status, and public reputation. It shows not just 
                your profession, but your relationship with authority, responsibility, and societal recognition. The sign occupying the 
                10th house and its ruling planet reveal the nature of work that will bring you both success and satisfaction.
              </p>

              <ul className="career-list">
                <li>Fire signs (Aries, Leo, Sagittarius): Leadership, innovation, independent ventures</li>
                <li>Earth signs (Taurus, Virgo, Capricorn): Practical fields, administration, steady growth</li>
                <li>Air signs (Gemini, Libra, Aquarius): Communication, relationships, intellectual pursuits</li>
                <li>Water signs (Cancer, Scorpio, Pisces): Healing, psychology, creative or spiritual fields</li>
              </ul>

              <h4 className="career-topic-title">6th House: Daily Work & Service</h4>
              <p className="career-paragraph">
                While the 10th house shows your career destiny, the <strong>6th House</strong> reveals your approach to daily work, 
                service, and how you handle workplace challenges. A strong 6th house creates dedication to duty and the ability 
                to persist through difficulties. Planets here can indicate the type of service you provide to society.
              </p>

              <h4 className="career-topic-title">2nd & 11th Houses: Income and Gains</h4>
              <p className="career-paragraph">
                The <strong>2nd House</strong> governs your earning capacity and financial resources, while the <strong>11th House</strong> 
                represents gains, network connections, and income from career efforts. These houses help determine not just what 
                work you do, but how financially rewarding it will be and through what channels money flows to you.
              </p>
            </section>

            <hr className="career-divider" />

            {/* Planetary Influences */}
            <section className="career-section">
              <h2 className="career-section-title">Planetary Influences on Career Path</h2>
              
              <h3 className="career-subsection-title">The Career Significators</h3>

              <h4 className="career-topic-title">Sun: Authority and Leadership</h4>
              <p className="career-paragraph">
                The <strong>Sun</strong> represents your relationship with authority, leadership potential, and capacity for taking charge. 
                A strong Sun creates natural leaders who thrive in positions of responsibility. It governs government positions, 
                administrative roles, and careers where you represent others or stand in the public eye.
              </p>

              <div className="career-card">
                <p className="career-paragraph">
                  <strong>Sun-influenced careers:</strong> Government service, politics, medicine, law, corporate leadership, 
                  education, and any field requiring moral authority and decision-making responsibility.
                </p>
              </div>

              <h4 className="career-topic-title">Saturn: Structure and Perseverance</h4>
              <p className="career-paragraph">
                <strong>Saturn</strong> governs discipline, long-term planning, and the capacity to work within existing structures. 
                Saturn-influenced careers often involve significant responsibility, require years to master, and serve essential 
                societal functions. Saturn teaches that true career success comes through patience, integrity, and persistent effort.
              </p>

              <h4 className="career-topic-title">Mercury: Skills and Communication</h4>
              <p className="career-paragraph">
                <strong>Mercury</strong> rules intelligence, communication, and technical skills. It governs careers involving analysis, 
                writing, teaching, commerce, and information processing. A well-placed Mercury creates versatility and the ability 
                to adapt to changing market demands throughout your career.
              </p>

              <h4 className="career-topic-title">Jupiter: Guidance and Wisdom</h4>
              <p className="career-paragraph">
                <strong>Jupiter</strong> represents wisdom, teaching, counseling, and spiritual guidance. Jupiter-influenced careers 
                often involve sharing knowledge, providing guidance to others, or working in fields that expand human understanding. 
                Legal professions, education, publishing, and advisory roles all fall under Jupiter's domain.
              </p>

              <h4 className="career-topic-title">Rahu-Ketu: Nonlinear Career Paths</h4>
              <p className="career-paragraph">
                The lunar nodes <strong>Rahu and Ketu</strong> often create unusual or nontraditional career paths. Rahu can bring 
                sudden success in modern or technological fields, while Ketu may draw you toward spiritual or research-oriented work. 
                These planets often indicate careers that don't follow conventional patterns or emerge from unexpected circumstances.
              </p>
            </section>

            <hr className="career-divider" />

            {/* Timing and Phases */}
            <section className="career-section">
              <h2 className="career-section-title">Timing & Career Phases</h2>
              
              <h3 className="career-subsection-title">Understanding Professional Cycles</h3>

              <h4 className="career-topic-title">Dashas and Career Shifts</h4>
              <p className="career-paragraph">
                The <strong>Vimshottari Dasha</strong> system reveals the major life phases governed by different planets. 
                Each dasha period brings distinct career themes, challenges, and opportunities. Understanding your current 
                dasha helps explain why certain career moves feel right or wrong at different life stages.
              </p>

              <ul className="career-list">
                <li><strong>Sun Dasha:</strong> Time for leadership roles and public recognition</li>
                <li><strong>Moon Dasha:</strong> Focus on nurturing careers or public service</li>
                <li><strong>Mars Dasha:</strong> Starting new ventures or competitive fields</li>
                <li><strong>Rahu Dasha:</strong> Unconventional opportunities and rapid changes</li>
                <li><strong>Jupiter Dasha:</strong> Teaching, advising, or wisdom-based careers</li>
                <li><strong>Saturn Dasha:</strong> Building long-term structures and gaining respect</li>
              </ul>

              <h4 className="career-topic-title">Transits & Professional Turning Points</h4>
              <p className="career-paragraph">
                Major planetary transits, especially of <strong>Saturn, Jupiter, and Rahu-Ketu</strong>, create significant 
                career turning points. Saturn's transit through career houses often brings tests, responsibilities, or 
                structural changes. Jupiter's transit can open new opportunities or expand existing roles.
              </p>

              <div className="career-insight-card">
                <p className="career-paragraph">
                  <strong>Why Stagnation Phases Exist:</strong> Career plateaus are not failures—they're necessary periods 
                  for consolidation, skill development, and internal preparation for the next phase. Saturn especially 
                  creates these reflective periods where patience and inner work become more important than external action.
                </p>
              </div>

              <h4 className="career-topic-title">The 7-Year Professional Cycles</h4>
              <p className="career-paragraph">
                Many people experience significant career shifts approximately every 7 years, corresponding to certain planetary cycles. 
                These periods often involve questioning current paths, exploring new directions, or making major professional pivots. 
                Understanding these natural cycles helps normalize career restlessness and guides timing for major decisions.
              </p>
            </section>

            <hr className="career-divider" />

            {/* Career Themes */}
            <section className="career-section">
              <h2 className="career-section-title">Understanding Career Themes</h2>
              
              <h3 className="career-subsection-title">Service vs Leadership vs Creativity</h3>

              <h4 className="career-topic-title">The Service Path</h4>
              <p className="career-paragraph">
                Service-oriented careers fulfill the soul's need to contribute meaningfully to society. These paths often involve 
                helping others, healing, education, or supporting community needs. The satisfaction comes not primarily from 
                personal recognition but from the knowledge that your work makes a positive difference.
              </p>

              <p className="career-paragraph">
                <span className="career-emphasis">Astrological indicators:</span> Strong 6th house, well-placed Moon or Jupiter, 
                planets in water signs, or significant influence from Virgo or Pisces energy.
              </p>

              <h4 className="career-topic-title">The Leadership Path</h4>
              <p className="career-paragraph">
                Leadership careers involve taking responsibility for others, making decisions that affect many people, and 
                being willing to stand alone when necessary. True leadership in the Vedic sense means serving others through 
                your authority, not dominating them.
              </p>

              <p className="career-paragraph">
                <span className="career-emphasis">Astrological indicators:</span> Strong Sun or Mars, planets in fire signs, 
                well-aspected 10th house, or significant Leo or Aries influence in the chart.
              </p>

              <h4 className="career-topic-title">The Creative Path</h4>
              <p className="career-paragraph">
                Creative careers channel divine inspiration through human expression. These paths require courage to be vulnerable, 
                patience with irregular income, and trust in the creative process. The fulfillment comes from bringing beauty, 
                insight, or innovation into the world.
              </p>

              <p className="career-paragraph">
                <span className="career-emphasis">Astrological indicators:</span> Strong Venus, Moon in creative signs, 
                5th house emphasis, or significant influence from Taurus, Cancer, or Pisces.
              </p>

              <h3 className="career-subsection-title">Business vs Employment Indicators</h3>

              <h4 className="career-topic-title">Entrepreneurial Tendencies</h4>
              <p className="career-paragraph">
                Some charts show natural entrepreneurial ability—the capacity to create something from nothing, take calculated risks, 
                and persist through the uncertain early stages of business development. These individuals often struggle in traditional 
                employment because they need autonomy and creative control.
              </p>

              <div className="career-card">
                <p className="career-paragraph">
                  <strong>Business indicators:</strong> Strong Mars or Sun, planets in cardinal signs, well-placed Rahu, 
                  significant fire element, or 10th lord in the 1st house (self-directed career).
                </p>
              </div>

              <h4 className="career-topic-title">Employment Strengths</h4>
              <p className="career-paragraph">
                Other charts show strength in working within established structures, contributing specialized skills to larger 
                organizations, and finding fulfillment through collaboration and steady growth. These individuals often provide 
                the stability and expertise that make organizations successful.
              </p>

              <h4 className="career-topic-title">Stability vs Risk Orientation</h4>
              <p className="career-paragraph">
                Your chart reveals your natural relationship with risk and stability. Some people thrive on change and uncertainty, 
                while others need security and predictability to do their best work. Neither approach is superior—they serve 
                different functions in society and should be honored accordingly.
              </p>
            </section>

            <hr className="career-divider" />

            {/* Decision Support */}
            <section className="career-section">
              <h2 className="career-section-title">Astrological Decision Support</h2>
              
              <h3 className="career-subsection-title">Choosing Fields, Not Job Titles</h3>

              <p className="career-paragraph">
                Astrology is most helpful when used to identify broad fields and working styles rather than specific job titles. 
                The modern economy changes too rapidly for ancient planetary symbols to predict exact roles, but the underlying 
                energy patterns remain remarkably consistent across cultures and centuries.
              </p>

              <div className="career-insight-card">
                <p className="career-paragraph">
                  <strong>Field vs Role:</strong> Instead of asking "Should I be a marketing manager?", ask "Am I suited for 
                  communication-based work that involves influencing others?" The first question may become obsolete; 
                  the second reveals enduring career themes.
                </p>
              </div>

              <h4 className="career-topic-title">When to Change vs When to Stay</h4>
              <p className="career-paragraph">
                Career dissatisfaction doesn't always indicate you're in the wrong field. Sometimes it signals a need for growth 
                within your current path, development of underused skills, or patience during challenging planetary periods. 
                Astrology can help distinguish between temporary frustration and genuine misalignment.
              </p>

              <ul className="career-list-clean">
                <li><strong>Consider staying when:</strong> You're in a Saturn period requiring patience and skill-building</li>
                <li><strong>Consider changing when:</strong> Multiple indicators suggest your current path conflicts with your core nature</li>
                <li><strong>Seek guidance when:</strong> The astrological indicators are mixed or you're in a major transition period</li>
              </ul>

              <h3 className="career-subsection-title">Astrology vs Aptitude & Skill</h3>

              <p className="career-paragraph">
                Astrology reveals tendencies and potential—it doesn't override the need for skill development, market awareness, 
                or practical preparation. A chart showing musical ability still requires years of practice. Business indicators 
                must be combined with business knowledge and experience.
              </p>

              <div className="career-quote">
                "The stars impel, they do not compel. Your chart shows the cosmic weather, but you still have to 
                choose whether to plant seeds or seek shelter."
              </div>

              <h4 className="career-topic-title">The Role of Education and Training</h4>
              <p className="career-paragraph">
                Your astrological career indicators can guide educational choices, but they don't replace the need for competence. 
                Use astrology to identify where to focus your learning efforts and what types of training will feel most natural 
                and rewarding for your particular constitution.
              </p>
            </section>

            <hr className="career-divider" />

            {/* Limitations and Ethics */}
            <section className="career-section">
              <h2 className="career-section-title">Limitations & Ethical Considerations</h2>
              
              <h3 className="career-subsection-title">What Astrology Cannot Decide</h3>

              <p className="career-paragraph">
                Astrology provides orientation and insight—it cannot make career decisions for you. The final choice always 
                remains with your free will, practical circumstances, and moral judgment. No planetary configuration can 
                override your responsibility to develop skills, make ethical choices, and adapt to changing circumstances.
              </p>

              <h4 className="career-topic-title">Beyond Astrological Determinism</h4>
              <p className="career-paragraph">
                While your birth chart shows certain predispositions, it doesn't determine your destiny. Two people with 
                similar charts can manifest their potentials very differently based on their choices, efforts, cultural context, 
                and life experiences. Astrology is a tool for understanding, not a substitute for judgment.
              </p>

              <div className="career-insight-card">
                <p className="career-paragraph">
                  <strong>Personal Agency:</strong> The most spiritually advanced use of career astrology is to understand 
                  your nature so clearly that you can make conscious choices aligned with both your cosmic design and 
                  your highest values. This requires self-awareness, not passive dependence on astrological predictions.
                </p>
              </div>

              <h3 className="career-subsection-title">Avoiding Over-Dependence</h3>

              <p className="career-paragraph">
                Healthy use of career astrology involves consultation during major decisions, not constant checking for 
                daily guidance. If you find yourself unable to make basic professional choices without astrological confirmation, 
                this may indicate anxiety or lack of confidence that requires attention beyond astrological counseling.
              </p>

              <h4 className="career-topic-title">Mental Health Boundaries</h4>
              <p className="career-paragraph">
                Career dissatisfaction, workplace anxiety, or professional depression may have psychological roots that astrology 
                alone cannot address. While astrological insight can provide valuable perspective, serious emotional distress 
                related to work should also involve qualified mental health support.
              </p>

              <p className="career-paragraph">
                Astrology works best when combined with practical career counseling, skills assessment, market research, 
                and sometimes therapeutic support for underlying emotional issues affecting professional confidence.
              </p>
            </section>

            <hr className="career-section-break" />

            {/* Career FAQs */}
            <section className="career-section">
              <h2 className="career-section-title">Career Astrology FAQs</h2>
              
              <div className="career-faq-item">
                <h4 className="career-faq-question">Can astrology predict exactly what job I should have?</h4>
                <p className="career-faq-answer">
                  No. Astrology reveals energy patterns and tendencies, not specific job titles. It's most helpful for 
                  understanding what types of work environments, responsibilities, and challenges suit your nature. 
                  You still need to research fields, develop skills, and make practical decisions based on current opportunities.
                </p>
              </div>

              <div className="career-faq-item">
                <h4 className="career-faq-question">Why am I successful in a field my chart doesn't seem to support?</h4>
                <p className="career-faq-answer">
                  Success can come through various planetary combinations, and sometimes we develop strengths in areas that initially 
                  challenge us. Additionally, career charts must be read as a whole system—what seems unsupported in one area may 
                  be strongly indicated elsewhere in your chart.
                </p>
              </div>

              <div className="career-faq-item">
                <h4 className="career-faq-question">Should I quit my job because my dasha period is unfavorable?</h4>
                <p className="career-faq-answer">
                  Challenging periods often require patience and skill-building rather than escape. Sometimes difficult dashas 
                  teach essential lessons or prepare you for future opportunities. Consider practical factors like financial 
                  security, market conditions, and family responsibilities alongside astrological timing.
                </p>
              </div>

              <div className="career-faq-item">
                <h4 className="career-faq-question">Can astrology help with workplace conflicts?</h4>
                <p className="career-faq-answer">
                  Astrology can provide insight into different working styles and communication patterns, which may help you 
                  understand colleague dynamics. However, workplace issues often require direct communication, professional 
                  mediation, or management intervention rather than purely astrological solutions.
                </p>
              </div>

              <div className="career-faq-item">
                <h4 className="career-faq-question">How often should I consult astrology for career guidance?</h4>
                <p className="career-faq-answer">
                  Most people benefit from career astrology consultations during major transitions—job changes, educational 
                  decisions, or significant life phase shifts. Regular check-ins every few years can help track development, 
                  but daily or weekly astrological career guidance may indicate over-dependence.
                </p>
              </div>

              <div className="career-faq-item">
                <h4 className="career-faq-question">What if my passion doesn't match my astrological career indicators?</h4>
                <p className="career-faq-answer">
                  Follow your genuine passion while using astrology to understand how to approach it most effectively. 
                  Sometimes our deeper purpose manifests through unexpected combinations of interests and abilities. 
                  Your chart may show how to succeed in your chosen field rather than what field to choose.
                </p>
              </div>
            </section>

            {/* Footer Disclaimer */}
            <div className="career-footer-disclaimer">
              <p className="career-paragraph">
                <strong>Guidance, Not Guarantees:</strong> This information is provided for educational and reflective purposes. 
                Career decisions should be based on practical considerations, personal values, and individual circumstances, 
                with astrological insight serving as one factor among many.
              </p>
              <p className="career-paragraph">
                Your professional path is ultimately yours to choose and create. Use this wisdom to understand yourself more deeply, 
                but trust your own judgment and take responsibility for your choices.
              </p>
            </div>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
