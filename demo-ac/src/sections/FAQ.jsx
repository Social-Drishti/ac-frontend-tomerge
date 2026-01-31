export default function FAQ() {
  const faqs = [
    {
      q: "What is a natal chart?",
      a: "A natal chart is a snapshot of the sky at your exact birth moment. It shows the positions of the sun, moon, planets, revealing your personality traits, strengths, and life path.",
    },
    {
      q: "How accurate is astrology?",
      a: "Astrology offers symbolic guidance rather than literal prediction. Many find it remarkably accurate for self-understanding and decision-making when approached with an open mind.",
    },
    {
      q: "Do I need my birth time?",
      a: "Your birth time helps us calculate your rising sign, which is crucial for accurate readings. If you don't have it, we can still provide meaningful insights.",
    },
    {
      q: "How long does a reading take?",
      a: "A full natal chart reading typically takes 60 to 90 minutes. We explore your chart thoroughly, answering questions and providing actionable guidance.",
    },
    {
      q: "Can astrology help with career?",
      a: "Yes. Astrology identifies your natural talents and ideal work environments based on your chart. It helps you find professional paths that feel authentic.",
    },
  ];

  return (
    <section className="py-20 md:py-28 border-t border-gray-100">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-center md:text-5xl">
          FAQs
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Common questions about our services and how astrology can guide your
          decisions.
        </p>

        <div className="mt-12 space-y-6">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl border border-gray-200"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-lg">
                {item.q}
                <span className="ml-4 transition group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-lg border border-gray-300 px-10 py-3 hover:bg-gray-100">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
