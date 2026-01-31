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
            <h1 className="career-hero-title">Career Astrology</h1>
            <p className="career-hero-subtitle">
              Understanding professional inclination, work patterns, and
              long-term career direction through classical astrological
              principles
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="career-container career-main-content" id="main-content">
          <article>
            {/* Introduction Section */}
            <section className="career-section career-section-intro">
              <h2 className="career-section-title">What Is Career Astrology</h2>
              <p className="career-paragraph">
                Career astrology is the systematic study of professional
                inclinations, work patterns, authority dynamics, and long-term
                career direction through the lens of Vedic astrological
                principles. Unlike modern personality tests or career
                counseling, career astrology examines the cosmic influences
                present at birth that shape your relationship with work,
                authority, and professional fulfillment.
              </p>

              <p className="career-paragraph">
                This ancient science recognizes that career choices are not
                purely individual decisions but are influenced by planetary
                positions, house placements, and cosmic timing patterns that
                create natural inclinations toward certain types of work and
                professional environments.
              </p>

              <h3 className="career-subsection-title">
                Astrology as a Tool for Vocational Alignment
              </h3>
              <p className="career-paragraph">
                Career astrology serves as a compass for vocational alignment,
                helping individuals understand their natural strengths,
                preferred working styles, and the types of professional
                environments where they can thrive. It reveals patterns of
                success and challenge, optimal timing for career moves, and the
                deeper purpose behind professional choices.
              </p>

              <p className="career-paragraph">
                Rather than dictating specific job titles, astrology illuminates
                the energetic qualities and functional roles that align with
                your cosmic blueprint. It helps answer questions like: Do you
                work better independently or in teams? Are you naturally suited
                for leadership or specialized expertise? What types of
                challenges energize versus drain you?
              </p>

              <h3 className="career-subsection-title">
                Difference Between Prediction & Direction
              </h3>
              <div className="career-insight-card">
                <p className="career-paragraph">
                  <strong>Critical Understanding:</strong> Career astrology
                  identifies tendencies and inclinations, not guaranteed
                  outcomes. Your birth chart reveals potential pathways and
                  natural strengths, but skill development, effort, market
                  conditions, and personal choices remain the primary
                  determinants of career success.
                </p>
              </div>

              <p className="career-paragraph">
                Astrology provides direction by showing where you are likely to
                face friction or find natural flow in professional settings. It
                clarifies timing patterns for career transitions and reveals the
                deeper motivations behind your work preferences. However, it
                cannot override the need for practical skills, professional
                competence, or market awareness.
              </p>
            </section>

            <hr className="career-section-break" />

            {/* Core Astrological Factors */}
            <section className="career-section">
              <h2 className="career-section-title">
                Core Astrological Factors
              </h2>

              <h3 className="career-subsection-title">
                10th House: Karma & Authority
              </h3>
              <p className="career-paragraph">
                The 10th House represents your relationship with authority,
                public reputation, and the karmic expression of your work in the
                world. It shows how you handle responsibility, your natural
                leadership style, and the type of recognition you seek through
                professional achievement.
              </p>

              <p className="career-paragraph">
                The sign occupying the 10th House reveals the energy and
                approach you bring to positions of authority. The planet ruling
                this house indicates the functional areas where you can build
                lasting professional success. Planets placed in the 10th House
                show the qualities you naturally express in leadership roles and
                how others perceive your professional competence.
              </p>

              <h3 className="career-subsection-title">
                6th House: Work, Service, Conflict
              </h3>
              <p className="career-paragraph">
                The 6th House governs daily work routines, service orientation,
                problem-solving abilities, and your approach to workplace
                challenges. It reveals whether you thrive in collaborative or
                competitive environments, your natural relationship with
                subordinates and colleagues, and your capacity for detailed,
                systematic work.
              </p>

              <p className="career-paragraph">
                This house also indicates your stamina for routine tasks,
                ability to handle workplace conflicts, and your instinctive
                approach to health and efficiency in professional settings. A
                strong 6th House often indicates success in service-oriented
                careers, healthcare, consulting, or roles requiring detailed
                analysis.
              </p>

              <h3 className="career-subsection-title">
                2nd House: Income & Values
              </h3>
              <p className="career-paragraph">
                The 2nd House represents your relationship with money, material
                values, and the practical earning potential of your work. It
                shows how you approach financial security, your attitudes toward
                wealth accumulation, and the types of work that will generate
                sustainable income for your specific chart.
              </p>

              <p className="career-paragraph">
                This house reveals whether you are naturally conservative or
                risk-taking with money, your capacity for building long-term
                financial stability, and how your personal values align with
                your earning activities. It also indicates whether you find
                satisfaction in work primarily for financial reward or need
                deeper meaning in your earning activities.
              </p>

              <h3 className="career-subsection-title">
                11th House: Gains & Networks
              </h3>
              <p className="career-paragraph">
                The 11th House governs professional networks, team
                collaboration, long-term gains from career activities, and your
                ability to achieve ambitious professional goals. It shows how
                you build and maintain professional relationships that support
                your career advancement.
              </p>

              <p className="career-paragraph">
                This house indicates whether you succeed better through
                individual achievement or group efforts, your capacity for
                building professional alliances, and your natural approach to
                networking and mentorship. A strong 11th House often supports
                careers in large organizations, social causes, or fields
                requiring extensive professional collaboration.
              </p>

              <h3 className="career-subsection-title">
                Role of Ascendant & Lagna Lord
              </h3>
              <p className="career-paragraph">
                The Ascendant (Lagna) represents your core personality and the
                energy you bring to all professional interactions. The Lagna
                Lord's placement and strength indicate your overall capacity for
                self-direction, leadership, and professional initiative.
              </p>

              <p className="career-paragraph">
                The relationship between your Lagna Lord and the lords of career
                houses (2nd, 6th, 10th, 11th) reveals the natural flow or
                tension between your personality and your professional
                expression. This connection often determines whether career
                success comes easily or requires conscious effort to align your
                nature with professional demands.
              </p>
            </section>

            <hr className="career-section-break" />

            {/* Planetary Influence on Career */}
            <section className="career-section">
              <h2 className="career-section-title">
                Planetary Influence on Career
              </h2>

              <h3 className="career-subsection-title">
                Sun: Leadership & Authority
              </h3>
              <p className="career-paragraph">
                The Sun represents your relationship with authority, natural
                leadership abilities, and capacity for taking charge in
                professional settings. A strong Sun creates individuals who
                thrive in positions of responsibility, decision-making roles,
                and careers where personal integrity and moral authority are
                essential.
              </p>

              <p className="career-paragraph">
                Sun-influenced careers often involve representing others,
                standing in the public eye, or taking responsibility for
                important decisions. These roles typically require confidence,
                clear communication, and the ability to inspire others through
                personal example. However, an afflicted Sun can create ego
                conflicts with authority figures or difficulties accepting
                subordinate roles.
              </p>

              <div className="career-insight-card">
                <p className="career-paragraph">
                  <strong>Sun-influenced fields:</strong> Government service,
                  corporate leadership, medicine, law, education, politics,
                  public administration, and any role requiring moral authority
                  and ethical decision-making.
                </p>
              </div>

              <h3 className="career-subsection-title">
                Saturn: Discipline, Delay, Mastery
              </h3>
              <p className="career-paragraph">
                Saturn governs discipline, long-term planning, and the capacity
                to work within established structures. Saturn-influenced careers
                often involve significant responsibility, require years to
                master, and serve essential societal functions. Saturn teaches
                that lasting career success comes through patience, integrity,
                and persistent effort over time.
              </p>

              <p className="career-paragraph">
                Saturn creates specialists and experts who build their
                reputation through consistent, reliable performance. These
                careers may develop slowly but tend to offer long-term stability
                and respect. Saturn can also indicate careers involving
                restriction, regulation, or working with limitations and
                boundaries.
              </p>

              <div className="career-insight-card">
                <p className="career-paragraph">
                  <strong>Saturn-influenced fields:</strong> Engineering,
                  construction, law enforcement, judiciary, mining, real estate,
                  elder care, research, and any field requiring long-term
                  dedication and systematic expertise.
                </p>
              </div>

              <h3 className="career-subsection-title">
                Mars: Action, Competition, Engineering
              </h3>
              <p className="career-paragraph">
                Mars represents drive, competitive spirit, and the ability to
                take decisive action under pressure. Mars-influenced careers
                involve physical energy, technical skills, competitive
                environments, and roles requiring courage and quick
                decision-making.
              </p>

              <p className="career-paragraph">
                Mars creates entrepreneurs, competitors, and problem-solvers who
                thrive in dynamic, challenging environments. These careers often
                involve working with tools, machinery, or situations requiring
                physical or mental courage. Mars can also indicate careers in
                conflict resolution, emergency services, or competitive fields.
              </p>

              <div className="career-insight-card">
                <p className="career-paragraph">
                  <strong>Mars-influenced fields:</strong> Military,
                  engineering, surgery, athletics, emergency services,
                  entrepreneurship, mechanical trades, and any field involving
                  competition, tools, or decisive action.
                </p>
              </div>

              <h3 className="career-subsection-title">
                Mercury: Commerce, Communication, Logic
              </h3>
              <p className="career-paragraph">
                Mercury governs intelligence, communication skills, and
                analytical thinking. Mercury-influenced careers involve
                information processing, teaching, commerce, writing, and any
                field requiring versatility and adaptability to changing
                conditions.
              </p>

              <p className="career-paragraph">
                Mercury creates communicators, analysts, and facilitators who
                can bridge different groups or translate complex information
                into accessible formats. These careers often require continuous
                learning, networking, and the ability to work with diverse
                groups of people.
              </p>

              <div className="career-insight-card">
                <p className="career-paragraph">
                  <strong>Mercury-influenced fields:</strong> Business,
                  journalism, teaching, accounting, consulting, sales,
                  information technology, translation, and any field involving
                  communication or analytical thinking.
                </p>
              </div>

              <h3 className="career-subsection-title">
                Jupiter: Advisory, Teaching, Ethics
              </h3>
              <p className="career-paragraph">
                Jupiter represents wisdom, guidance, and the capacity to teach
                or advise others. Jupiter-influenced careers involve sharing
                knowledge, providing guidance, and working within ethical or
                spiritual frameworks. Jupiter creates natural mentors and
                counselors.
              </p>

              <p className="career-paragraph">
                Jupiter careers often serve a higher purpose beyond personal
                gain and typically involve working with principles, values, or
                belief systems. These roles may involve counseling, teaching, or
                helping others expand their understanding or capabilities.
              </p>

              <div className="career-insight-card">
                <p className="career-paragraph">
                  <strong>Jupiter-influenced fields:</strong> Teaching,
                  counseling, religious or spiritual work, philosophy, law,
                  finance, advisory roles, publishing, and any field focused on
                  wisdom-sharing or ethical guidance.
                </p>
              </div>

              <h3 className="career-subsection-title">
                Venus: Creativity, Design, Comfort
              </h3>
              <p className="career-paragraph">
                Venus governs artistic expression, aesthetic sense, and the
                creation of beauty or comfort. Venus-influenced careers involve
                creativity, design, hospitality, and any field focused on
                enhancing quality of life or creating pleasant experiences for
                others.
              </p>

              <p className="career-paragraph">
                Venus creates artists, designers, and service providers who
                excel in creating harmony, beauty, or comfort. These careers
                often involve working with people in pleasant settings or
                creating products and experiences that bring joy or
                satisfaction.
              </p>

              <div className="career-insight-card">
                <p className="career-paragraph">
                  <strong>Venus-influenced fields:</strong> Arts, design,
                  fashion, hospitality, beauty services, entertainment, luxury
                  goods, diplomacy, and any field focused on creating beauty,
                  comfort, or pleasant experiences.
                </p>
              </div>

              <h3 className="career-subsection-title">
                Rahu & Ketu: Unconventional Paths & Detachment
              </h3>
              <p className="career-paragraph">
                Rahu represents ambition for worldly success and the drive
                toward unconventional or cutting-edge fields. Rahu-influenced
                careers often involve new technologies, foreign connections, or
                breaking traditional boundaries. Rahu can create sudden rises in
                career status but may also bring instability.
              </p>

              <p className="career-paragraph">
                Ketu represents spiritual detachment and specialized knowledge
                that comes through past experience. Ketu-influenced careers
                often involve specialized expertise, spiritual or healing work,
                or roles requiring detachment from material outcomes. Ketu can
                indicate careers that serve others without seeking personal
                recognition.
              </p>

              <div className="career-insight-card">
                <p className="career-paragraph">
                  <strong>Rahu fields:</strong> Technology, aviation, media,
                  foreign trade, unconventional careers.{" "}
                  <strong>Ketu fields:</strong> Healing, spirituality, research,
                  specialized consulting, behind-the-scenes roles.
                </p>
              </div>
            </section>

            <hr className="career-section-break" />

            {/* Sign & Elemental Themes */}
            <section className="career-section">
              <h2 className="career-section-title">Sign & Elemental Themes</h2>

              <h3 className="career-subsection-title">
                Fire, Earth, Air, Water Career Tendencies
              </h3>

              <h4 className="career-topic-title">
                Fire Signs (Aries, Leo, Sagittarius)
              </h4>
              <p className="career-paragraph">
                Fire signs bring natural leadership, innovation, and
                entrepreneurial energy to their careers. They thrive in dynamic
                environments that allow for creative expression, independent
                decision-making, and the ability to initiate new projects or
                ventures.
              </p>

              <p className="career-paragraph">
                Fire sign careers often involve inspiring others, pioneering new
                approaches, or working in fields that require courage and
                vision. They may struggle with routine tasks or environments
                that restrict their creative autonomy.
              </p>

              <h4 className="career-topic-title">
                Earth Signs (Taurus, Virgo, Capricorn)
              </h4>
              <p className="career-paragraph">
                Earth signs excel in practical, systematic careers that produce
                tangible results. They bring patience, attention to detail, and
                strong organizational skills to their professional work. Earth
                signs often succeed in careers that build lasting value or serve
                essential practical needs.
              </p>

              <p className="career-paragraph">
                These signs prefer stable, predictable work environments and may
                take time to develop their expertise, but they typically achieve
                lasting professional success through consistent, reliable
                performance.
              </p>

              <h4 className="career-topic-title">
                Air Signs (Gemini, Libra, Aquarius)
              </h4>
              <p className="career-paragraph">
                Air signs bring intellectual curiosity, communication skills,
                and social awareness to their careers. They excel in fields
                involving ideas, relationships, and connecting different groups
                or concepts. Air signs often succeed in careers requiring
                versatility and adaptability.
              </p>

              <p className="career-paragraph">
                These signs may struggle with careers requiring isolation or
                purely physical work, preferring environments that involve
                intellectual challenge and social interaction.
              </p>

              <h4 className="career-topic-title">
                Water Signs (Cancer, Scorpio, Pisces)
              </h4>
              <p className="career-paragraph">
                Water signs bring emotional intelligence, intuitive abilities,
                and deep empathy to their professional work. They excel in
                careers involving healing, counseling, creative expression, or
                working with people's deeper needs and motivations.
              </p>

              <p className="career-paragraph">
                Water signs often succeed in careers that serve others'
                emotional or spiritual well-being, though they may need to
                develop boundaries to protect their sensitive nature in
                competitive professional environments.
              </p>

              <h3 className="career-subsection-title">
                Fixed vs Movable vs Dual Signs
              </h3>

              <h4 className="career-topic-title">
                Stability vs Adaptability in Profession
              </h4>
              <p className="career-paragraph">
                <strong>Fixed signs</strong> (Taurus, Leo, Scorpio, Aquarius)
                prefer careers with clear structure, defined roles, and
                opportunities to develop deep expertise. They excel in positions
                requiring consistency, determination, and the ability to see
                projects through to completion.
              </p>

              <p className="career-paragraph">
                <strong>Movable (Cardinal) signs</strong> (Aries, Cancer, Libra,
                Capricorn) thrive in careers involving leadership, initiation,
                and change management. They excel at starting new projects,
                adapting to changing conditions, and taking initiative in
                professional settings.
              </p>

              <p className="career-paragraph">
                <strong>Dual (Mutable) signs</strong> (Gemini, Virgo,
                Sagittarius, Pisces) succeed in careers requiring flexibility,
                versatility, and the ability to bridge different groups or adapt
                to changing circumstances. They often excel in consulting,
                teaching, or service roles.
              </p>
            </section>

            <hr className="career-section-break" />

            {/* Dasha & Transit Considerations */}
            <section className="career-section">
              <h2 className="career-section-title">
                Dasha & Transit Considerations
              </h2>

              <h3 className="career-subsection-title">
                Career Peaks and Stagnation Phases
              </h3>
              <p className="career-paragraph">
                Dasha periods reveal the natural timing of career development,
                showing when professional growth is most likely and when
                patience and consolidation are required. Each planetary period
                brings different qualities and opportunities to your
                professional life.
              </p>

              <p className="career-paragraph">
                Career peaks often occur during dashas of planets that are
                well-placed in career houses or when the dasha lord forms
                favorable relationships with your career indicators.
                Understanding these cycles helps in timing major career
                decisions and managing expectations during challenging periods.
              </p>

              <h3 className="career-subsection-title">
                Job Changes vs Role Evolution
              </h3>
              <p className="career-paragraph">
                Transits and dasha changes can indicate either external job
                changes or internal evolution within existing roles. Major
                transits to career houses often coincide with shifts in
                responsibility, recognition, or professional focus, whether
                within the same organization or through career moves.
              </p>

              <p className="career-paragraph">
                Not every astrological indication requires changing
                jobs—sometimes the cosmic influence manifests as growth in
                skills, changes in role responsibilities, or shifts in
                professional relationships within your current position.
              </p>

              <h3 className="career-subsection-title">
                Promotion and Authority Timing
              </h3>
              <p className="career-paragraph">
                Promotion timing often correlates with favorable transits to the
                10th House or during dashas of planets that naturally support
                authority and recognition. However, astrological timing must
                align with practical readiness—skills, experience, and
                organizational needs.
              </p>

              <p className="career-paragraph">
                Understanding these patterns helps in preparing for advancement
                opportunities and recognizing when to focus on skill development
                versus when to actively pursue greater responsibility and
                authority.
              </p>
            </section>

            <hr className="career-section-break" />

            {/* Career Decision Use-Cases */}
            <section className="career-section">
              <h2 className="career-section-title">
                Career Decision Use-Cases
              </h2>

              <h3 className="career-subsection-title">Choosing a Field</h3>
              <p className="career-paragraph">
                When choosing a career field, astrology can reveal your natural
                inclinations, preferred working styles, and the types of
                challenges that energize versus drain you. However, practical
                factors like aptitude, education opportunities, and market
                demand must be considered alongside astrological indications.
              </p>

              <p className="career-paragraph">
                Use your chart to understand how you naturally approach work,
                what type of authority structure suits you, and whether you
                thrive in collaborative or independent settings, then apply this
                self-knowledge to practical career exploration.
              </p>

              <h3 className="career-subsection-title">Switching Industries</h3>
              <p className="career-paragraph">
                Industry switches often occur during major dasha changes or
                significant transits to career houses. Astrology can reveal
                whether the timing supports such changes and what qualities from
                your previous experience will transfer successfully to the new
                field.
              </p>

              <p className="career-paragraph">
                Consider whether the switch aligns with your natural planetary
                influences and whether the new industry will utilize your
                inherent strengths or require developing entirely new
                capabilities.
              </p>

              <h3 className="career-subsection-title">
                Entrepreneurship vs Employment
              </h3>
              <p className="career-paragraph">
                The choice between entrepreneurship and employment often
                reflects the strength and placement of Mars, Sun, and the 10th
                house lord. Strong fire sign influence or prominent Mars may
                support independent ventures, while earth sign emphasis might
                favor stable employment.
              </p>

              <p className="career-paragraph">
                Consider your tolerance for risk, need for security, and natural
                working style when making this choice. Some charts support
                entrepreneurship at certain life phases and employment at
                others.
              </p>

              <h3 className="career-subsection-title">
                Leadership vs Specialist Roles
              </h3>
              <p className="career-paragraph">
                The choice between management and technical expertise often
                reflects the relationship between your Sun, 10th House, and
                Mercury. Strong Sun and 10th House support leadership roles,
                while prominent Mercury or 6th House emphasis may favor
                specialized expertise.
              </p>

              <p className="career-paragraph">
                Some individuals excel at leading others, while others
                contribute most effectively through deep subject matter
                expertise. Your chart can reveal which path offers greater
                satisfaction and success potential.
              </p>
            </section>

            <hr className="career-section-break" />

            {/* Common Misinterpretations */}
            <section className="career-section">
              <h2 className="career-section-title">
                Common Misinterpretations
              </h2>

              <h3 className="career-subsection-title">
                "One Planet = One Career" Myth
              </h3>
              <p className="career-paragraph">
                A common misunderstanding assumes that a single planetary
                influence determines your entire career path. In reality, career
                success emerges from the complex interaction of multiple
                factors: house lords, planetary aspects, sign influences, and
                dasha periods working together.
              </p>

              <p className="career-paragraph">
                Modern careers often combine multiple planetary influences—a
                successful business consultant might express Mercury
                (communication), Jupiter (advisory work), and Venus
                (relationship building) simultaneously.
              </p>

              <h3 className="career-subsection-title">
                Over-reliance on Dashas
              </h3>
              <p className="career-paragraph">
                Some individuals postpone career decisions waiting for
                "favorable" dasha periods, missing present opportunities. While
                timing awareness is valuable, personal effort, skill
                development, and practical preparation remain essential
                regardless of planetary periods.
              </p>

              <p className="career-paragraph">
                Challenging dashas often provide essential learning experiences
                and character development that support long-term career success,
                even if the immediate period feels difficult.
              </p>

              <h3 className="career-subsection-title">
                Ignoring Skills and Market Reality
              </h3>
              <p className="career-paragraph">
                Astrological career guidance must be balanced with practical
                considerations: your actual skills, educational background,
                market demand, and economic realities. Astrology reveals
                potential and natural inclinations, but success requires
                developing relevant capabilities.
              </p>

              <p className="career-paragraph">
                A chart may indicate natural teaching ability, but becoming a
                successful educator still requires subject matter expertise,
                communication skills, and understanding of educational
                methodologies.
              </p>
            </section>

            <hr className="career-section-break" />

            {/* Ethical Practice */}
            <section className="career-section">
              <h2 className="career-section-title">Ethical Practice</h2>

              <h3 className="career-subsection-title">
                Avoiding Fear-Based Predictions
              </h3>
              <p className="career-paragraph">
                Ethical career astrology avoids creating fear about career
                prospects or suggesting that certain planetary positions doom
                professional success. Every chart contains multiple potentials,
                and challenging aspects often develop strength, resilience, and
                eventual expertise.
              </p>

              <p className="career-paragraph">
                Focus on understanding natural inclinations and optimal
                approaches rather than making absolute predictions about career
                success or failure.
              </p>

              <h3 className="career-subsection-title">
                Respecting Free Will and Personal Growth
              </h3>
              <p className="career-paragraph">
                Career astrology should enhance self-understanding and
                decision-making rather than replace personal judgment.
                Individuals retain the freedom to choose their path, develop new
                skills, and create career success through effort and wise
                choices.
              </p>

              <p className="career-paragraph">
                Planetary influences suggest natural inclinations and potential
                challenges, but they do not determine career outcomes. Personal
                growth, learning, and adaptation can develop any chart toward
                greater professional fulfillment.
              </p>

              <h3 className="career-subsection-title">
                Astrology as Guidance, Not Control
              </h3>
              <p className="career-paragraph">
                Use career astrology as one input among many in career
                decision-making. Consider practical factors, personal values,
                family responsibilities, and market conditions alongside
                astrological insights.
              </p>

              <p className="career-paragraph">
                Astrology works best when it helps you understand yourself more
                clearly and make informed choices, rather than when it becomes a
                substitute for personal responsibility and practical planning.
              </p>
            </section>

            <hr className="career-section-break" />

            {/* Career Astrology FAQs */}
            <section className="career-section">
              <h2 className="career-section-title">Career Astrology FAQs</h2>

              <div className="career-faq-item">
                <h4 className="career-faq-question">
                  Can astrology predict exactly what job I should have?
                </h4>
                <p className="career-faq-answer">
                  Astrology reveals natural inclinations, preferred working
                  styles, and the types of environments where you can thrive,
                  but it doesn't predict specific job titles. Your chart shows
                  qualities and approaches that can succeed across multiple
                  career fields. Personal interests, skills, and practical
                  circumstances remain equally important in career choice.
                </p>
              </div>

              <div className="career-faq-item">
                <h4 className="career-faq-question">
                  What if my current career doesn't match my astrological
                  indicators?
                </h4>
                <p className="career-faq-answer">
                  This is common and not necessarily problematic. You may be
                  expressing your planetary influences in ways not immediately
                  obvious, or you may be in a learning phase that develops
                  important capabilities. Consider whether you can modify your
                  current role to better align with your natural strengths
                  rather than assuming you need to change careers entirely.
                </p>
              </div>

              <div className="career-faq-item">
                <h4 className="career-faq-question">
                  Should I make career decisions based only on favorable dasha
                  periods?
                </h4>
                <p className="career-faq-answer">
                  No. While timing awareness is valuable, opportunities, skills
                  development, and practical readiness are equally important.
                  Sometimes challenging periods provide essential learning
                  experiences. Make career decisions based on practical
                  readiness and opportunity, using astrological timing as
                  supportive information rather than the primary factor.
                </p>
              </div>

              <div className="career-faq-item">
                <h4 className="career-faq-question">
                  How often should I consult career astrology for guidance?
                </h4>
                <p className="career-faq-answer">
                  Career astrology is most valuable during major transition
                  points: choosing initial career direction, considering
                  significant career changes, or navigating professional
                  challenges. Regular consultation every few years can track
                  development, but frequent dependence on astrological guidance
                  may indicate over-reliance rather than healthy self-direction.
                </p>
              </div>

              <div className="career-faq-item">
                <h4 className="career-faq-question">
                  What if my passion conflicts with my astrological career
                  indicators?
                </h4>
                <p className="career-faq-answer">
                  Follow your genuine passion while using astrology to
                  understand how to approach it most effectively. Your deeper
                  purpose may manifest through unexpected combinations of
                  interests and abilities. Sometimes our charts show how to
                  succeed in our chosen field rather than what field to choose.
                  Passion combined with astrological self-awareness often
                  creates the most fulfilling career path.
                </p>
              </div>
            </section>

            {/* Footer Disclaimer */}
            <div className="career-footer-disclaimer">
              <p className="career-paragraph">
                <strong>Guidance, Not Guarantees:</strong> This information is
                provided for educational and reflective purposes. Career
                decisions should be based on practical considerations, personal
                values, and individual circumstances, with astrological insight
                serving as one factor among many in informed career planning.
              </p>
              <p className="career-paragraph">
                Your professional path is ultimately yours to choose and create.
                Use this wisdom to understand yourself more deeply, but trust
                your own judgment and take responsibility for your choices.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
