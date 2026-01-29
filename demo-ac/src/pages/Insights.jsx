import { useEffect, useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { insightsMetadata, insightsContent } from "../data/insights";
import "../styles/insights-tokens.css";
import "./Insights.css";

/**
 * INSIGHTS PAGE
 * Magazine-style educational publication
 * Auto-renders content from data source
 */
export default function Insights() {
  const sectionsRef = useRef([]);

  // Scroll-based reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // ========================================
  // CONTENT RENDERERS
  // ========================================

  const renderOpening = (item) => (
    <section
      key={item.id}
      ref={addToRefs}
      className="insights-spread insights-spread--opening"
      aria-labelledby={`${item.id}-title`}
    >
      <div className="insights-container">
        <header className="insights-opening">
          <h2 id={`${item.id}-title`} className="insights-opening__title">
            {item.title}
          </h2>
          <div className="insights-opening__content">
            {item.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </header>
      </div>
    </section>
  );

  const renderConcept = (item) => (
    <article
      key={item.id}
      ref={addToRefs}
      className="insights-spread insights-spread--concept"
      aria-labelledby={`${item.id}-title`}
    >
      <div className="insights-container">
        <header className="insights-article__header">
          <h2 id={`${item.id}-title`} className="insights-article__title">
            {item.title}
          </h2>
          {item.lead && <p className="insights-article__lead">{item.lead}</p>}
        </header>

        <div className="insights-article__body">
          {item.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {/* Subsections */}
          {item.subsections && (
            <div className="insights-subsections">
              {item.subsections.map((sub, idx) => (
                <div key={idx} className="insights-subsection">
                  <h3 className="insights-subsection__title">{sub.title}</h3>
                  <p className="insights-subsection__text">{sub.content}</p>
                </div>
              ))}
            </div>
          )}

          {/* Clarifications (misconceptions format) */}
          {item.clarifications && (
            <div className="insights-clarifications">
              {item.clarifications.map((cl, idx) => (
                <div key={idx} className="insights-clarification">
                  <p className="insights-clarification__myth">
                    "{cl.misconception}"
                  </p>
                  <p className="insights-clarification__truth">{cl.correction}</p>
                </div>
              ))}
            </div>
          )}

          {/* Case Studies */}
          {item.cases && (
            <div className="insights-cases">
              {item.cases.map((cs, idx) => (
                <div key={idx} className="insights-case">
                  <p className="insights-case__label">Example Configuration</p>
                  <h4 className="insights-case__scenario">{cs.scenario}</h4>
                  <p className="insights-case__analysis">{cs.analysis}</p>
                  {cs.variables && (
                    <p className="insights-case__variables">
                      <strong>Variables:</strong> {cs.variables}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );

  const renderTechnical = (item) => (
    <aside
      key={item.id}
      ref={addToRefs}
      className="insights-spread insights-spread--technical"
      aria-label="Technical insight"
    >
      <div className="insights-container insights-container--narrow">
        <blockquote className="insights-technical">
          <p>{item.content}</p>
        </blockquote>
      </div>
    </aside>
  );

  const renderDiagram = (item) => (
    <section
      key={item.id}
      ref={addToRefs}
      className="insights-spread insights-spread--diagram"
      aria-labelledby={`${item.id}-title`}
    >
      <div className="insights-container">
        <header className="insights-diagram__header">
          <h2 id={`${item.id}-title`} className="insights-diagram__title">
            {item.title}
          </h2>
          {item.caption && (
            <p className="insights-diagram__caption">{item.caption}</p>
          )}
        </header>

        {item.description && (
          <p className="insights-diagram__description">{item.description}</p>
        )}

        {/* Houses Grid */}
        {item.houses && (
          <div className="insights-houses">
            {item.houses.map((house) => (
              <div key={house.number} className="insights-house">
                <span className="insights-house__number">{house.number}</span>
                <span className="insights-house__name">{house.name}</span>
                <span className="insights-house__domain">{house.domain}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );

  const renderReflection = (item) => (
    <section
      key={item.id}
      ref={addToRefs}
      className="insights-spread insights-spread--reflection"
      aria-label="Closing reflection"
    >
      <div className="insights-container insights-container--narrow">
        <blockquote className="insights-reflection">
          <p>{item.content}</p>
        </blockquote>
      </div>
    </section>
  );

  // Content type router
  const renderContent = (item) => {
    switch (item.type) {
      case "opening":
        return renderOpening(item);
      case "concept":
        return renderConcept(item);
      case "technical":
        return renderTechnical(item);
      case "diagram":
        return renderDiagram(item);
      case "reflection":
        return renderReflection(item);
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />

      <div className="insights-page">
        <a href="#main-content" className="insights-skip-link">
          Skip to main content
        </a>

        {/* Page Header */}
        <header className="insights-masthead">
          <div className="insights-container">
            <p className="insights-masthead__label">{insightsMetadata.subtitle}</p>
            <h1 className="insights-masthead__title">{insightsMetadata.title}</h1>
            <p className="insights-masthead__description">
              {insightsMetadata.description}
            </p>
          </div>
        </header>

        {/* Main Content - Auto-rendered */}
        <main className="insights-main" id="main-content">
          {insightsContent.map((item) => renderContent(item))}

          {/* Closing CTA */}
          <footer className="insights-footer">
            <div className="insights-container insights-container--narrow">
              <a href="/guruji" className="insights-footer__link">
                Study with Guidance
              </a>
            </div>
          </footer>
        </main>
      </div>

      <Footer />
    </>
  );
}
